import { Router } from 'express';
import { manufacturersController } from '../controllers/manufacturers.controller.js';

const router = Router();

// GET /api/manufacturers - List all aerospace manufacturers
router.get('/', manufacturersController.getManufacturers);

export default router;
