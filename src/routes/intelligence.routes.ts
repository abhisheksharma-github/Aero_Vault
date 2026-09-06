import { Router } from 'express';
import { intelligenceController } from '../controllers/intelligence.controller.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  IntelligenceQuerySchema,
  IntelligenceCountryParamSchema,
  CompareQuerySchema,
  MissionCompareQuerySchema,
  SitrepQuerySchema,
  CountryRankingsQuerySchema,
  CountryInventoryParamsSchema,
  NavalVesselsQuerySchema,
  GroundVehiclesQuerySchema,
} from '../schemas/intelligence.schema.js';

const router = Router();

// ----------------------------------------------------
// MULTI-DOMAIN INTELLIGENCE & SITREP ENDPOINTS
// ----------------------------------------------------

// 1. GET /api/intelligence/sitrep - Multi-domain operational timeline feed
router.get(
  '/sitrep',
  validate({ query: SitrepQuerySchema }),
  intelligenceController.getSitreps
);

// 2. GET /api/intelligence/rankings/countries - Global power rankings across ATLAS, AIRS, SEAS, ARMS
router.get(
  '/rankings/countries',
  validate({ query: CountryRankingsQuerySchema }),
  intelligenceController.getCountryRankings
);

// 3. GET /api/intelligence/countries/:countryCode/inventory - Multi-domain inventory by country
router.get(
  '/countries/:countryCode/inventory',
  validate({ params: CountryInventoryParamsSchema }),
  intelligenceController.getCountryInventory
);

// 4. GET /api/intelligence/naval/vessels - Paginated naval combatant inventory
router.get(
  '/naval/vessels',
  validate({ query: NavalVesselsQuerySchema }),
  intelligenceController.getNavalVessels
);

// 5. GET /api/intelligence/land/vehicles - Paginated armor & land vehicle inventory
router.get(
  '/land/vehicles',
  validate({ query: GroundVehiclesQuerySchema }),
  intelligenceController.getGroundVehicles
);

// 6. POST /api/intelligence/reindex - Trigger ATLAS engine global force profile re-indexing
router.post(
  '/reindex',
  intelligenceController.reindex
);

// ----------------------------------------------------
// TACTICAL BENCHMARK & ANALYSIS ENDPOINTS
// ----------------------------------------------------

// GET /api/intelligence/compare/mission - Mission-specific tactical scenario simulation
router.get(
  '/compare/mission',
  validate({ query: MissionCompareQuerySchema }),
  intelligenceController.compareMission
);

// GET /api/intelligence/compare - Split-screen benchmark comparison between 2 aircraft
router.get(
  '/compare',
  validate({ query: CompareQuerySchema }),
  intelligenceController.compareAircraft
);

// GET /api/intelligence/quality - Automated data quality & integrity audit
router.get(
  '/quality',
  intelligenceController.getDataQuality
);

// GET /api/intelligence/nations/:country/analysis - Detailed airpower score & "Why this ranking?"
router.get(
  '/nations/:country/analysis',
  validate({ params: IntelligenceCountryParamSchema }),
  intelligenceController.getCountryAnalysis
);

// GET /api/intelligence/:country - Deep-dive country defense analytics
router.get(
  '/:country',
  validate({ params: IntelligenceCountryParamSchema }),
  intelligenceController.getCountryIntelligence
);

// GET /api/intelligence - WDMMA national rankings & comparative analytics
router.get(
  '/',
  validate({ query: IntelligenceQuerySchema }),
  intelligenceController.getRankings
);

export default router;
