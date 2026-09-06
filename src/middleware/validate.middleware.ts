import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';

interface ValidationSchema {
  body?: ZodSchema;
  query?: ZodSchema;
  params?: ZodSchema;
}

export const validate = (schemas: ValidationSchema) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      if (schemas.params) {
        const parsedParams = await schemas.params.parseAsync(req.params);
        for (const key of Object.keys(req.params)) {
          delete (req.params as Record<string, unknown>)[key];
        }
        Object.assign(req.params, parsedParams);
      }

      if (schemas.query) {
        const parsedQuery = await schemas.query.parseAsync(req.query);
        for (const key of Object.keys(req.query)) {
          delete (req.query as Record<string, unknown>)[key];
        }
        Object.assign(req.query, parsedQuery);
      }

      if (schemas.body) {
        req.body = await schemas.body.parseAsync(req.body);
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
