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

// 2. GET /api/intelligence/rankings/countries -> 301 redirect to canonical /api/rankings/countries
router.get('/rankings/countries', (req, res) => {
  const queryStr = req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : '';
  res.redirect(301, `/api/rankings/countries${queryStr}`);
});

// 3. GET /api/intelligence/countries/:countryCode/inventory -> 301 redirect to canonical /api/countries/:countryCode/inventory
router.get('/countries/:countryCode/inventory', (req, res) => {
  res.redirect(301, `/api/countries/${encodeURIComponent(req.params.countryCode)}/inventory`);
});

// 4. GET /api/intelligence/naval/vessels -> 301 redirect to canonical /api/naval/vessels
router.get('/naval/vessels', (req, res) => {
  const queryStr = req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : '';
  res.redirect(301, `/api/naval/vessels${queryStr}`);
});

// 5. GET /api/intelligence/land/vehicles -> 301 redirect to canonical /api/land/vehicles
router.get('/land/vehicles', (req, res) => {
  const queryStr = req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : '';
  res.redirect(301, `/api/land/vehicles${queryStr}`);
});

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
