# AeroVault — Architecture & Engineering Specification

## 1. System Overview

AeroVault is structured as a decoupled, high-resilience full-stack architecture consisting of an Express/TypeScript analytical API backend and a Vite/React tactical cockpit frontend with autonomous local vault offline fallback.

```
┌─────────────────────────────────────────────────────────────┐
│                    AEROVAULT FRONTEND                       │
│  React 18 + Tailwind CSS + Lucide Icons + Vite              │
│  - Overview Dashboard      - Dedicated Branch Fleet Views   │
│  - 9-Tab Detail Dossier    - Split-Screen Comparison Tool   │
│  - "What Changed?" Feed    - Quality & Conflict Audit       │
└──────────────────────────────┬──────────────────────────────┘
                               │ JSON REST API
┌──────────────────────────────▼──────────────────────────────┐
│                    AEROVAULT API ENGINE                     │
│  Node.js + Express + TypeScript + Zod Validation            │
│  ├── TVR Analytics Engine (src/services/tvr.service.ts)     │
│  ├── Comparison Engine (src/services/comparison.service.ts) │
│  ├── OSINT Provenance Engine (src/services/osint.service.ts)│
│  └── Report Generator (src/services/report.service.ts)      │
└──────────────────────────────┬──────────────────────────────┘
                               │ Prisma ORM
┌──────────────────────────────▼──────────────────────────────┐
│                  POSTGRESQL / NEON DATABASE                 │
│  - Aircraft & Variants     - Military Branches & Fleets     │
│  - Weapons & Ordnance      - Data Sources & Attribution     │
│  - Historical Deltas       - Conflicting OSINT Claims       │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Backend Modules & Services

### `tvr.service.ts` (True Value Rating Engine)
Computes mathematical airpower efficacy (0–100) across 7 capability dimensions:
1. **Kinetics:** Top Mach speed, climb rate, structural turn G-limits, and thrust-to-weight.
2. **Avionics & Sensors:** AESA/PESA radar arrays, synthetic aperture tracking, sensor fusion, IRST, and Link-16/MADL datalinks.
3. **Weapons Integration:** Payload tonnage, BVR/WVR missile count, standoff cruise missiles, and precision guidance.
4. **Survivability:** Radar cross-section (RCS), thermal IR suppression, and digital EW jamming.
5. **Operational Range:** Unrefueled combat radius calibrated to role profiles (Fighter vs Bomber vs Rotary vs UAV).
6. **Modernization:** 4th vs 4.5 vs 5th-generation stealth avionics and mission computer architecture.
7. **Logistics & Fleet Reliability:** Maintenance man-hours per flight hour and operational availability.

### `comparison.service.ts` (Tactical Benchmark & Mission Simulator)
Evaluates head-to-head combatants across:
- **Aircraft vs. Aircraft** (e.g. *F-22A* vs *Su-57 Felon*)
- **Variant vs. Variant** (e.g. *Su-30MKI* vs *Su-30SM2*)
- **Branch vs. Branch** (e.g. *US Navy Carrier Air Wing* vs *PLAN-AF*)
- **Mission Simulations:** Beyond-Visual-Range (*BVR*), Suppression of Enemy Air Defenses (*SEAD*), Close Air Support (*CAS*), Long-Range Maritime Strike (*ASuW*), and Sub-Surface Hunting (*ASW*).

### `osint.service.ts` (OSINT Provenance & Consensus Engine)
Maintains verifiable data standards:
- Aggregates multi-source claims across Tier 1, Tier 2, and Tier 3 defense references.
- Calculates weighted consensus values and detects data conflicts when discrepancies exceed ±10%.
- Assigns confidence scores (`VERIFIED`, `PARTIALLY_VERIFIED`, `ESTIMATED`, `CONFLICTING`).

---

## 3. High-Resilience Offline Mode
The frontend (`client/src/services/api.js`) automatically detects database availability. If the backend is unreachable or operating in disconnected environments, the frontend automatically falls back to the embedded military air fleet vault dataset (`client/src/data/mockData.js`) without disrupting user queries, filters, or comparison workflows.
