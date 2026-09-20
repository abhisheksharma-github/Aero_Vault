import { prisma } from '../db.js';
import {
  vaultForceProfiles,
  vaultNaval,
  vaultLand,
} from '../data/vaultLoader.js';

export class AtlasEngineService {
  /**
   * Calculates AIRS (Airpower Index 0-100) for a given country based on active fleet TVR scores and force enablers
   */
  public async calculateAirsIndex(countryName: string): Promise<number> {
    try {
      const db = prisma as any;
      const fleet = await db.aircraft.findMany({
        where: { country: countryName, serviceStatus: 'ACTIVE' },
      });

      if (fleet && fleet.length > 0) {
        let aggregateScore = 0;
        let enablerMultiplier = 1.0;

        for (const airframe of fleet) {
          const count = airframe.activeCount || 1;
          aggregateScore += airframe.tvrScore * count;

          if (airframe.category === 'AEWC') enablerMultiplier += 0.05;
          if (airframe.category === 'AERIAL_REFUELING') enablerMultiplier += 0.03;
          if (airframe.generation === 'GEN_5') enablerMultiplier += 0.02;
        }

        const rawAirs = aggregateScore * enablerMultiplier;
        const normalized = Math.min(100.0, (rawAirs / 1200000) * 100.0);
        return parseFloat(normalized.toFixed(1));
      }
    } catch {
      // Fallback
    }

    const matched = (vaultForceProfiles as any[]).find(
      (c) => c.country?.toLowerCase() === countryName.toLowerCase()
    );
    return matched ? matched.airsIndex : 75.0;
  }

  /**
   * Calculates SEAS (Naval Power Index 0-100) for a given country
   */
  public async calculateSeasIndex(countryName: string): Promise<number> {
    try {
      const db = prisma as any;
      if (db.navalVessel) {
        const vessels = await db.navalVessel.findMany({
          where: { country: countryName, status: 'ACTIVE' },
        });

        if (vessels && vessels.length > 0) {
          let aggregateScore = 0;
          let carrierMultiplier = 1.0;

          for (const vessel of vessels) {
            const count = vessel.activeCount || 1;
            aggregateScore += vessel.tvrScore * count;

            if (vessel.vesselType === 'AIRCRAFT_CARRIER') carrierMultiplier += 0.15;
            if (vessel.vesselType === 'BALLISTIC_MISSILE_SUBMARINE') carrierMultiplier += 0.10;
          }

          const rawSeas = aggregateScore * carrierMultiplier;
          const normalized = Math.min(100.0, (rawSeas / 50000) * 100.0);
          return parseFloat(normalized.toFixed(1));
        }
      }
    } catch {
      // Fallback
    }

    const matched = (vaultForceProfiles as any[]).find(
      (c) => c.country?.toLowerCase() === countryName.toLowerCase()
    );
    return matched ? matched.seasIndex : 70.0;
  }

  /**
   * Calculates ARMS (Land Power Index 0-100) for a given country
   */
  public async calculateArmsIndex(countryName: string): Promise<number> {
    try {
      const db = prisma as any;
      if (db.groundVehicle) {
        const vehicles = await db.groundVehicle.findMany({
          where: { country: countryName, status: 'ACTIVE' },
        });

        if (vehicles && vehicles.length > 0) {
          let aggregateScore = 0;
          let armorMultiplier = 1.0;

          for (const vehicle of vehicles) {
            const count = vehicle.activeCount || 1;
            aggregateScore += vehicle.tvrScore * count;

            if (vehicle.category === 'MAIN_BATTLE_TANK') armorMultiplier += 0.05;
            if (vehicle.category === 'AIR_DEFENSE_SYSTEM') armorMultiplier += 0.08;
          }

          const rawArms = aggregateScore * armorMultiplier;
          const normalized = Math.min(100.0, (rawArms / 250000) * 100.0);
          return parseFloat(normalized.toFixed(1));
        }
      }
    } catch {
      // Fallback
    }

    const matched = (vaultForceProfiles as any[]).find(
      (c) => c.country?.toLowerCase() === countryName.toLowerCase()
    );
    return matched ? matched.armsIndex : 70.0;
  }

  /**
   * Calculates composite ATLAS Index (Overall National Military Power Index 0-100)
   */
  public async syncCountryProfile(countryName: string): Promise<void> {
    try {
      const db = prisma as any;
      const airs = await this.calculateAirsIndex(countryName);
      const seas = await this.calculateSeasIndex(countryName);

      let profile: any = null;
      if (db.countryForceProfile) {
        profile = await db.countryForceProfile.findUnique({
          where: { country: countryName },
        });
      }

      const calculatedArms = await this.calculateArmsIndex(countryName);
      const arms = calculatedArms > 0 ? calculatedArms : (profile?.armsIndex || 50.0);
      const compositeAtlas = parseFloat(((airs * 0.40) + (seas * 0.35) + (arms * 0.25)).toFixed(1));

      let totalAir = 0;
      let totalSea = 0;
      let totalLand = 0;

      if (db.aircraft) {
        const airCount = await db.aircraft.aggregate({
          where: { country: countryName, serviceStatus: 'ACTIVE' },
          _sum: { activeCount: true },
        });
        totalAir = airCount._sum.activeCount || 0;
      }

      if (db.navalVessel) {
        const seaCount = await db.navalVessel.aggregate({
          where: { country: countryName, status: 'ACTIVE' },
          _sum: { activeCount: true },
        });
        totalSea = seaCount._sum.activeCount || 0;
      }

      if (db.groundVehicle) {
        const landCount = await db.groundVehicle.aggregate({
          where: { country: countryName, status: 'ACTIVE' },
          _sum: { activeCount: true },
        });
        totalLand = landCount._sum.activeCount || 0;
      }

      if (db.countryForceProfile) {
        await db.countryForceProfile.upsert({
          where: { country: countryName },
          update: {
            airsIndex: airs,
            seasIndex: seas,
            armsIndex: arms,
            atlasIndex: compositeAtlas,
            totalAircraft: totalAir,
            totalWarships: totalSea,
            totalVehicles: totalLand,
          },
          create: {
            country: countryName,
            countryCode: countryName.substring(0, 3).toUpperCase(),
            airsIndex: airs,
            seasIndex: seas,
            armsIndex: arms,
            atlasIndex: compositeAtlas,
            totalAircraft: totalAir,
            totalWarships: totalSea,
            totalVehicles: totalLand,
          },
        });
      }
    } catch {
      // Offline fallback
    }
  }

  /**
   * Re-indexes all distinct countries in the system
   */
  public async syncAllProfiles(): Promise<{ synced: number }> {
    try {
      const db = prisma as any;
      if (db.countryForceProfile) {
        const countries = await db.countryForceProfile.findMany({ select: { country: true } });
        if (countries && countries.length > 0) {
          for (const c of countries) {
            await this.syncCountryProfile(c.country);
          }
          return { synced: countries.length };
        }
      }
    } catch {
      // Offline fallback
    }

    return { synced: vaultForceProfiles.length };
  }
}

export const atlasService = new AtlasEngineService();
