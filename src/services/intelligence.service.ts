import { prisma } from '../db.js';
import { AppError } from '../middleware/error.middleware.js';
import { IntelligenceQueryParams } from '../schemas/intelligence.schema.js';
import { vaultIntelligence, vaultAircraft } from '../data/vaultLoader.js';

export class IntelligenceService {
  /**
   * Get WDMMA-style national airpower intelligence rankings & global comparative metrics
   */
  async getRankings(params: IntelligenceQueryParams) {
    const { sortBy = 'globalRanking', sortOrder = 'asc', limit = 50 } = params;

    try {
      const nations = await prisma.nationIntelligence.findMany({
        orderBy: { [sortBy]: sortOrder },
        take: limit,
      });

      if (nations && nations.length > 0) {
        // Global aggregations across all tracked nations
        const [totalNations, totalAircraftCount, aggregateStats] = await Promise.all([
          prisma.nationIntelligence.count(),
          prisma.aircraft.count({ where: { serviceStatus: 'ACTIVE' } }),
          prisma.nationIntelligence.aggregate({
            _avg: {
              tvrTotal: true,
              modernizationIndex: true,
              logisticsScore: true,
            },
            _sum: {
              totalActiveUnits: true,
            },
            _max: {
              tvrTotal: true,
            },
          }),
        ]);

        return {
          rankings: nations,
          summary: {
            totalIndexedNations: totalNations,
            globalActiveUnitsReported: aggregateStats._sum.totalActiveUnits ?? 0,
            vaultIndexedActiveAircraft: totalAircraftCount,
            averageTvRTotal: Number((aggregateStats._avg.tvrTotal ?? 0).toFixed(1)),
            averageModernizationIndex: Number((aggregateStats._avg.modernizationIndex ?? 0).toFixed(1)),
            averageLogisticsScore: Number((aggregateStats._avg.logisticsScore ?? 0).toFixed(1)),
            peakTvRScore: aggregateStats._max.tvrTotal ?? 0,
          },
        };
      }
    } catch {
      // Prisma offline, proceed to fallback
    }

    // High-fidelity in-memory fallback
    const nations = [...(vaultIntelligence as any[])];
    const mult = sortOrder === 'asc' ? 1 : -1;
    nations.sort((a, b) => {
      const valA = a[sortBy] ?? 0;
      const valB = b[sortBy] ?? 0;
      if (typeof valA === 'string') return valA.localeCompare(String(valB)) * mult;
      return (Number(valA) - Number(valB)) * mult;
    });

    const paginatedNations = nations.slice(0, limit);
    const totalNations = nations.length;
    const totalActiveUnits = nations.reduce((sum, n) => sum + (n.totalActiveUnits || 0), 0);
    const totalAircraft = vaultAircraft.filter((a) => a.serviceStatus === 'ACTIVE').length;
    const avgTvr = Number((nations.reduce((sum, n) => sum + (n.tvrTotal || 0), 0) / (totalNations || 1)).toFixed(1));
    const avgMod = Number((nations.reduce((sum, n) => sum + (n.modernizationIndex || 0), 0) / (totalNations || 1)).toFixed(1));
    const avgLog = Number((nations.reduce((sum, n) => sum + (n.logisticsScore || 0), 0) / (totalNations || 1)).toFixed(1));
    const peakTvr = Math.max(...nations.map((n) => n.tvrTotal || 0), 0);

    return {
      rankings: paginatedNations,
      summary: {
        totalIndexedNations: totalNations,
        globalActiveUnitsReported: totalActiveUnits,
        vaultIndexedActiveAircraft: totalAircraft,
        averageTvRTotal: avgTvr,
        averageModernizationIndex: avgMod,
        averageLogisticsScore: avgLog,
        peakTvRScore: peakTvr,
      },
    };
  }

  /**
   * Get deep-dive defense intelligence for a specific nation
   */
  async getCountryIntelligence(country: string) {
    const decodedCountry = decodeURIComponent(country).trim();

    let nation: any = null;
    let aircraftList: any[] = [];

    try {
      // 1. Fetch nation intelligence
      nation = await prisma.nationIntelligence.findFirst({
        where: {
          countryName: {
            equals: decodedCountry,
            mode: 'insensitive',
          },
        },
      });

      if (nation) {
        // 2. Fetch all aircraft indexed for this nation
        aircraftList = await prisma.aircraft.findMany({
          where: {
            OR: [
              { country: { equals: nation.countryName, mode: 'insensitive' } },
              { affiliation: { contains: nation.countryName, mode: 'insensitive' } },
            ],
          },
          orderBy: { tvrScore: 'desc' },
        });
      }
    } catch {
      // Offline fallback
    }

    if (!nation) {
      nation = (vaultIntelligence as any[]).find(
        (n) =>
          n.countryName?.toLowerCase() === decodedCountry.toLowerCase() ||
          n.countryCode?.toLowerCase() === decodedCountry.toLowerCase()
      );
    }

    if (!nation) {
      throw new AppError(
        `Defense intelligence not found for nation: '${decodedCountry}'.`,
        404,
        'NATION_NOT_FOUND'
      );
    }

    if (!aircraftList || aircraftList.length === 0) {
      aircraftList = vaultAircraft
        .filter(
          (a) =>
            a.country?.toLowerCase() === nation.countryName?.toLowerCase() ||
            a.originCountry?.toLowerCase() === nation.countryName?.toLowerCase() ||
            a.affiliation?.toLowerCase()?.includes(nation.countryName?.toLowerCase())
        )
        .sort((a, b) => (b.tvrScore ?? 0) - (a.tvrScore ?? 0));
    }

    // 3. Compute inventory breakdown by category
    const categoryCounts: Record<string, number> = {};
    const statusCounts: Record<string, number> = { ACTIVE: 0, INACTIVE: 0, RETIRED: 0 };
    const eraCounts: Record<string, number> = { MODERN: 0, COLD_WAR: 0, VINTAGE: 0 };
    let totalFleetUnits = 0;
    let totalTvRSum = 0;

    for (const ac of aircraftList) {
      // Category count
      categoryCounts[ac.category] = (categoryCounts[ac.category] || 0) + (ac.fleetCount || 1);
      // Status count
      statusCounts[ac.serviceStatus] = (statusCounts[ac.serviceStatus] || 0) + (ac.fleetCount || 1);
      // Era count
      eraCounts[ac.era] = (eraCounts[ac.era] || 0) + (ac.fleetCount || 1);

      totalFleetUnits += ac.fleetCount || 1;
      totalTvRSum += ac.tvrScore || 0;
    }

    const averageAircraftTvR = aircraftList.length > 0
      ? Number((totalTvRSum / aircraftList.length).toFixed(1))
      : 0;

    // Category distribution percentages
    const categoryDistribution = Object.entries(categoryCounts).map(([category, count]) => ({
      category,
      count,
      percentage: totalFleetUnits > 0 ? Number(((count / totalFleetUnits) * 100).toFixed(1)) : 0,
    }));

    // Top strategic assets (top 5 by individual TvR score)
    const topStrategicAssets = aircraftList.slice(0, 5).map((ac) => ({
      id: ac.id,
      name: ac.name,
      role: ac.role,
      category: ac.category,
      serviceStatus: ac.serviceStatus,
      tvrScore: ac.tvrScore,
      topSpeedMach: ac.topSpeedMach,
      topSpeedKmh: ac.topSpeedKmh,
      fleetCount: ac.fleetCount,
      imageUrl: ac.imageUrl,
    }));

    return {
      nation: {
        id: nation.id || `nation-${nation.countryCode?.toLowerCase()}`,
        countryName: nation.countryName,
        globalRanking: nation.globalRanking,
        tvrTotal: nation.tvrTotal,
        modernizationIndex: nation.modernizationIndex,
        logisticsScore: nation.logisticsScore,
        totalActiveUnits: nation.totalActiveUnits,
        lastUpdated: nation.updatedAt || new Date().toISOString(),
      },
      vaultFleetAnalytics: {
        totalUniqueModels: aircraftList.length,
        totalCalculatedUnits: totalFleetUnits,
        averageAircraftTvR,
        statusBreakdown: statusCounts,
        eraBreakdown: eraCounts,
        categoryDistribution,
        topStrategicAssets,
      },
      inventory: aircraftList,
    };
  }
}

export const intelligenceService = new IntelligenceService();
