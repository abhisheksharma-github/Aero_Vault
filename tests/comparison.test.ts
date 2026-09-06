import { describe, it, expect } from 'vitest';
import { comparisonService } from '../src/services/comparison.service.js';
import { AircraftCategory, AircraftGeneration, RadarType, StealthLevel, AircraftStatus, Era } from '@prisma/client';

describe('ComparisonService (Benchmark Matrix & Mission Scenarios)', () => {
  const combatantA: any = {
    id: '1',
    name: 'Stealth Fighter Alpha',
    category: AircraftCategory.FIGHTER,
    generation: AircraftGeneration.GEN_5,
    era: Era.MODERN,
    serviceStatus: AircraftStatus.ACTIVE,
    topSpeedMach: 2.2,
    combatRangeKm: 1200,
    radarType: RadarType.AESA,
    hasAesa: true,
    hasSensorFusion: true,
    hasDatalink: true,
    ewScore: 95,
    stealthLevel: StealthLevel.VERY_HIGH,
    rcsEstimatedM2: 0.0001,
    hasRwr: true,
    hasEcm: true,
    hasMaws: true,
    weapons: [],
    dataSources: [],
    milestones: [],
  };

  const combatantB: any = {
    id: '2',
    name: 'Legacy Fighter Bravo',
    category: AircraftCategory.FIGHTER,
    generation: AircraftGeneration.GEN_4,
    era: Era.MODERN,
    serviceStatus: AircraftStatus.ACTIVE,
    topSpeedMach: 1.8,
    combatRangeKm: 900,
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
    weapons: [],
    dataSources: [],
    milestones: [],
  };

  it('should generate 7-dimension benchmark matrix and identify advantage', () => {
    const report = comparisonService.compareAircraft(combatantA, combatantB);

    expect(report.dimensionMatrix.length).toBe(7);
    expect(report.overallAdvantage.favored).toBe('ALPHA');
    expect(report.overallAdvantage.tvrDelta).toBeGreaterThan(5);
  });

  it('should calculate BVR Combat mission advantage favor with clear rationale', () => {
    const report = comparisonService.compareAircraft(combatantA, combatantB);
    const bvrMission = report.missionScenarios.find((m) => m.mission === 'BVR_COMBAT');

    expect(bvrMission).toBeDefined();
    expect(bvrMission?.advantage).toBe('ALPHA');
    expect(bvrMission?.combatantA.missionScore).toBeGreaterThan(bvrMission?.combatantB.missionScore || 0);
    expect(bvrMission?.keyFactors.length).toBeGreaterThan(0);
  });
});
