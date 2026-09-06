import { Router, Request, Response } from 'express';
import { prisma } from '../db.js';
import { initialAircraftData } from '../data/multiDomainData.js';

const router = Router();

// GET /api/branches — Summary of global military branches
router.get('/', async (req: Request, res: Response) => {
  try {
    const branches = [
      {
        id: 'AIR_FORCE',
        name: 'Air Force',
        description: 'Strategic air dominance, tactical multirole strike, strategic airlift, and AEW&C force projection.',
        icon: 'Plane',
      },
      {
        id: 'ARMY_AVIATION',
        name: 'Army Aviation',
        description: 'Tactical attack helicopters, battlefield air mobility, armed scout reconnaissance, and tactical UAVs.',
        icon: 'Crosshair',
      },
      {
        id: 'NAVAL_AVIATION',
        name: 'Naval Aviation',
        description: 'Carrier-borne strike fighters, anti-submarine warfare (ASW), maritime patrol, and naval helicopters.',
        icon: 'Anchor',
      },
      {
        id: 'MARINE_AVIATION',
        name: 'Marine Aviation',
        description: 'Expeditionary close air support, amphibious assault lift, and vertical/short takeoff (STOVL) combat.',
        icon: 'Shield',
      },
    ];

    res.json({
      success: true,
      data: branches,
    });
  } catch {
    res.status(500).json({
      success: false,
      error: { code: 'BRANCH_FETCH_ERROR', message: 'Failed fetching branch profiles' },
    });
  }
});

// GET /api/branches/:branch/fleet — Aircraft filtered by military branch
router.get('/:branch/fleet', async (req: Request, res: Response) => {
  try {
    const branchKey = String(req.params.branch).toUpperCase();

    try {
      const aircraft = await prisma.aircraft.findMany({
        where: {
          militaryBranch: branchKey as any,
        },
        include: {
          weapons: { include: { weapon: true } },
          images: true,
        },
        orderBy: { tvrScore: 'desc' },
      });

      if (aircraft && aircraft.length > 0) {
        res.json({
          success: true,
          data: aircraft,
        });
        return;
      }
    } catch {
      // Fallback
    }

    const filtered = (initialAircraftData as any[]).filter(
      (a) => a.militaryBranch === branchKey
    );

    res.json({
      success: true,
      data: filtered,
    });
  } catch {
    res.status(500).json({
      success: false,
      error: { code: 'FLEET_FETCH_ERROR', message: 'Failed fetching branch fleet' },
    });
  }
});

export default router;
