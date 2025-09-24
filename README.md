# Nipon Payroll Pro

Modern, desktop-first HR, Payroll & (in progress) Accounts / Finance management system for Qatar.

## Stack
| Layer | Tech |
|-------|------|
| Build Tool | Vite + ESBuild |
| Language | TypeScript (strict) |
| UI | React 18, TailwindCSS, CVA, Utility Primitives |
| State (client) | Zustand |
| Server / Data (mock) | In‑memory services + React Query |
| Forms & Validation | React Hook Form + Zod |
| Tables | TanStack Table |
| Finance Accuracy | decimal.js |
| Routing | react-router-dom v6 |
| Testing | Vitest + @testing-library/react |

Removed: Supabase (currently mocked; future backend integration TBD – possibly Firebase or custom API).

## Firebase Login (optional)

This app supports signing in with Firebase Auth if environment variables are provided.

1. Copy `.env.example` to `.env.local` and fill your Firebase web app settings:

  - VITE_FIREBASE_API_KEY
  - VITE_FIREBASE_AUTH_DOMAIN
  - VITE_FIREBASE_PROJECT_ID
  - VITE_FIREBASE_APP_ID
  - VITE_FIREBASE_MESSAGING_SENDER_ID
  - VITE_FIREBASE_STORAGE_BUCKET

2. In Firebase Console, enable Email/Password sign-in.

3. Create a user in Authentication and sign in via the Login page.

If env is not configured, the app falls back to local mock users (admin/manager) defined in `src/services/auth.ts`.

## Getting Started

### 1. Install Dependencies
```powershell
npm install
```

### 2. (Optional) Environment Variables
At present, the app runs fully in the browser with in‑memory data + localStorage (soon). You can still create a `.env` from `.env.example` for future expansion:
```
Copy-Item .env.example .env
```
No secrets are required for the current mock mode.

### 3. Run Dev Server
```powershell
npm run dev
```

### 4. Build (Production Bundle)
```powershell
npm run build
```
Artifacts are emitted to `dist/`.

### 5. Preview Production Build Locally
```powershell
npm run preview
```
Opens the optimized bundle on a local static server.

## Project Structure (Current)
```
src/
  components/ui      # Base UI primitives (shadcn-style)
  components/common  # Cross-feature components (error boundary etc.)
  config             # Navigation, site, permissions
  hooks              # Custom hooks
  lib                # Utilities, validators, formatting, calculations
  pages              # Route pages (Login, Dashboard)
  services/api       # Mock in-memory service layer (employees, accounts)
  services/supabase  # Stubs (legacy / placeholder) – safe to remove later
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

## Immediate Roadmap
1. Persist mock data (employees, accounts, transactions) to localStorage.
2. Accounts UI Stage A: Transactions list, Payment Voucher form, Trial Balance.
3. Command palette (Ctrl/Cmd + K) with fuzzy navigation.
4. Role-based UI gating (already partially implemented in sidebar) – extend to feature actions.
5. Export & print utilities (CSV / PDF stub) for payroll & finance.
6. Replace in-memory layer with real backend (architecture selection pending).
7. Add CI (GitHub Actions) for typecheck, lint, tests.

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

## Deployment (IMPORTANT: Avoid MIME Type Errors)

Always deploy the **contents of `dist/`** produced by `npm run build` – not the raw `src/` files. If you see:

```
Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "application/octet-stream".
```
…it means the server is trying to serve raw `*.ts` / `*.tsx` source files (or misconfigured headers). Correct fix: build + deploy the compiled assets only.

### Quick Deploy Matrix
| Platform | Steps |
|----------|-------|
| Static Host / Nginx | `npm run build` → copy `dist/*` → ensure `try_files /index.html` for SPA |
| GitHub Pages | Set `base` in `vite.config.ts` to `/REPO_NAME/`; copy `dist/*`; duplicate `index.html` as `404.html` |
| Netlify | Add build command `npm run build`, publish `dist`, add redirect `/* /index.html 200` |
| Vercel | Use `npm run build` & `dist` via static output (or adapt to framework config) |

### SPA Routing (BrowserRouter)
Configure your host to fallback to `index.html` for unknown paths. Without this, deep links (e.g. `/accounts/transactions`) may 404.

### GitHub Pages Example (Optional base config)
In `vite.config.ts`:
```ts
// export default defineConfig({ base: '/nipontest2/', plugins:[react()] })
```
Only enable if deploying under `https://<user>.github.io/nipontest2/`.

See `DEPLOYMENT.md` for detailed troubleshooting.

## License
Proprietary – All rights reserved.

---
Keep iterating feature-by-feature with consistent patterns.