import { IAircraftRepository, AircraftListResult } from './aircraft.repository.js';
import { CanonicalAircraft } from '../types/aircraft.types.js';
import {
  AircraftQueryParams,
  CreateAircraftInput,
  UpdateAircraftInput,
} from '../schemas/aircraft.schema.js';
import { vaultAircraft, getVaultAircraftById } from '../data/vaultLoader.js';
import { tvrEngine } from '../services/tvr.service.js';
import { AppError } from '../middleware/error.middleware.js';

export class VaultAircraftRepository implements IAircraftRepository {
  private items: CanonicalAircraft[];

  constructor() {
    this.items = [...vaultAircraft];
  }

  getDataSourceType(): 'postgres' | 'vault' {
    return 'vault';
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

    let filtered = [...this.items];

    if (country) {
      filtered = filtered.filter((a) => a.country?.toLowerCase().includes(country.toLowerCase()));
    }
    if (affiliation) {
      filtered = filtered.filter((a) => a.affiliation?.toLowerCase().includes(affiliation.toLowerCase()));
    }
    if (militaryBranch) {
      filtered = filtered.filter((a) => a.militaryBranch === militaryBranch);
    }
    if (serviceStatus) {
      filtered = filtered.filter((a) => a.serviceStatus === serviceStatus);
    }
    if (category) {
      filtered = filtered.filter((a) => a.category === category);
    }
    if (generation) {
      filtered = filtered.filter((a) => a.generation === generation);
    }
    if (era) {
      filtered = filtered.filter((a) => a.era === era);
    }
    if (stealthLevel) {
      filtered = filtered.filter((a) => a.stealthLevel === stealthLevel);
    }
    if (minTvr !== undefined) {
      filtered = filtered.filter((a) => (a.tvrScore ?? 0) >= minTvr);
    }
    if (maxTvr !== undefined) {
      filtered = filtered.filter((a) => (a.tvrScore ?? 0) <= maxTvr);
    }
    if (search) {
      const q = search.trim().toLowerCase();
      filtered = filtered.filter(
        (a) =>
          (a.name && a.name.toLowerCase().includes(q)) ||
          (a.manufacturer && a.manufacturer.toLowerCase().includes(q)) ||
          (a.country && a.country.toLowerCase().includes(q)) ||
          (a.role && a.role.toLowerCase().includes(q)) ||
          (a.originCountry && a.originCountry.toLowerCase().includes(q)) ||
          (a.engineModel && a.engineModel.toLowerCase().includes(q)) ||
          (a.description && a.description.toLowerCase().includes(q)) ||
          (a.id && a.id.toLowerCase().includes(q)) ||
          (a.aliases && a.aliases.some((al) => al.toLowerCase().includes(q)))
      );
    }

    const sortKey = sortBy || 'tvrScore';
    const mult = sortOrder === 'asc' ? 1 : -1;
    filtered.sort((a: any, b: any) => {
      const valA = a[sortKey] ?? 0;
      const valB = b[sortKey] ?? 0;
      if (typeof valA === 'string') return valA.localeCompare(String(valB)) * mult;
      return (Number(valA) - Number(valB)) * mult;
    });

    const total = filtered.length;
    const skip = (page - 1) * limit;
    const paginatedItems = filtered.slice(skip, skip + limit);
    const totalPages = Math.ceil(total / limit) || 1;

    return {
      items: paginatedItems,
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
    const directMatch = getVaultAircraftById(idOrSlug);
    if (directMatch) return directMatch;

    const lower = decodeURIComponent(idOrSlug).toLowerCase().trim();
    const match = this.items.find(
      (a) =>
        a.id.toLowerCase() === lower ||
        a.name.toLowerCase() === lower ||
        (a.aliases && a.aliases.some((al) => al.toLowerCase() === lower))
    );
    return match || null;
  }

  async search(term: string, limit = 10): Promise<CanonicalAircraft[]> {
    const q = term.toLowerCase().trim();
    return this.items
      .filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.id.toLowerCase().includes(q) ||
          a.country.toLowerCase().includes(q) ||
          (a.aliases && a.aliases.some((al) => al.toLowerCase().includes(q)))
      )
      .slice(0, limit);
  }

  async create(data: CreateAircraftInput): Promise<CanonicalAircraft> {
    const existing = this.items.find((a) => a.name.toLowerCase() === data.name.toLowerCase());
    if (existing) {
      throw new AppError(`Aircraft '${data.name}' already exists in registry`, 409, 'AIRCRAFT_ALREADY_EXISTS');
    }

    const d = data as any;
    const tvr = tvrEngine.calculate(d);
    const newRecord: CanonicalAircraft = {
      id: data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      name: data.name,
      commonName: d.commonName || data.name,
      family: d.family || data.name,
      variant: data.variant || 'Base',
      block: d.block,
      manufacturer: data.manufacturer,
      originCountry: data.originCountry,
      country: data.country,
      affiliation: data.affiliation,
      militaryBranch: (d.militaryBranch || 'AIR_FORCE') as any,
      serviceStatus: (data.serviceStatus || 'ACTIVE') as any,
      category: data.category as any,
      generation: (data.generation || 'GEN_4') as any,
      era: (data.era || 'MODERN') as any,
      role: data.role,
      secondaryRoles: data.secondaryRoles || [],
      firstFlightYear: data.firstFlightYear,
      introductionYear: data.introductionYear,
      retirementYear: data.retirementYear,
      productionCount: data.productionCount,
      fleetCount: data.fleetCount || 1,
      activeCount: d.activeCount || 1,
      inactiveCount: d.inactiveCount || 0,
      retiredCount: d.retiredCount || 0,
      engineModel: data.engineModel,
      engineCount: data.engineCount || 1,
      engineType: data.engineType,
      hasAfterburner: data.hasAfterburner ?? false,
      thrustAfterburnerKn: data.thrustAfterburnerKn,
      thrustDryKn: data.thrustDryKn,
      topSpeedMach: data.topSpeedMach,
      topSpeedKmh: data.topSpeedKmh,
      serviceCeilingM: data.serviceCeilingM,
      rateOfClimbMs: data.rateOfClimbMs,
      gLimitPositive: data.gLimitPositive,
      combatRangeKm: data.combatRangeKm,
      ferryRangeKm: data.ferryRangeKm,
      emptyWeightKg: data.emptyWeightKg,
      maxTakeoffWeightKg: data.maxTakeoffWeightKg,
      payloadCapacityKg: data.payloadCapacityKg,
      radarType: (data.radarType || 'MECHANICAL_PULSE_DOPPLER') as any,
      radarModel: data.radarModel,
      radarRangeAirKm: data.radarRangeAirKm,
      hasAesa: data.hasAesa ?? false,
      hasIrst: data.hasIrst ?? false,
      hasSensorFusion: data.hasSensorFusion ?? false,
      hasDatalink: data.hasDatalink ?? false,
      hasHmd: d.hasHmd ?? false,
      stealthLevel: (data.stealthLevel || 'LOW') as any,
      rcsEstimatedM2: data.rcsEstimatedM2,
      hasRwr: data.hasRwr ?? true,
      hasEcm: data.hasEcm ?? true,
      hasMaws: data.hasMaws ?? false,
      ewScore: data.ewScore || 50.0,
      reliabilityScore: data.reliabilityScore || 75.0,
      maintenanceHoursPerFlightHour: data.maintenanceHoursPerFlightHour,
      costPerFlightHourUsd: data.costPerFlightHourUsd,
      tvrScore: tvr.overall,
      confidenceLevel: (d.confidenceLevel || 'VERIFIED') as any,
      confidenceScore: d.confidenceScore || 85.0,
      sourceCount: d.sourceCount || 1,
      description: data.description || '',
      imageUrl: data.imageUrl || '',
      weapons: [],
      dataSources: [],
      milestones: [],
      aliases: [data.name.toLowerCase()],
    };

    this.items.push(newRecord);
    return newRecord;
  }

  async update(id: string, data: UpdateAircraftInput): Promise<CanonicalAircraft | null> {
    const index = this.items.findIndex(
      (a) => a.id.toLowerCase() === id.toLowerCase() || (a.aliases && a.aliases.some((al) => al.toLowerCase() === id.toLowerCase()))
    );
    if (index === -1) return null;

    const existing = this.items[index];
    const merged = { ...existing, ...data };
    const tvr = tvrEngine.calculate(merged as any);

    const updated: CanonicalAircraft = {
      ...merged,
      tvrScore: tvr.overall,
    };

    this.items[index] = updated;
    return updated;
  }

  async delete(id: string): Promise<boolean> {
    const index = this.items.findIndex(
      (a) => a.id.toLowerCase() === id.toLowerCase() || (a.aliases && a.aliases.some((al) => al.toLowerCase() === id.toLowerCase()))
    );
    if (index === -1) return false;
    this.items.splice(index, 1);
    return true;
  }
}
