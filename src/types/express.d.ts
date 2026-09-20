import 'express';

declare global {
  namespace Express {
    interface Request {
      validated?: {
        query?: unknown;
        params?: unknown;
        body?: unknown;
      };
    }
  }
}

export {};
