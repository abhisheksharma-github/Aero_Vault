import { describe, it, expect } from 'vitest';
import { tvrEngine, ROLE_WEIGHT_PROFILES } from '../src/services/tvr.service.js';
import { AircraftCategory, AircraftGeneration, RadarType, StealthLevel } from '@prisma/client';

describe('TVREngine (True Value Rating Scoring System)', () => {
  it('should calculate realistic TVR score for 5th-generation stealth air dominance fighter (e.g. F-22 Raptor)', () => {
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

    const breakdown = tvrEngine.calculate(f22Input);

    expect(breakdown.overall).toBeGreaterThanOrEqual(91);
    expect(breakdown.grade).toMatch(/S\+?|A\+/);
    expect(breakdown.dimensions.survivability).toBeGreaterThanOrEqual(90);
    expect(breakdown.dimensions.avionics).toBeGreaterThanOrEqual(90);
    expect(breakdown.strengths.length).toBeGreaterThan(0);
    expect(breakdown.limitations.length).toBeGreaterThan(0);
  });

  it('should adjust weights appropriately for AEW&C aircraft role profile', () => {
    const aewcWeights = ROLE_WEIGHT_PROFILES.AEWC;
    const fighterWeights = ROLE_WEIGHT_PROFILES.FIGHTER;

    expect(aewcWeights.avionics).toBeGreaterThan(fighterWeights.avionics);
    expect(aewcWeights.weapons).toBe(0.0);
    expect(aewcWeights.range).toBeGreaterThan(fighterWeights.range);

    const aewcInput = {
      category: AircraftCategory.AEWC,
      generation: AircraftGeneration.GEN_4_5,
      topSpeedMach: 0.82,
      serviceCeilingM: 12000,
      combatRangeKm: 3500,
      radarType: RadarType.AESA,
      radarRangeAirKm: 450,
      hasAesa: true,
      hasSensorFusion: true,
      hasDatalink: true,
      ewScore: 92,
      stealthLevel: StealthLevel.LOW,
      hasRwr: true,
      hasEcm: true,
      hasMaws: true,
    };

    const breakdown = tvrEngine.calculate(aewcInput);
    expect(breakdown.roleProfile).toBe('AEWC');
    expect(breakdown.dimensions.weapons).toBe(0.0);
    expect(breakdown.dimensions.avionics).toBeGreaterThanOrEqual(85);
  });

  it('should handle missing or extreme values gracefully without NaN errors', () => {
    const sparseInput = {
      category: AircraftCategory.FIGHTER,
      generation: AircraftGeneration.GEN_4,
    };

    const breakdown = tvrEngine.calculate(sparseInput);
    expect(breakdown.overall).toBeGreaterThan(0);
    expect(breakdown.overall).toBeLessThanOrEqual(100);
    expect(Number.isNaN(breakdown.overall)).toBe(false);
  });
});
