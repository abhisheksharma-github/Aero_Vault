import { prisma } from '../db.js';
import { vaultIntelligence, vaultAircraft } from '../data/vaultLoader.js';
import { AppError } from '../middleware/error.middleware.js';

export interface NationAirpowerAnalysis {
  countryName: string;
  globalRanking: number;
  tvrTotal: number;
  modernizationIndex: number;
  logisticsScore: number;
  forceReadiness: number;
  totalActiveUnits: number;
  dimensions: {
    combatPower: number;
    strikeCapacity: number;
    mobility: number;
    aewcCoverage: number;
    tankerEndurance: number;
    uavAutonomy: number;
    modernization: number;
    logisticsReadiness: number;
  };
  fleetComposition: {
    fighters: number;
    bombers: number;
    transports: number;
    helicopters: number;
    uavs: number;
    aewc: number;
    tankers: number;
    trainers: number;
  };
  generationBreakdown: {
    gen5Count: number;
    gen5Percentage: number;
    gen45Count: number;
    gen45Percentage: number;
    gen4Count: number;
    gen4Percentage: number;
    legacyCount: number;
    legacyPercentage: number;
  };
  primaryStrengths: string[];
  primaryLimitations: string[];
  rankingRationale: string;
}

export class RankingService {
  /**
   * Calculate deterministic national airpower capability and explanation
   */
  async getDetailedNationAnalysis(countryName: string): Promise<NationAirpowerAnalysis> {
    let nation: any = null;
    let aircraft: any[] = [];

    try {
      nation = await prisma.nationIntelligence.findFirst({
        where: {
          countryName: {
            equals: countryName.trim(),
            mode: 'insensitive',
          },
        },
      });

      if (nation) {
        aircraft = await prisma.aircraft.findMany({
          where: {
            OR: [
              { country: { equals: nation.countryName, mode: 'insensitive' } },
              { affiliation: { contains: nation.countryName, mode: 'insensitive' } },
            ],
            serviceStatus: 'ACTIVE',
          },
        });
      }
    } catch {
      // Offline fallback
    }

    if (!nation) {
      nation = (vaultIntelligence as any[]).find(
        (n) =>
          n.countryName?.toLowerCase() === countryName.trim().toLowerCase() ||
          n.countryCode?.toLowerCase() === countryName.trim().toLowerCase()
      );
    }

    if (!nation) {
      throw new AppError(`Airpower intelligence dossier not found for nation: '${countryName}'`, 404, 'NATION_NOT_FOUND');
    }

    if (!aircraft || aircraft.length === 0) {
      aircraft = vaultAircraft.filter(
        (a) =>
          (a.country?.toLowerCase() === nation.countryName?.toLowerCase() ||
            a.originCountry?.toLowerCase() === nation.countryName?.toLowerCase() ||
            a.affiliation?.toLowerCase()?.includes(nation.countryName?.toLowerCase())) &&
          a.serviceStatus === 'ACTIVE'
      );
    }

    // Compute category counts
    let fighters = 0;
    let bombers = 0;
    let transports = 0;
    let helicopters = 0;
    let uavs = 0;
    let aewc = 0;
    let tankers = 0;
    let trainers = 0;

    let gen5 = 0;
    let gen45 = 0;
    let gen4 = 0;
    let legacy = 0;
    let totalUnits = 0;

    for (const ac of aircraft) {
      const count = ac.fleetCount || ac.activeCount || 1;
      totalUnits += count;

      const cat = (ac.category || '').toUpperCase();
      if (cat.includes('FIGHTER') || cat.includes('ATTACK') || cat.includes('INTERCEPTOR')) {
        fighters += count;
      } else if (cat.includes('BOMBER')) {
        bombers += count;
      } else if (cat.includes('TRANSPORT')) {
        transports += count;
      } else if (cat.includes('HELICOPTER')) {
        helicopters += count;
      } else if (cat.includes('UAV') || cat.includes('DRONE')) {
        uavs += count;
      } else if (cat.includes('AEWC') || cat.includes('AWACS') || cat.includes('ISR')) {
        aewc += count;
      } else if (cat.includes('TANKER')) {
        tankers += count;
      } else if (cat.includes('TRAINER')) {
        trainers += count;
      }

      const gen = (ac.generation || '').toUpperCase();
      if (gen.includes('5') || gen.includes('6')) {
        gen5 += count;
      } else if (gen.includes('4_5') || gen.includes('4.5') || gen.includes('4_PLUS')) {
        gen45 += count;
      } else if (gen.includes('4')) {
        gen4 += count;
      } else {
        legacy += count;
      }
    }

    // If active units in DB is 0, fallback to nation record total
    const effectiveTotal = totalUnits > 0 ? totalUnits : (nation.totalActiveUnits || 1);
    const calcPct = (cnt: number) => (effectiveTotal > 0 ? Number(((cnt / effectiveTotal) * 100).toFixed(1)) : 0);

    const gen5Percentage = calcPct(gen5 || nation.gen5Count || 0);
    const gen45Percentage = calcPct(gen45 || nation.gen45Count || 0);
    const gen4Percentage = calcPct(gen4 || nation.gen4Count || 0);
    const legacyPercentage = calcPct(legacy || nation.legacyCount || 0);

    const dimensions = {
      combatPower: nation.combatPowerScore || Number(((nation.tvrTotal || 80) * 0.4).toFixed(1)),
      strikeCapacity: nation.strikeScore || Number(((nation.tvrTotal || 80) * 0.25).toFixed(1)),
      mobility: nation.mobilityScore || Number(((nation.logisticsScore || 75) * 0.85).toFixed(1)),
      aewcCoverage: nation.aewcScore || Number(((nation.modernizationIndex || 80) * 0.8).toFixed(1)),
      tankerEndurance: nation.tankerScore || Number(((nation.logisticsScore || 75) * 0.75).toFixed(1)),
      uavAutonomy: nation.uavScore || Number(((nation.modernizationIndex || 80) * 0.7).toFixed(1)),
      modernization: nation.modernizationIndex || 80,
      logisticsReadiness: nation.logisticsScore || 75,
    };

    const strengths: string[] = Array.isArray(nation.primaryStrengths) && nation.primaryStrengths.length > 0
      ? nation.primaryStrengths
      : [
        `Ranked #${nation.globalRanking} globally with total TvR index of ${nation.tvrTotal}`,
        `Robust active military air inventory with ${(nation.totalActiveUnits || 1000).toLocaleString()} operational assets`,
        `Modernization index of ${nation.modernizationIndex}% supported by ongoing procurement programs`,
      ];

    const limitations: string[] = Array.isArray(nation.primaryLimitations) && nation.primaryLimitations.length > 0
      ? nation.primaryLimitations
      : [
        `Maintenance and logistics overhead across multi-type mixed fleet architectures`,
        `Sustained reliance on legacy airframes requiring phased structural life extensions`,
      ];

    const rankingRationale = `Ranked #${nation.globalRanking} worldwide based on comprehensive calculation of combat airpower (${dimensions.combatPower}), force size (${nation.totalActiveUnits} units), strategic modernization (${nation.modernizationIndex}%), and logistical sustainment index (${nation.logisticsScore}).`;

    return {
      countryName: nation.countryName,
      globalRanking: nation.globalRanking,
      tvrTotal: nation.tvrTotal,
      modernizationIndex: nation.modernizationIndex,
      logisticsScore: nation.logisticsScore,
      forceReadiness: nation.forceReadiness,
      totalActiveUnits: nation.totalActiveUnits,
      dimensions,
      fleetComposition: {
        fighters: fighters || nation.totalFighters || 0,
        bombers: bombers || nation.totalBombers || 0,
        transports: transports || nation.totalTransports || 0,
        helicopters: helicopters || nation.totalHelicopters || 0,
        uavs: uavs || nation.totalUAVs || 0,
        aewc: aewc || nation.totalAEWC || 0,
        tankers: tankers || nation.totalTankers || 0,
        trainers: trainers || nation.totalTrainers || 0,
      },
      generationBreakdown: {
        gen5Count: gen5 || nation.gen5Count || 0,
        gen5Percentage,
        gen45Count: gen45 || nation.gen45Count || 0,
        gen45Percentage,
        gen4Count: gen4 || nation.gen4Count || 0,
        gen4Percentage,
        legacyCount: legacy || nation.legacyCount || 0,
        legacyPercentage,
      },
      primaryStrengths: strengths,
      primaryLimitations: limitations,
      rankingRationale,
    };
  }
}

export const rankingService = new RankingService();
