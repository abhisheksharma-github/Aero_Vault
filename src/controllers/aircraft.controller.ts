import { Request, Response, NextFunction } from 'express';
import { AircraftCategory } from '@prisma/client';
import { aircraftService } from '../services/aircraft.service.js';
import {
  AircraftQueryParams,
  CreateAircraftInput,
  UpdateAircraftInput,
  AircraftIdParam,
} from '../schemas/aircraft.schema.js';
import {
  validatedQuery,
  validatedParams,
  validatedBody,
} from '../middleware/validate.middleware.js';
import { aircraftVault, searchAircraftInVault } from '../data/normalize.js';

export interface CategoryInfo {
  value: AircraftCategory;
  label: string;
  group: string;
}

const CATEGORY_LABELS: Record<string, { label: string; group: string }> = {
  FIGHTER: { label: 'Fighter', group: 'FIGHTER AND COMBAT' },
  INTERCEPTOR: { label: 'Interceptor', group: 'FIGHTER AND COMBAT' },
  MULTIROLE_FIGHTER: { label: 'Multirole Fighter', group: 'FIGHTER AND COMBAT' },
  AIR_SUPERIORITY: { label: 'Air Superiority', group: 'FIGHTER AND COMBAT' },
  GROUND_ATTACK: { label: 'Ground Attack', group: 'FIGHTER AND COMBAT' },
  STRIKE: { label: 'Strike Aircraft', group: 'FIGHTER AND COMBAT' },
  BOMBER: { label: 'Strategic Bomber', group: 'FIGHTER AND COMBAT' },
  LIGHT_ATTACK: { label: 'Light Attack', group: 'FIGHTER AND COMBAT' },

  AEWC: { label: 'AEW&C', group: 'INTELLIGENCE AND SURVEILLANCE' },
  AIRBORNE_EARLY_WARNING: { label: 'Airborne Early Warning', group: 'INTELLIGENCE AND SURVEILLANCE' },
  ELINT: { label: 'ELINT', group: 'INTELLIGENCE AND SURVEILLANCE' },
  SIGINT: { label: 'SIGINT', group: 'INTELLIGENCE AND SURVEILLANCE' },
  EW_AIRCRAFT: { label: 'Electronic Warfare', group: 'INTELLIGENCE AND SURVEILLANCE' },
  RECONNAISSANCE: { label: 'Reconnaissance', group: 'INTELLIGENCE AND SURVEILLANCE' },
  SURVEILLANCE: { label: 'Surveillance', group: 'INTELLIGENCE AND SURVEILLANCE' },
  MARITIME_PATROL: { label: 'Maritime Patrol', group: 'MARITIME' },

  STRATEGIC_TRANSPORT: { label: 'Strategic Transport', group: 'TRANSPORT' },
  TACTICAL_TRANSPORT: { label: 'Tactical Transport', group: 'TRANSPORT' },
  UTILITY_TRANSPORT: { label: 'Utility Transport', group: 'TRANSPORT' },
  VIP_TRANSPORT: { label: 'VIP Transport', group: 'TRANSPORT' },
  AERIAL_REFUELING: { label: 'Aerial Refueling Tanker', group: 'REFUELING' },
  TANKER: { label: 'Tanker', group: 'REFUELING' },
  TRANSPORT: { label: 'Transport', group: 'TRANSPORT' },

  TRAINER: { label: 'Trainer', group: 'TRAINING' },
  LEAD_IN_FIGHTER_TRAINER: { label: 'Lead-In Fighter Trainer', group: 'TRAINING' },

  HELICOPTER: { label: 'Helicopter', group: 'HELICOPTERS' },
  ATTACK_HELICOPTER: { label: 'Attack Helicopter', group: 'HELICOPTERS' },
  UTILITY_HELICOPTER: { label: 'Utility Helicopter', group: 'HELICOPTERS' },
  TRANSPORT_HELICOPTER: { label: 'Transport Helicopter', group: 'HELICOPTERS' },
  RECON_HELICOPTER: { label: 'Recon Helicopter', group: 'HELICOPTERS' },
  NAVAL_HELICOPTER: { label: 'Naval Helicopter', group: 'HELICOPTERS' },
  ANTI_SUBMARINE_HELICOPTER: { label: 'Anti-Submarine Helicopter', group: 'HELICOPTERS' },
  SEARCH_AND_RESCUE_HELICOPTER: { label: 'Search and Rescue Helicopter', group: 'HELICOPTERS' },

  UAV: { label: 'UAV', group: 'UNMANNED' },
  MALE_UAV: { label: 'MALE UAV', group: 'UNMANNED' },
  HALE_UAV: { label: 'HALE UAV', group: 'UNMANNED' },
  TACTICAL_UAV: { label: 'Tactical UAV', group: 'UNMANNED' },
  UCAV: { label: 'UCAV Combat Drone', group: 'UNMANNED' },
  LOITERING_MUNITION: { label: 'Loitering Munition', group: 'UNMANNED' },
  RECON_UAV: { label: 'Recon UAV', group: 'UNMANNED' },
  STRIKE_UAV: { label: 'Strike UAV', group: 'UNMANNED' },

  SPECIAL_MISSION: { label: 'Special Mission', group: 'DEVELOPMENT' },
  TARGET_DRONE: { label: 'Target Drone', group: 'DEVELOPMENT' },
  EXPERIMENTAL: { label: 'Experimental', group: 'DEVELOPMENT' },
  ATTACK: { label: 'Attack Aircraft', group: 'FIGHTER AND COMBAT' },
};

export const CANONICAL_AIRCRAFT_CATEGORIES: CategoryInfo[] = Object.values(AircraftCategory).map((cat) => ({
  value: cat,
  label: CATEGORY_LABELS[cat]?.label || cat,
  group: CATEGORY_LABELS[cat]?.group || 'OTHER',
}));

export class AircraftController {
  /**
   * GET /api/aircraft - List with filtering, pagination, and sorting
   */
  async getAircraft(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const query = validatedQuery<AircraftQueryParams>(req);
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
        count: CANONICAL_AIRCRAFT_CATEGORIES.length,
        data: CANONICAL_AIRCRAFT_CATEGORIES,
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
      const q = ((req.query.q as string) || '').toLowerCase().trim();
      const results = searchAircraftInVault(q);

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
   * GET /api/aircraft/:id - Single aircraft specs
   */
  async getAircraftById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const params = validatedParams<AircraftIdParam>(req);
      const aircraft = await aircraftService.getAircraftById(params.id);

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
      const params = validatedParams<AircraftIdParam>(req);
      const tvrReport = await aircraftService.getAircraftTVR(params.id);

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
      const params = validatedParams<AircraftIdParam>(req);
      const sourcesReport = await aircraftService.getAircraftSources(params.id);

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
      const params = validatedParams<AircraftIdParam>(req);
      const historyReport = await aircraftService.getAircraftHistory(params.id);

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
      const body = validatedBody<CreateAircraftInput>(req);
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
      const params = validatedParams<AircraftIdParam>(req);
      const body = validatedBody<UpdateAircraftInput>(req);
      const updated = await aircraftService.updateAircraft(params.id, body);

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
      const params = validatedParams<AircraftIdParam>(req);
      const deleted = await aircraftService.deleteAircraft(params.id);

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
