import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import { ZodError } from 'zod';

export class AppError extends Error {
  public statusCode: number;
  public code?: string;
  public details?: unknown;

  constructor(message: string, statusCode = 500, code?: string, details?: unknown) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void => {
  // Handle AppError
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      success: false,
      error: {
        message: err.message,
        code: err.code || 'APP_ERROR',
        details: err.details,
      },
    });
    return;
  }

  // Handle Zod Error
  if (err instanceof ZodError) {
    res.status(400).json({
      success: false,
      error: {
        message: 'Validation failed',
        code: 'VALIDATION_ERROR',
        details: err.issues.map((issue) => ({
          field: issue.path.join('.'),
          message: issue.message,
        })),
      },
    });
    return;
  }

  // Handle Prisma Known Request Errors
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      const target = Array.isArray(err.meta?.target) ? err.meta.target.join(', ') : 'field';
      res.status(409).json({
        success: false,
        error: {
          message: `Unique constraint violation on ${target}. A record with this value already exists.`,
          code: 'RESOURCE_CONFLICT',
        },
      });
      return;
    }

    if (err.code === 'P2025') {
      res.status(404).json({
        success: false,
        error: {
          message: 'Requested record was not found.',
          code: 'RESOURCE_NOT_FOUND',
        },
      });
      return;
    }
  }

  // Handle JSON parse errors
  if (err instanceof SyntaxError && 'status' in err && (err as { status: number }).status === 400) {
    res.status(400).json({
      success: false,
      error: {
        message: 'Invalid JSON payload in request body',
        code: 'INVALID_JSON',
      },
    });
    return;
  }

  // Unhandled / Internal Server Errors
  console.error('[Unhandled Error]:', err);

  res.status(500).json({
    success: false,
    error: {
      message: process.env.NODE_ENV === 'production' ? 'An unexpected internal server error occurred' : err.message,
      code: 'INTERNAL_SERVER_ERROR',
    },
  });
};
