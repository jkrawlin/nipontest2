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
        role: 'viewer',
        createdAt: serverTimestamp(),
      };
      await setDoc(doc(db, COLLECTIONS.USERS, user.uid), userData);
      return { ...userData, createdAt: new Date() };
    }
    return userDoc.data() as UserData;
  } catch (error: any) {
    console.error('Sign in error:', error);
    throw new Error(error.message || 'Failed to sign in');
  }
};

export const signOut = () => firebaseSignOut(auth);

export const onAuthChange = (callback: (user: User | null) => void) => onAuthStateChanged(auth, callback);

export const getCurrentUser = () => auth.currentUser;
