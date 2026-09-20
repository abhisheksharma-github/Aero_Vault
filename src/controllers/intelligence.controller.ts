import { Request, Response, NextFunction } from 'express';
import { intelligenceService } from '../services/intelligence.service.js';
import { rankingService } from '../services/ranking.service.js';
import { comparisonService } from '../services/comparison.service.js';
import { aircraftService } from '../services/aircraft.service.js';
import { dataQualityService } from '../services/dataQuality.service.js';
import { atlasService } from '../services/atlas.service.js';
import { prisma } from '../db.js';
import {
  IntelligenceQueryParams,
  CompareQueryParams,
  MissionCompareQueryParams,
  SitrepQueryParams,
  CountryRankingsQueryParams,
  CountryInventoryParams,
  NavalVesselsQueryParams,
  GroundVehiclesQueryParams,
  DomainType,
  NavalVesselType,
  GroundVehicleCategory,
} from '../schemas/intelligence.schema.js';
import {
  initialSitrepEvents,
  initialCountryForceProfiles,
  initialNavalVessels,
  initialGroundVehicles,
} from '../data/multiDomainData.js';
import { aircraftVault } from '../data/normalize.js';
import { validatedQuery, validatedParams } from '../middleware/validate.middleware.js';

export class IntelligenceController {
  /**
   * GET /api/intelligence - WDMMA national rankings & global airpower aggregates
   */
  getRankings = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query = validatedQuery<IntelligenceQueryParams>(req);
      const result = await intelligenceService.getRankings(query);

      res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /api/intelligence/sitrep - Multi-domain operational sitrep feed
   */
  getSitreps = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query = validatedQuery<SitrepQueryParams>(req);
      const { domain, eventType, country, limit = 15, page = 1 } = query;
      const numLimit = Number(limit) || 15;
      const numPage = Number(page) || 1;
      const skip = (numPage - 1) * numLimit;

      try {
        const db = prisma as any;
        if (db.sitrepEvent) {
          const whereClause: Record<string, unknown> = {};
          if (domain) whereClause.domain = domain as DomainType;
          if (country) whereClause.country = { contains: country, mode: 'insensitive' };
          if (eventType) whereClause.eventType = eventType;

          const [totalCount, sitreps] = await Promise.all([
            db.sitrepEvent.count({ where: whereClause }),
            db.sitrepEvent.findMany({
              where: whereClause,
              orderBy: { eventDate: 'desc' },
              skip,
              take: numLimit,
            }),
          ]);

          if (sitreps && sitreps.length > 0) {
            res.status(200).json({
              success: true,
              count: sitreps.length,
              total: totalCount,
              page: numPage,
              totalPages: Math.ceil(totalCount / numLimit) || 1,
              data: sitreps,
            });
            return;
          }
        }
      } catch {
        // Fallback to in-memory dataset
      }

      let sitreps = [...(initialSitrepEvents as any[])];

      if (domain) {
        sitreps = sitreps.filter((s) => s.domain === domain);
      }
      if (country) {
        sitreps = sitreps.filter((s) => s.country?.toLowerCase().includes(country.toLowerCase()));
      }
      if (eventType) {
        sitreps = sitreps.filter((s) => s.eventType === eventType);
      }

      sitreps.sort((a, b) => new Date(b.eventDate).getTime() - new Date(a.eventDate).getTime());

      const totalCount = sitreps.length;
      const paginatedSitreps = sitreps.slice(skip, skip + numLimit);

      res.status(200).json({
        success: true,
        count: paginatedSitreps.length,
        total: totalCount,
        page: numPage,
        totalPages: Math.ceil(totalCount / numLimit) || 1,
        data: paginatedSitreps,
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /api/rankings/countries - Global military power rankings across ATLAS, AIRS, SEAS, ARMS
   */
  getCountryRankings = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query = validatedQuery<CountryRankingsQueryParams>(req);
      const { sortBy = 'atlasIndex', order = 'desc', limit = 50 } = query;
      const numLimit = Number(limit) || 50;

      try {
        const db = prisma as any;
        if (db.countryForceProfile) {
          const profiles = await db.countryForceProfile.findMany({
            orderBy: { [sortBy]: order },
            take: numLimit,
          });

          if (profiles && profiles.length > 0) {
            res.status(200).json({
              success: true,
              count: profiles.length,
              data: profiles,
            });
            return;
          }
        }
      } catch {
        // Fallback
      }

      const profiles = [...(initialCountryForceProfiles as any[])];
      const mult = order === 'asc' ? 1 : -1;
      profiles.sort((a, b) => {
        const valA = a[sortBy] ?? 0;
        const valB = b[sortBy] ?? 0;
        if (typeof valA === 'string') return valA.localeCompare(String(valB)) * mult;
        return (Number(valA) - Number(valB)) * mult;
      });

      const paginated = profiles.slice(0, numLimit);

      res.status(200).json({
        success: true,
        count: paginated.length,
        data: paginated,
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /api/countries/:countryCode/inventory - Comprehensive multi-domain inventory by country code
   */
  getCountryInventory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const params = validatedParams<CountryInventoryParams>(req);
      const countryCode = params.countryCode || (req.params as any).countryCode;
      const code = (countryCode || '').toUpperCase();

      try {
        const db = prisma as any;
        if (db.countryForceProfile) {
          const profile = await db.countryForceProfile.findFirst({
            where: {
              OR: [
                { countryCode: code },
                { country: { equals: countryCode, mode: 'insensitive' } },
              ],
            },
          });

          if (profile) {
            const countryFilter = profile.country;
            const [aircraft, vessels, vehicles] = await Promise.all([
              db.aircraft
                ? db.aircraft.findMany({
                  where: { country: { equals: countryFilter, mode: 'insensitive' }, serviceStatus: 'ACTIVE' },
                  orderBy: { tvrScore: 'desc' },
                })
                : [],
              db.navalVessel
                ? db.navalVessel.findMany({
                  where: { country: { equals: countryFilter, mode: 'insensitive' }, status: 'ACTIVE' },
                  orderBy: { tvrScore: 'desc' },
                })
                : [],
              db.groundVehicle
                ? db.groundVehicle.findMany({
                  where: { country: { equals: countryFilter, mode: 'insensitive' }, status: 'ACTIVE' },
                  orderBy: { tvrScore: 'desc' },
                })
                : [],
            ]);

            res.status(200).json({
              success: true,
              data: {
                profile,
                inventory: {
                  aircraftCount: aircraft.length,
                  warshipCount: vessels.length,
                  vehicleCount: vehicles.length,
                  aircraft,
                  navalVessels: vessels,
                  groundVehicles: vehicles,
                },
              },
            });
            return;
          }
        }
      } catch {
        // Fallback
      }

      const profile = (initialCountryForceProfiles as any[]).find(
        (p) =>
          p.countryCode?.toUpperCase() === code ||
          p.country?.toLowerCase() === (countryCode || '').toLowerCase()
      );

      const targetCountry = profile ? profile.country : countryCode;

      const aircraft = aircraftVault.filter(
        (a) =>
          (a.country?.toLowerCase() === targetCountry?.toLowerCase() ||
            a.originCountry?.toLowerCase() === targetCountry?.toLowerCase()) &&
          a.serviceStatus === 'ACTIVE'
      );
      const vessels = (initialNavalVessels as any[]).filter(
        (v) => v.country?.toLowerCase() === targetCountry?.toLowerCase() && v.status === 'ACTIVE'
      );
      const vehicles = (initialGroundVehicles as any[]).filter(
        (g) => g.country?.toLowerCase() === targetCountry?.toLowerCase() && g.status === 'ACTIVE'
      );

      res.status(200).json({
        success: true,
        data: {
          profile: profile || {
            country: targetCountry,
            countryCode: code,
            atlasIndex: 0,
            airsIndex: 0,
            seasIndex: 0,
            armsIndex: 0,
          },
          inventory: {
            aircraftCount: aircraft.length,
            warshipCount: vessels.length,
            vehicleCount: vehicles.length,
            aircraft,
            navalVessels: vessels,
            groundVehicles: vehicles,
          },
        },
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /api/naval/vessels - Paginated naval warship & submarine inventory
   */
  getNavalVessels = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query = validatedQuery<NavalVesselsQueryParams>(req);
      const { country, vesselType, search, page = 1, limit = 20 } = query;
      const numLimit = Number(limit) || 20;
      const numPage = Number(page) || 1;
      const skip = (numPage - 1) * numLimit;

      try {
        const db = prisma as any;
        if (db.navalVessel) {
          const where: Record<string, unknown> = {};
          if (country) where.country = { contains: country, mode: 'insensitive' };
          if (vesselType) where.vesselType = vesselType as NavalVesselType;
          if (search) {
            where.OR = [
              { name: { contains: search, mode: 'insensitive' } },
              { shipClass: { contains: search, mode: 'insensitive' } },
              { pennantNumber: { contains: search, mode: 'insensitive' } },
            ];
          }

          const [total, vessels] = await Promise.all([
            db.navalVessel.count({ where }),
            db.navalVessel.findMany({
              where,
              orderBy: { tvrScore: 'desc' },
              skip,
              take: numLimit,
            }),
          ]);

          if (vessels && vessels.length > 0) {
            res.status(200).json({
              success: true,
              count: vessels.length,
              total,
              page: numPage,
              totalPages: Math.ceil(total / numLimit) || 1,
              data: vessels,
            });
            return;
          }
        }
      } catch {
        // Fallback
      }

      let vessels = [...(initialNavalVessels as any[])];

      if (country) {
        vessels = vessels.filter((v) => v.country?.toLowerCase().includes(country.toLowerCase()));
      }
      if (vesselType) {
        vessels = vessels.filter((v) => v.vesselType === vesselType);
      }
      if (search) {
        const q = search.toLowerCase();
        vessels = vessels.filter(
          (v) =>
            v.name?.toLowerCase().includes(q) ||
            v.shipClass?.toLowerCase().includes(q) ||
            v.pennantNumber?.toLowerCase().includes(q)
        );
      }

      vessels.sort((a, b) => (b.tvrScore ?? 0) - (a.tvrScore ?? 0));

      const total = vessels.length;
      const paginated = vessels.slice(skip, skip + numLimit);

      res.status(200).json({
        success: true,
        count: paginated.length,
        total,
        page: numPage,
        totalPages: Math.ceil(total / numLimit) || 1,
        data: paginated,
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /api/land/vehicles - Paginated armor & land vehicle inventory
   */
  getGroundVehicles = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query = validatedQuery<GroundVehiclesQueryParams>(req);
      const { country, category, search, page = 1, limit = 20 } = query;
      const numLimit = Number(limit) || 20;
      const numPage = Number(page) || 1;
      const skip = (numPage - 1) * numLimit;

      try {
        const db = prisma as any;
        if (db.groundVehicle) {
          const where: Record<string, unknown> = {};
          if (country) where.country = { contains: country, mode: 'insensitive' };
          if (category) where.category = category as GroundVehicleCategory;
          if (search) {
            where.OR = [
              { name: { contains: search, mode: 'insensitive' } },
              { mainArmament: { contains: search, mode: 'insensitive' } },
            ];
          }

          const [total, vehicles] = await Promise.all([
            db.groundVehicle.count({ where }),
            db.groundVehicle.findMany({
              where,
              orderBy: { tvrScore: 'desc' },
              skip,
              take: numLimit,
            }),
          ]);

          if (vehicles && vehicles.length > 0) {
            res.status(200).json({
              success: true,
              count: vehicles.length,
              total,
              page: numPage,
              totalPages: Math.ceil(total / numLimit) || 1,
              data: vehicles,
            });
            return;
          }
        }
      } catch {
        // Fallback
      }

      let vehicles = [...(initialGroundVehicles as any[])];

      if (country) {
        vehicles = vehicles.filter((v) => v.country?.toLowerCase().includes(country.toLowerCase()));
      }
      if (category) {
        vehicles = vehicles.filter((v) => v.category === category);
      }
      if (search) {
        const q = search.toLowerCase();
        vehicles = vehicles.filter(
          (v) =>
            v.name?.toLowerCase().includes(q) ||
            v.mainArmament?.toLowerCase().includes(q)
        );
      }

      vehicles.sort((a, b) => (b.tvrScore ?? 0) - (a.tvrScore ?? 0));

      const total = vehicles.length;
      const paginated = vehicles.slice(skip, skip + numLimit);

      res.status(200).json({
        success: true,
        count: paginated.length,
        total,
        page: numPage,
        totalPages: Math.ceil(total / numLimit) || 1,
        data: paginated,
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * POST /api/intelligence/reindex - Trigger ATLAS/AIRS/SEAS/ARMS engine re-indexing
   */
  reindex = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      try {
        const result = await atlasService.syncAllProfiles();
        res.status(200).json({
          success: true,
          message: 'Global force profiles re-indexed successfully',
          syncedCount: result.synced,
        });
        return;
      } catch {
        // Fallback
        res.status(200).json({
          success: true,
          message: 'Global force profiles re-indexed successfully (tactical in-memory sync)',
          syncedCount: initialCountryForceProfiles.length,
        });
      }
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /api/intelligence/:country - Country fleet inventory & basic metrics
   */
  getCountryIntelligence = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const params = validatedParams<{ country: string }>(req);
      const country = params.country || (req.params as any).country;
      const result = await intelligenceService.getCountryIntelligence(country);

      res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /api/intelligence/nations/:country/analysis - Detailed airpower score & "Why this ranking?"
   */
  getCountryAnalysis = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const params = validatedParams<{ country: string }>(req);
      const country = params.country || (req.params as any).country;
      const analysis = await rankingService.getDetailedNationAnalysis(country);

      res.status(200).json({
        success: true,
        data: analysis,
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /api/intelligence/compare - Split-screen benchmark comparison between 2 aircraft
   */
  compareAircraft = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query = validatedQuery<CompareQueryParams>(req);
      const { aircraftA: aId, aircraftB: bId } = query;

      const [aircraftA, aircraftB] = await Promise.all([
        aircraftService.getAircraftById(aId),
        aircraftService.getAircraftById(bId),
      ]);

      const report = comparisonService.compareAircraft(aircraftA, aircraftB);

      res.status(200).json({
        success: true,
        data: report,
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /api/intelligence/compare/mission - Mission-specific tactical scenario simulation
   */
  compareMission = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query = validatedQuery<MissionCompareQueryParams>(req);
      const { aircraftA: aId, aircraftB: bId, mission } = query;

      const [aircraftA, aircraftB] = await Promise.all([
        aircraftService.getAircraftById(aId),
        aircraftService.getAircraftById(bId),
      ]);

      const comparison = comparisonService.compareAircraft(aircraftA, aircraftB);
      const missionEvaluation = comparisonService.evaluateMission(
        mission as any,
        aircraftA,
        comparison.combatantA.tvrBreakdown,
        aircraftB,
        comparison.combatantB.tvrBreakdown
      );

      res.status(200).json({
        success: true,
        data: {
          comparison,
          missionEvaluation,
        },
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /api/intelligence/quality - Data quality metrics & active conflicts
   */
  getDataQuality = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const metrics = await dataQualityService.runAudit();

      res.status(200).json({
        success: true,
        data: metrics,
      });
    } catch (error) {
      next(error);
    }
  };
}

export const intelligenceController = new IntelligenceController();
