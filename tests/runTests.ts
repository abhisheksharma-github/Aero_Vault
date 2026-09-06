import { tvrEngine, ROLE_WEIGHT_PROFILES } from '../src/services/tvr.service.js';
import { comparisonService } from '../src/services/comparison.service.js';
import { osintService } from '../src/services/osint.service.js';
import { AircraftCategory, AircraftGeneration, RadarType, StealthLevel, AircraftStatus, Era, MilitaryBranch } from '@prisma/client';

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition: boolean, testName: string) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✅ PASS: ${testName}`);
  } else {
    failedTests++;
    console.error(`  ❌ FAIL: ${testName}`);
  }
}

console.log('\n🧪 ====================================================');
console.log('   AEROVAULT GLOBAL FLEET DEFENSE ENGINE TEST SUITE');
console.log('====================================================\n');

// 1. Fighter TVR Engine Tests
console.log('📊 1. Testing Fighter TVR Engine Calculations:');
const f22Input = {
  category: AircraftCategory.FIGHTER,
  generation: AircraftGeneration.GEN_5,
  topSpeedMach: 2.25,
  serviceCeilingM: 20000,
  rateOfClimbMs: 350,
  thrustAfterburnerKn: 312,
  emptyWeightKg: 19700,
  combatRangeKm: 1100,
  payloadCapacityKg: 9100,
  gLimitPositive: 9.5,
  radarType: RadarType.AESA,
  radarRangeAirKm: 240,
  hasAesa: true,
  hasIrst: false,
  hasSensorFusion: true,
  hasDatalink: true,
  ewScore: 98,
  stealthLevel: StealthLevel.VERY_HIGH,
  rcsEstimatedM2: 0.0001,
  hasRwr: true,
  hasEcm: true,
  hasMaws: true,
  maintenanceHoursPerFlightHour: 30,
  reliabilityScore: 74,
  firstFlightYear: 1997,
  introductionYear: 2005,
};

const f22Tvr = tvrEngine.calculate(f22Input);
console.log('  -> F-22 Calculated Score:', f22Tvr.overall, f22Tvr.dimensions);
assert(f22Tvr.overall >= 88.0, 'F-22 Raptor achieves S/S+ grade TVR (>= 88.0)');
assert(f22Tvr.dimensions.survivability >= 90, 'F-22 Raptor stealth survivability score >= 90.0');
assert(f22Tvr.dimensions.avionics >= 90, 'F-22 Raptor AESA sensor fusion score >= 90.0');
assert(f22Tvr.strengths.length > 0, 'Deterministic strengths are generated');
assert(f22Tvr.limitations.length > 0, 'Operational limitations are generated');

// 2. Attack Helicopter (Rotary Wing) TVR Profile Tests
console.log('\n🚁 2. Testing Attack Helicopter Rotary Role Profile:');
const apacheInput = {
  category: AircraftCategory.ATTACK_HELICOPTER,
  generation: AircraftGeneration.GEN_4_5,
  topSpeedKmh: 293,
  serviceCeilingM: 6400,
  rateOfClimbMs: 14.2,
  combatRangeKm: 480,
  payloadCapacityKg: 2000,
  radarType: RadarType.AESA,
  hasAesa: true,
  hasSensorFusion: true,
  hasDatalink: true,
  hasHmd: true,
  ewScore: 90,
  stealthLevel: StealthLevel.LOW,
  hasRwr: true,
  hasEcm: true,
  hasMaws: true,
};

const apacheTvr = tvrEngine.calculate(apacheInput);
console.log('  -> Apache Helicopter Score:', apacheTvr.overall, apacheTvr.roleProfile);
assert(apacheTvr.roleProfile === 'HELICOPTER', 'Role profile correctly mapped to HELICOPTER');
assert(apacheTvr.overall >= 74.0, 'AH-64E Apache achieves capable rotary TVR (>= 74.0)');
assert(apacheTvr.appliedWeights.weapons === 0.26, 'Helicopter weapon weight adjusted to 26%');

// 3. MALE UAV Role Profile Tests
console.log('\n📡 3. Testing MALE UAV Unmanned Role Profile:');
const reaperInput = {
  category: AircraftCategory.MALE_UAV,
  generation: AircraftGeneration.GEN_4_5,
  topSpeedKmh: 482,
  serviceCeilingM: 15400,
  combatRangeKm: 1850,
  payloadCapacityKg: 1700,
  radarType: RadarType.AESA,
  hasAesa: true,
  hasSensorFusion: true,
  hasDatalink: true,
  ewScore: 75,
  stealthLevel: StealthLevel.LOW,
};

const reaperTvr = tvrEngine.calculate(reaperInput);
assert(reaperTvr.roleProfile === 'UAV', 'Role profile correctly mapped to UAV');
assert(reaperTvr.appliedWeights.avionics === 0.30, 'UAV sensor weight adjusted to 30%');

// 4. OSINT Multi-Source Consensus Tests
console.log('\n🔍 4. Testing OSINT Multi-Source Consensus & Confidence:');
const verification = osintService.verifyDataPoint('topSpeedMach', [
  { publisher: "Jane's Defense", value: 2.25, tier: 'TIER_2_DEFENSE_JOURNAL' },
  { publisher: 'DoD Official SAR', value: 2.25, tier: 'TIER_1_OFFICIAL' },
  { publisher: 'FlightGlobal', value: 2.25, tier: 'TIER_2_DEFENSE_JOURNAL' },
]);

assert(verification.confidenceLevel === 'VERIFIED', 'Consensus achieved VERIFIED status with Tier 1 citation');
assert(verification.confidenceScore >= 95.0, 'Confidence score >= 95%');
assert(!verification.conflictDetected, 'No conflict detected on harmonious data');

// 5. Comparison Matrix & Mission Scenarios
console.log('\n⚔️ 5. Testing Multi-Domain Comparison & Mission Scenarios:');
const combatantA: any = {
  id: '1',
  name: 'F/A-18F Super Hornet',
  militaryBranch: MilitaryBranch.NAVAL_AVIATION,
  category: AircraftCategory.MULTIROLE_FIGHTER,
  generation: AircraftGeneration.GEN_4_5,
  era: Era.MODERN,
  serviceStatus: AircraftStatus.ACTIVE,
  topSpeedMach: 1.6,
  combatRangeKm: 900,
  radarType: RadarType.AESA,
  hasAesa: true,
  hasSensorFusion: true,
  hasDatalink: true,
  ewScore: 90,
  stealthLevel: StealthLevel.REDUCED,
  rcsEstimatedM2: 1.0,
  hasRwr: true,
  hasEcm: true,
  hasMaws: true,
};

const combatantB: any = {
  id: '2',
  name: 'Land-Based Fighter',
  militaryBranch: MilitaryBranch.AIR_FORCE,
  category: AircraftCategory.MULTIROLE_FIGHTER,
  generation: AircraftGeneration.GEN_4,
  era: Era.MODERN,
  serviceStatus: AircraftStatus.ACTIVE,
  topSpeedMach: 1.8,
  combatRangeKm: 800,
  radarType: RadarType.MECHANICAL_PULSE_DOPPLER,
  hasAesa: false,
  hasSensorFusion: false,
  hasDatalink: false,
  ewScore: 65,
  stealthLevel: StealthLevel.LOW,
  rcsEstimatedM2: 5.0,
  hasRwr: true,
  hasEcm: false,
  hasMaws: false,
};

const comparisonReport = comparisonService.compareAircraft(combatantA, combatantB);
assert(comparisonReport.dimensionMatrix.length === 7, 'Benchmark matrix outputs all 7 capability dimensions');
const carrierMission = comparisonReport.missionScenarios.find((m) => m.mission === 'CARRIER_OPS');
assert(carrierMission !== undefined, 'Carrier Ops mission evaluated');
assert(carrierMission?.advantage === 'ALPHA', 'Naval combatant favored for Carrier Ops');

console.log('\n====================================================');
console.log(`📋 TEST SUMMARY: ${passedTests}/${totalTests} PASSED (${failedTests} FAILED)`);
console.log('====================================================\n');

if (failedTests > 0) {
  process.exit(1);
}
