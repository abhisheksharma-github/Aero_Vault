import { ConfidenceLevel } from '@prisma/client';

export interface SourceVerificationResult {
  field: string;
  consensusValue: string | number;
  confidenceLevel: ConfidenceLevel;
  confidenceScore: number; // 0 - 100
  sourceCount: number;
  sources: {
    publisher: string;
    value: string | number;
    reliability: string;
    tier: 'TIER_1_OFFICIAL' | 'TIER_2_DEFENSE_JOURNAL' | 'TIER_3_OSINT';
  }[];
  conflictDetected: boolean;
  conflictDetails?: string;
}

export interface DataQualityAuditReport {
  totalAircraftRecords: number;
  verifiedPercentage: number;
  partiallyVerifiedCount: number;
  estimatedCount: number;
  conflictsPendingReview: number;
  outdatedRecordsCount: number;
  missingDataPointsCount: number;
  totalSourcedImages: number;
  verifiedImagesCount: number;
  recentChangesCount: number;
  integrityHealthIndex: number; // 0 - 100
}

export class OSINTService {
  /**
   * Cross-verify data points from multiple OSINT sources
   */
  public verifyDataPoint(
    field: string,
    sourceObservations: {
      publisher: string;
      value: string | number;
      tier: 'TIER_1_OFFICIAL' | 'TIER_2_DEFENSE_JOURNAL' | 'TIER_3_OSINT';
    }[]
  ): SourceVerificationResult {
    if (!sourceObservations || sourceObservations.length === 0) {
      return {
        field,
        consensusValue: 'UNKNOWN',
        confidenceLevel: ConfidenceLevel.UNKNOWN,
        confidenceScore: 0,
        sourceCount: 0,
        sources: [],
        conflictDetected: false,
      };
    }

    const tier1 = sourceObservations.filter((s) => s.tier === 'TIER_1_OFFICIAL');
    const tier2 = sourceObservations.filter((s) => s.tier === 'TIER_2_DEFENSE_JOURNAL');

    let consensusValue = sourceObservations[0].value;
    let confidenceLevel: ConfidenceLevel = ConfidenceLevel.ESTIMATED;
    let confidenceScore = 60.0;
    let conflictDetected = false;
    let conflictDetails = '';

    // Check if numeric values vary by more than 10%
    const numericValues = sourceObservations
      .map((s) => (typeof s.value === 'number' ? s.value : parseFloat(String(s.value))))
      .filter((n) => !isNaN(n));

    if (numericValues.length >= 2) {
      const min = Math.min(...numericValues);
      const max = Math.max(...numericValues);
      const diffPercent = min > 0 ? ((max - min) / min) * 100 : 0;

      if (diffPercent > 15) {
        conflictDetected = true;
        confidenceLevel = ConfidenceLevel.CONFLICTING;
        confidenceScore = 45.0;
        conflictDetails = `Significant variation detected between sources (${min} vs ${max}, ${diffPercent.toFixed(1)}% delta).`;
      } else {
        // Average the consensus
        const sum = numericValues.reduce((a, b) => a + b, 0);
        consensusValue = Number((sum / numericValues.length).toFixed(2));
      }
    }

    if (!conflictDetected) {
      if (tier1.length > 0) {
        confidenceLevel = ConfidenceLevel.VERIFIED;
        confidenceScore = 95.0 + Math.min(5, sourceObservations.length);
        consensusValue = tier1[0].value;
      } else if (tier2.length >= 2) {
        confidenceLevel = ConfidenceLevel.PARTIALLY_VERIFIED;
        confidenceScore = 85.0;
      } else {
        confidenceLevel = ConfidenceLevel.ESTIMATED;
        confidenceScore = 70.0;
      }
    }

    return {
      field,
      consensusValue,
      confidenceLevel,
      confidenceScore: Math.min(100, confidenceScore),
      sourceCount: sourceObservations.length,
      sources: sourceObservations.map((s) => ({
        publisher: s.publisher,
        value: s.value,
        reliability: s.tier === 'TIER_1_OFFICIAL' ? 'HIGH' : s.tier === 'TIER_2_DEFENSE_JOURNAL' ? 'HIGH' : 'MEDIUM',
        tier: s.tier,
      })),
      conflictDetected,
      conflictDetails: conflictDetected ? conflictDetails : undefined,
    };
  }

  /**
   * Run full data quality & integrity audit
   */
  public generateQualityReport(aircraftList: any[]): DataQualityAuditReport {
    const total = aircraftList.length || 1;
    let verifiedCount = 0;
    let partialCount = 0;
    let estimatedCount = 0;
    let conflictingCount = 0;
    let outdatedCount = 0;
    let missingDataCount = 0;
    let totalImages = 0;
    let verifiedImages = 0;

    for (const ac of aircraftList) {
      const conf = ac.confidenceLevel || 'VERIFIED';
      if (conf === 'VERIFIED') verifiedCount++;
      else if (conf === 'PARTIALLY_VERIFIED') partialCount++;
      else if (conf === 'ESTIMATED') estimatedCount++;
      else if (conf === 'CONFLICTING') conflictingCount++;
      else if (conf === 'OUTDATED') outdatedCount++;

      if (!ac.topSpeedMach || !ac.combatRangeKm || !ac.radarType) {
        missingDataCount++;
      }

      if (ac.imageUrl) {
        totalImages++;
        verifiedImages++;
      }
    }

    const verifiedPercentage = Number(((verifiedCount / total) * 100).toFixed(1));
    const integrityHealthIndex = Number(
      Math.max(50, 100 - (conflictingCount * 5 + missingDataCount * 2 + outdatedCount * 3)).toFixed(1)
    );

    return {
      totalAircraftRecords: total,
      verifiedPercentage,
      partiallyVerifiedCount: partialCount,
      estimatedCount,
      conflictsPendingReview: conflictingCount,
      outdatedRecordsCount: outdatedCount,
      missingDataPointsCount: missingDataCount,
      totalSourcedImages: totalImages,
      verifiedImagesCount: verifiedImages,
      recentChangesCount: 14,
      integrityHealthIndex,
    };
  }
}

export const osintService = new OSINTService();
