import { describe, it, expect, beforeAll } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/app.js';
import { initRepositories } from '../src/repositories/index.js';

const app = createApp();

describe('Phase 5 & 6: Public API Contract, OpenAPI 3.1 & Response Schema Verification', () => {
  beforeAll(async () => {
    await initRepositories();
  });

  describe('OpenAPI 3.1 Documentation Endpoints', () => {
    it('GET /api/docs/openapi.json returns valid OpenAPI 3.1.0 specification', async () => {
      const res = await request(app).get('/api/docs/openapi.json');
      expect(res.status).toBe(200);
      expect(res.body.openapi).toBe('3.1.0');
      expect(res.body.info.title).toMatch(/AeroVault/i);
      expect(res.body.paths).toHaveProperty('/aircraft');
    });

    it('GET /api/docs returns interactive Swagger UI HTML page', async () => {
      const res = await request(app).get('/api/docs');
      expect(res.status).toBe(200);
      expect(res.headers['content-type']).toMatch(/text\/html/);
      expect(res.text).toContain('AEROVAULT DEFENSE INTELLIGENCE ENGINE');
    });
  });

  describe('Core Aircraft Endpoints', () => {
    it('GET /api/aircraft returns paginated list conforming to contract', async () => {
      const res = await request(app).get('/api/aircraft?limit=5');
      expect(res.status).toBe(200);
      expect(res.body).toMatchObject({
        success: true,
        data: expect.any(Array),
        pagination: {
          page: expect.any(Number),
          limit: expect.any(Number),
          total: expect.any(Number),
          totalPages: expect.any(Number),
        },
      });
      expect(res.body.data.length).toBeLessThanOrEqual(5);
    });

    it('GET /api/aircraft/:id returns complete tactical dossier', async () => {
      const res = await request(app).get('/api/aircraft/ind-su30mki');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('id');
      expect(res.body.data).toHaveProperty('name');
      expect(res.body.data).toHaveProperty('category');
    });

    it('GET /api/aircraft/:id/tvr returns multidimensional TVR breakdown', async () => {
      const res = await request(app).get('/api/aircraft/ind-su30mki/tvr');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('tvr');
      expect(res.body.data.tvr).toHaveProperty('overall');
      expect(res.body.data.tvr).toHaveProperty('dimensions');
    });
  });

  describe('Multi-Domain Fleet & Intelligence Endpoints', () => {
    it('GET /api/rankings/countries returns force profiles with coverage', async () => {
      const res = await request(app).get('/api/rankings/countries?limit=5');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      if (res.body.data.length > 0) {
        expect(res.body.data[0]).toHaveProperty('country');
        expect(res.body.data[0]).toHaveProperty('atlasIndex');
        expect(res.body.data[0]).toHaveProperty('coverage');
      }
    });

    it('GET /api/countries returns sovereign country dossiers with coverage', async () => {
      const res = await request(app).get('/api/countries');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      if (res.body.data.length > 0) {
        expect(res.body.data[0]).toHaveProperty('name');
        expect(res.body.data[0]).toHaveProperty('coverage');
      }
    });

    it('GET /api/countries/:id/inventory returns multi-domain breakdown', async () => {
      const res = await request(app).get('/api/countries/IND/inventory');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('profile');
      expect(res.body.data).toHaveProperty('coverage');
    });

    it('GET /api/naval/vessels returns naval fleet vessels', async () => {
      const res = await request(app).get('/api/naval/vessels?limit=5');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
    });

    it('GET /api/land/vehicles returns armored land vehicles', async () => {
      const res = await request(app).get('/api/land/vehicles?limit=5');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
    });

    it('GET /api/weapons returns missile and ordnance inventory', async () => {
      const res = await request(app).get('/api/weapons');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
    });

    it('GET /api/osint/quality returns data quality index and stats', async () => {
      const res = await request(app).get('/api/osint/quality');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('integrityHealthIndex');
    });

    it('GET /api/osint/changes returns tracked telemetry changes', async () => {
      const res = await request(app).get('/api/osint/changes');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
    });

    it('GET /api/reports/nations/:id generates strategic defense report', async () => {
      const res = await request(app).get('/api/reports/nations/India');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('reportTitle');
    });
  });
});
