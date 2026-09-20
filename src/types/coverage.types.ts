export interface CoverageInfo {
  hasForceProfile: boolean;
  hasIntelligenceDossier: boolean;
  aircraftCount: number;
  warshipCount: number;
  vehicleCount: number;
  completeness: number; // 0.0 to 1.0
}

export function computeCountryCoverage(params: {
  hasForceProfile: boolean;
  hasIntelligenceDossier: boolean;
  aircraftCount: number;
  warshipCount: number;
  vehicleCount: number;
}): CoverageInfo {
  const { hasForceProfile, hasIntelligenceDossier, aircraftCount, warshipCount, vehicleCount } = params;

  // 5 domain indicators: ForceProfile (ATLAS), IntelDossier, Air Domain, Naval Domain, Land Domain
  let score = 0;
  if (hasForceProfile) score += 0.2;
  if (hasIntelligenceDossier) score += 0.2;
  if (aircraftCount > 0) score += 0.2;
  if (warshipCount > 0) score += 0.2;
  if (vehicleCount > 0) score += 0.2;

  return {
    hasForceProfile,
    hasIntelligenceDossier,
    aircraftCount,
    warshipCount,
    vehicleCount,
    completeness: Number(score.toFixed(2)),
  };
}
