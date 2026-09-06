import { z } from 'zod';
import {
  AircraftStatus,
  AircraftCategory,
  AircraftGeneration,
  Era,
  StealthLevel,
  RadarType,
  ConfidenceLevel,
} from '@prisma/client';

export const AircraftStatusEnum = z.nativeEnum(AircraftStatus);
export const AircraftCategoryEnum = z.nativeEnum(AircraftCategory);
export const AircraftGenerationEnum = z.nativeEnum(AircraftGeneration);
export const EraEnum = z.nativeEnum(Era);
export const StealthLevelEnum = z.nativeEnum(StealthLevel);
export const RadarTypeEnum = z.nativeEnum(RadarType);
export const ConfidenceLevelEnum = z.nativeEnum(ConfidenceLevel);

// Query validation schema for listing aircraft
export const AircraftQuerySchema = z.object({
  country: z.string().trim().optional(),
  affiliation: z.string().trim().optional(),
  serviceStatus: AircraftStatusEnum.optional(),
  category: AircraftCategoryEnum.optional(),
  generation: AircraftGenerationEnum.optional(),
  era: EraEnum.optional(),
  stealthLevel: StealthLevelEnum.optional(),
  search: z.string().trim().optional(),
  minTvr: z.coerce.number().min(0).max(100).optional(),
  maxTvr: z.coerce.number().min(0).max(100).optional(),
  sortBy: z
    .enum([
      'name',
      'tvrScore',
      'country',
      'category',
      'generation',
      'serviceStatus',
      'era',
      'topSpeedMach',
      'combatRangeKm',
      'introductionYear',
      'fleetCount',
      'createdAt',
    ])
    .default('tvrScore'),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(100).default(24),
});

// Single aircraft param schema
export const AircraftIdParamSchema = z.object({
  id: z.string().uuid('Aircraft ID must be a valid UUID'),
});

// Create aircraft body schema
export const CreateAircraftSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  variant: z.string().max(50).optional().nullable(),
  manufacturer: z.string().min(2).max(100),
  originCountry: z.string().min(2).max(100),
  country: z.string().min(2).max(100),
  affiliation: z.string().min(2).max(100),
  serviceStatus: AircraftStatusEnum.default('ACTIVE'),
  category: AircraftCategoryEnum,
  generation: AircraftGenerationEnum.default('GEN_4'),
  era: EraEnum.default('MODERN'),
  role: z.string().min(2).max(150),
  secondaryRoles: z.array(z.string()).default([]),

  // Lifecycle
  firstFlightYear: z.number().int().min(1900).max(2050).nullable().optional(),
  introductionYear: z.number().int().min(1900).max(2050).nullable().optional(),
  retirementYear: z.number().int().min(1900).max(2100).nullable().optional(),
  productionCount: z.number().int().nonnegative().nullable().optional(),
  fleetCount: z.number().int().nonnegative().default(1),

  // Kinetics
  engineManufacturer: z.string().max(100).nullable().optional(),
  engineModel: z.string().min(2).max(200),
  engineCount: z.number().int().min(1).max(12).default(1),
  engineType: z.string().max(50).nullable().optional(),
  hasAfterburner: z.boolean().default(false),
  thrustDryKn: z.number().nonnegative().nullable().optional(),
  thrustAfterburnerKn: z.number().nonnegative().nullable().optional(),
  topSpeedMach: z.number().positive().max(5.0).nullable().optional(),
  topSpeedKmh: z.number().positive().nullable().optional(),
  cruiseSpeedKmh: z.number().positive().nullable().optional(),
  serviceCeilingM: z.number().positive().nullable().optional(),
  rateOfClimbMs: z.number().positive().nullable().optional(),
  gLimitPositive: z.number().nullable().optional(),
  gLimitNegative: z.number().nullable().optional(),

  // Range & Weight
  combatRangeKm: z.number().positive().nullable().optional(),
  ferryRangeKm: z.number().positive().nullable().optional(),
  emptyWeightKg: z.number().positive().nullable().optional(),
  maxTakeoffWeightKg: z.number().positive().nullable().optional(),
  payloadCapacityKg: z.number().nonnegative().nullable().optional(),
  internalFuelKg: z.number().positive().nullable().optional(),

  // Sensors & Avionics
  radarType: RadarTypeEnum.default('MECHANICAL_PULSE_DOPPLER'),
  radarModel: z.string().max(100).nullable().optional(),
  radarRangeAirKm: z.number().positive().nullable().optional(),
  hasAesa: z.boolean().default(false),
  hasIrst: z.boolean().default(false),
  hasSensorFusion: z.boolean().default(false),
  hasDatalink: z.boolean().default(false),
  electronicWarfare: z.string().nullable().optional(),
  ewScore: z.number().min(0).max(100).default(50.0),

  // Survivability
  stealthLevel: StealthLevelEnum.default('LOW'),
  rcsEstimatedM2: z.number().nonnegative().nullable().optional(),
  hasRwr: z.boolean().default(true),
  hasEcm: z.boolean().default(true),
  hasMaws: z.boolean().default(false),

  // Logistics
  maintenanceHoursPerFlightHour: z.number().nonnegative().nullable().optional(),
  costPerFlightHourUsd: z.number().nonnegative().nullable().optional(),
  reliabilityScore: z.number().min(0).max(100).default(75.0),

  description: z.string().min(10, 'Description must be at least 10 characters'),
  imageUrl: z.string().url('Image URL must be a valid URL'),
});

// Update aircraft body schema
export const UpdateAircraftSchema = CreateAircraftSchema.partial();

export type AircraftQueryParams = z.infer<typeof AircraftQuerySchema>;
export type CreateAircraftInput = z.infer<typeof CreateAircraftSchema>;
export type UpdateAircraftInput = z.infer<typeof UpdateAircraftSchema>;
