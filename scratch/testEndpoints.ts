import express from 'express';
import routes from '../src/routes/index.js';
import { errorHandler } from '../src/middleware/error.middleware.js';

const app = express();
app.use(express.json());
app.use('/api', routes);
app.use(errorHandler);

const server = app.listen(4999, async () => {
  console.log('Test server listening on port 4999');

  const testEndpoints = [
    '/api/intelligence/sitrep?limit=6',
    '/api/aircraft?sortBy=tvrScore&sortOrder=desc',
    '/api/intelligence',
    '/api/rankings/countries',
    '/api/countries',
    '/api/manufacturers',
    '/api/aircraft/search',
    '/api/health',
  ];

  let allPassed = true;

  for (const endpoint of testEndpoints) {
    try {
      const res = await fetch(`http://localhost:4999${endpoint}`);
      const json = await res.json();
      if (res.status === 200 && json.success !== false) {
        console.log(`✅ [${res.status}] ${endpoint} -> OK (data items/count: ${Array.isArray(json.data) ? json.data.length : (json.count || 'object')})`);
      } else {
        console.error(`❌ [${res.status}] ${endpoint} -> FAILED:`, json);
        allPassed = false;
      }
    } catch (err) {
      console.error(`❌ Exception on ${endpoint}:`, err);
      allPassed = false;
    }
  }

  server.close(() => {
    console.log(`\nEndpoint verification result: ${allPassed ? 'ALL PASSED ✅' : 'SOME FAILED ❌'}`);
    process.exit(allPassed ? 0 : 1);
  });
});
