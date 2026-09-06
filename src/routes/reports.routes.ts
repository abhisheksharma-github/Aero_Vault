import { Router, Request, Response } from 'express';
import { prisma } from '../db.js';
import { reportService } from '../services/report.service.js';
import { initialNationIntelligence, initialAircraftData } from '../data/multiDomainData.js';

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
    } catch {
      // Fallback
    }

    if (!nation) {
      nation = (initialNationIntelligence as any[]).find(
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
      aircraftList = (initialAircraftData as any[]).filter(
        (a) => a.country?.toLowerCase() === nation.countryName?.toLowerCase()
      );
    }

    const report = reportService.generateNationReport(nation, aircraftList);
    res.json({
      success: true,
      data: report,
    });
  } catch {
    res.status(500).json({
      success: false,
      error: { code: 'REPORT_GENERATION_ERROR', message: 'Failed generating intelligence report' },
    });
  }
});

export default router;
