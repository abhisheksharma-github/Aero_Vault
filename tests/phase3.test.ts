import { describe, it, expect, beforeAll } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/app.js';
import { initRepositories } from '../src/repositories/index.js';

const app = createApp();

describe('Phase 3: Architecture, Repositories, Auth & Health', () => {
  beforeAll(async () => {
    process.env.ADMIN_API_KEY = 'test-secret-key';
    await initRepositories();
  });

  describe('3.1 Repository Pattern & Data Source Header', () => {
    it('should include X-AeroVault-Source header in responses', async () => {
      const res = await request(app).get('/api/aircraft');
      expect(res.status).toBe(200);
      expect(res.headers['x-aerovault-source']).toBeDefined();
      expect(['vault', 'postgres']).toContain(res.headers['x-aerovault-source']);
    });
  });

  describe('3.6 Health Endpoints', () => {
    it('GET /api/health/live returns 200 ok', async () => {
      const res = await request(app).get('/api/health/live');
      expect(res.status).toBe(200);
      expect(res.body).toMatchObject({
        status: 'ok',
        uptime: expect.any(Number),
      });
    });

    it('GET /api/health/ready returns readiness status and database probe state', async () => {
      const res = await request(app).get('/api/health/ready');
      expect([200, 503]).toContain(res.status);
      expect(res.body).toHaveProperty('status');
      expect(res.body).toHaveProperty('database');
    });

    it('GET /api/health returns aggregate health status', async () => {
      const res = await request(app).get('/api/health');
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('status');
      expect(res.body).toHaveProperty('database');
      expect(res.body).toHaveProperty('source');
    });
  });

  describe('3.7 Admin API Key Authentication on Aircraft Mutations', () => {
    it('POST /api/aircraft without X-Admin-Key returns 401', async () => {
      const res = await request(app)
        .post('/api/aircraft')
        .send({
          name: 'Test Jet',
          role: 'Air Superiority',
        });

      expect(res.status).toBe(401);
      expect(res.body.error.message).toMatch(/admin api key required/i);
    });

    it('POST /api/aircraft with invalid X-Admin-Key returns 403', async () => {
      const res = await request(app)
        .post('/api/aircraft')
        .set('X-Admin-Key', 'wrong-key')
        .send({
          name: 'Test Jet',
          role: 'Air Superiority',
        });

      expect(res.status).toBe(403);
      expect(res.body.error.message).toMatch(/invalid admin api key/i);
    });

    it('POST /api/aircraft with valid X-Admin-Key validates and creates or rejects with 400 schema error', async () => {
      const validPayload = {
        name: 'F-22B Raptor II',
        manufacturer: 'Lockheed Martin',
        originCountry: 'United States',
        country: 'United States',
        affiliation: 'NATO',
        category: 'AIR_SUPERIORITY',
        generation: 'GEN_5',
        era: 'MODERN',
        role: 'Stealth Air Superiority Fighter',
        engineModel: 'Pratt & Whitney F119-PW-100',
        description: 'Advanced stealth air superiority fighter aircraft.',
        imageUrl: 'https://images.unsplash.com/photo-1519074069444-1ba4fff16def',
      };

      const res = await request(app)
        .post('/api/aircraft')
        .set('X-Admin-Key', 'test-secret-key')
        .send(validPayload);

      expect([200, 201]).toContain(res.status);
      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe('F-22B Raptor II');
    });
  });

  describe('3.8 Canonical Route Redirects', () => {
    it('GET /api/intelligence/rankings/countries returns 301 redirecting to /api/rankings/countries', async () => {
      const res = await request(app).get('/api/intelligence/rankings/countries');
      expect(res.status).toBe(301);
      expect(res.headers.location).toBe('/api/rankings/countries');
    });

    it('GET /api/intelligence/countries/US/inventory returns 301 redirecting to /api/countries/US/inventory', async () => {
      const res = await request(app).get('/api/intelligence/countries/US/inventory');
      expect(res.status).toBe(301);
      expect(res.headers.location).toBe('/api/countries/US/inventory');
    });
  });
});
