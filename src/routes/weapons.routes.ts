import { Router } from 'express';
import { weaponsController } from '../controllers/weapons.controller.js';

const router = Router();

// GET /api/weapons - List all military ordnance
router.get('/', weaponsController.getWeapons);

export default router;
