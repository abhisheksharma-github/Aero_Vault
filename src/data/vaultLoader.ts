import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { z } from 'zod';
import { CanonicalAircraft } from '../types/aircraft.types.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function findVaultRoot(): string {
  const candidateDirs = [
    path.resolve(__dirname, './vault'),
    path.resolve(__dirname, '../../../src/data/vault'),
    path.resolve(process.cwd(), 'src/data/vault'),
    path.resolve(process.cwd(), 'packages/vault/data'),
    path.resolve(process.cwd(), 'dist/src/data/vault')
  ];

  for (const dir of candidateDirs) {
    if (fs.existsSync(dir) && (fs.existsSync(path.join(dir, 'countries')) || fs.existsSync(path.join(dir, 'aircraft')))) {
      return dir;
    }
  }
  return path.resolve(process.cwd(), 'src/data/vault');
}

const vaultRoot = findVaultRoot();


// Schema definitions
const SourceRecordSchema = z.object({
  name: z.string(),
  url: z.string().url().or(z.string()),
  retrievedAt: z.string().optional(),
});

const CountrySchema = z.object({
  id: z.string(),
  name: z.string(),
  countryCode: z.string(),
  isoCode: z.string(),
  flag: z.string(),
  region: z.string(),
  description: z.string(),
  militaryBranches: z.array(
    z.object({
      name: z.string(),
      type: z.string(),
      officialName: z.string().optional(),
      description: z.string().optional(),
    })
  ),
  totalAircraftEstimate: z.number().nonnegative(),
  modernizationIndex: z.number().min(0).max(100),
  defenseBudgetUsd: z.number().nonnegative(),
  sources: z.array(SourceRecordSchema).optional(),
});

const ForceProfileSchema = z.object({
  country: z.string(),
  countryCode: z.string(),
  flagEmoji: z.string(),
  region: z.string(),
  atlasIndex: z.number().min(0).max(100),
  airsIndex: z.number().min(0).max(100),
  seasIndex: z.number().min(0).max(100),
  armsIndex: z.number().min(0).max(100),
  activeTroops: z.number().nonnegative(),
  reserveTroops: z.number().nonnegative(),
  paramilitary: z.number().nonnegative(),
  defenseBudgetUsd: z.number().nonnegative(),
  totalAircraft: z.number().nonnegative(),
  totalWarships: z.number().nonnegative(),
  totalVehicles: z.number().nonnegative(),
  nuclearWarheads: z.number().nonnegative(),
  aircraftCarriers: z.number().nonnegative(),
  submarines: z.number().nonnegative(),
  sources: z.array(SourceRecordSchema).optional(),
});

const NationIntelligenceSchema = z.object({
  countryName: z.string(),
  countryCode: z.string(),
  flag: z.string(),
  airForceName: z.string(),
  armyAviationName: z.string(),
  navalAviationName: z.string(),
  globalRanking: z.number().positive(),
  tvrTotal: z.number().min(0).max(120),
  combatPowerScore: z.number().min(0).max(120),
  strikeScore: z.number().min(0).max(120),
  mobilityScore: z.number().min(0).max(120),
  aewcScore: z.number().min(0).max(120),
  tankerScore: z.number().min(0).max(120),
  uavScore: z.number().min(0).max(120),
  navalAirScore: z.number().min(0).max(120),
  armyAirScore: z.number().min(0).max(120),
  modernizationIndex: z.number().min(0).max(120),
  logisticsScore: z.number().min(0).max(120),
  forceReadiness: z.number().min(0).max(120),
  totalActiveUnits: z.number().nonnegative(),
  airForceUnits: z.number().nonnegative(),
  armyAviationUnits: z.number().nonnegative(),
  navalAviationUnits: z.number().nonnegative(),
  marineUnits: z.number().nonnegative().optional(),
  totalFighters: z.number().nonnegative(),
  totalBombers: z.number().nonnegative(),
  totalTransports: z.number().nonnegative(),
  totalHelicopters: z.number().nonnegative(),
  totalUAVs: z.number().nonnegative(),
  totalAEWC: z.number().nonnegative(),
  totalTankers: z.number().nonnegative(),
  totalTrainers: z.number().nonnegative(),
  gen5Count: z.number().nonnegative(),
  gen45Count: z.number().nonnegative(),
  gen4Count: z.number().nonnegative(),
  legacyCount: z.number().nonnegative(),
  primaryStrengths: z.array(z.string()),
  primaryLimitations: z.array(z.string()),
  sources: z.array(SourceRecordSchema).optional(),
});

const NavalVesselSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  shipClass: z.string(),
  vesselType: z.string(),
  country: z.string(),
  countryCode: z.string().optional(),
  militaryBranch: z.string(),
  status: z.string(),
  displacementTons: z.number().positive(),
  maxSpeedKnots: z.number().positive(),
  commissionedYear: z.number().positive(),
  crewComplement: z.number().positive(),
  activeCount: z.number().positive(),
  originCountry: z.string(),
  pennantNumber: z.string().optional(),
  radarType: z.string(),
  hasAesa: z.boolean(),
  tvrScore: z.number().min(0).max(100),
  description: z.string(),
  imageUrl: z.string(),
  sources: z.array(SourceRecordSchema).optional(),
});

const GroundVehicleSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  category: z.string(),
  country: z.string(),
  countryCode: z.string().optional(),
  militaryBranch: z.string(),
  status: z.string(),
  activeCount: z.number().positive(),
  reserveCount: z.number().nonnegative().optional(),
  generation: z.string(),
  mainArmament: z.string(),
  enginePowerHp: z.number().positive(),
  topSpeedKmh: z.number().positive(),
  weightTons: z.number().positive(),
  tvrScore: z.number().min(0).max(100),
  description: z.string(),
  imageUrl: z.string(),
  sources: z.array(SourceRecordSchema).optional(),
});

const WeaponSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.string(),
  manufacturer: z.string().optional().nullable(),
  originCountry: z.string().optional().nullable(),
  guidance: z.string().optional().nullable(),
  maxRangeKm: z.number().positive().optional().nullable(),
  speedMach: z.number().positive().optional().nullable(),
  warheadKg: z.number().positive().optional().nullable(),
  description: z.string().optional().nullable(),
  sources: z.array(SourceRecordSchema).optional(),
});

const SitrepSchema = z.object({
  id: z.string().optional(),
  eventType: z.string(),
  domain: z.string(),
  country: z.string(),
  countryCode: z.string(),
  countryFlag: z.string(),
  entityName: z.string(),
  location: z.string(),
  summary: z.string(),
  sourceUrl: z.string(),
  confidence: z.string(),
  eventDate: z.string().or(z.date()),
});

function loadAndValidate<T>(dirName: string, schema: z.ZodType<T>): T[] {
  const targetDir = path.join(vaultRoot, dirName);
  if (!fs.existsSync(targetDir)) {
    throw new Error(`Vault directory missing: ${targetDir}`);
  }

  const files = fs.readdirSync(targetDir).filter((f) => f.endsWith('.json'));
  const results: T[] = [];

  for (const file of files) {
    const fullPath = path.join(targetDir, file);
    try {
      const raw = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
      const parsed = schema.parse(raw);
      results.push(parsed);
    } catch (err: any) {
      throw new Error(`Vault validation failed in file '${dirName}/${file}': ${err.message || err}`);
    }
  }

  return results;
}

const ManufacturerSchema = z.object({
  id: z.string(),
  name: z.string(),
  country: z.string(),
  officialWebsite: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  sources: z.array(SourceRecordSchema).optional(),
});

export const vaultCountries = loadAndValidate('countries', CountrySchema);
export const vaultForceProfiles = loadAndValidate('forceProfiles', ForceProfileSchema);
export const vaultIntelligence = loadAndValidate('intelligence', NationIntelligenceSchema);
export const vaultNaval = loadAndValidate('naval', NavalVesselSchema);
export const vaultLand = loadAndValidate('land', GroundVehicleSchema);
export const vaultWeapons = loadAndValidate('weapons', WeaponSchema);
export const vaultSitrep = loadAndValidate('sitrep', SitrepSchema);
export const vaultManufacturers = loadAndValidate('manufacturers', ManufacturerSchema);

// Vault aircraft loads files and exposes as CanonicalAircraft
export const vaultAircraft: CanonicalAircraft[] = (() => {
  const targetDir = path.join(vaultRoot, 'aircraft');
  if (!fs.existsSync(targetDir)) return [];
  const files = fs.readdirSync(targetDir).filter((f) => f.endsWith('.json'));
  return files.map((file) => {
    const fullPath = path.join(targetDir, file);
    return JSON.parse(fs.readFileSync(fullPath, 'utf8')) as CanonicalAircraft;
  });
})();

export function getVaultAircraftById(idOrSlug: string): CanonicalAircraft | undefined {
  if (!idOrSlug) return undefined;
  const target = idOrSlug.toLowerCase().trim();
  return vaultAircraft.find(
    (a) =>
      a.id.toLowerCase() === target ||
      (a.aliases && a.aliases.some((al) => al.toLowerCase() === target)) ||
      (a.name && a.name.toLowerCase() === target) ||
      (a.commonName && a.commonName.toLowerCase() === target) ||
      (a.officialDesignation && a.officialDesignation.toLowerCase() === target)
  );
}
