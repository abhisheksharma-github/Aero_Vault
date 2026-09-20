import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/app.js';
import {
  vaultCountries,
  vaultForceProfiles,
  vaultIntelligence,
  vaultAircraft,
  vaultNaval,
  vaultLand,
  vaultWeapons,
  vaultSitrep,
  vaultManufacturers,
} from '../src/data/vaultLoader.js';

const app = createApp();

describe('Phase 2 — Data Coverage & Per-Entity JSON Vault Tests', () => {
  it('vaultLoader loads and validates all 9 individual JSON collections', () => {
    expect(vaultCountries.length).toBeGreaterThanOrEqual(19);
    expect(vaultForceProfiles.length).toBeGreaterThanOrEqual(19);
    expect(vaultIntelligence.length).toBeGreaterThanOrEqual(19);
    expect(vaultAircraft.length).toBeGreaterThanOrEqual(30);
    expect(vaultNaval.length).toBeGreaterThanOrEqual(5);
    expect(vaultLand.length).toBeGreaterThanOrEqual(5);
    expect(vaultWeapons.length).toBeGreaterThanOrEqual(5);
    expect(vaultSitrep.length).toBeGreaterThanOrEqual(5);
    expect(vaultManufacturers.length).toBeGreaterThanOrEqual(10);
  });

  it('GET /api/countries returns items with coverage metadata', async () => {
    const res = await request(app).get('/api/countries');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);

    const india = res.body.data.find((c: any) => c.countryCode === 'IND' || c.name === 'India');
    expect(india).toBeDefined();
    expect(india.coverage).toBeDefined();
    expect(typeof india.coverage.completeness).toBe('number');
    expect(india.coverage.completeness).toBeGreaterThanOrEqual(0.6);
    expect(typeof india.coverage.hasForceProfile).toBe('boolean');
    expect(typeof india.coverage.hasIntelligenceDossier).toBe('boolean');
    expect(typeof india.coverage.aircraftCount).toBe('number');
  });

  it('GET /api/countries/India returns country dossier with coverage metadata', async () => {
    const res = await request(app).get('/api/countries/India');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.name).toBe('India');
    expect(res.body.data.coverage).toBeDefined();
    expect(res.body.data.coverage.completeness).toBeGreaterThan(0);
    expect(res.body.data.coverage.aircraftCount).toBeGreaterThan(0);
  });

  it('GET /api/rankings/countries returns force profiles with coverage metadata', async () => {
    const res = await request(app).get('/api/rankings/countries');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);

    const first = res.body.data[0];
    expect(first.coverage).toBeDefined();
    expect(typeof first.coverage.completeness).toBe('number');
  });

  it('GET /api/countries/IND/inventory returns multi-domain inventory with coverage metadata', async () => {
    const res = await request(app).get('/api/countries/IND/inventory');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.coverage).toBeDefined();
    expect(typeof res.body.data.coverage.completeness).toBe('number');
    expect(res.body.data.inventory).toBeDefined();
  });
});
