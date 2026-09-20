import { Router, Request, Response } from 'express';
import { prisma } from '../db.js';
import { reportService } from '../services/report.service.js';
import { vaultIntelligence, vaultAircraft } from '../data/vaultLoader.js';
import { logger } from '../utils/logger.js';

const router = Router();

// GET /api/reports/nations/:country — Generate intelligence dossier report for country
router.get('/nations/:country', async (req: Request, res: Response) => {
  try {
    const countryName = String(req.params.country);
    let nation: any = null;
    let aircraftList: any[] = [];

    try {
      [nation, aircraftList] = await Promise.all([
        prisma.nationIntelligence.findFirst({
          where: {
            countryName: { equals: countryName, mode: 'insensitive' },
          },
        }),
        prisma.aircraft.findMany({
          where: {
            country: { equals: countryName, mode: 'insensitive' },
          },
        }),
      ]);
    } catch (dbErr: any) {
      logger.warn('Failed querying nation intelligence report from database, using vault fallback', {
        country: countryName,
        error: dbErr.message || dbErr,
      });
    }

    if (!nation) {
      nation = (vaultIntelligence as any[]).find(
        (n) =>
          n.countryName?.toLowerCase() === countryName.toLowerCase() ||
          n.countryCode?.toLowerCase() === countryName.toLowerCase()
      );
    }

    if (!nation) {
      return res.status(404).json({
        success: false,
        error: { code: 'NATION_NOT_FOUND', message: `Nation ${countryName} not found in intelligence database` },
      });
    }

    if (!aircraftList || aircraftList.length === 0) {
      aircraftList = vaultAircraft.filter(
        (a) =>
          a.country?.toLowerCase() === nation.countryName?.toLowerCase() ||
          a.originCountry?.toLowerCase() === nation.countryName?.toLowerCase()
      );
    }

    const report = reportService.generateNationReport(nation, aircraftList);
    res.json({
      success: true,
      data: report,
    });
  } catch (err: any) {
    logger.error('Failed generating intelligence report', { error: err.message || err });
    res.status(500).json({
      success: false,
      error: { code: 'REPORT_GENERATION_ERROR', message: 'Failed generating intelligence report' },
    });
  }
});

export default router;
