import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import apiRouter from './routes/index.js';
import { errorHandler } from './middleware/error.middleware.js';
import { notFoundHandler } from './middleware/notFound.middleware.js';

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

  // CORS Configuration
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN || '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Admin-Key'],
    })
  );

  // Request Logging
  if (process.env.NODE_ENV !== 'test') {
    app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
  }

  // Body Parsing Middleware
  app.use(express.json({ limit: '5mb' }));
  app.use(express.urlencoded({ extended: true, limit: '5mb' }));

  // Root Welcome / Discovery
  app.get('/', (req, res) => {
    res.json({
      name: 'AeroVault Defense Intelligence API',
      version: '2.0.0',
      status: 'operational',
      endpoints: {
        health: '/api/health',
        aircraft: '/api/aircraft',
        intelligence: '/api/intelligence',
        weapons: '/api/weapons',
      },
    });
  });

  // Mount API Routers
  app.use('/api', apiRouter);

  // 404 Handler
  app.use(notFoundHandler);

  // Centralized Error Handler
  app.use(errorHandler);

  return app;
};
