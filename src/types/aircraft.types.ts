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

export interface CanonicalAircraft {
  id: string;
  aliases: string[];
  name: string;
  commonName?: string | null;
  officialDesignation?: string | null;
  natoReportingName?: string | null;
  family?: string | null;
  variant?: string | null;
  block?: string | null;
  manufacturer: string;
  manufacturerCountry?: string | null;
  originCountry: string;
  country: string;
  affiliation: string;
  militaryBranch: MilitaryBranch;
  serviceStatus: AircraftStatus;
  category: AircraftCategory;
  generation: AircraftGeneration;
  era: Era;
  role: string;
  secondaryRoles: string[];

  // Production & Lifecycle
  firstFlightYear?: number | null;
  introductionYear?: number | null;
  retirementYear?: number | null;
  productionCount?: number | null;
  fleetCount?: number | null;
  activeCount?: number | null;
  inactiveCount?: number | null;
  retiredCount?: number | null;

  // Propulsion & Flight Dynamics
  engineManufacturer?: string | null;
  engineModel: string;
  engineCount: number;
  engineType?: string | null;
  hasAfterburner: boolean;
  thrustDryKn?: number | null;
  thrustAfterburnerKn?: number | null;
  topSpeedMach?: number | null;
  topSpeedKmh?: number | null;
  cruiseSpeedKmh?: number | null;
  serviceCeilingM?: number | null;
  rateOfClimbMs?: number | null;
  gLimitPositive?: number | null;
  gLimitNegative?: number | null;
  enduranceHours?: number | null;

  // Range, Weights & Dimensions
  combatRangeKm?: number | null;
  combatRadiusKm?: number | null;
  ferryRangeKm?: number | null;
  emptyWeightKg?: number | null;
  maxTakeoffWeightKg?: number | null;
  payloadCapacityKg?: number | null;
  internalFuelKg?: number | null;
  lengthM?: number | null;
  wingspanM?: number | null;
  heightM?: number | null;

  // Sensors, Avionics & Electronic Warfare
  radarType: RadarType;
  radarModel?: string | null;
  radarRangeAirKm?: number | null;
  hasAesa: boolean;
  hasIrst: boolean;
  hasSensorFusion: boolean;
  hasDatalink: boolean;
  hasHmd: boolean;
  electronicWarfare?: string | null;
  ewScore: number;

  // Survivability & Low Observability
  stealthLevel: StealthLevel;
  rcsEstimatedM2?: number | null;
  hasRwr: boolean;
  hasEcm: boolean;
  hasMaws: boolean;

  // Logistics & Maintenance
  maintenanceHoursPerFlightHour?: number | null;
  costPerFlightHourUsd?: number | null;
  reliabilityScore: number;

  // Intelligence Ratings & Data Provenance
  confidenceLevel: ConfidenceLevel;
  confidenceScore: number;
  sourceCount: number;
  lastVerified?: Date | string | null;
  description: string;
  imageUrl: string;

  // Computed TVR
  tvrScore: number;
  performanceScore?: number;
  avionicsScore?: number;
  weaponsScore?: number;
  survivabilityScore?: number;
  logisticsScore?: number;

  // Relations & convenience compatibility fields
  hardpoints?: number | null;
  primaryCategory?: string;
  aircraftName?: string;
  weapons?: any[];
  dataSources?: any[];
  milestones?: any[];
  snapshots?: any[];
  images?: any[];
  sources?: any[];
  specifications?: any;
  avionics?: any;
  capabilities?: any;
  fleet?: any;
}
