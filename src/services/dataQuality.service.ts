import { prisma } from '../db.js';
import { vaultAircraft } from '../data/vaultLoader.js';

export interface DataAnomaly {
  aircraftId: string;
  aircraftName: string;
  severity: 'HIGH' | 'MEDIUM' | 'LOW';
  rule: string;
  description: string;
}

export interface DataQualityReport {
  timestamp: string;
  totalRecordsChecked: number;
  anomaliesFound: number;
  qualityScore: number;
  anomalies: DataAnomaly[];
  metricsSummary: {
    verifiedRecordsCount: number;
    estimatedRecordsCount: number;
    missingWeightCount: number;
    missingRadarRangeCount: number;
  };
}

export class DataQualityService {
  async runAudit(): Promise<DataQualityReport> {
    let aircraftList: any[] = [];

    try {
      aircraftList = await prisma.aircraft.findMany({
        include: {
          dataSources: true,
        },
      });
    } catch {
      // Fallback
    }

    if (!aircraftList || aircraftList.length === 0) {
      aircraftList = vaultAircraft as any[];
    }

    const anomalies: DataAnomaly[] = [];
    let verifiedCount = 0;
    let estimatedCount = 0;
    let missingWeight = 0;
    let missingRadarRange = 0;

    for (const ac of aircraftList) {
      // 1. Year logic checks
      if (ac.firstFlightYear && ac.introductionYear && ac.firstFlightYear > ac.introductionYear) {
        anomalies.push({
          aircraftId: ac.id,
          aircraftName: ac.name,
          severity: 'HIGH',
          rule: 'INVALID_CHRONOLOGY',
          description: `First flight year (${ac.firstFlightYear}) occurs after introduction year (${ac.introductionYear}).`,
        });
      }

      if (ac.introductionYear && ac.retirementYear && ac.introductionYear > ac.retirementYear) {
        anomalies.push({
          aircraftId: ac.id,
          aircraftName: ac.name,
          severity: 'HIGH',
          rule: 'INVALID_RETIREMENT',
          description: `Introduction year (${ac.introductionYear}) occurs after retirement year (${ac.retirementYear}).`,
        });
      }

      // 2. Kinetics logic
      if (ac.topSpeedMach && (ac.topSpeedMach <= 0 || ac.topSpeedMach > 4.5)) {
        anomalies.push({
          aircraftId: ac.id,
          aircraftName: ac.name,
          severity: 'HIGH',
          rule: 'IMPLAUSIBLE_SPEED',
          description: `Top speed Mach ${ac.topSpeedMach} is physically implausible for airbreathing operational asset.`,
        });
      }

      // 3. Generation logic
      if ((ac.generation === 'GEN_5' || ac.generation === 'GEN_5_PLUS') && ac.firstFlightYear && ac.firstFlightYear < 1990) {
        anomalies.push({
          aircraftId: ac.id,
          aircraftName: ac.name,
          severity: 'MEDIUM',
          rule: 'GENERATION_TIMELINE_MISMATCH',
          description: `5th generation aircraft has first flight year (${ac.firstFlightYear}) prior to 1990.`,
        });
      }

      // 4. Missing critical metrics tracking
      if (!ac.emptyWeightKg && !ac.maxTakeoffWeightKg) {
        missingWeight++;
      }

      if (ac.category === 'FIGHTER' && !ac.radarRangeAirKm) {
        missingRadarRange++;
      }

      // 5. Provenance tracking
      const hasVerified = Array.isArray(ac.dataSources)
        ? ac.dataSources.some((ds: any) => ds.confidenceLevel === 'VERIFIED')
        : ac.confidenceLevel === 'VERIFIED';
      if (hasVerified) verifiedCount++;
      else estimatedCount++;
    }

    const total = aircraftList.length || 1;
    const penalty = anomalies.length * 5;
    const qualityScore = Math.max(0, Math.min(100, 100 - penalty));

    return {
      timestamp: new Date().toISOString(),
      totalRecordsChecked: aircraftList.length,
      anomaliesFound: anomalies.length,
      qualityScore,
      anomalies,
      metricsSummary: {
        verifiedRecordsCount: verifiedCount,
        estimatedRecordsCount: estimatedCount,
        missingWeightCount: missingWeight,
        missingRadarRangeCount: missingRadarRange,
      },
    };
  }
}

export const dataQualityService = new DataQualityService();
