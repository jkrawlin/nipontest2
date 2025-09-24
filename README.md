# Nipon Payroll Pro (Scaffold)

Modern, desktop-first HR & Payroll management system for Qatar. This repository currently contains the initial scaffold adhering to the provided architectural & coding guidelines.

## Stack
- React 18 + TypeScript (Vite)
- TailwindCSS + CVA + Tailwind Merge
- Zustand (UI state) + React Query (server state)
- Supabase (Auth, DB, Storage, Realtime)
- Zod (validation) + React Hook Form
- TanStack Table (data grids) – placeholder, not yet wired
- Recharts (charts) – placeholder
- Decimal.js (financial precision)

## Getting Started

### 1. Install Dependencies
```powershell
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env` and fill in real Supabase credentials.
```powershell
Copy-Item .env.example .env
```

### 3. Run Dev Server
```powershell
npm run dev
```

### 4. Build
```powershell
npm run build
```

## Project Structure (Current)
```
src/
  components/ui      # Base UI primitives (shadcn-style)
  components/common  # Cross-feature components (error boundary etc.)
  config             # Navigation, site, permissions
  hooks              # Custom hooks
  lib                # Utilities, validators, formatting, calculations
  pages              # Route pages (Login, Dashboard)
  services/supabase  # Supabase client & service layer
  stores             # Zustand stores
  styles             # Global styles
  types              # Shared TypeScript models
```

## Coding Guidelines (Applied)
- Strict TypeScript enabled, no implicit `any`.
- Reusable, composable UI primitives using CVA.
- ErrorBoundary wraps routing tree.
- Separation of concerns: service layer vs UI.
- Financial calculations use `decimal.js` with explicit rounding.
- Environment-driven configuration (see `siteConfig`).

## Immediate Next Steps
1. Implement real dashboard stats service (aggregate Supabase views).
2. Add authentication route guard (already basic) + session persistence restore on load.
3. Scaffold Employee module (table, forms) using TanStack Table & RHF.
4. Implement role-based conditional UI with `can()` helper.
5. Add toast/notification system (store exists; create renderer component).
6. Integrate document expiry alerts (Supabase view `expiring_documents`).
7. Add command palette (Ctrl/Cmd+K) skeleton.
8. Add audit logging triggers & ingestion viewer page.
9. Introduce tests for critical utilities (calculations, formatters).

## Testing
Vitest + Testing Library configured.
```powershell
npm run test
```

## Quality Commands
```powershell
npm run lint
npm run typecheck
npm run format
```

## Security Notes
- Service key must NEVER ship to client. Use only in server runtime (Edge Functions / API routes).
- Input validation with Zod both client & (later) server.
- Add RLS policies per schema after Supabase SQL migration.

## License
Proprietary – All rights reserved.

---
Scaffold generated. Continue iterating feature-by-feature with consistent patterns.