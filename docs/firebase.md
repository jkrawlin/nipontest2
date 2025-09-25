# Firebase Setup & Dev Test

## Install

```
npm install firebase
```

## Env

Create `.env.local` with your Firebase config and set `VITE_DATA_BACKEND=firestore`.

## Dev Test

Start dev server and run in browser console:

```
await window.testFirebase()
```

## Deploy Rules via GitHub Actions

Add repo secrets:

- `FIREBASE_SERVICE_ACCOUNT_JSON`
- `FIREBASE_PROJECT_ID`

Run workflow: Actions → Deploy Firebase Rules.
