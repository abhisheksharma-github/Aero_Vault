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
import { prisma } from '../db.js';

const router = Router();

// Health Check Endpoint
router.get('/health', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.status(200).json({
      status: 'healthy',
      database: 'connected',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: '3.0.0',
    });
  } catch (error) {
    res.status(200).json({
      status: 'degraded',
      database: 'offline_or_unreachable',
      note: 'AeroVault operating in autonomous local vault fallback mode.',
      timestamp: new Date().toISOString(),
    });
  }
});

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
