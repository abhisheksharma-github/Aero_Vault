import { Request, Response, NextFunction } from 'express';
import { prisma } from '../db.js';
import { aerospaceManufacturers } from '../data/g20/manufacturers.js';

export class ManufacturersController {
  /**
   * GET /api/manufacturers - List all global defense aerospace manufacturers
   */
  async getManufacturers(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      try {
        const dbManufacturers = await prisma.manufacturer.findMany({
          orderBy: { name: 'asc' },
        });

        if (dbManufacturers && dbManufacturers.length > 0) {
          res.status(200).json({
            success: true,
            count: dbManufacturers.length,
            data: dbManufacturers,
          });
          return;
        }
      } catch (dbErr) {
        // Fallback to local verified manufacturer registry
      }

      res.status(200).json({
        success: true,
        count: aerospaceManufacturers.length,
        data: aerospaceManufacturers,
      });
    } catch (error) {
      next(error);
    }
  }
}

export const manufacturersController = new ManufacturersController();
