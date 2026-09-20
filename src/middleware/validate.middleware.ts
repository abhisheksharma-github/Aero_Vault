import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';

interface ValidationSchema {
  body?: ZodSchema;
  query?: ZodSchema;
  params?: ZodSchema;
}

export function validatedQuery<T>(req: Request): T {
  return (req.validated?.query ?? req.query) as T;
}

export function validatedParams<T>(req: Request): T {
  return (req.validated?.params ?? req.params) as T;
}

export function validatedBody<T>(req: Request): T {
  return (req.validated?.body ?? req.body) as T;
}

export const validate = (schemas: ValidationSchema) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      if (!req.validated) {
        req.validated = {};
      }

      if (schemas.params) {
        const parsedParams = await schemas.params.parseAsync(req.params);
        req.validated.params = parsedParams;
        Object.assign(req.params, parsedParams);
      }

      if (schemas.query) {
        const parsedQuery = await schemas.query.parseAsync(req.query);
        req.validated.query = parsedQuery;
      }

      if (schemas.body) {
        const parsedBody = await schemas.body.parseAsync(req.body);
        req.validated.body = parsedBody;
        req.body = parsedBody;
      }

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          success: false,
          error: {
            message: 'Validation failed',
            code: 'VALIDATION_ERROR',
            details: error.issues.map((issue) => ({
              field: issue.path.join('.'),
              message: issue.message,
              code: issue.code,
            })),
          },
        });
        return;
      }
      next(error);
    }
  };
};
