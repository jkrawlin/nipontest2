import { create } from 'zustand';
import { STORAGE_KEYS } from '../lib/constants';
import type { LoginSchema } from '../lib/validators';
import { signIn, signOut as fbSignOut, onAuthChange, getCurrentUser } from '@/lib/firebase/auth';
interface LoginResult {
  role: string;
  name: string;
  user: { email: string };
  issuedAt: number;
}

// Replaced with AuthService logic
import { safeJsonParse } from '../lib/utils';

interface AuthState {
  session: LoginResult | null;
  loading: boolean;
  error?: string;
  login: (data: LoginSchema) => Promise<void>;
  logout: () => Promise<void>;
  initialize: () => () => void;
}

const initialSession = safeJsonParse<LoginResult>(localStorage.getItem(STORAGE_KEYS.SESSION));

export const useAuthStore = create<AuthState>((set) => ({
  session: initialSession || null,
  loading: false,
  async login(data) {
    set({ loading: true, error: undefined });
    try {
      const userData = await signIn(data.email, data.password);
      const result = { role: (userData as any).role || 'viewer', name: (userData as any).displayName || data.email.split('@')[0], user: { email: (userData as any).email || data.email }, issuedAt: Date.now() };
      localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(result));
      set({ session: result });
    } catch (e) {
      set({ error: (e as Error).message });
      throw e;
    } finally {
      set({ loading: false });
    }
  },
  async logout() {
    try { await fbSignOut(); } catch {}
    localStorage.removeItem(STORAGE_KEYS.SESSION);
    set({ session: null });
  },
  initialize() {
    set({ loading: true });
    const unsub = onAuthChange((firebaseUser) => {
      if (firebaseUser) {
        const result: LoginResult = { role: 'viewer', name: firebaseUser.displayName || firebaseUser.email || 'User', user: { email: firebaseUser.email || '' }, issuedAt: Date.now() };
        localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(result));
        set({ session: result, loading: false });
      } else {
        localStorage.removeItem(STORAGE_KEYS.SESSION);
        set({ session: null, loading: false });
      }
    });
    // Initialize from current user synchronously if present
    const cu = getCurrentUser();
    if (cu) {
      const result: LoginResult = { role: 'viewer', name: cu.displayName || cu.email || 'User', user: { email: cu.email || '' }, issuedAt: Date.now() };
      localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(result));
      set({ session: result, loading: false });
    }
    return unsub;
  }
}));