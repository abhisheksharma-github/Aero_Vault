import {
  AircraftStatus,
  MilitaryBranch,
  AircraftCategory,
  AircraftGeneration,
  Era,
  RadarType,
  StealthLevel,
  ConfidenceLevel,
} from '@prisma/client';
import { initialAircraftData } from './multiDomainData.js';
import { g20AircraftData } from './g20/g20Aircraft.js';
import { CanonicalAircraft } from '../types/aircraft.types.js';

// Category mapping helper
function mapCategory(cat: string): AircraftCategory {
  if (!cat) return AircraftCategory.MULTIROLE_FIGHTER;
  const upper = cat.toUpperCase().replace(/[\s-]/g, '_');
  if (upper.includes('ATTACK_HELICOPTER')) return AircraftCategory.ATTACK_HELICOPTER;
  if (upper.includes('HELICOPTER')) return AircraftCategory.HELICOPTER;
  if (upper.includes('AEW') || upper.includes('AWACS')) return AircraftCategory.AEWC;
  if (upper.includes('STRATEGIC_BOMBER') || upper.includes('BOMBER')) return AircraftCategory.BOMBER;
  if (upper.includes('MARITIME')) return AircraftCategory.MARITIME_PATROL;
  if (upper.includes('TRANSPORT')) return AircraftCategory.STRATEGIC_TRANSPORT;
  if (upper.includes('REFUEL') || upper.includes('TANKER')) return AircraftCategory.AERIAL_REFUELING;
  if (upper.includes('TRAINER')) return AircraftCategory.TRAINER;
  if (upper.includes('UAV') || upper.includes('UCAV') || upper.includes('DRONE')) return AircraftCategory.MALE_UAV;
  if (upper.includes('INTERCEPTOR')) return AircraftCategory.INTERCEPTOR;
  if (upper.includes('AIR_SUPERIORITY')) return AircraftCategory.AIR_SUPERIORITY;
  if (upper.includes('GROUND_ATTACK') || upper.includes('CLOSE_AIR_SUPPORT')) return AircraftCategory.GROUND_ATTACK;
  if (Object.values(AircraftCategory).includes(upper as AircraftCategory)) {
    return upper as AircraftCategory;
  }
  return AircraftCategory.MULTIROLE_FIGHTER;
}

// Generation mapping helper
function mapGeneration(gen: string): AircraftGeneration {
  if (!gen) return AircraftGeneration.GEN_4;
  const upper = gen.toUpperCase().replace(/\./g, '_');
  if (upper.includes('6')) return AircraftGeneration.GEN_6;
  if (upper.includes('5_PLUS')) return AircraftGeneration.GEN_5_PLUS;
  if (upper.includes('5')) return AircraftGeneration.GEN_5;
  if (upper.includes('4_5') || upper.includes('4_PLUS')) return AircraftGeneration.GEN_4_5;
  if (upper.includes('4')) return AircraftGeneration.GEN_4;
  if (upper.includes('3')) return AircraftGeneration.GEN_3;
  if (upper.includes('2')) return AircraftGeneration.GEN_2;
  if (upper.includes('1')) return AircraftGeneration.GEN_1;
  return AircraftGeneration.GEN_4;
}

// Branch mapping helper
function mapBranch(b: string): MilitaryBranch {
  if (!b) return MilitaryBranch.AIR_FORCE;
  const upper = b.toUpperCase().replace(/[\s-]/g, '_');
  if (upper.includes('NAV')) return MilitaryBranch.NAVAL_AVIATION;
  if (upper.includes('ARMY')) return MilitaryBranch.ARMY_AVIATION;
  if (upper.includes('MARINE')) return MilitaryBranch.MARINE_AVIATION;
  if (upper.includes('JOINT')) return MilitaryBranch.JOINT;
  return MilitaryBranch.AIR_FORCE;
}

// Era mapping helper
function mapEra(e: string): Era {
  if (!e) return Era.MODERN;
  const upper = e.toUpperCase();
  if (upper.includes('COLD')) return Era.COLD_WAR;
  if (upper.includes('NEXT') || upper.includes('FUTURE')) return Era.NEXT_GEN;
  if (upper.includes('VINTAGE') || upper.includes('WW')) return Era.VINTAGE;
  return Era.MODERN;
}

// Stealth mapping helper
function mapStealth(s: string): StealthLevel {
  if (!s) return StealthLevel.LOW;
  const upper = s.toUpperCase();
  if (upper.includes('VERY_HIGH')) return StealthLevel.VERY_HIGH;
  if (upper.includes('HIGH')) return StealthLevel.HIGH;
  if (upper.includes('MODERATE')) return StealthLevel.MODERATE;
  if (upper.includes('REDUCED')) return StealthLevel.REDUCED;
  if (upper.includes('VERY_LOW')) return StealthLevel.VERY_LOW;
  return StealthLevel.LOW;
}

// Radar mapping helper
function mapRadarType(r: string, hasAesa: boolean): RadarType {
  if (hasAesa) return RadarType.AESA;
  if (!r) return RadarType.MECHANICAL_PULSE_DOPPLER;
  const upper = r.toUpperCase();
  if (upper.includes('MULTI_BAND') || upper.includes('GALLIUM')) return RadarType.MULTI_BAND_AESA;
  if (upper.includes('AESA')) return RadarType.AESA;
  if (upper.includes('PESA')) return RadarType.PESA;
  if (upper.includes('NONE')) return RadarType.NONE;
  return RadarType.MECHANICAL_PULSE_DOPPLER;
}

export function fromMultiDomain(raw: any): CanonicalAircraft {
  const category = mapCategory(raw.category);
  const generation = mapGeneration(raw.generation);
  const militaryBranch = mapBranch(raw.militaryBranch);
  const era = mapEra(raw.era);
  const stealthLevel = mapStealth(raw.stealthLevel);
  const radarType = mapRadarType(raw.radarType, Boolean(raw.hasAesa));

  return {
    id: raw.id,
    aliases: [raw.id],
    name: raw.name || raw.commonName,
    commonName: raw.commonName || raw.name,
    officialDesignation: raw.officialDesignation || raw.variant || raw.name,
    natoReportingName: raw.natoReportingName || null,
    family: raw.family || null,
    variant: raw.variant || null,
    block: raw.block || null,
    manufacturer: raw.manufacturer,
    manufacturerCountry: raw.manufacturerCountry || raw.originCountry,
    originCountry: raw.originCountry,
    country: raw.country,
    affiliation: raw.affiliation,
    militaryBranch,
    serviceStatus: (raw.serviceStatus as AircraftStatus) || AircraftStatus.ACTIVE,
    category,
    generation,
    era,
    role: raw.role || 'Multirole Combat Aircraft',
    secondaryRoles: Array.isArray(raw.secondaryRoles) ? raw.secondaryRoles : [],

    firstFlightYear: raw.firstFlightYear || null,
    introductionYear: raw.introductionYear || null,
    retirementYear: raw.retirementYear || null,
    productionCount: raw.productionCount || null,
    fleetCount: raw.fleetCount ?? 1,
    activeCount: raw.activeCount ?? raw.fleetCount ?? 1,
    inactiveCount: raw.inactiveCount ?? 0,
    retiredCount: raw.retiredCount ?? 0,

    engineManufacturer: raw.engineManufacturer || null,
    engineModel: raw.engineModel || 'Standard Turbofan',
    engineCount: raw.engineCount ?? 1,
    engineType: raw.engineType || 'Turbofan',
    hasAfterburner: Boolean(raw.hasAfterburner),
    thrustDryKn: raw.thrustDryKn || null,
    thrustAfterburnerKn: raw.thrustAfterburnerKn || null,
    topSpeedMach: raw.topSpeedMach || null,
    topSpeedKmh: raw.topSpeedKmh || null,
    cruiseSpeedKmh: raw.cruiseSpeedKmh || null,
    serviceCeilingM: raw.serviceCeilingM || null,
    rateOfClimbMs: raw.rateOfClimbMs || null,
    gLimitPositive: raw.gLimitPositive || null,
    gLimitNegative: raw.gLimitNegative || null,
    enduranceHours: raw.enduranceHours || null,

    combatRangeKm: raw.combatRangeKm || null,
    combatRadiusKm: raw.combatRadiusKm || null,
    ferryRangeKm: raw.ferryRangeKm || null,
    emptyWeightKg: raw.emptyWeightKg || null,
    maxTakeoffWeightKg: raw.maxTakeoffWeightKg || null,
    payloadCapacityKg: raw.payloadCapacityKg || null,
    internalFuelKg: raw.internalFuelKg || null,
    lengthM: raw.lengthM || null,
    wingspanM: raw.wingspanM || null,
    heightM: raw.heightM || null,

    radarType,
    radarModel: raw.radarModel || null,
    radarRangeAirKm: raw.radarRangeAirKm || null,
    hasAesa: Boolean(raw.hasAesa),
    hasIrst: Boolean(raw.hasIrst),
    hasSensorFusion: Boolean(raw.hasSensorFusion),
    hasDatalink: Boolean(raw.hasDatalink),
    hasHmd: Boolean(raw.hasHmd),
    electronicWarfare: raw.electronicWarfare || null,
    ewScore: raw.ewScore ?? 60.0,

    stealthLevel,
    rcsEstimatedM2: raw.rcsEstimatedM2 || null,
    hasRwr: raw.hasRwr ?? true,
    hasEcm: raw.hasEcm ?? true,
    hasMaws: raw.hasMaws ?? false,

    maintenanceHoursPerFlightHour: raw.maintenanceHoursPerFlightHour || null,
    costPerFlightHourUsd: raw.costPerFlightHourUsd || null,
    reliabilityScore: raw.reliabilityScore ?? 75.0,

    confidenceLevel: (raw.confidenceLevel as ConfidenceLevel) || ConfidenceLevel.VERIFIED,
    confidenceScore: raw.confidenceScore ?? 85.0,
    sourceCount: raw.sourceCount ?? (raw.dataSources?.length || 1),
    lastVerified: raw.lastVerified || null,
    description: raw.description || '',
    imageUrl: raw.imageUrl || '',

    tvrScore: raw.tvrScore ?? 0,
    performanceScore: raw.performanceScore,
    avionicsScore: raw.avionicsScore,
    weaponsScore: raw.weaponsScore,
    survivabilityScore: raw.survivabilityScore,
    logisticsScore: raw.logisticsScore,

    weapons: raw.weapons || [],
    dataSources: raw.dataSources || [],
    milestones: raw.milestones || [],
    snapshots: raw.snapshots || [],
    images: raw.images || [],
    primaryCategory: raw.primaryCategory || raw.category,
    aircraftName: raw.name || raw.commonName,
    hardpoints: raw.hardpoints || null,
  };
}

export function fromG20(raw: any): CanonicalAircraft {
  const specs = raw.specifications || {};
  const dims = specs.dimensions || {};
  const weights = specs.weights || {};
  const prop = specs.propulsion || {};
  const perf = specs.performance || {};
  const av = raw.avionics || {};
  const cap = raw.capabilities || {};
  const fl = raw.fleet || {};

  const category = mapCategory(raw.primaryCategory);
  const generation = mapGeneration(raw.generation);
  const militaryBranch = mapBranch(raw.militaryBranch);
  const era = mapEra(raw.era);
  const stealthLevel = mapStealth(cap.stealthLevel);
  const radarType = mapRadarType(av.radar?.type, Boolean(av.radar?.hasAesa));

  const slug = raw.id.toLowerCase();

  return {
    id: raw.id,
    aliases: [raw.id, slug],
    name: raw.aircraftName || raw.officialDesignation,
    commonName: raw.family || raw.aircraftName,
    officialDesignation: raw.officialDesignation,
    natoReportingName: raw.natoReportingName || null,
    family: raw.family || null,
    variant: raw.variant || null,
    block: raw.block || null,
    manufacturer: raw.manufacturer,
    manufacturerCountry: raw.manufacturerCountry || raw.countryOfOrigin,
    originCountry: raw.countryOfOrigin || raw.country,
    country: raw.country,
    affiliation: raw.affiliation,
    militaryBranch,
    serviceStatus: (raw.serviceStatus as AircraftStatus) || AircraftStatus.ACTIVE,
    category,
    generation,
    era,
    role: raw.primaryCategory,
    secondaryRoles: Array.isArray(raw.secondaryRoles) ? raw.secondaryRoles : [],

    firstFlightYear: raw.firstFlightYear || null,
    introductionYear: raw.introductionYear || null,
    retirementYear: null,
    productionCount: null,
    fleetCount: fl.confirmedQuantity || fl.estimatedQuantity || 1,
    activeCount: fl.confirmedQuantity || fl.estimatedQuantity || 1,
    inactiveCount: 0,
    retiredCount: 0,

    engineManufacturer: prop.engineManufacturer || null,
    engineModel: prop.engineModel || 'Turbofan',
    engineCount: prop.engineCount || 1,
    engineType: prop.engineType || 'Turbofan',
    hasAfterburner: Boolean(prop.hasAfterburner),
    thrustDryKn: prop.thrustDryKn || null,
    thrustAfterburnerKn: prop.thrustAfterburnerKn || null,
    topSpeedMach: perf.maximumSpeedMach || null,
    topSpeedKmh: perf.maximumSpeedKmh || null,
    cruiseSpeedKmh: perf.cruiseSpeedKmh || null,
    serviceCeilingM: perf.serviceCeilingM || null,
    rateOfClimbMs: perf.rateOfClimbMs || null,
    gLimitPositive: perf.gLimitPositive || null,
    gLimitNegative: perf.gLimitNegative || null,
    enduranceHours: perf.enduranceHours || null,

    combatRangeKm: perf.combatRadiusKm || perf.ferryRangeKm || null,
    combatRadiusKm: perf.combatRadiusKm || null,
    ferryRangeKm: perf.ferryRangeKm || null,
    emptyWeightKg: weights.emptyWeightKg || null,
    maxTakeoffWeightKg: weights.maxTakeoffWeightKg || null,
    payloadCapacityKg: weights.payloadCapacityKg || null,
    internalFuelKg: weights.internalFuelKg || null,
    lengthM: dims.lengthM || null,
    wingspanM: dims.wingspanM || null,
    heightM: dims.heightM || null,

    radarType,
    radarModel: av.radar?.model || null,
    radarRangeAirKm: av.radar?.detectionRangeCombatKm || null,
    hasAesa: Boolean(av.radar?.hasAesa),
    hasIrst: Boolean(av.optics?.hasIrst),
    hasSensorFusion: Boolean(av.missionComputer?.hasSensorFusion),
    hasDatalink: Boolean(av.communications?.hasSecureDatalink),
    hasHmd: Boolean(av.displays?.hasHelmetMountedDisplay),
    electronicWarfare: av.electronicWarfare?.suiteName || null,
    ewScore: 75.0,

    stealthLevel,
    rcsEstimatedM2: cap.radarCrossSectionM2 || null,
    hasRwr: Boolean(av.electronicWarfare?.hasRwr),
    hasEcm: Boolean(av.electronicWarfare?.hasEcm),
    hasMaws: Boolean(av.electronicWarfare?.hasMaws),

    maintenanceHoursPerFlightHour: null,
    costPerFlightHourUsd: null,
    reliabilityScore: 80.0,

    confidenceLevel: fl.dataConfidence === 'HIGH' ? ConfidenceLevel.VERIFIED : ConfidenceLevel.ESTIMATED,
    confidenceScore: fl.dataConfidence === 'HIGH' ? 90.0 : 75.0,
    sourceCount: raw.sources?.length || 1,
    lastVerified: fl.lastVerified || null,
    description: raw.description || '',
    imageUrl: raw.images?.primaryImageUrl || '',

    tvrScore: 0,
    weapons: raw.weapons || [],
    sources: raw.sources || [],
    specifications: raw.specifications,
    avionics: raw.avionics,
    capabilities: raw.capabilities,
    fleet: raw.fleet,
    primaryCategory: raw.primaryCategory,
    aircraftName: raw.aircraftName,
  };
}

function buildMergedVault(): CanonicalAircraft[] {
  const map = new Map<string, CanonicalAircraft>();

  // Process multiDomainData first
  for (const raw of initialAircraftData as any[]) {
    const item = fromMultiDomain(raw);
    map.set(item.id.toLowerCase(), item);
  }

  // Process G20 dataset, matching and enriching or adding
  for (const raw of g20AircraftData as any[]) {
    const g20Item = fromG20(raw);
    const g20Id = g20Item.id.toLowerCase();
    const g20Name = (g20Item.name || '').toLowerCase();

    // Look for duplicate in multiDomainData by name or known keywords
    let matchKey: string | undefined;
    for (const [key, existing] of map.entries()) {
      const exName = (existing.name || '').toLowerCase();
      const exCommon = (existing.commonName || '').toLowerCase();
      const exDesig = (existing.officialDesignation || '').toLowerCase();

      if (
        key === g20Id ||
        exName.includes(g20Name) ||
        g20Name.includes(exName) ||
        (g20Item.variant && exName.includes(g20Item.variant.toLowerCase())) ||
        (existing.variant && g20Name.includes(existing.variant.toLowerCase())) ||
        (exCommon && g20Name.includes(exCommon)) ||
        (exDesig && g20Item.officialDesignation && exDesig === g20Item.officialDesignation.toLowerCase())
      ) {
        matchKey = key;
        break;
      }
    }

    if (matchKey) {
      const existing = map.get(matchKey)!;
      // Merge: keep richer record, add alias
      if (!existing.aliases.includes(g20Item.id)) {
        existing.aliases.push(g20Item.id);
      }
      if (!existing.aliases.includes(g20Id)) {
        existing.aliases.push(g20Id);
      }
      // Preserve rich specs from G20 if existing is sparse
      existing.specifications = g20Item.specifications || existing.specifications;
      existing.avionics = g20Item.avionics || existing.avionics;
      existing.capabilities = g20Item.capabilities || existing.capabilities;
      existing.fleet = g20Item.fleet || existing.fleet;
      existing.sources = g20Item.sources || existing.sources;
      if (!existing.imageUrl && g20Item.imageUrl) existing.imageUrl = g20Item.imageUrl;
      if (!existing.description && g20Item.description) existing.description = g20Item.description;
    } else {
      map.set(g20Id, g20Item);
    }
  }

  return Array.from(map.values());
}

export const aircraftVault: CanonicalAircraft[] = buildMergedVault();

export function findAircraftByIdOrAlias(id: string): CanonicalAircraft | undefined {
  if (!id) return undefined;
  const target = id.toLowerCase().trim();
  return aircraftVault.find((a) => {
    if (a.id.toLowerCase() === target) return true;
    if (a.aliases && a.aliases.some((alias) => alias.toLowerCase() === target)) return true;
    if (a.name && a.name.toLowerCase() === target) return true;
    if (a.commonName && a.commonName.toLowerCase() === target) return true;
    if (a.officialDesignation && a.officialDesignation.toLowerCase() === target) return true;
    return false;
  });
}

export function searchAircraftInVault(query: string): CanonicalAircraft[] {
  if (!query) return aircraftVault;
  const q = query.toLowerCase().trim();
  return aircraftVault.filter((a) => {
    return (
      (a.name && a.name.toLowerCase().includes(q)) ||
      (a.commonName && a.commonName.toLowerCase().includes(q)) ||
      (a.officialDesignation && a.officialDesignation.toLowerCase().includes(q)) ||
      (a.variant && a.variant.toLowerCase().includes(q)) ||
      (a.family && a.family.toLowerCase().includes(q)) ||
      (a.manufacturer && a.manufacturer.toLowerCase().includes(q)) ||
      (a.country && a.country.toLowerCase().includes(q)) ||
      (a.category && a.category.toLowerCase().includes(q)) ||
      (a.primaryCategory && a.primaryCategory.toLowerCase().includes(q)) ||
      (a.id && a.id.toLowerCase().includes(q)) ||
      (a.aliases && a.aliases.some((al) => al.toLowerCase().includes(q))) ||
      (a.natoReportingName && a.natoReportingName.toLowerCase().includes(q))
    );
  });
}
