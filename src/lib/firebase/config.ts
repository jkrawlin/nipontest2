import { initializeApp, getApps } from 'firebase/app';
import { getAuth/*, connectAuthEmulator*/ } from 'firebase/auth';
import { getFirestore/*, connectFirestoreEmulator,*/ } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyChmSmwpwKBCdMzrsvyidxX3Dr_fXoh-YA',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'payroll-cae74.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'payroll-cae74',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'payroll-cae74.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '126650756988',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:126650756988:web:99fc9384a4ced996f53ef9',
  measurementId: (import.meta.env as any).VITE_FIREBASE_MEASUREMENT_ID || 'G-S4E1B33E1P',
};

let app;
try {
  app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
} catch (e) {
  console.error('❌ Firebase initialization failed:', e);
  throw e;
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Optional: connect to emulators during local development
// if (import.meta.env.DEV && false) {
//   connectAuthEmulator(auth, 'http://localhost:9099');
//   connectFirestoreEmulator(db, 'localhost', 8080);
// }

export const COLLECTIONS = {
  EMPLOYEES: 'employees',
  CUSTOMERS: 'customers',
  USERS: 'users',
  PAYROLL: 'payroll',
  SALARY_HISTORY: 'salaryHistory',
  LEAVE_RECORDS: 'leaveRecords',
} as const;

export default app;
