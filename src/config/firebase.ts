import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager, getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported as analyticsSupported } from 'firebase/analytics';

// Config pulled from env with safe defaults to your current Firebase project
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyChmSmwpwKBCdMzrsvyidxX3Dr_fXoh-YA',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'payroll-cae74.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'payroll-cae74',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'payroll-cae74.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '126650756988',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:126650756988:web:99fc9384a4ced996f53ef9',
  measurementId: (import.meta.env as any).VITE_FIREBASE_MEASUREMENT_ID || 'G-S4E1B33E1P',
};

// Initialize (avoid re-init during HMR)
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
export const firebaseAuth = auth; // legacy alias

// Firestore (handle HMR/duplicate init by falling back to getFirestore)
let fsdb;
try {
  fsdb = initializeFirestore(app, {
    localCache: persistentLocalCache({
      tabManager: persistentMultipleTabManager(),
    }),
  });
} catch (e) {
  // If already initialized (e.g., HMR or multiple imports), just get existing instance
  fsdb = getFirestore(app);
}
export const db = fsdb;
export const firebaseDb = db; // legacy alias

// Optional analytics in browser only
export const firebaseAnalyticsPromise = (async () => {
  if (typeof window === 'undefined') return null;
  try { return (await analyticsSupported()) ? getAnalytics(app) : null; } catch { return null; }
})();

// Collection names (centralized constants)
export const collections = {
  employees: 'employees',
  customers: 'customers',
  salaryHistory: 'salaryHistory',
  leaveRecords: 'leaveRecords',
  payrollRecords: 'payrollRecords',
  users: 'users',
} as const;
