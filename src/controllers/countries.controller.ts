import { Request, Response, NextFunction } from 'express';
import { prisma } from '../db.js';
import {
  vaultCountries,
  vaultForceProfiles,
  vaultIntelligence,
  vaultNaval,
  vaultLand,
  vaultAircraft,
} from '../data/vaultLoader.js';
import { validatedParams, validatedQuery } from '../middleware/validate.middleware.js';
import { computeCountryCoverage } from '../types/coverage.types.js';

function getCoverageForCountry(countryName: string, countryCode?: string) {
  const cName = countryName.toLowerCase();
  const cCode = (countryCode || '').toUpperCase();

  const hasForceProfile = vaultForceProfiles.some(
    (fp) => fp.country.toLowerCase() === cName || fp.countryCode.toUpperCase() === cCode
  );
  const hasIntelligenceDossier = vaultIntelligence.some(
    (intel) => intel.countryName.toLowerCase() === cName || intel.countryCode.toUpperCase() === cCode
  );
  const aircraftCount = vaultAircraft.filter(
    (a) => a.country.toLowerCase() === cName || (a.originCountry && a.originCountry.toLowerCase() === cName)
  ).length;
  const warshipCount = vaultNaval.filter((n) => n.country.toLowerCase() === cName).length;
  const vehicleCount = vaultLand.filter((l) => l.country.toLowerCase() === cName).length;

  return computeCountryCoverage({
    hasForceProfile,
    hasIntelligenceDossier,
    aircraftCount,
    warshipCount,
    vehicleCount,
  });
}

export class CountriesController {
  /**
   * GET /api/countries - List all G20 sovereign defense nations with coverage metadata
   */
  getCountries = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      try {
        const countries = await prisma.country.findMany({
          include: {
            branches: true,
          },
          orderBy: { name: 'asc' },
        });

        if (countries && countries.length > 0) {
          const countriesWithCoverage = countries.map((c) => ({
            ...c,
            coverage: getCoverageForCountry(c.name, c.countryCode),
          }));

          res.status(200).json({
            success: true,
            count: countriesWithCoverage.length,
            data: countriesWithCoverage,
          });
          return;
        }
      } catch (dbErr) {
        // Fallback to local verified G20 dataset
      }

      const countriesWithCoverage = vaultCountries.map((c) => ({
        ...c,
        coverage: getCoverageForCountry(c.name, c.countryCode),
      }));

      res.status(200).json({
        success: true,
        count: countriesWithCoverage.length,
        data: countriesWithCoverage,
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /api/countries/:country - Get single country dossier with coverage metadata
   */
  getCountryByNameOrCode = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const params = validatedParams<{ country: string }>(req);
      const rawParam = params.country || req.params.country;
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
          const coverage = getCoverageForCountry(country.name, country.countryCode);
          res.status(200).json({
            success: true,
            data: {
              ...country,
              coverage,
            },
          });
          return;
        }
      } catch (dbErr) {
        // Fallback
      }

      const match = vaultCountries.find(
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

      const coverage = getCoverageForCountry(match.name, match.countryCode);

      res.status(200).json({
        success: true,
        data: {
          ...match,
          coverage,
        },
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /api/countries/:country/aircraft - Get all aircraft for country
   */
  getCountryAircraft = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const params = validatedParams<{ country: string }>(req);
      const rawParam = params.country || req.params.country;
      const identifier = (Array.isArray(rawParam) ? rawParam[0] : (rawParam || '')).toLowerCase();
      const query = validatedQuery<{
        branch?: string;
        category?: string;
        status?: string;
      }>(req);
      const { branch, category, status } = query;

      let filtered = vaultAircraft.filter((a) => {
        const c = (a.country || '').toLowerCase();
        const o = (a.originCountry || '').toLowerCase();
        const id = (a.id || '').toLowerCase();
        return (
          c === identifier ||
          c.includes(identifier) ||
          o === identifier ||
          id.startsWith(identifier) ||
          (a.aliases && a.aliases.some((al) => al.toLowerCase().startsWith(identifier)))
        );
      });

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
            a.category.toLowerCase() === category.toLowerCase() ||
            (a.primaryCategory && a.primaryCategory.toLowerCase() === category.toLowerCase()) ||
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
  };
}

export const countriesController = new CountriesController();
