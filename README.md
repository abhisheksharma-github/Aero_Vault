# ⚡ AeroVault — Global Multi-Domain Defense & Combat Air Intelligence Platform

[![Build Status](https://img.shields.io/badge/Build-Passing-emerald.svg)](https://github.com/abhisheksharma-github/OrderEase)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3+-cyan.svg)](https://react.dev/)
[![Prisma](https://img.shields.io/badge/Prisma-5.10+-indigo.svg)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4+-sky.svg)](https://tailwindcss.com/)
[![Tests](https://img.shields.io/badge/Tests-16%2F16%20Passed-emerald.svg)](./tests/runTests.ts)
[![Intelligence Model](https://img.shields.io/badge/TVR_Model-Deterministic_7_Pillars-teal.svg)](./TVR_METHODOLOGY.md)

**AeroVault** is an enterprise-grade defense intelligence platform providing multi-domain Order of Battle (OrBat), sovereign military power rankings, and technical hardware telemetry across global armed forces. It delivers mathematical **True Value Rating (TVR)** scoring, the **Global Military Power Index (ATLAS 2026)**, and verified open-source intelligence (OSINT) provenance across **Air, Naval, and Land Combat** domains.

---

## 📑 Table of Contents

- [Key Features](#-key-features)
- [Multi-Domain Intelligence Architecture](#-multi-domain-intelligence-architecture)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [API Endpoints Reference](#-api-endpoints-reference)
- [Deterministic TVR Rating Model](#-deterministic-tvr-rating-model)
- [Production Deployment](#-production-deployment)
- [Project Structure](#-project-structure)
- [Documentation Suite](#-documentation-suite)

---

## 🌟 Key Features

### 1. 🌐 Global Military Power Index (ATLAS 2026)
- Comprehensive sovereign defense leaderboard tracking **162 countries**, **$2.45T USD in defense expenditure**, **58,400+ combat airframes**, and **9,200+ naval warships**.
- Domain-specific power sub-indices:
  - **ATLAS Index:** Overall Multi-Domain Composite Power.
  - **AIRS Index:** Air Superiority & Strike Power Index.
  - **SEAS Index:** Maritime Tonnage & Carrier Strike Power Index.
  - **ARMS Index:** Ground Armor & Land Force Firepower Index.

### 2. 🛩️ Tri-Branch Combat Aviation Vault
- Complete breakdown across dedicated military branches:
  - **Air Force (`AIR_FORCE`):** Air dominance, stealth strike, electronic attack, strategic bombers, and AEW&C surveillance.
  - **Army Aviation (`ARMY_AVIATION`):** High-altitude combat helicopters, anti-armor tank destroyers, and tactical scouting.
  - **Naval Aviation (`NAVAL_AVIATION`):** CATOBAR/STOBAR carrier strike fighters, anti-submarine warfare (ASW), and maritime patrol.

### 3. 🚢 Multi-Domain Naval & Land Combat Fleets
- **Naval Vessels:** Supercarriers (USS Gerald R. Ford, INS Vikrant, CNS Fujian, HMS Queen Elizabeth), Guided Missile Destroyers (INS Surat, Type 055, Arleigh Burke), and Ballistic Missile Submarines (INS Arihant, Ohio-class).
- **Ground Combat Units:** Main Battle Tanks (Arjun Mk-1A, M1A2 Abrams, T-90M, Type 99A), Self-Propelled Howitzers (K9 Vajra), Infantry Fighting Vehicles (M2A4 Bradley), and Air Defense Batteries (S-400 Triumf, Iron Dome).

### 4. 🛰️ Real-Time Intelligence SITREP Feed
- Live defense situation reports categorized across **Air**, **Naval**, **Land**, and **Strategic Defense** domains.
- Chronological event timeline, geo-tagged coordinate tracking, and threat severity assessments.

### 5. ⚔️ Head-to-Head Tactical Comparison Matrix
- Side-by-side technical radar comparisons across 7 capability dimensions: Kinetics, Avionics, Weapons, Stealth Survivability, Operational Range, Modernization, and Logistics.
- Mission scenario simulations: Air Superiority, BVR Interception, Deep Penetration Strike, and Maritime Interdiction.

### 6. 🎨 Military Dark HUD Tactical Aesthetics
- Ultra-sleek dark cockpit UI palette (`#000B18`, `#0A2A4E`, `#00F0FF`, `#10B981`) with glassmorphism, responsive data grids, and telemetry visualizers.
- High-definition verified photography from official military and government archives across all combat assets.

---

## 🏛️ Multi-Domain Intelligence Architecture

```
                                  +-----------------------------+
                                  |    AeroVault Tactical UI    |
                                  |   (React 18 + Tailwind)     |
                                  +--------------+--------------+
                                                 |
                                     REST / JSON | (Port 4000 / Proxy)
                                                 v
                                  +-----------------------------+
                                  |   Express + TypeScript API  |
                                  |   (JWT, Helmet, RateLimit)  |
                                  +--------------+--------------+
                                                 |
                   +-----------------------------+-----------------------------+
                   |                             |                             |
                   v                             v                             v
       +-----------------------+     +-----------------------+     +-----------------------+
       |   Aircraft Service    |     |     ATLAS Service     |     | Intelligence Service  |
       |  - 7-Pillar TVR Calc  |     |  - Country Rankings   |     |  - Multi-Domain Sitrep|
       |  - Tri-Branch Filter  |     |  - AIRS/SEAS/ARMS     |     |  - Naval & Armor OrBat|
       +-----------+-----------+     +-----------+-----------+     +-----------+-----------+
                   |                             |                             |
                   +-----------------------------+-----------------------------+
                                                 |
                                                 v
                                  +-----------------------------+
                                  |  Dual-Mode Data Layer       |
                                  |  1. Neon PostgreSQL (Prisma)|
                                  |  2. In-Memory Resilient DB  |
                                  +-----------------------------+
```

---

## 💻 Tech Stack

- **Frontend:** React 18, Vite 5, Tailwind CSS 3.4, Lucide Icons, Canvas Confetti.
- **Backend:** Node.js, Express 4.18, TypeScript 5.3, Prisma ORM 5.10, Helmet, CORS, Morgan, Express Rate Limit.
- **Database:** PostgreSQL (Neon Serverless / Supabase) with zero-crash in-memory fallback layer.
- **Testing:** Native TypeScript test suite (`tests/runTests.ts`) with 16 deterministic tests.
- **Intelligence Model:** Deterministic True Value Rating (TVR 2.0) calibrated with official DoD, MoD, and Jane's defense citations.

---

## ⚡ Quick Start

### 1. Clone & Install Dependencies
```bash
# Clone the repository
git clone https://github.com/abhisheksharma-github/OrderEase.git
cd AeroVault

# Install root & backend dependencies
npm install

# Install frontend client dependencies
npm --prefix client install
```

### 2. Configure Environment Variables
```bash
# Copy sample configuration
cp .env.example .env
```

Default `.env` contents:
```env
PORT=4000
NODE_ENV=development
DATABASE_URL="postgresql://user:password@localhost:5432/aerovault?schema=public"
CORS_ORIGIN="http://localhost:5173"
ADMIN_API_KEY="aerovault_secure_admin_key_2026"
```

### 3. Run Automated Tests
```bash
npm test
```
*Outputs: 16/16 Passed test suites for TVR kinetics, rotary attack profiles, UAV weightings, OSINT consensus, and multi-domain scenarios.*

### 4. Start Development Servers
```bash
# Terminal 1: Backend Express API (Port 4000)
npm run dev

# Terminal 2: Frontend Vite Client (Port 5173)
npm run client:dev
```

- **Frontend Application:** `http://localhost:5173`
- **Backend API:** `http://localhost:4000/api`
- **Health Check Endpoint:** `http://localhost:4000/api/health`

---

## 📡 API Endpoints Reference

| Method | Endpoint | Description | Query Parameters |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/health` | Service health status & database connectivity | — |
| `GET` | `/api/aircraft` | Paginated military aircraft directory with filters | `country`, `militaryBranch`, `category`, `generation`, `search`, `sortBy`, `page`, `limit` |
| `GET` | `/api/aircraft/:id` | Detailed aircraft specification & weapons payload | — |
| `GET` | `/api/rankings/countries` | Global Military Power Index (ATLAS) rankings | `sortBy` (`atlasIndex`, `airsIndex`, `seasIndex`, `armsIndex`), `order` |
| `GET` | `/api/intelligence/sitrep` | Multi-domain defense situation reports | `domain` (`AIR`, `NAVY`, `LAND`, `STRATEGIC_DEFENSE`), `limit`, `page` |
| `GET` | `/api/naval/vessels` | Warships, aircraft carriers, destroyers & SSBNs | `vesselType`, `country`, `status` |
| `GET` | `/api/ground/vehicles` | Main battle tanks, artillery & SAM batteries | `category`, `country`, `status` |
| `GET` | `/api/intelligence` | National OrBat air intelligence profiles | `countryCode` |
| `GET` | `/api/weapons` | Guided missiles, bombs, torpedoes & autocannons | `type`, `search` |

---

## 🧮 Deterministic TVR Rating Model

The **True Value Rating (TVR)** synthesizes 7 technical dimensions into a normalized 0–100 combat effectiveness index:

$$\text{TVR} = \left[ \sum_{i=1}^{7} (W_i \times S_i) \right] \times M_{\text{stealth}} \times M_{\text{reliability}}$$

| Dimension | Formula Weight (Fighters) | Evaluation Metrics |
| :--- | :---: | :--- |
| **Kinetics** | 20% | Top speed (Mach), climb rate (m/s), thrust-to-weight, g-limits |
| **Avionics** | 22% | AESA radar range, IRST, sensor fusion, datalinks, EW score |
| **Weapons** | 20% | BVR range, max payload capacity (kg), precision munitions |
| **Survivability** | 16% | Radar cross-section (RCS $m^2$), stealth coating, countermeasure suites |
| **Range & Mobility** | 10% | Combat radius (km), ferry range, aerial refueling capability |
| **Modernization** | 7% | Airframe generation (Gen 4.5 / 5 / 6), introduction year |
| **Logistics** | 5% | Maintenance hours per flight hour, operating cost, fleet maturity |

*Read the full mathematical specification in [`TVR_METHODOLOGY.md`](./TVR_METHODOLOGY.md).*

---

## 🚀 Production Deployment

### Recommended Strategy
- **Frontend:** [Vercel](https://vercel.com) (Configured via [`client/vercel.json`](./client/vercel.json))
- **Backend API:** [Render](https://render.com) / [Railway](https://railway.app)
- **Database:** [Neon PostgreSQL](https://neon.tech)

### Fast Deployment Checklist
1. **Push to GitHub:** Commit and push repository to GitHub.
2. **Backend (Render):**
   - Build Command: `npm install && npx prisma generate && npm run build`
   - Start Command: `npm start`
   - Environment Variables: `NODE_ENV=production`, `PORT=4000`, `DATABASE_URL=<neon_url>`, `CORS_ORIGIN=https://<your-vercel-app>.vercel.app`
3. **Frontend (Vercel):**
   - Root Directory: `client`
   - Framework: `Vite`
   - Build Command: `npm run build`
   - Environment Variable: `VITE_API_BASE_URL=https://<your-render-backend>.onrender.com/api`

*For complete DevOps configuration and Docker recipes, see [`DEPLOYMENT.md`](./DEPLOYMENT.md).*

---

## 📂 Project Structure

```
AeroVault/
├── client/                     # Frontend React + Vite SPA
│   ├── src/
│   │   ├── components/         # Tactical HUD components, cards, modals, tickers
│   │   ├── views/              # Overview, Directory, CountryRankingsView, Sitrep, Compare
│   │   ├── services/           # api.js client service with live & fallback layer
│   │   ├── data/               # Mock data & G20 verified defense telemetry
│   │   ├── App.jsx             # Main router & telemetry HUD state container
│   │   └── main.jsx            # Entry point
│   ├── vercel.json             # Vercel SPA routing rewrite rules
│   ├── vite.config.js          # Vite configuration & proxy routes
│   └── package.json
│
├── src/                        # Backend Express + TypeScript Engine
│   ├── controllers/            # Aircraft, Intelligence, ATLAS, Weapons controllers
│   ├── routes/                 # Express REST endpoint routers
│   ├── services/               # TVR engine, ATLAS ranking, Data Quality, OSINT
│   ├── schemas/                # Local Enums & request validation schemas
│   ├── middleware/             # Error handling, 404 handler, rate limiting
│   ├── data/                   # Comprehensive multi-domain dataset & G20 assets
│   ├── app.ts                  # Express application factory
│   └── server.ts               # Server startup & port binding
│
├── prisma/                     # Database schema & seeding
│   ├── schema.prisma           # Relational schema (Countries, Aircraft, Vessels, Vehicles)
│   └── seed.ts                 # High-fidelity seeding script
│
├── tests/                      # Automated Test Suite
│   └── runTests.ts             # 16 unit & integration tests
│
├── API.md                      # Complete API documentation
├── ARCHITECTURE.md             # System architecture & data flow diagrams
├── DATA_MODEL.md               # Database schema & entity relationships
├── DATA_SOURCES.md             # Authoritative OSINT citations & verification tiers
├── DEPLOYMENT.md               # Cloud deployment & DevOps production runbooks
├── OSINT_PIPELINE.md           # Intelligence gathering & conflict resolution pipeline
├── TVR_METHODOLOGY.md          # 7-Pillar mathematical scoring formula
├── tsconfig.json               # Backend TypeScript configuration
└── package.json                # Project dependencies and root scripts
```

---

## 📖 Documentation Suite


- [`DEPLOYMENT.md`](./DEPLOYMENT.md) — Production cloud runbook for Render, Vercel, and Neo
- [`ARCHITECTURE.md`](./ARCHITECTURE.md) — Technical system design, state management, and service layers.
---

## ⚖️ License & Provenance

AeroVault is distributed for academic, strategic research, and defense analysis purposes. All hardware specifications are derived from publicly available government whitepapers, OEM releases, and verified OSINT defense publications.
