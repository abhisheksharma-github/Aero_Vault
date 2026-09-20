import { Aircraft, MilitaryBranch } from '@prisma/client';
import { tvrEngine, TVRScoreBreakdown } from './tvr.service.js';
import { CanonicalAircraft } from '../types/aircraft.types.js';

export type MissionType =
  | 'BVR_COMBAT'
  | 'AIR_SUPERIORITY'
  | 'DEEP_STRIKE'
  | 'SEAD'
  | 'MARITIME_STRIKE'
  | 'CARRIER_OPS'
  | 'ANTI_SUBMARINE_WARFARE'
  | 'CLOSE_AIR_SUPPORT'
  | 'INTERCEPTION';

export interface MissionScenarioResult {
  mission: MissionType;
  title: string;
  advantage: 'ALPHA' | 'BRAVO' | 'PARITY';
  advantageMargin: number; // 0-100 delta
  combatantA: {
    name: string;
    missionScore: number;
    strengths: string[];
  };
  combatantB: {
    name: string;
    missionScore: number;
    strengths: string[];
  };
  keyFactors: string[];
  analyticalDisclaimer: string;
}

export interface DimensionComparison {
  dimension: string;
  label: string;
  scoreA: number;
  scoreB: number;
  delta: number;
  leader: 'ALPHA' | 'BRAVO' | 'PARITY';
}

export interface ComparisonReport {
  combatantA: {
    id: string;
    name: string;
    family?: string | null;
    variant?: string | null;
    militaryBranch?: string | null;
    country: string;
    category: string;
    tvrBreakdown: TVRScoreBreakdown;
  };
  combatantB: {
    id: string;
    name: string;
    family?: string | null;
    variant?: string | null;
    militaryBranch?: string | null;
    country: string;
    category: string;
    tvrBreakdown: TVRScoreBreakdown;
  };
  dimensionMatrix: DimensionComparison[];
  missionScenarios: MissionScenarioResult[];
  overallAdvantage: {
    favored: 'ALPHA' | 'BRAVO' | 'PARITY';
    tvrDelta: number;
    summary: string;
  };
}

export interface BranchComparisonReport {
  branchA: {
    name: string;
    country: string;
    totalAircraft: number;
    activeFighters: number;
    supportAircraft: number;
    rotaryFleet: number;
    uavFleet: number;
    averageTvr: number;
    gen5Percentage: number;
  };
  branchB: {
    name: string;
    country: string;
    totalAircraft: number;
    activeFighters: number;
    supportAircraft: number;
    rotaryFleet: number;
    uavFleet: number;
    averageTvr: number;
    gen5Percentage: number;
  };
  comparativeDimensions: {
    dimension: string;
    label: string;
    branchAScore: number;
    branchBScore: number;
    advantage: 'BRANCH_A' | 'BRANCH_B' | 'PARITY';
  }[];
  strategicAssessment: string[];
}

export class ComparisonService {
  public compareAircraft(aircraftA: CanonicalAircraft | Aircraft | any, aircraftB: CanonicalAircraft | Aircraft | any): ComparisonReport {
    const tvrA = tvrEngine.calculate(aircraftA as any);
    const tvrB = tvrEngine.calculate(aircraftB as any);

    const dimensions: Array<{ key: keyof typeof tvrA.dimensions; label: string }> = [
      { key: 'kinetics', label: 'Kinetic Flight Dynamics' },
      { key: 'avionics', label: 'Sensors & Electronic Warfare' },
      { key: 'weapons', label: 'Payload & Weapons Integration' },
      { key: 'survivability', label: 'Stealth & Low Observability' },
      { key: 'range', label: 'Operational Combat Radius' },
      { key: 'modernization', label: 'Generation & Modernization' },
      { key: 'logistics', label: 'Fleet Reliability & Maintenance' },
    ];

    const dimensionMatrix: DimensionComparison[] = dimensions.map(({ key, label }) => {
      const scoreA = tvrA.dimensions[key];
      const scoreB = tvrB.dimensions[key];
      const delta = Number((scoreA - scoreB).toFixed(1));
      let leader: 'ALPHA' | 'BRAVO' | 'PARITY' = 'PARITY';
      if (delta > 1.5) leader = 'ALPHA';
      else if (delta < -1.5) leader = 'BRAVO';

      return {
        dimension: key,
        label,
        scoreA,
        scoreB,
        delta,
        leader,
      };
    });

    const missionScenarios = this.evaluateAllMissions(aircraftA, tvrA, aircraftB, tvrB);

    const overallDelta = Number((tvrA.overall - tvrB.overall).toFixed(1));
    let favored: 'ALPHA' | 'BRAVO' | 'PARITY' = 'PARITY';
    if (overallDelta > 1.0) favored = 'ALPHA';
    else if (overallDelta < -1.0) favored = 'BRAVO';

    const favoredName = favored === 'ALPHA' ? aircraftA.name : favored === 'BRAVO' ? aircraftB.name : 'Neither (Parity)';

    return {
      combatantA: {
        id: aircraftA.id,
        name: aircraftA.name,
        family: aircraftA.family,
        variant: aircraftA.variant,
        militaryBranch: aircraftA.militaryBranch,
        country: aircraftA.country,
        category: aircraftA.category,
        tvrBreakdown: tvrA,
      },
      combatantB: {
        id: aircraftB.id,
        name: aircraftB.name,
        family: aircraftB.family,
        variant: aircraftB.variant,
        militaryBranch: aircraftB.militaryBranch,
        country: aircraftB.country,
        category: aircraftB.category,
        tvrBreakdown: tvrB,
      },
      dimensionMatrix,
      missionScenarios,
      overallAdvantage: {
        favored,
        tvrDelta: Math.abs(overallDelta),
        summary:
          favored === 'PARITY'
            ? 'Both platforms exhibit closely matched multi-domain capabilities with situational trade-offs.'
            : `${favoredName} holds a modeled analytical advantage (+${Math.abs(overallDelta)} TVR) derived from superior dimension balances.`,
      },
    };
  }

  public compareBranches(branchDataA: any, branchDataB: any): BranchComparisonReport {
    const calcScore = (data: any) => {
      const fighterPower = (data.activeFighters || 0) * 0.4;
      const modernBonus = (data.gen5Percentage || 0) * 0.3;
      const tvrWeight = (data.averageTvr || 70) * 0.3;
      return Number((fighterPower + modernBonus + tvrWeight).toFixed(1));
    };

    const scoreA = calcScore(branchDataA);
    const scoreB = calcScore(branchDataB);

    const comparativeDimensions = [
      {
        dimension: 'fighter_dominance',
        label: 'Air Superiority & Fighter Dominance',
        branchAScore: Math.min(100, (branchDataA.activeFighters || 50) / 10),
        branchBScore: Math.min(100, (branchDataB.activeFighters || 50) / 10),
        advantage: branchDataA.activeFighters > branchDataB.activeFighters ? ('BRANCH_A' as const) : ('BRANCH_B' as const),
      },
      {
        dimension: 'modernization_ratio',
        label: '5th Gen & Advanced Modernization',
        branchAScore: branchDataA.gen5Percentage || 15,
        branchBScore: branchDataB.gen5Percentage || 15,
        advantage: (branchDataA.gen5Percentage || 0) >= (branchDataB.gen5Percentage || 0) ? ('BRANCH_A' as const) : ('BRANCH_B' as const),
      },
      {
        dimension: 'force_multiplier_support',
        label: 'AEW&C, Tankers & Support Force Multipliers',
        branchAScore: Math.min(100, (branchDataA.supportAircraft || 10) * 2),
        branchBScore: Math.min(100, (branchDataB.supportAircraft || 10) * 2),
        advantage: (branchDataA.supportAircraft || 0) >= (branchDataB.supportAircraft || 0) ? ('BRANCH_A' as const) : ('BRANCH_B' as const),
      },
    ];

    const strategicAssessment = [
      `${branchDataA.name} maintains strong force projection with ${branchDataA.activeFighters || 0} active combat airframes.`,
      `${branchDataB.name} emphasizes specialized theater capabilities and modernization density.`,
      'Strategic doctrine and pilot training readiness remain critical operational variables.',
    ];

    return {
      branchA: branchDataA,
      branchB: branchDataB,
      comparativeDimensions,
      strategicAssessment,
    };
  }

  private evaluateAllMissions(
    acA: CanonicalAircraft | Aircraft | any,
    tvrA: TVRScoreBreakdown,
    acB: CanonicalAircraft | Aircraft | any,
    tvrB: TVRScoreBreakdown
  ): MissionScenarioResult[] {
    const missions: MissionType[] = [
      'BVR_COMBAT',
      'AIR_SUPERIORITY',
      'DEEP_STRIKE',
      'SEAD',
      'MARITIME_STRIKE',
      'CARRIER_OPS',
      'ANTI_SUBMARINE_WARFARE',
      'CLOSE_AIR_SUPPORT',
    ];

    return missions.map((m) => this.evaluateMission(m, acA, tvrA, acB, tvrB));
  }

  public evaluateMission(
    mission: MissionType,
    acA: CanonicalAircraft | Aircraft | any,
    tvrA: TVRScoreBreakdown,
    acB: CanonicalAircraft | Aircraft | any,
    tvrB: TVRScoreBreakdown
  ): MissionScenarioResult {
    let scoreA = 50;
    let scoreB = 50;
    const factors: string[] = [];
    let title = '';

    switch (mission) {
      case 'BVR_COMBAT':
        title = 'Beyond-Visual-Range (BVR) Combat';
        scoreA = tvrA.dimensions.avionics * 0.35 + tvrA.dimensions.survivability * 0.35 + tvrA.dimensions.weapons * 0.30;
        scoreB = tvrB.dimensions.avionics * 0.35 + tvrB.dimensions.survivability * 0.35 + tvrB.dimensions.weapons * 0.30;
        factors.push('AESA radar detection range and electronic protection');
        factors.push('All-aspect frontal radar cross section (RCS) low-observability');
        factors.push('Long-range active radar air-to-air missile integration (Meteor, AIM-120D, PL-15, Astra)');
        break;

      case 'AIR_SUPERIORITY':
        title = 'Offensive Air Superiority & Counter-Air';
        scoreA = tvrA.dimensions.kinetics * 0.30 + tvrA.dimensions.avionics * 0.30 + tvrA.dimensions.weapons * 0.25 + tvrA.dimensions.survivability * 0.15;
        scoreB = tvrB.dimensions.kinetics * 0.30 + tvrB.dimensions.avionics * 0.30 + tvrB.dimensions.weapons * 0.25 + tvrB.dimensions.survivability * 0.15;
        factors.push('Thrust-to-weight ratio and high-alpha sustained turn rate');
        factors.push('High-off-boresight WVR infrared missiles paired with Helmet Mounted Display');
        factors.push('Situational awareness via 360-degree sensor fusion and datalinks');
        break;

      case 'DEEP_STRIKE':
        title = 'Deep Standoff Penetration Strike';
        scoreA = tvrA.dimensions.range * 0.35 + tvrA.dimensions.survivability * 0.30 + tvrA.dimensions.weapons * 0.35;
        scoreB = tvrB.dimensions.range * 0.35 + tvrB.dimensions.survivability * 0.30 + tvrB.dimensions.weapons * 0.35;
        factors.push('Unrefueled combat radius and heavy payload capacity');
        factors.push('Low observability to penetrate dense integrated air defense networks');
        factors.push('Precision standoff cruise missile compatibility (SCALP, BrahMos, JASSM)');
        break;

      case 'SEAD':
        title = 'Suppression of Enemy Air Defenses (SEAD)';
        scoreA = tvrA.dimensions.avionics * 0.40 + tvrA.dimensions.survivability * 0.35 + tvrA.dimensions.weapons * 0.25;
        scoreB = tvrB.dimensions.avionics * 0.40 + tvrB.dimensions.survivability * 0.35 + tvrB.dimensions.weapons * 0.25;
        factors.push('Digital RWR emitter localization and electronic attack / jamming pods');
        factors.push('Anti-radiation missile integration (AARGM, Rudram, Kh-31P)');
        factors.push('Stealth shaping to minimize engagement envelopes of hostile SAM systems');
        break;

      case 'MARITIME_STRIKE':
        title = 'Maritime & Coastal Anti-Ship Interdiction';
        scoreA = tvrA.dimensions.range * 0.35 + tvrA.dimensions.weapons * 0.40 + tvrA.dimensions.avionics * 0.25;
        scoreB = tvrB.dimensions.range * 0.35 + tvrB.dimensions.weapons * 0.40 + tvrB.dimensions.avionics * 0.25;
        factors.push('Heavy supersonic / subsonic sea-skimming anti-ship missiles (Harpoon, Exocet, BrahMos)');
        factors.push('Maritime surface search radar modes with synthetic aperture target tracking');
        factors.push('Extended low-level overwater combat radius');
        break;

      case 'CARRIER_OPS':
        title = 'Naval Carrier Aviation & Catapult / STOBAR Operations';
        const isCarrierA = acA.militaryBranch === 'NAVAL_AVIATION' || acA.role?.toLowerCase().includes('carrier') || acA.role?.toLowerCase().includes('naval');
        const isCarrierB = acB.militaryBranch === 'NAVAL_AVIATION' || acB.role?.toLowerCase().includes('carrier') || acB.role?.toLowerCase().includes('naval');
        scoreA = (tvrA.dimensions.kinetics * 0.3 + tvrA.dimensions.avionics * 0.4 + tvrA.dimensions.logistics * 0.3) * (isCarrierA ? 1.0 : 0.4);
        scoreB = (tvrB.dimensions.kinetics * 0.3 + tvrB.dimensions.avionics * 0.4 + tvrB.dimensions.logistics * 0.3) * (isCarrierB ? 1.0 : 0.4);
        factors.push('Arrested recovery and catapult / ski-jump launch capability');
        factors.push('Corrosion-resistant maritime metallurgy and folding wing storage');
        factors.push('Carrier flight deck turnaround efficiency and safety margins');
        break;

      case 'ANTI_SUBMARINE_WARFARE':
        title = 'Anti-Submarine Warfare (ASW) & Maritime Patrol';
        scoreA = tvrA.dimensions.avionics * 0.45 + tvrA.dimensions.range * 0.35 + tvrA.dimensions.logistics * 0.20;
        scoreB = tvrB.dimensions.avionics * 0.45 + tvrB.dimensions.range * 0.35 + tvrB.dimensions.logistics * 0.20;
        factors.push('Magnetic Anomaly Detection (MAD), dipping sonar, and sonobuoy processing');
        factors.push('Lightweight ASW homing torpedo carriage and high loiter endurance');
        factors.push('Overwater low-altitude acoustic search sensors');
        break;

      case 'CLOSE_AIR_SUPPORT':
      default:
        title = 'Close Air Support (CAS) & Battlefield Interdiction';
        scoreA = tvrA.dimensions.weapons * 0.35 + tvrA.dimensions.survivability * 0.35 + tvrA.dimensions.kinetics * 0.30;
        scoreB = tvrB.dimensions.weapons * 0.35 + tvrB.dimensions.survivability * 0.35 + tvrB.dimensions.kinetics * 0.30;
        factors.push('Armored titanium cockpit tub and low-altitude survivability');
        factors.push('Precision laser-guided bomb / anti-tank missile capacity');
        factors.push('Low-speed maneuverability and loiter time over hostile battlefield zones');
        break;
    }

    const sA = Number(scoreA.toFixed(1));
    const sB = Number(scoreB.toFixed(1));
    const diff = Number((sA - sB).toFixed(1));

    let advantage: 'ALPHA' | 'BRAVO' | 'PARITY' = 'PARITY';
    if (diff > 2.0) advantage = 'ALPHA';
    else if (diff < -2.0) advantage = 'BRAVO';

    return {
      mission,
      title,
      advantage,
      advantageMargin: Math.abs(diff),
      combatantA: {
        name: acA.name,
        missionScore: sA,
        strengths: tvrA.strengths.slice(0, 2),
      },
      combatantB: {
        name: acB.name,
        missionScore: sB,
        strengths: tvrB.strengths.slice(0, 2),
      },
      keyFactors: factors,
      analyticalDisclaimer:
        'AeroVault analytical model estimate derived from open-source sensor, kinetic, and weapon metrics. Real combat outcomes depend on pilot proficiency, EW conditions, and C4ISR support.',
    };
  }
}

export const comparisonService = new ComparisonService();
