import { Router } from 'express';
import { aircraftController } from '../controllers/aircraft.controller.js';
import { validate } from '../middleware/validate.middleware.js';
import { requireAdmin } from '../middleware/auth.middleware.js';
import {
  AircraftQuerySchema,
  AircraftIdParamSchema,
  CreateAircraftSchema,
  UpdateAircraftSchema,
} from '../schemas/aircraft.schema.js';

const router = Router();

// GET /api/aircraft/search - Intelligent text search
router.get('/search', aircraftController.searchAircraft);

// GET /api/aircraft/categories - Controlled categories hierarchy
router.get('/categories', aircraftController.getCategories);

// GET /api/aircraft - Multi-query filtering & search
router.get(
  '/',
  validate({ query: AircraftQuerySchema }),
  aircraftController.getAircraft
);

// GET /api/aircraft/:id/tvr - Deep-dive TVR score breakdown & explainability
router.get(
  '/:id/tvr',
  validate({ params: AircraftIdParamSchema }),
  aircraftController.getAircraftTVR
);

// GET /api/aircraft/:id/sources - Data sources & confidence metrics
router.get(
  '/:id/sources',
  validate({ params: AircraftIdParamSchema }),
  aircraftController.getAircraftSources
);

// GET /api/aircraft/:id/history - Milestones & snapshots
router.get(
  '/:id/history',
  validate({ params: AircraftIdParamSchema }),
  aircraftController.getAircraftHistory
);

// GET /api/aircraft/:id - Single aircraft specs
router.get(
  '/:id',
  validate({ params: AircraftIdParamSchema }),
  aircraftController.getAircraftById
);

// POST /api/aircraft - Create aircraft (Admin write)
router.post(
  '/',
  requireAdmin,
  validate({ body: CreateAircraftSchema }),
  aircraftController.createAircraft
);

// PUT /api/aircraft/:id - Update aircraft (Admin write)
router.put(
  '/:id',
  requireAdmin,
  validate({ params: AircraftIdParamSchema, body: UpdateAircraftSchema }),
  aircraftController.updateAircraft
);

// DELETE /api/aircraft/:id - Delete aircraft (Admin write)
router.delete(
  '/:id',
  requireAdmin,
  validate({ params: AircraftIdParamSchema }),
  aircraftController.deleteAircraft
);

export default router;
