import { Router, Request, Response } from 'express';
import { prisma } from '../db.js';
import { osintService } from '../services/osint.service.js';
import { aircraftVault } from '../data/normalize.js';

const router = Router();

// GET /api/osint/quality — Automated Data Quality Audit Report
router.get('/quality', async (req: Request, res: Response) => {
  try {
    let aircraftList: any[] = [];
    try {
      aircraftList = await prisma.aircraft.findMany({
        include: {
          images: true,
          dataSources: true,
        },
      });
    } catch {
      // Fallback
    }

    if (!aircraftList || aircraftList.length === 0) {
      aircraftList = aircraftVault as any[];
    }

    const report = osintService.generateQualityReport(aircraftList);
    res.json({
      success: true,
      data: report,
    });
  } catch {
    res.status(500).json({
      success: false,
      error: { code: 'OSINT_AUDIT_ERROR', message: 'Failed generating OSINT quality audit' },
    });
  }
});

// GET /api/osint/conflicts — Data conflict records pending review
router.get('/conflicts', async (req: Request, res: Response) => {
  try {
    let conflicts: any[] = [];
    try {
      conflicts = await prisma.dataConflict.findMany({
        include: {
          aircraft: { select: { id: true, name: true, country: true } },
        },
        orderBy: { createdAt: 'desc' },
      });
    } catch {
      conflicts = [];
    }

    res.json({
      success: true,
      data: conflicts,
    });
  } catch {
    res.status(500).json({
      success: false,
      error: { code: 'CONFLICTS_FETCH_ERROR', message: 'Failed fetching data conflicts' },
    });
  }
});

// GET /api/osint/changes — "What Changed?" Historical Data Log
router.get('/changes', async (req: Request, res: Response) => {
  try {
    let changes: any[] = [];
    try {
      changes = await prisma.dataChange.findMany({
        orderBy: { recordedAt: 'desc' },
        take: 50,
      });
    } catch {
      changes = [];
    }

    res.json({
      success: true,
      data: changes,
    });
  } catch {
    res.status(500).json({
      success: false,
      error: { code: 'CHANGES_FETCH_ERROR', message: 'Failed fetching change logs' },
    });
  }
});

export default router;
