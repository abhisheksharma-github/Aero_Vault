import { Request, Response, NextFunction } from 'express';
import { prisma } from '../db.js';
import { g20CountriesData } from '../data/g20/g20Countries.js';
import { g20AircraftData } from '../data/g20/g20Aircraft.js';

export class CountriesController {
  /**
   * GET /api/countries - List all G20 sovereign defense nations
   */
  async getCountries(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      try {
        const countries = await prisma.country.findMany({
          include: {
            branches: true,
          },
          orderBy: { name: 'asc' },
        });

        if (countries && countries.length > 0) {
          res.status(200).json({
            success: true,
            count: countries.length,
            data: countries,
          });
          return;
        }
      } catch (dbErr) {
        // Fallback to local verified G20 dataset
      }

      res.status(200).json({
        success: true,
        count: g20CountriesData.length,
        data: g20CountriesData,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/countries/:country - Get single country dossier
   */
  async getCountryByNameOrCode(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const rawParam = req.params.country;
      const identifier = (Array.isArray(rawParam) ? rawParam[0] : (rawParam || '')).toLowerCase();

      try {
        const country = await prisma.country.findFirst({
          where: {
            OR: [
              { name: { equals: identifier, mode: 'insensitive' } },
              { countryCode: { equals: identifier, mode: 'insensitive' } },
              { isoCode: { equals: identifier, mode: 'insensitive' } },
            ],
          },
          include: {
            branches: true,
          },
        });

        if (country) {
          res.status(200).json({
            success: true,
            data: country,
          });
          return;
        }
      } catch (dbErr) {
        // Fallback
      }

      const match = g20CountriesData.find(
        (c) =>
          c.name.toLowerCase() === identifier ||
          c.countryCode.toLowerCase() === identifier ||
          c.isoCode.toLowerCase() === identifier ||
          c.id.toLowerCase() === identifier
      );

      if (!match) {
        res.status(404).json({
          success: false,
          error: `Country '${rawParam}' not found in G20 registry.`,
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: match,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/countries/:country/aircraft - Get all aircraft for country
   */
  async getCountryAircraft(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const rawParam = req.params.country;
      const identifier = (Array.isArray(rawParam) ? rawParam[0] : (rawParam || '')).toLowerCase();
      const { branch, category, status } = req.query as {
        branch?: string;
        category?: string;
        status?: string;
      };

      let filtered = g20AircraftData.filter(
        (a) =>
          a.country.toLowerCase() === identifier ||
          a.id.toLowerCase().startsWith(identifier)
      );

      if (branch) {
        filtered = filtered.filter(
          (a) =>
            a.militaryBranch.toLowerCase() === branch.toLowerCase() ||
            a.affiliation.toLowerCase().includes(branch.toLowerCase())
        );
      }

      if (category) {
        filtered = filtered.filter(
          (a) =>
            a.primaryCategory.toLowerCase() === category.toLowerCase() ||
            a.secondaryRoles.some((r) => r.toLowerCase().includes(category.toLowerCase()))
        );
      }

      if (status) {
        filtered = filtered.filter(
          (a) => a.serviceStatus.toLowerCase() === status.toLowerCase()
        );
      }

      res.status(200).json({
        success: true,
        country: rawParam,
        count: filtered.length,
        data: filtered,
      });
    } catch (error) {
      next(error);
    }
  }
}

export const countriesController = new CountriesController();
