import { create } from 'zustand';
import { STORAGE_KEYS } from '../lib/constants';
import type { LoginSchema } from '../lib/validators';
import { AuthService } from '../services/auth';
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
}

const initialSession = safeJsonParse<LoginResult>(localStorage.getItem(STORAGE_KEYS.SESSION));

export const useAuthStore = create<AuthState>((set) => ({
  session: initialSession || null,
  loading: false,
  async login(data) {
    set({ loading: true, error: undefined });
    try {
  const auth = await AuthService.login(data.email, data.password);
  const result = { role: auth.user.role, name: auth.user.name, user: { email: auth.user.email }, issuedAt: Date.now() };
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
  // No remote logout necessary in dev mode
    localStorage.removeItem(STORAGE_KEYS.SESSION);
    set({ session: null });
  }
}));