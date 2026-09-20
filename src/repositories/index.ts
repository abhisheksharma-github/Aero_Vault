import { Request, Response, NextFunction } from 'express';
import { IAircraftRepository } from './aircraft.repository.js';
import { VaultAircraftRepository } from './vaultAircraft.repository.js';
import { PrismaAircraftRepository } from './prismaAircraft.repository.js';
import { probeDatabaseConnection } from '../db.js';
import { logger } from '../utils/logger.js';

let activeAircraftRepository: IAircraftRepository = new VaultAircraftRepository();
let activeDataSource: 'postgres' | 'vault' = 'vault';
let isInitialized = false;

export async function initRepositories(probeTimeoutMs = 2000): Promise<'postgres' | 'vault'> {
  try {
    const isDbAlive = await probeDatabaseConnection(probeTimeoutMs);
    if (isDbAlive) {
      activeAircraftRepository = new PrismaAircraftRepository();
      activeDataSource = 'postgres';
      logger.info('Repositories initialized in primary mode (postgres)');
    } else {
      activeAircraftRepository = new VaultAircraftRepository();
      activeDataSource = 'vault';
      logger.info('Repositories initialized in fallback mode (vault)');
    }
  } catch (err: any) {
    activeAircraftRepository = new VaultAircraftRepository();
    activeDataSource = 'vault';
    logger.warn('Failed to probe database connection on startup, defaulting to vault', {
      error: err.message || String(err),
    });
  }

  isInitialized = true;
  return activeDataSource;
}

export function getActiveAircraftRepository(): IAircraftRepository {
  return activeAircraftRepository;
}

export function getActiveDataSource(): 'postgres' | 'vault' {
  return activeDataSource;
}

export function isRepositoryInitialized(): boolean {
  return isInitialized;
}

export function dataSourceHeaderMiddleware(_req: Request, res: Response, next: NextFunction): void {
  res.setHeader('X-AeroVault-Source', getActiveDataSource());
  next();
}

export * from './aircraft.repository.js';
export * from './vaultAircraft.repository.js';
export * from './prismaAircraft.repository.js';
