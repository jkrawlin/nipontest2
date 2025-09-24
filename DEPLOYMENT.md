## Deployment & Troubleshooting Guide

### 1. Build First – Always
```
npm ci
npm run build
```
Deploy the **contents of `dist/`** only. Do NOT deploy `src/`.

After build, `index.html` references hashed JS (e.g. `/assets/index-XYZ.js`). If you still see `src/main.tsx` loading in production, you deployed the raw source index instead of the built one.

### 2. MIME Type Error (application/octet-stream)
Cause: Host serves TypeScript files with generic binary MIME or you uploaded source. Browsers refuse to execute them as modules.

Fix: Deploy built JS from `dist/`. Ensure server sets `Content-Type: application/javascript` for `.js`.

### 3. SPA Fallback (BrowserRouter)
If refreshing `/accounts/transactions` yields 404:
- Netlify: `_redirects` file with `/* /index.html 200`.
- Nginx: `try_files $uri /index.html;`
- GitHub Pages: copy `dist/index.html` to `dist/404.html`.

### 4. GitHub Pages (Optional)
Add `base: '/nipontest2/'` to Vite config when deploying under repo path, then:
```
npm run build
cp dist/index.html dist/404.html
```
Push the `dist` folder to a `gh-pages` branch or configure Pages from `dist` via workflow.

### 5. Example GitHub Action (CI Build Only)
```
name: ci
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run typecheck
      - run: npm test -- --run
      - run: npm run build
```

### 6. Security / Headers
Recommended minimal headers (example):
```
Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline';
Referrer-Policy: same-origin
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
```

### 7. Bootstrap Diagnostic (Optional Inline)
Add an inline script before the module that sets a timer and warns if the app did not mount in 5s. (Not yet added—request if wanted.)

### 8. Common Pitfalls
| Symptom | Root Cause | Fix |
|---------|------------|-----|
| `main.tsx` 404 | Deployed built index but removed assets | Re-run build, deploy entire `dist` |
| `src/main.tsx` served | Raw source deployed | Deploy `dist/` only |
| Blank page after refresh | No SPA fallback | Add redirect / 404 copy |
| Mixed Content errors | Serving over HTTP assets on HTTPS site | Use relative or HTTPS asset paths |

### 9. Need Backend?
When moving off mock mode, introduce an API (REST/GraphQL) or Firebase; keep service layer API shape stable.

---
Reach out or open an issue for deployment-specific adjustments.