export interface IntelligenceReport {
  id: string;
  reportTitle: string;
  classification: string;
  generatedDate: string;
  targetEntity: string;
  entityType: 'NATION' | 'BRANCH' | 'AIRCRAFT_FAMILY';
  executiveSummary: string;
  fleetBreakdown: {
    totalUnits: number;
    activeUnits: number;
    modernizationIndex: number;
    averageTvr: number;
    gen5Ratio: number;
  };
  keyStrategicAssets: {
    name: string;
    role: string;
    branch: string;
    tvrScore: number;
    tvrGrade: string;
  }[];
  strategicCapabilities: {
    domain: string;
    rating: string;
    assessment: string;
  }[];
  modernizationTrajectory: string;
  logisticsVulnerability: string;
  sourcesCited: string[];
}

export class ReportService {
  public generateNationReport(nationData: any, aircraftList: any[]): IntelligenceReport {
    const totalUnits = nationData.totalActiveUnits || 500;
    const fighters = aircraftList.filter((a) => a.category?.includes('FIGHTER'));
    const gen5 = aircraftList.filter((a) => a.generation === 'GEN_5' || a.generation === 'GEN_5_PLUS');
    const gen5Ratio = totalUnits > 0 ? Number(((gen5.length / (fighters.length || 1)) * 100).toFixed(1)) : 0;

    const topAssets = aircraftList
      .sort((a, b) => (b.tvrScore || 80) - (a.tvrScore || 80))
      .slice(0, 5)
      .map((ac) => ({
        name: ac.name,
        role: ac.role,
        branch: ac.militaryBranch || 'AIR_FORCE',
        tvrScore: Number((ac.tvrScore || 80).toFixed(1)),
        tvrGrade: (ac.tvrScore || 80) >= 94 ? 'S+' : (ac.tvrScore || 80) >= 88 ? 'S' : 'A+',
      }));

    return {
      id: `INTEL-REP-${Date.now().toString().slice(-6)}`,
      reportTitle: `${nationData.countryName?.toUpperCase()} MILITARY AVIATION CAPABILITY ASSESSMENT`,
      classification: 'UNCLASSIFIED / OPEN-SOURCE DEFENSE INTELLIGENCE',
      generatedDate: new Date().toISOString().split('T')[0],
      targetEntity: nationData.countryName,
      entityType: 'NATION',
      executiveSummary: `${nationData.countryName} deploys an estimated ${totalUnits.toLocaleString()} active military airframes across its Air Force, Army Aviation, and Naval Air Arms. The fleet exhibits a calculated modernization index of ${nationData.modernizationIndex || 78}%, with strategic strengths in multirole fighter strike and force-multiplier integration.`,
      fleetBreakdown: {
        totalUnits,
        activeUnits: totalUnits,
        modernizationIndex: nationData.modernizationIndex || 78,
        averageTvr: Number((nationData.tvrTotal || 80).toFixed(1)),
        gen5Ratio,
      },
      keyStrategicAssets: topAssets,
      strategicCapabilities: [
        {
          domain: 'Air Dominance & BVR Reach',
          rating: nationData.combatPowerScore > 80 ? 'SUPERIOR' : 'HIGH CAPABILITY',
          assessment: 'Frontline fighter squadrons equipped with active radar guided BVR missiles and AESA sensor suites.',
        },
        {
          domain: 'Maritime & Naval Carrier Airpower',
          rating: nationData.navalAirScore > 75 ? 'HIGH FORCE PROJECTION' : 'COASTAL DEFENSE',
          assessment: 'Naval aviation capability structured around maritime patrol, carrier fighter wings, and ASW helicopters.',
        },
        {
          domain: 'Strategic Standoff Strike',
          rating: nationData.strikeScore > 80 ? 'DEEP PENETRATION' : 'TACTICAL INTERDICTION',
          assessment: 'Precision standoff cruise missile compatibility for high-value hardened infrastructure suppression.',
        },
      ],
      modernizationTrajectory:
        'Induction of 5th-generation stealth fighters and upgrade of 4th-generation platforms with AESA arrays and indigenous datalinks.',
      logisticsVulnerability:
        'Maintenance complexity across diverse foreign OEM supply chains requires robust spares warehousing and domestic MRO depots.',
      sourcesCited: [
        "Jane's All the World's Aircraft 2025",
        'FlightGlobal World Air Forces Directory 2025',
        'Official Ministry of Defence Whitepapers',
        'WDMMA True Value Rating Intelligence Index',
      ],
    };
  }
}

export const reportService = new ReportService();
