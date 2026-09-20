import { Request, Response, NextFunction } from 'express';
import { prisma } from '../db.js';
import { initialWeaponsData } from '../data/multiDomainData.js';
import { validatedQuery } from '../middleware/validate.middleware.js';

export class WeaponsController {
  getWeapons = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query = validatedQuery<{ type?: string; search?: string }>(req);
      const type = query.type;
      const search = query.search;

      try {
        const where: any = {};
        if (type && type !== 'ALL') where.type = type;
        if (search) {
          where.OR = [
            { name: { contains: search, mode: 'insensitive' } },
            { manufacturer: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
          ];
        }

        const weapons = await prisma.weapon.findMany({
          where,
          orderBy: { name: 'asc' },
          include: {
            aircraft: {
              include: {
                aircraft: {
                  select: {
                    id: true,
                    name: true,
                    country: true,
                    category: true,
                  },
                },
              },
            },
          },
        });

        if (weapons && weapons.length > 0) {
          res.status(200).json({
            success: true,
            data: weapons,
          });
          return;
        }
      } catch {
        // Fallback
      }

      let weapons = [...(initialWeaponsData as any[])];
      if (type && type !== 'ALL') {
        weapons = weapons.filter((w) => w.type === type);
      }
      if (search) {
        const q = search.toLowerCase();
        weapons = weapons.filter(
          (w) =>
            w.name?.toLowerCase().includes(q) ||
            w.manufacturer?.toLowerCase().includes(q) ||
            w.description?.toLowerCase().includes(q)
        );
      }

      weapons.sort((a, b) => a.name.localeCompare(b.name));

      res.status(200).json({
        success: true,
        data: weapons,
      });
    } catch (error) {
      next(error);
    }
  };
}

export const weaponsController = new WeaponsController();
