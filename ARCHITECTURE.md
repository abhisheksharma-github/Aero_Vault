# AeroVault — Architecture & Engineering Specification

## 1. System Overview

AeroVault is structured as a decoupled, high-resilience full-stack defense intelligence platform consisting of an Express 5 / TypeScript analytical API backend and a Vite 5 / React 18 tactical cockpit frontend.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            AEROVAULT FRONTEND                               │
│  React 18 + Tailwind CSS + Lucide Icons + Vite 5 (Manual Chunks Splitting)  │
│  ├── Overview & Airpower Dashboard        ├── Country Rankings (ATLAS)      │
│  ├── Sovereign Country Explorer (G20)     ├── Multi-Domain Naval Fleet      │
│  ├── Aircraft Directory & Search          ├── Multi-Domain Land Fleet       │
│  ├── Tactical Benchmark Station           ├── Live SITREP Threat Feed       │
│  └── Fault-Tolerant Error Boundaries      └── Skeleton Shimmer Loaders      │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ JSON REST API / OpenAPI 3.1
┌──────────────────────────────────────▼──────────────────────────────────────┐
│                            AEROVAULT API ENGINE                             │
│  Node.js + Express 5 + TypeScript + Zod Validation + Structured JSON Logger │
│  ├── TVR Analytics Engine (src/services/tvr.service.ts)                     │
│  ├── Comparison Engine (src/services/comparison.service.ts)                 │
│  ├── OSINT Provenance Engine (src/services/osint.service.ts)                │
│  ├── Multi-Domain Coverage Engine (src/types/coverage.types.ts)             │
│  └── Dual-Mode Repository Router (src/repositories/index.ts)                │
└───────────────────┬─────────────────────────────────────┬───────────────────┘
                    │ (Primary / Active DB)               │ (Zero-Downtime Fallback)
┌───────────────────▼───────────────────┐ ┌───────────────▼───────────────────┐
│     POSTGRESQL / PRISMA ORM           │ │       STRUCTURED JSON VAULT       │
│  - Lazy connection proxy              │ │  9 validated entity JSON files:   │
│  - Aircraft & Naval & Land Fleets     │ │  countries, aircraft, naval, land,│
│  - Sovereign force profiles           │ │  weapons, sitrep, force profiles, │
│  - Historical deltas & change logs    │ │  intelligence, manufacturers      │
└───────────────────────────────────────┘ └───────────────────────────────────┘
```

---

## 2. Dual-Mode Repository Architecture

AeroVault implements an enterprise repository abstraction (`IAircraftRepository`) decoupling the application services from direct database dependencies:

```typescript
export interface IAircraftRepository {
  list(params: AircraftQueryParams): Promise<AircraftListResult>;
  getById(idOrSlugOrAlias: string): Promise<CanonicalAircraft | null>;
  create(data: CreateAircraftInput): Promise<CanonicalAircraft>;
  update(id: string, data: UpdateAircraftInput): Promise<CanonicalAircraft | null>;
  delete(id: string): Promise<boolean>;
  getDataSourceType(): 'postgres' | 'vault';
}
```

### Automatic Zero-Downtime Fallback
- **Startup Probe (`initRepositories`)**: Non-blocking connection probe with a 2-second timeout against PostgreSQL.
- If PostgreSQL is reachable and migrated, `PrismaAircraftRepository` is activated.
- If PostgreSQL is unreachable or credentials are unconfigured, `VaultAircraftRepository` instantly takes over without runtime request latency or try/catch cascade timeouts.
- **Telemetry Response Header**: Every API response injects `X-AeroVault-Source: postgres | vault` indicating the backing engine.

---

## 3. Backend Services & Analytics Modules

### `tvr.service.ts` (Tactical Valuation Rating Engine)
Computes mathematical airpower efficacy (0–100) across 7 capability dimensions:
1. **Kinetics:** Top Mach speed, climb rate, structural turn G-limits, and thrust-to-weight ratio.
2. **Avionics & Sensors:** AESA/PESA radar arrays, synthetic aperture tracking, sensor fusion, IRST, and Link-16/MADL datalinks.
3. **Weapons Integration:** Payload tonnage, BVR/WVR missile count, standoff cruise missiles, and precision guidance.
4. **Survivability:** Radar cross-section (RCS), thermal IR suppression, and digital EW jamming.
5. **Operational Range:** Unrefueled combat radius calibrated to role profiles (Fighter vs Bomber vs Rotary vs UAV).
6. **Modernization:** 4th vs 4.5 vs 5th-generation stealth avionics and mission computer architecture.
7. **Logistics & Fleet Reliability:** Maintenance man-hours per flight hour and operational availability.

### `coverage.types.ts` (Multi-Domain Coverage Indexing)
Computes data completeness metadata for all 20 G20 sovereign nations across Air, Naval, and Land military domains, attaching verified flags:
```json
{
  "hasAir": true,
  "hasNaval": true,
  "hasLand": true,
  "airCount": 6,
  "navalCount": 2,
  "landCount": 3,
  "completeness": "complete"
}
```

### `auth.middleware.ts` (Timing-Safe Admin Security)
Protects write and mutation routes (POST, PUT, DELETE) using constant-time buffer comparison (`crypto.timingSafeEqual`) against `ADMIN_API_KEY`.

### `health.routes.ts` (Liveness & Readiness Probing)
- `GET /api/health/live`: Fast liveness check (200 OK if process running).
- `GET /api/health/ready`: Readiness probe verifying PostgreSQL connection with 1.5s timeout (200 if connected, 503 with `fallback: 'vault'` if offline).
- `GET /api/health`: Aggregate health telemetry.

---

## 4. API Endpoints & OpenAPI 3.1 Specification

Interactive Swagger UI documentation is hosted at `/api/docs` and the raw OpenAPI 3.1.0 schema is served at `/api/docs/openapi.json`.

| Method | Endpoint | Description | Auth |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/health/live` | Process liveness check | Public |
| `GET` | `/api/health/ready` | Database readiness check | Public |
| `GET` | `/api/docs` | Interactive Swagger UI documentation | Public |
| `GET` | `/api/aircraft` | Paginated aircraft listing with multi-query filter | Public |
| `POST` | `/api/aircraft` | Register verified aircraft into registry | `X-Admin-Key` |
| `GET` | `/api/aircraft/:id` | Single aircraft specs by ID or alias | Public |
| `GET` | `/api/aircraft/:id/tvr` | 7-dimension TVR capability breakdown | Public |
| `GET` | `/api/rankings/countries` | ATLAS composite global military rankings | Public |
| `GET` | `/api/countries` | Sovereign G20 nation profiles & budgets | Public |
| `GET` | `/api/countries/:id/inventory` | Multi-domain air, naval, and land inventory | Public |
| `GET` | `/api/naval/vessels` | Aircraft carriers, destroyers, submarines | Public |
| `GET` | `/api/land/vehicles` | Main battle tanks, IFVs, artillery | Public |
| `GET` | `/api/weapons` | Missiles, bombs, and tactical ordnance | Public |
| `GET` | `/api/intelligence/compare` | Head-to-head tactical comparison matrix | Public |
| `GET` | `/api/osint/quality` | OSINT provenance quality audit | Public |
| `GET` | `/api/osint/changes` | Tracked data modification log | Public |

---

## 5. Frontend Architecture & Bundle Hygiene

- **Vite 5 Chunk Optimization**: Configured `manualChunks` separating `vendor-react` (React, ReactDOM), `vendor-icons` (Lucide Icons), and `vendor-utils`, keeping all bundle chunks under 450 kB.
- **Fault Isolation**: Per-view `ErrorBoundary` wrappers preventing cascade UI failures while allowing localized view re-tries.
- **Loading State Skeleton Screens**: Custom tactical pulsing wireframes across directories, rankings, and fleet grids.
- **Stable React Keys**: Deterministic entity-based keys across all mapped lists.

---

## 6. Testing & CI Pipeline

- **Vitest Automated Suite**: Over 40 unit, integration, and contract tests covering:
  - TVR engine mathematical calibration
  - Express 5 pagination and query coercion
  - Vault and seed data consistency
  - Dual-mode repository switching & headers
  - Timing-safe admin authentication
  - Public API contract schema verification
- **GitHub Actions CI Workflow** (`.github/workflows/ci.yml`):
  - Matrix testing on Node 20.x and 22.x
  - Backend typechecking (`npm run typecheck`)
  - Automated test runs (`npm test`)
  - Vault seed integrity verification (`npm run db:seed:verify`)
  - Frontend production build verification (`npm --prefix client run build`)
