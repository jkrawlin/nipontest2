import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported as analyticsSupported } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// Read from Vite env (import.meta.env). Add .env.local entries like:
// VITE_FIREBASE_API_KEY=...
// VITE_FIREBASE_AUTH_DOMAIN=...
// VITE_FIREBASE_PROJECT_ID=...
// VITE_FIREBASE_APP_ID=...
// VITE_FIREBASE_MESSAGING_SENDER_ID=...
// VITE_FIREBASE_STORAGE_BUCKET=...

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string,
  measurementId: (import.meta.env as any).VITE_FIREBASE_MEASUREMENT_ID as string | undefined,
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDb = getFirestore(app);
// Optional analytics in browser only
export const firebaseAnalyticsPromise = (async () => {
  if (typeof window === 'undefined') return null;
  try { return (await analyticsSupported()) ? getAnalytics(app) : null; } catch { return null; }
})();
