import { createApp } from './app.js';
import { prisma } from './db.js';
import { initRepositories } from './repositories/index.js';
import { logger } from './utils/logger.js';

const PORT = Number(process.env.PORT) || 4000;
const HOST = process.env.HOST || '0.0.0.0';

async function bootstrap() {
  const source = await initRepositories(2000);
  logger.info(`Repository initialized with data source: ${source}`);

  const app = createApp();

  const server = app.listen(PORT, HOST, () => {
    console.log(`
  ======================================================
  🚀 AeroVault Intelligence Engine API Server Online
  📡 Listening on: http://${HOST}:${PORT} (and http://127.0.0.1:${PORT})
  🌍 Environment: ${process.env.NODE_ENV || 'development'}
  💾 Data Source: ${source.toUpperCase()}
  ======================================================
    `);
  });

  // Graceful Shutdown Handler
  const gracefulShutdown = async (signal: string) => {
    console.log(`\n🛑 Received ${signal}. Starting graceful shutdown...`);

    server.close(async () => {
      console.log('🔒 HTTP server closed.');
      try {
        await prisma.$disconnect();
        console.log('📦 Database connection disconnected.');
        process.exit(0);
      } catch (err) {
        console.error('⚠️ Error disconnecting database:', err);
        process.exit(1);
      }
    });

    // Force close after 10s if graceful shutdown hangs
    setTimeout(() => {
      console.error('⚠️ Forcefully terminating server due to shutdown timeout.');
      process.exit(1);
    }, 10000);
  };

  process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
  process.on('SIGINT', () => gracefulShutdown('SIGINT'));

  return server;
}

const serverPromise = bootstrap();
export default serverPromise;
