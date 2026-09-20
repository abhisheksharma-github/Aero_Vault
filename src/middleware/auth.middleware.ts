import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';
import { AppError } from './error.middleware.js';

export function requireAdmin(req: Request, _res: Response, next: NextFunction): void {
  const adminKey = (req.headers['x-admin-key'] || req.headers['X-Admin-Key']) as string | undefined;
  const configuredKey = process.env.ADMIN_API_KEY;

  if (!configuredKey) {
    throw new AppError('Admin authentication is not configured on the server', 500, 'ADMIN_KEY_NOT_CONFIGURED');
  }

  if (!adminKey) {
    throw new AppError('Admin API key required in X-Admin-Key header', 401, 'UNAUTHORIZED');
  }

  const adminBuffer = Buffer.from(adminKey);
  const configuredBuffer = Buffer.from(configuredKey);

  if (adminBuffer.length !== configuredBuffer.length || !crypto.timingSafeEqual(adminBuffer, configuredBuffer)) {
    throw new AppError('Invalid admin API key', 403, 'FORBIDDEN');
  }

  next();
}
