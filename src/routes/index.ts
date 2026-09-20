import { Router } from 'express';
import aircraftRoutes from './aircraft.routes.js';
import intelligenceRoutes from './intelligence.routes.js';
import weaponsRoutes from './weapons.routes.js';
import branchesRoutes from './branches.routes.js';
import osintRoutes from './osint.routes.js';
import reportsRoutes from './reports.routes.js';
import countriesRoutes from './countries.routes.js';
import manufacturersRoutes from './manufacturers.routes.js';
import { intelligenceController } from '../controllers/intelligence.controller.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  CountryRankingsQuerySchema,
  CountryInventoryParamsSchema,
  NavalVesselsQuerySchema,
  GroundVehiclesQuerySchema,
} from '../schemas/intelligence.schema.js';
import healthRoutes from './health.routes.js';
import docsRoutes from './docs.routes.js';

const router = Router();

// Health Check Endpoints (/api/health, /api/health/live, /api/health/ready)
router.use('/health', healthRoutes);

// OpenAPI 3.1 Documentation (/api/docs, /api/openapi.json)
router.use('/docs', docsRoutes);
router.get('/openapi.json', (_req, res) => res.redirect('/api/docs/openapi.json'));

// Top-Level Multi-Domain Direct Resource Endpoints
router.get(
  '/rankings/countries',
  validate({ query: CountryRankingsQuerySchema }),
  intelligenceController.getCountryRankings
);

router.get(
  '/countries/:countryCode/inventory',
  validate({ params: CountryInventoryParamsSchema }),
  intelligenceController.getCountryInventory
);

router.get(
  '/naval/vessels',
  validate({ query: NavalVesselsQuerySchema }),
  intelligenceController.getNavalVessels
);

router.get(
  '/land/vehicles',
  validate({ query: GroundVehiclesQuerySchema }),
  intelligenceController.getGroundVehicles
);

// Mount G20 and Resource Routers
router.use('/countries', countriesRoutes);
router.use('/manufacturers', manufacturersRoutes);
router.use('/aircraft', aircraftRoutes);
router.use('/intelligence', intelligenceRoutes);
router.use('/weapons', weaponsRoutes);
router.use('/branches', branchesRoutes);
router.use('/osint', osintRoutes);
router.use('/reports', reportsRoutes);

export default router;
