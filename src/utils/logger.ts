type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogContext {
  [key: string]: unknown;
}

class StructuredLogger {
  private formatLog(level: LogLevel, message: string, context?: LogContext | Error) {
    const timestamp = new Date().toISOString();
    let errorDetails: Record<string, unknown> | undefined;

    if (context instanceof Error) {
      errorDetails = {
        name: context.name,
        message: context.message,
        stack: context.stack,
      };
      context = undefined;
    } else if (context && typeof context === 'object' && 'error' in context && context.error instanceof Error) {
      const err = context.error as Error;
      errorDetails = {
        name: err.name,
        message: err.message,
        stack: err.stack,
      };
    }

    const payload = {
      timestamp,
      level: level.toUpperCase(),
      message,
      ...(context ? { context } : {}),
      ...(errorDetails ? { error: errorDetails } : {}),
    };

    return JSON.stringify(payload);
  }

  info(message: string, context?: LogContext): void {
    console.log(this.formatLog('info', message, context));
  }

  warn(message: string, context?: LogContext | Error): void {
    console.warn(this.formatLog('warn', message, context));
  }

  error(message: string, context?: LogContext | Error): void {
    console.error(this.formatLog('error', message, context));
  }

  debug(message: string, context?: LogContext): void {
    if (process.env.DEBUG === 'true' || process.env.NODE_ENV === 'development') {
      console.debug(this.formatLog('debug', message, context));
    }
  }
}

export const logger = new StructuredLogger();
