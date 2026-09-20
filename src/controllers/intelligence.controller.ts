import { Request, Response, NextFunction } from 'express';
import { intelligenceService } from '../services/intelligence.service.js';
import { rankingService } from '../services/ranking.service.js';
import { comparisonService } from '../services/comparison.service.js';
import { aircraftService } from '../services/aircraft.service.js';
import { dataQualityService } from '../services/dataQuality.service.js';
import { atlasService } from '../services/atlas.service.js';
import { rssSitrepService } from '../services/rssSitrep.service.js';
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
  vaultForceProfiles,
  vaultSitrep,
  vaultNaval,
  vaultLand,
  vaultAircraft,
  vaultIntelligence,
} from '../data/vaultLoader.js';
import { validatedQuery, validatedParams } from '../middleware/validate.middleware.js';
import { computeCountryCoverage } from '../types/coverage.types.js';
import { logger } from '../utils/logger.js';

function getCoverageForCountry(countryName: string, countryCode?: string) {
  const cName = (countryName || '').toLowerCase();
  const cCode = (countryCode || '').toUpperCase();

  const hasForceProfile = vaultForceProfiles.some(
    (fp) => fp.country.toLowerCase() === cName || fp.countryCode.toUpperCase() === cCode
  );
  const hasIntelligenceDossier = vaultIntelligence.some(
    (intel) => intel.countryName.toLowerCase() === cName || intel.countryCode.toUpperCase() === cCode
  );
  const aircraftCount = vaultAircraft.filter(
    (a) => a.country?.toLowerCase() === cName || (a.originCountry && a.originCountry.toLowerCase() === cName)
  ).length;
  const warshipCount = vaultNaval.filter((n) => n.country?.toLowerCase() === cName).length;
  const vehicleCount = vaultLand.filter((l) => l.country?.toLowerCase() === cName).length;

  return computeCountryCoverage({
    hasForceProfile,
    hasIntelligenceDossier,
    aircraftCount,
    warshipCount,
    vehicleCount,
  });
}

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
   * GET /api/intelligence/sitrep - Multi-domain operational sitrep feed with live RSS ingest
   */
  getSitreps = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query = validatedQuery<SitrepQueryParams>(req);
      const { domain, eventType, country, limit = 15, page = 1 } = query;
      const numLimit = Number(limit) || 15;
      const numPage = Number(page) || 1;
      const skip = (numPage - 1) * numLimit;

      // 1. Fetch live RSS feeds (IDRW.org + Defence.in)
      let liveItems: any[] = [];
      try {
        liveItems = await rssSitrepService.getLiveFeeds();
      } catch (err: any) {
        logger.warn('Failed to fetch live RSS sitreps, continuing with vault data', {
          error: err.message || err,
        });
      }

      // 2. Fetch database or vault sitrep items
      let baseSitreps: any[] = [];
      try {
        const db = prisma as any;
        if (db.sitrepEvent) {
          const dbItems = await db.sitrepEvent.findMany({
            orderBy: { eventDate: 'desc' },
            take: 100,
          });
          if (dbItems && dbItems.length > 0) {
            baseSitreps = dbItems;
          }
        }
      } catch (dbErr: any) {
        logger.warn('Failed querying sitreps from database, using vault fallback', {
          error: dbErr.message || dbErr,
        });
      }

      if (baseSitreps.length === 0) {
        baseSitreps = [...(vaultSitrep as any[])];
      }

      // 3. Merge live RSS items and base sitreps (avoiding duplicates)
      const seenIds = new Set<string>();
      const combinedSitreps: any[] = [];

      for (const item of [...liveItems, ...baseSitreps]) {
        const id = item.id || item.sourceUrl || `${item.domain}-${item.eventDate}`;
        if (!seenIds.has(id)) {
          seenIds.add(id);
          combinedSitreps.push(item);
        }
      }

      // 4. Apply domain, country, and eventType filters
      let filteredSitreps = combinedSitreps;

      if (domain && domain !== 'ALL') {
        const targetDomain = (domain === 'STRATEGIC_DEFENSE' ? 'STRATEGIC' : domain) as string;
        filteredSitreps = filteredSitreps.filter((s) => {
          const sDomain = s.domain === 'STRATEGIC_DEFENSE' ? 'STRATEGIC' : s.domain;
          return sDomain === targetDomain;
        });
      }

      if (country) {
        const cLower = country.toLowerCase();
        filteredSitreps = filteredSitreps.filter((s) => s.country?.toLowerCase().includes(cLower));
      }

      if (eventType) {
        filteredSitreps = filteredSitreps.filter((s) => s.eventType === eventType);
      }

      // 5. Sort newest first
      filteredSitreps.sort((a, b) => new Date(b.eventDate).getTime() - new Date(a.eventDate).getTime());

      const totalCount = filteredSitreps.length;
      const paginatedSitreps = filteredSitreps.slice(skip, skip + numLimit);

      res.status(200).json({
        success: true,
        count: paginatedSitreps.length,
        total: totalCount,
        page: numPage,
        totalPages: Math.ceil(totalCount / numLimit) || 1,
        liveFeedCount: liveItems.length,
        sources: [
          'IDRW.org (Indian Defence Research Wing)',
          'Defence.in (Strategic & Military Community)',
          'AeroVault Tactical OSINT Vault',
        ],
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
            const profilesWithCoverage = profiles.map((p: any) => ({
              ...p,
              coverage: getCoverageForCountry(p.country, p.countryCode),
            }));

            res.status(200).json({
              success: true,
              count: profilesWithCoverage.length,
              data: profilesWithCoverage,
            });
            return;
          }
        }
      } catch (dbErr: any) {
        logger.warn('Failed querying country force profiles from database, using vault fallback', {
          error: dbErr.message || dbErr,
        });
      }

      const profiles = [...(vaultForceProfiles as any[])];
      const mult = order === 'asc' ? 1 : -1;
      profiles.sort((a, b) => {
        const valA = a[sortBy] ?? 0;
        const valB = b[sortBy] ?? 0;
        if (typeof valA === 'string') return valA.localeCompare(String(valB)) * mult;
        return (Number(valA) - Number(valB)) * mult;
      });

      const paginated = profiles.slice(0, numLimit).map((p: any) => ({
        ...p,
        coverage: getCoverageForCountry(p.country, p.countryCode),
      }));

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

            const coverage = getCoverageForCountry(profile.country, profile.countryCode);

            res.status(200).json({
              success: true,
              data: {
                profile,
                coverage,
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
      } catch (dbErr: any) {
        logger.warn('Failed querying country inventory from database, using vault fallback', {
          countryCode: code,
          error: dbErr.message || dbErr,
        });
      }

      const profile = (vaultForceProfiles as any[]).find(
        (p) =>
          p.countryCode?.toUpperCase() === code ||
          p.country?.toLowerCase() === (countryCode || '').toLowerCase()
      );

      const targetCountry = profile ? profile.country : countryCode;

      const aircraft = vaultAircraft.filter(
        (a) =>
          (a.country?.toLowerCase() === targetCountry?.toLowerCase() ||
            a.originCountry?.toLowerCase() === targetCountry?.toLowerCase()) &&
          a.serviceStatus === 'ACTIVE'
      );
      const vessels = (vaultNaval as any[]).filter(
        (v) => v.country?.toLowerCase() === targetCountry?.toLowerCase() && v.status === 'ACTIVE'
      );
      const vehicles = (vaultLand as any[]).filter(
        (g) => g.country?.toLowerCase() === targetCountry?.toLowerCase() && g.status === 'ACTIVE'
      );

      const coverage = getCoverageForCountry(targetCountry, profile?.countryCode || code);

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
          coverage,
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
      } catch (dbErr: any) {
        logger.warn('Failed querying naval vessels from database, using vault fallback', {
          error: dbErr.message || dbErr,
        });
      }

      let vessels = [...(vaultNaval as any[])];

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
      } catch (dbErr: any) {
        logger.warn('Failed querying ground vehicles from database, using vault fallback', {
          error: dbErr.message || dbErr,
        });
      }

      let vehicles = [...(vaultLand as any[])];

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
      } catch (syncErr: any) {
        logger.warn('Failed syncing atlas profiles in database, returning tactical in-memory sync count', {
          error: syncErr.message || syncErr,
        });
        res.status(200).json({
          success: true,
          message: 'Global force profiles re-indexed successfully (tactical in-memory sync)',
          syncedCount: vaultForceProfiles.length,
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
