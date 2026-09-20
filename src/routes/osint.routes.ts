import { Router, Request, Response } from 'express';
import { prisma } from '../db.js';
import { osintService } from '../services/osint.service.js';
import { vaultAircraft } from '../data/vaultLoader.js';
import { logger } from '../utils/logger.js';

const router = Router();

// GET /api/osint/quality — Automated Data Quality Audit Report
router.get('/quality', async (_req: Request, res: Response) => {
  try {
    let aircraftList: any[] = [];
    try {
      aircraftList = await prisma.aircraft.findMany({
        include: {
          images: true,
          dataSources: true,
        },
      });
    } catch (dbErr: any) {
      logger.warn('Failed querying aircraft for OSINT quality audit, using vault fallback', {
        error: dbErr.message || dbErr,
      });
    }

    if (!aircraftList || aircraftList.length === 0) {
      aircraftList = vaultAircraft as any[];
    }

    const report = osintService.generateQualityReport(aircraftList);
    res.json({
      success: true,
      data: report,
    });
  } catch (err: any) {
    logger.error('Failed generating OSINT quality audit', { error: err.message || err });
    res.status(500).json({
      success: false,
      error: { code: 'OSINT_AUDIT_ERROR', message: 'Failed generating OSINT quality audit' },
    });
  }
});

// GET /api/osint/conflicts — Data conflict records pending review
router.get('/conflicts', async (_req: Request, res: Response) => {
  try {
    let conflicts: any[] = [];
    try {
      conflicts = await prisma.dataConflict.findMany({
        include: {
          aircraft: { select: { id: true, name: true, country: true } },
        },
        orderBy: { createdAt: 'desc' },
      });
    } catch (dbErr: any) {
      logger.warn('Failed querying data conflicts from database', { error: dbErr.message || dbErr });
      conflicts = [];
    }

    res.json({
      success: true,
      data: conflicts,
    });
  } catch (err: any) {
    logger.error('Failed fetching data conflicts', { error: err.message || err });
    res.status(500).json({
      success: false,
      error: { code: 'CONFLICTS_FETCH_ERROR', message: 'Failed fetching data conflicts' },
    });
  }
});

// GET /api/osint/changes — "What Changed?" Historical Data Log
router.get('/changes', async (_req: Request, res: Response) => {
  try {
    let changes: any[] = [];
    try {
      changes = await prisma.dataChange.findMany({
        orderBy: { recordedAt: 'desc' },
        take: 50,
      });
    } catch (dbErr: any) {
      logger.warn('Failed querying data change logs from database', { error: dbErr.message || dbErr });
      changes = [];
    }

    res.json({
      success: true,
      data: changes,
    });
  } catch (err: any) {
    logger.error('Failed fetching change logs', { error: err.message || err });
    res.status(500).json({
      success: false,
      error: { code: 'CHANGES_FETCH_ERROR', message: 'Failed fetching change logs' },
    });
  }
});

export default router;
