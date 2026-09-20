import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/app.js';
import { aircraftVault } from '../src/data/normalize.js';

const app = createApp();

describe('Phase 1 — Critical Correctness Bugs', () => {
  describe('1.1 Express 5 query coercion & pagination', () => {
    it('returns exactly 5 items when page=2&limit=5', async () => {
      const res = await request(app).get('/api/aircraft?page=2&limit=5');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveLength(5);
      expect(typeof res.body.pagination.limit).toBe('number');
      expect(res.body.pagination.limit).toBe(5);
      expect(res.body.pagination.page).toBe(2);
    });

    it('applies schema default (24) when limit is omitted', async () => {
      const res = await request(app).get('/api/aircraft');
      expect(res.status).toBe(200);
      expect(res.body.pagination.limit).toBe(24);
      expect(typeof res.body.pagination.limit).toBe('number');
    });
  });

  describe('1.2 Aircraft detail route resolves realistic non-UUID IDs', () => {
    it('resolves every ID returned by the list endpoint', async () => {
      const listRes = await request(app).get('/api/aircraft?limit=100');
      expect(listRes.status).toBe(200);
      const items = listRes.body.data;
      expect(items.length).toBeGreaterThan(0);

      await Promise.all(
        items.map(async (item: any) => {
          const detailRes = await request(app).get(`/api/aircraft/${encodeURIComponent(item.id)}`);
          expect(detailRes.status).toBe(200);
          expect(detailRes.body.success).toBe(true);
          expect(detailRes.body.data).toBeDefined();
        })
      );
    }, 15000);

    it('resolves TVR and sources subroutes with non-UUID IDs', async () => {
      const sampleId = 'ind-su30mki';
      const tvrRes = await request(app).get(`/api/aircraft/${sampleId}/tvr`);
      expect(tvrRes.status).toBe(200);
      expect(tvrRes.body.data.tvr).toBeDefined();

      const sourcesRes = await request(app).get(`/api/aircraft/${sampleId}/sources`);
      expect(sourcesRes.status).toBe(200);
      expect(sourcesRes.body.data.sources).toBeDefined();
    });
  });

  describe('1.3 Merged canonical aircraft dataset behind one resource', () => {
    it('resolves IDs and aliases in the vault via /api/aircraft/:id', async () => {
      expect(aircraftVault.length).toBeGreaterThan(15);
      const aliasChecks: Promise<void>[] = [];

      for (const aircraft of aircraftVault) {
        for (const alias of aircraft.aliases) {
          aliasChecks.push(
            request(app)
              .get(`/api/aircraft/${encodeURIComponent(alias)}`)
              .then((res) => {
                expect(res.status).toBe(200);
                expect(res.body.success).toBe(true);
              })
          );
        }
      }

      await Promise.all(aliasChecks);
    }, 15000);

    it('returns consistent key sets from search and list endpoints', async () => {
      const listRes = await request(app).get('/api/aircraft?limit=5');
      const searchRes = await request(app).get('/api/aircraft/search?q=su');

      expect(listRes.status).toBe(200);
      expect(searchRes.status).toBe(200);

      const listItem = listRes.body.data[0];
      const searchItem = searchRes.body.data[0];

      expect(listItem).toHaveProperty('id');
      expect(listItem).toHaveProperty('name');
      expect(listItem).toHaveProperty('country');
      expect(listItem).toHaveProperty('category');
      expect(listItem).toHaveProperty('militaryBranch');

      expect(searchItem).toHaveProperty('id');
      expect(searchItem).toHaveProperty('name');
      expect(searchItem).toHaveProperty('country');
      expect(searchItem).toHaveProperty('category');
      expect(searchItem).toHaveProperty('militaryBranch');
    });
  });

  describe('1.4 militaryBranch filter and strict query schemas', () => {
    it('filters aircraft by militaryBranch correctly', async () => {
      const res = await request(app).get('/api/aircraft?militaryBranch=NAVAL_AVIATION');
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBeGreaterThan(0);
      for (const item of res.body.data) {
        expect(item.militaryBranch).toBe('NAVAL_AVIATION');
      }
    });

    it('rejects unknown query parameters with 400 status', async () => {
      const res = await request(app).get('/api/aircraft?invalidParam=true');
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe('VALIDATION_ERROR');
    });
  });

  describe('1.5 Categories endpoint matches category filter', () => {
    it('returns structured category objects with value, label, group', async () => {
      const res = await request(app).get('/api/aircraft/categories');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);

      const first = res.body.data[0];
      expect(first).toHaveProperty('value');
      expect(first).toHaveProperty('label');
      expect(first).toHaveProperty('group');
    });

    it('accepts every category value returned by /categories in ?category= filter', async () => {
      const categoriesRes = await request(app).get('/api/aircraft/categories');
      expect(categoriesRes.status).toBe(200);

      await Promise.all(
        categoriesRes.body.data.map(async (cat: any) => {
          const filterRes = await request(app).get(`/api/aircraft?category=${cat.value}`);
          expect(filterRes.status).toBe(200);
          expect(filterRes.body.success).toBe(true);
        })
      );
    }, 15000);
  });
});
