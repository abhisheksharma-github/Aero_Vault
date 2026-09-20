import { PrismaClient } from '@prisma/client';
import { logger } from './utils/logger.js';

let prismaInstance: PrismaClient | null = null;

export function getPrisma(): PrismaClient {
  if (!prismaInstance) {
    logger.info('Initializing Prisma Client');
    prismaInstance = new PrismaClient({
      log: process.env.DEBUG_PRISMA === 'true' ? ['query', 'error', 'warn'] : [],
    });
  }
  return prismaInstance;
}

export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    const client = getPrisma();
    const val = (client as any)[prop];
    if (typeof val === 'function') {
      return val.bind(client);
    }
    return val;
  },
});

export async function probeDatabaseConnection(timeoutMs = 2000): Promise<boolean> {
  if (!process.env.DATABASE_URL) {
    logger.warn('DATABASE_URL not configured, defaulting to standalone vault mode');
    return false;
  }
  try {
    const client = getPrisma();
    const probePromise = client.$queryRaw`SELECT 1`;
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('Database probe connection timeout')), timeoutMs)
    );
    await Promise.race([probePromise, timeoutPromise]);
    logger.info('Database connection probe successful');
    return true;
  } catch (err: any) {
    logger.warn('Database connection probe failed or timed out', { error: err.message || String(err) });
    return false;
  }
}
