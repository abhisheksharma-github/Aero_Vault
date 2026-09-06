# 🚀 AeroVault — Cloud Deployment & DevOps Production Runbook

This guide provides step-by-step production runbooks for provisioning **Neon PostgreSQL**, deploying the **Express + TypeScript Backend API** (Render / Railway), and deploying the **Vite + React Frontend** (Vercel / Netlify).

---

## 1. Database Provisioning (Neon PostgreSQL)

1. Create a project at [Neon.tech](https://neon.tech).
2. Note your connection strings:
   * **Pooled Connection (PgBouncer)**: Used for application runtime (`PORT 6543`).
   * **Direct Connection**: Used for schema migrations.

```env
# Runtime Database URL (Pooled)
DATABASE_URL="postgresql://neondb_owner:YOUR_PASSWORD@ep-cool-dawn-123456-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require&pgbouncer=true"
```

---

## 2. Database Migration & Seeding Terminal Commands

Run these commands from the project root:

```bash
# 1. Install all dependencies
npm install
npm --prefix client install

# 2. Generate Prisma Client
npx prisma generate

# 3. Apply schema migration to Neon in development:
npx prisma migrate dev --name init_aerovault_v2

# 4. In production CI/CD pipelines (Zero downtime deploy):
npx prisma migrate deploy

# 5. Populate database with high-fidelity military intelligence seed data:
npm run db:seed

# 6. Verify integrity by running automated test suite:
npm test
```

---

## 3. Backend Deployment (Render / Railway)

### Option A: Render Web Service

1. Connect your GitHub repository to [Render](https://render.com).
2. Select **Web Service**.
3. Configure the service settings:
   * **Name**: `aerovault-api`
   * **Runtime**: `Node`
   * **Region**: Choose closest to your Neon database (e.g. `Ohio / us-east-2`)
   * **Branch**: `main`
   * **Build Command**:
     ```bash
     npm install && npx prisma generate && npm run build
     ```
   * **Start Command**:
     ```bash
     npm start
     ```
4. Set Environment Variables in Render Dashboard:
   | Key | Value |
   | :--- | :--- |
   | `NODE_ENV` | `production` |
   | `PORT` | `4000` (or leave default Render auto-assigned port) |
   | `DATABASE_URL` | *Your Neon pooled connection string* |
   | `CORS_ORIGIN` | `https://your-aerovault-frontend.vercel.app` |
   | `ADMIN_API_KEY` | *Your secure admin secret* |

---

## 4. Frontend Deployment (Vercel / Netlify)

### Option A: Vercel

1. Import your GitHub repository to [Vercel](https://vercel.com).
2. Configure project settings:
   * **Framework Preset**: `Vite`
   * **Root Directory**: `client`
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
   * **Install Command**: `npm install`
3. Add Environment Variable:
   | Key | Value |
   | :--- | :--- |
   | `VITE_API_BASE_URL` | `https://aerovault-api.onrender.com/api` |
4. Deploy!

### SPA Routing Configuration (`vercel.json`)
If routing directly on Vercel, ensure `client/vercel.json` is present for client-side routing fallback:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 5. Post-Deployment Verification Checklist

- [ ] Check API health endpoint: `GET https://aerovault-api.onrender.com/api/health` -> `{"status":"healthy","database":"connected"}`.
- [ ] Verify CORS headers allow requests from your Vercel domain.
- [ ] Open frontend console in browser: Ensure telemetry loads from `live-db` without fallback warnings.
- [ ] Test comparison matrix and mission simulator scenarios.
- [ ] Test filter reset and error boundary recovery actions.
