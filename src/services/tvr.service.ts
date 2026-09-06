import {
  AircraftCategory,
  AircraftGeneration,
  RadarType,
  StealthLevel,
} from '@prisma/client';

export interface TVRScoreBreakdown {
  overall: number;
  grade: 'S+' | 'S' | 'A+' | 'A' | 'B' | 'C';
  dimensions: {
    kinetics: number;
    avionics: number;
    weapons: number;
    survivability: number;
    range: number;
    modernization: number;
    logistics: number;
  };
  roleProfile: string;
  appliedWeights: {
    kinetics: number;
    avionics: number;
    weapons: number;
    survivability: number;
    range: number;
    modernization: number;
    logistics: number;
  };
  strengths: string[];
  limitations: string[];
}

export interface AircraftTVRInput {
  category: AircraftCategory;
  generation: AircraftGeneration;
  topSpeedMach?: number | null;
  topSpeedKmh?: number | null;
  serviceCeilingM?: number | null;
  rateOfClimbMs?: number | null;
  thrustAfterburnerKn?: number | null;
  thrustDryKn?: number | null;
  emptyWeightKg?: number | null;
  maxTakeoffWeightKg?: number | null;
  combatRangeKm?: number | null;
  ferryRangeKm?: number | null;
  payloadCapacityKg?: number | null;
  gLimitPositive?: number | null;
  radarType?: RadarType | null;
  radarRangeAirKm?: number | null;
  hasAesa?: boolean | null;
  hasIrst?: boolean | null;
  hasSensorFusion?: boolean | null;
  hasDatalink?: boolean | null;
  hasHmd?: boolean | null;
  ewScore?: number | null;
  stealthLevel?: StealthLevel | null;
  rcsEstimatedM2?: number | null;
  hasRwr?: boolean | null;
  hasEcm?: boolean | null;
  hasMaws?: boolean | null;
  maintenanceHoursPerFlightHour?: number | null;
  reliabilityScore?: number | null;
  firstFlightYear?: number | null;
  introductionYear?: number | null;
}

export interface RoleWeightMatrix {
  kinetics: number;
  avionics: number;
  weapons: number;
  survivability: number;
  range: number;
  modernization: number;
  logistics: number;
}

export const ROLE_WEIGHT_PROFILES: Record<string, RoleWeightMatrix> = {
  FIGHTER: {
    kinetics: 0.16,
    avionics: 0.22,
    weapons: 0.22,
    survivability: 0.20,
    range: 0.10,
    modernization: 0.05,
    logistics: 0.05,
  },
  BOMBER: {
    kinetics: 0.08,
    avionics: 0.15,
    weapons: 0.27,
    survivability: 0.18,
    range: 0.22,
    modernization: 0.05,
    logistics: 0.05,
  },
  ATTACK: {
    kinetics: 0.12,
    avionics: 0.18,
    weapons: 0.28,
    survivability: 0.22,
    range: 0.10,
    modernization: 0.05,
    logistics: 0.05,
  },
  AEWC: {
    kinetics: 0.05,
    avionics: 0.40,
    weapons: 0.00,
    survivability: 0.15,
    range: 0.25,
    modernization: 0.08,
    logistics: 0.07,
  },
  TANKER: {
    kinetics: 0.05,
    avionics: 0.10,
    weapons: 0.00,
    survivability: 0.10,
    range: 0.35,
    modernization: 0.15,
    logistics: 0.25,
  },
  TRANSPORT: {
    kinetics: 0.05,
    avionics: 0.10,
    weapons: 0.00,
    survivability: 0.10,
    range: 0.30,
    modernization: 0.15,
    logistics: 0.30,
  },
  HELICOPTER: {
    kinetics: 0.14,
    avionics: 0.20,
    weapons: 0.26,
    survivability: 0.20,
    range: 0.10,
    modernization: 0.05,
    logistics: 0.05,
  },
  UAV: {
    kinetics: 0.08,
    avionics: 0.30,
    weapons: 0.17,
    survivability: 0.15,
    range: 0.20,
    modernization: 0.05,
    logistics: 0.05,
  },
  TRAINER: {
    kinetics: 0.20,
    avionics: 0.25,
    weapons: 0.10,
    survivability: 0.10,
    range: 0.10,
    modernization: 0.10,
    logistics: 0.15,
  },
  RECONNAISSANCE: {
    kinetics: 0.10,
    avionics: 0.38,
    weapons: 0.02,
    survivability: 0.20,
    range: 0.20,
    modernization: 0.05,
    logistics: 0.05,
  },
};

export class TVREngine {
  private getRoleProfileKey(category: AircraftCategory): string {
    const cat = String(category);
    if (
      cat === 'FIGHTER' ||
      cat === 'INTERCEPTOR' ||
      cat === 'MULTIROLE_FIGHTER' ||
      cat === 'AIR_SUPERIORITY' ||
      cat === 'STRIKE'
    ) return 'FIGHTER';

    if (cat === 'BOMBER') return 'BOMBER';
    if (cat === 'GROUND_ATTACK' || cat === 'LIGHT_ATTACK' || cat === 'ATTACK') return 'ATTACK';

    if (
      cat === 'AEWC' ||
      cat === 'AIRBORNE_EARLY_WARNING' ||
      cat === 'ELINT' ||
      cat === 'SIGINT' ||
      cat === 'EW_AIRCRAFT'
    ) return 'AEWC';

    if (cat === 'RECONNAISSANCE' || cat === 'SURVEILLANCE' || cat === 'MARITIME_PATROL') return 'RECONNAISSANCE';
    if (cat === 'TANKER' || cat === 'AERIAL_REFUELING') return 'TANKER';
    if (
      cat === 'TRANSPORT' ||
      cat === 'STRATEGIC_TRANSPORT' ||
      cat === 'TACTICAL_TRANSPORT' ||
      cat === 'UTILITY_TRANSPORT' ||
      cat === 'VIP_TRANSPORT'
    ) return 'TRANSPORT';

    if (
      cat === 'HELICOPTER' ||
      cat === 'ATTACK_HELICOPTER' ||
      cat === 'UTILITY_HELICOPTER' ||
      cat === 'TRANSPORT_HELICOPTER' ||
      cat === 'RECON_HELICOPTER' ||
      cat === 'NAVAL_HELICOPTER' ||
      cat === 'ANTI_SUBMARINE_HELICOPTER' ||
      cat === 'SEARCH_AND_RESCUE_HELICOPTER'
    ) return 'HELICOPTER';

    if (
      cat === 'UAV' ||
      cat === 'MALE_UAV' ||
      cat === 'HALE_UAV' ||
      cat === 'TACTICAL_UAV' ||
      cat === 'UCAV' ||
      cat === 'LOITERING_MUNITION' ||
      cat === 'RECON_UAV' ||
      cat === 'STRIKE_UAV'
    ) return 'UAV';

    if (cat === 'TRAINER' || cat === 'LEAD_IN_FIGHTER_TRAINER') return 'TRAINER';

    return 'FIGHTER';
  }

  public calculate(input: AircraftTVRInput): TVRScoreBreakdown {
    const roleKey = this.getRoleProfileKey(input.category);
    const weights = ROLE_WEIGHT_PROFILES[roleKey] || ROLE_WEIGHT_PROFILES.FIGHTER;

    const kinetics = this.calculateKineticsScore(input);
    const avionics = this.calculateAvionicsScore(input);
    const weapons = weights.weapons === 0 ? 0.0 : this.calculateWeaponsScore(input);
    const survivability = this.calculateSurvivabilityScore(input);
    const range = this.calculateRangeScore(input);
    const modernization = this.calculateModernizationScore(input);
    const logistics = this.calculateLogisticsScore(input);

    const overallRaw =
      kinetics * weights.kinetics +
      avionics * weights.avionics +
      weapons * weights.weapons +
      survivability * weights.survivability +
      range * weights.range +
      modernization * weights.modernization +
      logistics * weights.logistics;

    const overall = Number(Math.min(100, Math.max(10, overallRaw)).toFixed(1));
    const grade = this.deriveGrade(overall);
    const strengths = this.deriveStrengths(input, {
      kinetics,
      avionics,
      weapons,
      survivability,
      range,
      modernization,
      logistics,
    });
    const limitations = this.deriveLimitations(input, {
      kinetics,
      avionics,
      weapons,
      survivability,
      range,
      modernization,
      logistics,
    });

    return {
      overall,
      grade,
      dimensions: {
        kinetics: Number(kinetics.toFixed(1)),
        avionics: Number(avionics.toFixed(1)),
        weapons: Number(weapons.toFixed(1)),
        survivability: Number(survivability.toFixed(1)),
        range: Number(range.toFixed(1)),
        modernization: Number(modernization.toFixed(1)),
        logistics: Number(logistics.toFixed(1)),
      },
      roleProfile: roleKey,
      appliedWeights: weights,
      strengths,
      limitations,
    };
  }

  private calculateKineticsScore(input: AircraftTVRInput): number {
    let score = 50;
    const cat = String(input.category);
    const isHelicopter = cat.includes('HELICOPTER');

    if (isHelicopter) {
      if (input.topSpeedKmh && input.topSpeedKmh >= 310) score += 20;
      else if (input.topSpeedKmh && input.topSpeedKmh >= 270) score += 12;
      if (input.serviceCeilingM && input.serviceCeilingM >= 6000) score += 15;
      if (input.rateOfClimbMs && input.rateOfClimbMs >= 12) score += 15;
      return Math.min(100, score);
    }

    if (input.topSpeedMach) {
      if (input.topSpeedMach >= 2.3) score += 25;
      else if (input.topSpeedMach >= 2.0) score += 20;
      else if (input.topSpeedMach >= 1.6) score += 15;
      else if (input.topSpeedMach >= 1.2) score += 8;
      else if (input.topSpeedMach >= 0.85) score += 2;
    }

    if (input.rateOfClimbMs) {
      if (input.rateOfClimbMs >= 300) score += 15;
      else if (input.rateOfClimbMs >= 230) score += 10;
      else if (input.rateOfClimbMs >= 150) score += 5;
    }

    if (input.serviceCeilingM) {
      if (input.serviceCeilingM >= 19000) score += 10;
      else if (input.serviceCeilingM >= 16000) score += 6;
      else if (input.serviceCeilingM >= 13000) score += 3;
    }

    if (input.gLimitPositive) {
      if (input.gLimitPositive >= 9.0) score += 10;
      else if (input.gLimitPositive >= 8.0) score += 6;
      else if (input.gLimitPositive >= 6.0) score += 3;
    }

    if (input.thrustAfterburnerKn && input.emptyWeightKg && input.emptyWeightKg > 0) {
      const weightKn = (input.emptyWeightKg * 9.81) / 1000;
      const tw = input.thrustAfterburnerKn / weightKn;
      if (tw >= 1.2) score += 10;
      else if (tw >= 1.0) score += 6;
      else if (tw >= 0.8) score += 2;
    }

    return Math.min(100, Math.max(20, score));
  }

  private calculateAvionicsScore(input: AircraftTVRInput): number {
    let score = 35;

    if (input.radarType === RadarType.MULTI_BAND_AESA) score += 35;
    else if (input.radarType === RadarType.AESA || input.hasAesa) score += 30;
    else if (input.radarType === RadarType.PESA) score += 20;
    else if (input.radarType === RadarType.MECHANICAL_PULSE_DOPPLER) score += 10;

    if (input.radarRangeAirKm) {
      if (input.radarRangeAirKm >= 350) score += 15;
      else if (input.radarRangeAirKm >= 200) score += 10;
      else if (input.radarRangeAirKm >= 120) score += 6;
    }

    if (input.hasSensorFusion) score += 12;
    if (input.hasIrst) score += 8;
    if (input.hasDatalink) score += 8;
    if (input.hasHmd) score += 4;

    if (input.ewScore) {
      score += (input.ewScore / 100) * 12;
    }

    return Math.min(100, Math.max(15, score));
  }

  private calculateWeaponsScore(input: AircraftTVRInput): number {
    let score = 40;

    if (input.payloadCapacityKg) {
      if (input.payloadCapacityKg >= 15000) score += 35;
      else if (input.payloadCapacityKg >= 8000) score += 28;
      else if (input.payloadCapacityKg >= 4500) score += 20;
      else if (input.payloadCapacityKg >= 2500) score += 12;
      else if (input.payloadCapacityKg >= 1000) score += 5;
    }

    const gen = String(input.generation);
    if (gen === 'GEN_6' || gen === 'GEN_5_PLUS') score += 25;
    else if (gen === 'GEN_5') score += 22;
    else if (gen === 'GEN_4_5') score += 18;
    else if (gen === 'GEN_4_PLUS') score += 14;
    else if (gen === 'GEN_4') score += 10;
    else score += 4;

    return Math.min(100, Math.max(20, score));
  }

  private calculateSurvivabilityScore(input: AircraftTVRInput): number {
    let score = 30;

    if (input.stealthLevel === StealthLevel.VERY_HIGH) score += 45;
    else if (input.stealthLevel === StealthLevel.HIGH) score += 35;
    else if (input.stealthLevel === StealthLevel.MODERATE) score += 22;
    else if (input.stealthLevel === StealthLevel.REDUCED) score += 14;
    else if (input.stealthLevel === StealthLevel.LOW) score += 6;

    if (input.rcsEstimatedM2 !== null && input.rcsEstimatedM2 !== undefined) {
      if (input.rcsEstimatedM2 <= 0.0001) score += 10;
      else if (input.rcsEstimatedM2 <= 0.01) score += 7;
      else if (input.rcsEstimatedM2 <= 0.1) score += 4;
      else if (input.rcsEstimatedM2 <= 1.0) score += 1;
    }

    if (input.hasRwr) score += 5;
    if (input.hasEcm) score += 8;
    if (input.hasMaws) score += 7;

    return Math.min(100, Math.max(15, score));
  }

  private calculateRangeScore(input: AircraftTVRInput): number {
    let score = 35;
    const cat = String(input.category);
    const isHelicopter = cat.includes('HELICOPTER');

    if (isHelicopter) {
      if (input.combatRangeKm) {
        if (input.combatRangeKm >= 650) score += 40;
        else if (input.combatRangeKm >= 450) score += 30;
        else if (input.combatRangeKm >= 300) score += 20;
        else score += 10;
      }
      return Math.min(100, Math.max(30, score));
    }

    if (input.combatRangeKm) {
      if (input.combatRangeKm >= 3500) score += 40;
      else if (input.combatRangeKm >= 1800) score += 30;
      else if (input.combatRangeKm >= 1000) score += 24;
      else if (input.combatRangeKm >= 600) score += 14;
      else if (input.combatRangeKm >= 300) score += 6;
    }

    if (input.ferryRangeKm) {
      if (input.ferryRangeKm >= 4500) score += 15;
      else if (input.ferryRangeKm >= 3000) score += 10;
      else if (input.ferryRangeKm >= 1800) score += 5;
    }

    return Math.min(100, Math.max(20, score));
  }

  private calculateModernizationScore(input: AircraftTVRInput): number {
    const gen = String(input.generation);
    if (gen === 'GEN_6') return 100;
    if (gen === 'GEN_5_PLUS') return 96;
    if (gen === 'GEN_5') return 92;
    if (gen === 'GEN_4_5') return 83;
    if (gen === 'GEN_4_PLUS') return 74;
    if (gen === 'GEN_4') return 65;
    if (gen === 'GEN_3') return 48;
    return 35;
  }

  private calculateLogisticsScore(input: AircraftTVRInput): number {
    let score = input.reliabilityScore ?? 75.0;

    if (input.maintenanceHoursPerFlightHour) {
      if (input.maintenanceHoursPerFlightHour <= 8) score += 10;
      else if (input.maintenanceHoursPerFlightHour <= 15) score += 5;
      else if (input.maintenanceHoursPerFlightHour >= 30) score -= 10;
      else if (input.maintenanceHoursPerFlightHour >= 22) score -= 5;
    }

    return Math.min(100, Math.max(20, score));
  }

  private deriveGrade(score: number): 'S+' | 'S' | 'A+' | 'A' | 'B' | 'C' {
    if (score >= 94) return 'S+';
    if (score >= 88) return 'S';
    if (score >= 80) return 'A+';
    if (score >= 70) return 'A';
    if (score >= 60) return 'B';
    return 'C';
  }

  private deriveStrengths(
    input: AircraftTVRInput,
    dim: {
      kinetics: number;
      avionics: number;
      weapons: number;
      survivability: number;
      range: number;
      modernization: number;
      logistics: number;
    }
  ): string[] {
    const list: string[] = [];

    if (dim.survivability >= 88) list.push('Very low radar observability and high all-aspect survivability');
    if (dim.avionics >= 85) list.push('Advanced AESA sensor suite with high-bandwidth datalink integration');
    if (dim.kinetics >= 85) list.push('High-thrust propulsion envelope with supersonic dash and high G-tolerance');
    if (dim.weapons >= 85) list.push('Heavy standoff weapons carriage with multi-target engagement capability');
    if (dim.range >= 80) list.push('Extended unrefueled combat radius suitable for strategic deep-strike missions');
    if (dim.modernization >= 85) list.push('Cutting-edge 5th-generation avionics architecture and sensor fusion');
    if (dim.logistics >= 80) list.push('High fleet operational availability and streamlined maintenance turnaround');

    if (list.length === 0) {
      list.push('Proven multirole capability with mature global operational track record');
    }

    return list.slice(0, 4);
  }

  private deriveLimitations(
    input: AircraftTVRInput,
    dim: {
      kinetics: number;
      avionics: number;
      weapons: number;
      survivability: number;
      range: number;
      modernization: number;
      logistics: number;
    }
  ): string[] {
    const list: string[] = [];

    if (dim.logistics < 68) list.push('High maintenance labor hours and complex specialized support logistics');
    if (dim.survivability < 55) list.push('Conventional radar cross-section vulnerable to modern integrated air defense (IADS)');
    if (dim.avionics < 65) list.push('Legacy mechanical radar architecture with limited electronic warfare counter-countermeasures');
    if (dim.range < 60) list.push('Restricted combat radius requiring aerial refueling support for deep penetration');
    if (dim.weapons < 65 && input.category === 'FIGHTER') list.push('Limited internal bay weapons capacity without compromising low-observability');

    if (list.length === 0) {
      list.push('Specialized operational profile requiring dedicated support asset coordination');
    }

    return list.slice(0, 3);
  }
}

export const tvrEngine = new TVREngine();
