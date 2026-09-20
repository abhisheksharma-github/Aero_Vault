import { Prisma } from '@prisma/client';
import { prisma } from '../db.js';
import { IAircraftRepository, AircraftListResult } from './aircraft.repository.js';
import { CanonicalAircraft } from '../types/aircraft.types.js';
import {
  AircraftQueryParams,
  CreateAircraftInput,
  UpdateAircraftInput,
} from '../schemas/aircraft.schema.js';
import { tvrEngine } from '../services/tvr.service.js';
import { AppError } from '../middleware/error.middleware.js';

export class PrismaAircraftRepository implements IAircraftRepository {
  getDataSourceType(): 'postgres' | 'vault' {
    return 'postgres';
  }

  async list(params: AircraftQueryParams): Promise<AircraftListResult> {
    const {
      country,
      affiliation,
      militaryBranch,
      serviceStatus,
      category,
      generation,
      era,
      stealthLevel,
      search,
      minTvr,
      maxTvr,
      sortBy = 'tvrScore',
      sortOrder = 'desc',
      page = 1,
      limit = 24,
    } = params;

    const where: Prisma.AircraftWhereInput = {};

    if (country) {
      where.country = { contains: country, mode: 'insensitive' };
    }
    if (affiliation) {
      where.affiliation = { contains: affiliation, mode: 'insensitive' };
    }
    if (militaryBranch) {
      where.militaryBranch = militaryBranch as any;
    }
    if (serviceStatus) {
      where.serviceStatus = serviceStatus as any;
    }
    if (category) {
      where.category = category as any;
    }
    if (generation) {
      where.generation = generation as any;
    }
    if (era) {
      where.era = era as any;
    }
    if (stealthLevel) {
      where.stealthLevel = stealthLevel as any;
    }
    if (minTvr !== undefined || maxTvr !== undefined) {
      where.tvrScore = {};
      if (minTvr !== undefined) where.tvrScore.gte = minTvr;
      if (maxTvr !== undefined) where.tvrScore.lte = maxTvr;
    }
    if (search) {
      const searchTrimmed = search.trim();
      where.OR = [
        { name: { contains: searchTrimmed, mode: 'insensitive' } },
        { manufacturer: { contains: searchTrimmed, mode: 'insensitive' } },
        { country: { contains: searchTrimmed, mode: 'insensitive' } },
        { role: { contains: searchTrimmed, mode: 'insensitive' } },
        { originCountry: { contains: searchTrimmed, mode: 'insensitive' } },
        { engineModel: { contains: searchTrimmed, mode: 'insensitive' } },
        { description: { contains: searchTrimmed, mode: 'insensitive' } },
      ];
    }

    const skip = (page - 1) * limit;

    const [total, items] = await Promise.all([
      prisma.aircraft.count({ where }),
      prisma.aircraft.findMany({
        where,
        orderBy: { [sortBy]: sortOrder },
        skip,
        take: limit,
        include: {
          weapons: {
            include: {
              weapon: true,
            },
          },
          dataSources: {
            include: {
              source: true,
            },
          },
          milestones: {
            orderBy: {
              year: 'asc',
            },
          },
        },
      }),
    ]);

    const totalPages = Math.ceil(total / limit) || 1;

    const mappedItems: CanonicalAircraft[] = items.map((ac: any) => ({
      ...ac,
      aliases: [ac.name.toLowerCase(), ac.id.toLowerCase()],
    }));

    return {
      items: mappedItems,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
      appliedFilters: {
        country: country || null,
        affiliation: affiliation || null,
        militaryBranch: militaryBranch || null,
        serviceStatus: serviceStatus || null,
        category: category || null,
        generation: generation || null,
        era: era || null,
        stealthLevel: stealthLevel || null,
        search: search || null,
        minTvr: minTvr || null,
        maxTvr: maxTvr || null,
      },
    };
  }

  async getById(idOrSlug: string): Promise<CanonicalAircraft | null> {
    const cleanId = decodeURIComponent(idOrSlug).trim();
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(cleanId);

    const item = isUuid
      ? await prisma.aircraft.findUnique({
        where: { id: cleanId },
        include: {
          weapons: {
            include: {
              weapon: true,
            },
          },
          dataSources: {
            include: {
              source: true,
            },
          },
          milestones: {
            orderBy: {
              year: 'asc',
            },
          },
        },
      })
      : await prisma.aircraft.findFirst({
        where: {
          OR: [
            { id: { equals: cleanId, mode: 'insensitive' } },
            { name: { equals: cleanId, mode: 'insensitive' } },
            { commonName: { equals: cleanId, mode: 'insensitive' } },
          ],
        },
        include: {
          weapons: {
            include: {
              weapon: true,
            },
          },
          dataSources: {
            include: {
              source: true,
            },
          },
          milestones: {
            orderBy: {
              year: 'asc',
            },
          },
        },
      });

    if (!item) return null;
    return {
      ...item,
      aliases: [item.name.toLowerCase(), item.id.toLowerCase()],
    } as CanonicalAircraft;
  }

  async search(term: string, limit = 10): Promise<CanonicalAircraft[]> {
    const q = term.trim();
    const items = await prisma.aircraft.findMany({
      where: {
        OR: [
          { name: { contains: q, mode: 'insensitive' } },
          { commonName: { contains: q, mode: 'insensitive' } },
          { country: { contains: q, mode: 'insensitive' } },
        ],
      },
      take: limit,
    });

    return items.map((ac: any) => ({
      ...ac,
      aliases: [ac.name.toLowerCase(), ac.id.toLowerCase()],
    }));
  }

  async create(data: CreateAircraftInput): Promise<CanonicalAircraft> {
    const existing = await prisma.aircraft.findUnique({
      where: { name: data.name },
    });

    if (existing) {
      throw new AppError(`Aircraft '${data.name}' already exists in registry`, 409, 'AIRCRAFT_ALREADY_EXISTS');
    }

    const tvr = tvrEngine.calculate(data as any);

    const created = await prisma.aircraft.create({
      data: {
        ...data,
        tvrScore: tvr.overall,
        performanceScore: tvr.dimensions.kinetics,
        avionicsScore: tvr.dimensions.avionics,
        weaponsScore: tvr.dimensions.weapons,
        survivabilityScore: tvr.dimensions.survivability,
        logisticsScore: tvr.dimensions.logistics,
      } as any,
      include: {
        weapons: {
          include: {
            weapon: true,
          },
        },
        dataSources: {
          include: {
            source: true,
          },
        },
        milestones: true,
      },
    });

    return {
      ...created,
      aliases: [created.name.toLowerCase(), created.id.toLowerCase()],
    } as CanonicalAircraft;
  }

  async update(id: string, data: UpdateAircraftInput): Promise<CanonicalAircraft | null> {
    const existing = await prisma.aircraft.findUnique({
      where: { id },
    });

    if (!existing) return null;

    if (data.name && data.name !== existing.name) {
      const nameTaken = await prisma.aircraft.findUnique({
        where: { name: data.name },
      });
      if (nameTaken) {
        throw new AppError(`Aircraft with name '${data.name}' already exists`, 409, 'AIRCRAFT_ALREADY_EXISTS');
      }
    }

    const merged = { ...existing, ...data };
    const tvr = tvrEngine.calculate(merged as any);

    const updated = await prisma.aircraft.update({
      where: { id },
      data: {
        ...data,
        tvrScore: tvr.overall,
        performanceScore: tvr.dimensions.kinetics,
        avionicsScore: tvr.dimensions.avionics,
        weaponsScore: tvr.dimensions.weapons,
        survivabilityScore: tvr.dimensions.survivability,
        logisticsScore: tvr.dimensions.logistics,
      } as any,
      include: {
        weapons: {
          include: {
            weapon: true,
          },
        },
        dataSources: {
          include: {
            source: true,
          },
        },
        milestones: true,
      },
    });

    return {
      ...updated,
      aliases: [updated.name.toLowerCase(), updated.id.toLowerCase()],
    } as CanonicalAircraft;
  }

  async delete(id: string): Promise<boolean> {
    const existing = await prisma.aircraft.findUnique({
      where: { id },
    });
    if (!existing) return false;

    await prisma.aircraft.delete({
      where: { id },
    });
    return true;
  }
}
