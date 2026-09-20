import { Router, Request, Response } from 'express';
import { probeDatabaseConnection } from '../db.js';
import { getActiveDataSource } from '../repositories/index.js';

const router = Router();

// GET /api/health/live - Liveness probe (200 if process alive)
router.get('/live', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// GET /api/health/ready - Readiness probe (200 if primary DB reachable, 503 if offline/fallback)
router.get('/ready', async (_req: Request, res: Response) => {
  const isDbReady = await probeDatabaseConnection(1500);
  if (isDbReady) {
    res.status(200).json({
      status: 'ready',
      database: 'connected',
      source: 'postgres',
      timestamp: new Date().toISOString(),
    });
  } else {
    res.status(503).json({
      status: 'degraded',
      database: 'unreachable',
      fallback: 'vault',
      timestamp: new Date().toISOString(),
    });
  }
});

// GET /api/health - General health probe
router.get('/', async (_req: Request, res: Response) => {
  const isDbReady = await probeDatabaseConnection(1500);
  const activeSource = getActiveDataSource();
  res.status(200).json({
    status: isDbReady ? 'healthy' : 'degraded',
    database: isDbReady ? 'connected' : 'offline_or_unreachable',
    source: activeSource,
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

export default router;
