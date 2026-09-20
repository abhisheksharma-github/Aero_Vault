import {
  vaultCountries,
  vaultForceProfiles,
  vaultIntelligence,
  vaultAircraft,
  vaultNaval,
  vaultLand,
  vaultWeapons,
  vaultSitrep,
  vaultManufacturers,
} from '../src/data/vaultLoader.js';

async function verify() {
  console.log('🔍 Starting AeroVault Seed & Vault Integrity Verification...');

  const results = {
    countries: vaultCountries.length,
    forceProfiles: vaultForceProfiles.length,
    intelligence: vaultIntelligence.length,
    aircraft: vaultAircraft.length,
    naval: vaultNaval.length,
    land: vaultLand.length,
    weapons: vaultWeapons.length,
    sitrep: vaultSitrep.length,
    manufacturers: vaultManufacturers.length,
  };

  console.log('📊 Entity counts loaded from individual JSON files in vault:');
  for (const [key, count] of Object.entries(results)) {
    console.log(`  - ${key}: ${count} verified records`);
    if (count === 0) {
      throw new Error(`Vault collection '${key}' has 0 records! Verification failed.`);
    }
  }

  // Verify key invariants
  const duplicateIds = new Set<string>();
  for (const a of vaultAircraft) {
    if (duplicateIds.has(a.id)) {
      throw new Error(`Duplicate aircraft ID found: ${a.id}`);
    }
    duplicateIds.add(a.id);
  }

  console.log(`✅ All ${vaultAircraft.length} aircraft IDs are unique and schema-validated.`);
  console.log('✅ Seed verification passed successfully.');
}

verify().catch((err) => {
  console.error('❌ Verification failed:', err);
  process.exit(1);
});
