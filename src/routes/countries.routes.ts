import { Router } from 'express';
import { countriesController } from '../controllers/countries.controller.js';

const router = Router();

// GET /api/countries - List all G20 countries
router.get('/', countriesController.getCountries);

// GET /api/countries/:country/aircraft - List aircraft operated by country
router.get('/:country/aircraft', countriesController.getCountryAircraft);

// GET /api/countries/:country - Get single country dossier
router.get('/:country', countriesController.getCountryByNameOrCode);

export default router;
