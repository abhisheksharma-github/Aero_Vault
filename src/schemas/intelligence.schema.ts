import { z } from 'zod';

export type DomainType = 'AIR' | 'NAVY' | 'LAND' | 'STRATEGIC_DEFENSE';
export type NavalVesselType =
  | 'AIRCRAFT_CARRIER'
  | 'HELICOPTER_CARRIER'
  | 'GUIDED_MISSILE_DESTROYER'
  | 'FRIGATE'
  | 'CORVETTE'
  | 'BALLISTIC_MISSILE_SUBMARINE'
  | 'ATTACK_SUBMARINE'
  | 'AMPHIBIOUS_ASSAULT'
  | 'PATROL_VESSEL'
  | 'MINE_COUNTERMEASURE'
  | 'AUXILIARY_FLEET';
export type GroundVehicleCategory =
  | 'MAIN_BATTLE_TANK'
  | 'LIGHT_TANK'
  | 'IFV'
  | 'APC'
  | 'SELF_PROPELLED_ARTILLERY'
  | 'TOWED_ARTILLERY'
  | 'MLRS'
  | 'AIR_DEFENSE_SYSTEM'
  | 'ARMORED_ENGINEERING'
  | 'TACTICAL_4X4';

export const IntelligenceQuerySchema = z
  .object({
    sortBy: z
      .enum([
        'globalRanking',
        'tvrTotal',
        'modernizationIndex',
        'logisticsScore',
        'totalActiveUnits',
        'countryName',
        'combatPowerScore',
      ])
      .default('globalRanking'),
    sortOrder: z.enum(['asc', 'desc']).default('asc'),
    limit: z.coerce.number().int().min(1).max(100).default(50),
  })
  .strict();

export const IntelligenceCountryParamSchema = z
  .object({
    country: z.string().trim().min(2, 'Country name must be at least 2 characters'),
  })
  .strict();

export const CompareQuerySchema = z
  .object({
    aircraftA: z.string().trim().min(1, 'First aircraft ID or name is required'),
    aircraftB: z.string().trim().min(1, 'Second aircraft ID or name is required'),
  })
  .strict();

export const MissionCompareQuerySchema = z
  .object({
    aircraftA: z.string().trim().min(1, 'First aircraft ID or name is required'),
    aircraftB: z.string().trim().min(1, 'Second aircraft ID or name is required'),
    mission: z
      .enum([
        'AIR_SUPERIORITY',
        'BVR_COMBAT',
        'CLOSE_AIR_COMBAT',
        'DEEP_STRIKE',
        'MARITIME_STRIKE',
        'SEAD',
        'INTERCEPTION',
      ])
      .default('BVR_COMBAT'),
  })
  .strict();

// Multi-Domain Schemas
export const SitrepQuerySchema = z
  .object({
    domain: z.enum(['AIR', 'NAVY', 'LAND', 'STRATEGIC_DEFENSE']).optional(),
    eventType: z.string().optional(),
    country: z.string().optional(),
    limit: z.coerce.number().int().min(1).max(100).default(15),
    page: z.coerce.number().int().min(1).default(1),
  })
  .strict();

export const CountryRankingsQuerySchema = z
  .object({
    sortBy: z
      .enum([
        'atlasIndex',
        'airsIndex',
        'seasIndex',
        'armsIndex',
        'defenseBudgetUsd',
        'totalAircraft',
        'totalWarships',
        'totalVehicles',
        'activeTroops',
      ])
      .default('atlasIndex'),
    order: z.enum(['asc', 'desc']).default('desc'),
    limit: z.coerce.number().int().min(1).max(100).default(50),
  })
  .strict();

export const CountryInventoryParamsSchema = z
  .object({
    countryCode: z.string().trim().min(2, 'Country code must be at least 2 characters'),
  })
  .strict();

export const NavalVesselsQuerySchema = z
  .object({
    country: z.string().optional(),
    vesselType: z.string().optional(),
    search: z.string().optional(),
    page: z.coerce.number().int().min(1).default(1),
    limit: z.coerce.number().int().min(1).max(100).default(20),
  })
  .strict();

export const GroundVehiclesQuerySchema = z
  .object({
    country: z.string().optional(),
    category: z.string().optional(),
    search: z.string().optional(),
    page: z.coerce.number().int().min(1).default(1),
    limit: z.coerce.number().int().min(1).max(100).default(20),
  })
  .strict();

export type IntelligenceQueryParams = z.infer<typeof IntelligenceQuerySchema>;
export type IntelligenceCountryParams = z.infer<typeof IntelligenceCountryParamSchema>;
export type CompareQueryParams = z.infer<typeof CompareQuerySchema>;
export type MissionCompareQueryParams = z.infer<typeof MissionCompareQuerySchema>;
export type SitrepQueryParams = z.infer<typeof SitrepQuerySchema>;
export type CountryRankingsQueryParams = z.infer<typeof CountryRankingsQuerySchema>;
export type CountryInventoryParams = z.infer<typeof CountryInventoryParamsSchema>;
export type NavalVesselsQueryParams = z.infer<typeof NavalVesselsQuerySchema>;
export type GroundVehiclesQueryParams = z.infer<typeof GroundVehiclesQuerySchema>;
