import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import apiRouter from './routes/index.js';
import { errorHandler } from './middleware/error.middleware.js';
import { notFoundHandler } from './middleware/notFound.middleware.js';
import { dataSourceHeaderMiddleware } from './repositories/index.js';

dotenv.config();

export const createApp = (): Express => {
  const app = express();

  // Security Headers
  app.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginResourcePolicy: { policy: 'cross-origin' },
    })
  );

  // CORS Configuration (registered BEFORE rate limiter)
  const corsOptions: cors.CorsOptions = {
    origin: (requestOrigin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, server-to-server)
      if (!requestOrigin) {
        return callback(null, true);
      }

      const envOrigin = process.env.CORS_ORIGIN;
      if (!envOrigin || envOrigin === '*') {
        return callback(null, true);
      }

      const normalizedRequestOrigin = requestOrigin.trim().replace(/\/+$/, '');
      const allowedOrigins = envOrigin
        .split(',')
        .map((o) => o.trim().replace(/\/+$/, ''))
        .filter(Boolean);

      // Direct match or wildcard domain match or vercel/localhost environments
      const isAllowed =
        allowedOrigins.includes(normalizedRequestOrigin) ||
        allowedOrigins.includes('*') ||
        allowedOrigins.some((allowed) => {
          if (allowed.startsWith('*.')) {
            const domain = allowed.slice(2);
            return normalizedRequestOrigin.endsWith(`.${domain}`) || normalizedRequestOrigin === `https://${domain}`;
          }
          return false;
        }) ||
        normalizedRequestOrigin.includes('vercel.app') ||
        normalizedRequestOrigin.includes('localhost') ||
        normalizedRequestOrigin.includes('127.0.0.1');

      if (isAllowed) {
        return callback(null, true);
      }

      return callback(null, true);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Admin-Key', 'X-AeroVault-Source', 'Origin', 'Accept'],
    exposedHeaders: ['X-AeroVault-Source'],
    credentials: true,
  };
  app.use(cors(corsOptions));

  // Rate Limiting (1000 requests per 15 minutes in dev/test, 300 in production)
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: process.env.NODE_ENV === 'production' ? 300 : 1000,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      success: false,
      error: {
        code: 'RATE_LIMIT_EXCEEDED',
        message: 'Too many intelligence requests. Please throttle query frequency.',
      },
    },
  });
  app.use('/api', limiter);

  // Request Logging
  if (process.env.NODE_ENV !== 'test') {
    app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
  }

  // Body Parsing Middleware
  app.use(express.json({ limit: '5mb' }));
  app.use(express.urlencoded({ extended: true, limit: '5mb' }));

  // Root Welcome / Discovery
  app.get('/', (_req, res) => {
    res.json({
      name: 'AeroVault Defense Intelligence API',
      version: '3.0.0',
      status: 'operational',
      endpoints: {
        health: '/api/health',
        aircraft: '/api/aircraft',
        intelligence: '/api/intelligence',
        weapons: '/api/weapons',
      },
    });
  });

  // Data Source Header & Mount API Routers (both /api and root fallback)
  app.use('/api', dataSourceHeaderMiddleware, apiRouter);
  app.use(dataSourceHeaderMiddleware, apiRouter);

  // 404 Handler
  app.use(notFoundHandler);

  // Centralized Error Handler
  app.use(errorHandler);

  return app;
};
