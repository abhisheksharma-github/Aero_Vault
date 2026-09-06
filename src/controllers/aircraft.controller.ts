import { Request, Response, NextFunction } from 'express';
import { aircraftService } from '../services/aircraft.service.js';
import { AircraftQueryParams, CreateAircraftInput, UpdateAircraftInput } from '../schemas/aircraft.schema.js';
import { g20AircraftData } from '../data/g20/g20Aircraft.js';

export const G20_AIRCRAFT_CATEGORIES = [
  {
    group: 'FIGHTER AND COMBAT',
    categories: [
      'Fighter',
      'Multirole Fighter',
      'Air Superiority',
      'Interceptor',
      'Strike Aircraft',
      'Ground Attack',
      'Close Air Support',
      'Bomber',
      'Strategic Bomber',
      'Electronic Warfare',
    ],
  },
  {
    group: 'INTELLIGENCE AND SURVEILLANCE',
    categories: [
      'AEW&C',
      'AWACS',
      'ISR',
      'Reconnaissance',
      'Surveillance',
      'SIGINT',
      'ELINT',
    ],
  },
  {
    group: 'MARITIME',
    categories: [
      'Maritime Patrol Aircraft',
      'Anti-Submarine Warfare Aircraft',
      'Maritime Helicopter',
      'ASW Helicopter',
    ],
  },
  {
    group: 'TRANSPORT',
    categories: [
      'Strategic Transport',
      'Tactical Transport',
      'Utility Aircraft',
      'VIP Transport',
    ],
  },
  {
    group: 'REFUELING',
    categories: ['Aerial Refueling Tanker'],
  },
  {
    group: 'TRAINING',
    categories: [
      'Basic Trainer',
      'Intermediate Trainer',
      'Advanced Jet Trainer',
      'Lead-In Fighter Trainer',
    ],
  },
  {
    group: 'HELICOPTERS',
    categories: [
      'Attack Helicopter',
      'Utility Helicopter',
      'Transport Helicopter',
      'Heavy Lift Helicopter',
      'Reconnaissance Helicopter',
      'Special Operations Helicopter',
      'Search and Rescue Helicopter',
    ],
  },
  {
    group: 'UNMANNED',
    categories: ['UAV', 'Tactical UAV', 'MALE UAV', 'HALE UAV', 'UCAV'],
  },
  {
    group: 'DEVELOPMENT',
    categories: ['Prototype', 'Experimental', 'Under Development', 'Future Aircraft'],
  },
];

export class AircraftController {
  /**
   * GET /api/aircraft - List with filtering, pagination, and sorting
   */
  async getAircraft(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const query = req.query as unknown as AircraftQueryParams;
      const result = await aircraftService.listAircraft(query);

      res.status(200).json({
        success: true,
        data: result.items,
        pagination: result.pagination,
        filters: result.appliedFilters,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/aircraft/categories - Controlled aircraft category hierarchy
   */
  async getCategories(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      res.status(200).json({
        success: true,
        count: G20_AIRCRAFT_CATEGORIES.length,
        data: G20_AIRCRAFT_CATEGORIES,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/aircraft/search - Intelligent search across names, designations, variants, manufacturers, and countries
   */
  async searchAircraft(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const q = (req.query.q as string || '').toLowerCase().trim();
      if (!q) {
        res.status(200).json({
          success: true,
          count: g20AircraftData.length,
          data: g20AircraftData,
        });
        return;
      }

      const results = g20AircraftData.filter((item) => {
        return (
          item.aircraftName.toLowerCase().includes(q) ||
          item.officialDesignation.toLowerCase().includes(q) ||
          item.variant.toLowerCase().includes(q) ||
          item.family.toLowerCase().includes(q) ||
          item.manufacturer.toLowerCase().includes(q) ||
          item.country.toLowerCase().includes(q) ||
          item.primaryCategory.toLowerCase().includes(q) ||
          item.id.toLowerCase().includes(q) ||
          (item.natoReportingName && item.natoReportingName.toLowerCase().includes(q))
        );
      });

      res.status(200).json({
        success: true,
        query: q,
        count: results.length,
        data: results,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/aircraft/:id - Single aircraft specs (with G20 dataset fallback)
   */
  async getAircraftById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = req.params.id as string;

      // Check normalized G20 dataset first
      const normalizedMatch = g20AircraftData.find(
        (a) => a.id.toLowerCase() === id.toLowerCase()
      );

      if (normalizedMatch) {
        res.status(200).json({
          success: true,
          data: normalizedMatch,
        });
        return;
      }

      const aircraft = await aircraftService.getAircraftById(id);

      res.status(200).json({
        success: true,
        data: aircraft,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/aircraft/:id/tvr - Deep-dive TVR calculation breakdown
   */
  async getAircraftTVR(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = req.params.id as string;
      const tvrReport = await aircraftService.getAircraftTVR(id);

      res.status(200).json({
        success: true,
        data: tvrReport,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/aircraft/:id/sources - Data sources & confidence metrics
   */
  async getAircraftSources(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = req.params.id as string;
      const sourcesReport = await aircraftService.getAircraftSources(id);

      res.status(200).json({
        success: true,
        data: sourcesReport,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/aircraft/:id/history - Milestones & snapshots
   */
  async getAircraftHistory(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = req.params.id as string;
      const historyReport = await aircraftService.getAircraftHistory(id);

      res.status(200).json({
        success: true,
        data: historyReport,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * POST /api/aircraft - Create new aircraft record
   */
  async createAircraft(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body as CreateAircraftInput;
      const created = await aircraftService.createAircraft(body);

      res.status(201).json({
        success: true,
        message: 'Aircraft record created successfully with computed TVR index',
        data: created,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * PUT /api/aircraft/:id - Update existing aircraft record
   */
  async updateAircraft(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = req.params.id as string;
      const body = req.body as UpdateAircraftInput;
      const updated = await aircraftService.updateAircraft(id, body);

      res.status(200).json({
        success: true,
        message: 'Aircraft record updated successfully with recomputed TVR index',
        data: updated,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * DELETE /api/aircraft/:id - Delete aircraft record
   */
  async deleteAircraft(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = req.params.id as string;
      const deleted = await aircraftService.deleteAircraft(id);

      res.status(200).json({
        success: true,
        message: `Aircraft '${deleted.name}' decommissioned and removed from active vault`,
        data: deleted,
      });
    } catch (error) {
      next(error);
    }
  }
}

export const aircraftController = new AircraftController();
