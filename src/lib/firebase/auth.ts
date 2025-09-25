import {
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, COLLECTIONS } from './config';

export interface UserData {
  uid: string;
  email: string;
  displayName: string;
  role: 'admin' | 'manager' | 'viewer';
  createdAt: any;
}

const ADMIN_EMAILS = new Set<string>([
  'admin@niponpayroll.qa'
]);

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userDoc = await getDoc(doc(db, COLLECTIONS.USERS, user.uid));
    if (!userDoc.exists()) {
      const userData: UserData = {
        uid: user.uid,
        email: user.email || email,
        displayName: user.displayName || email.split('@')[0],
        role: ADMIN_EMAILS.has((user.email || email).toLowerCase()) ? 'admin' : 'viewer',
        createdAt: serverTimestamp(),
      };
      await setDoc(doc(db, COLLECTIONS.USERS, user.uid), userData);
      return { ...userData, createdAt: new Date() };
    }
    const data = userDoc.data() as UserData;
    const emailLower = (user.email || email).toLowerCase();
    // If user exists but role missing or not matching whitelist, backfill/upgrade role
    if (!data.role || (ADMIN_EMAILS.has(emailLower) && data.role !== 'admin')) {
      const updated: UserData = { ...data, role: ADMIN_EMAILS.has(emailLower) ? 'admin' : (data.role || 'viewer') } as UserData;
      await setDoc(doc(db, COLLECTIONS.USERS, user.uid), updated as any, { merge: true } as any);
      return updated;
    }
    return data;
  } catch (error: any) {
    console.error('Sign in error:', error);
    throw new Error(error.message || 'Failed to sign in');
  }
};

export const signOut = () => firebaseSignOut(auth);

export const onAuthChange = (callback: (user: User | null) => void) => onAuthStateChanged(auth, callback);

export const getCurrentUser = () => auth.currentUser;
