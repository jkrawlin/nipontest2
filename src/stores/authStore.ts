import { create } from 'zustand';
import { STORAGE_KEYS } from '../lib/constants';
import type { LoginSchema } from '../lib/validators';
interface LoginResult {
  role: string;
  name: string;
  user: { email: string };
  issuedAt: number;
}

// Development-only credential set (can be replaced later with Firebase)
const DEV_USERS: Array<{ email: string; password: string; role: string; name: string }> = [
  { email: 'admin@niponpayroll.qa', password: 'Admin123!', role: 'admin', name: 'System Administrator' },
  { email: 'manager@niponpayroll.qa', password: 'Manager123!', role: 'manager', name: 'Payroll Manager' }
];

async function devAuthenticate(credentials: LoginSchema): Promise<LoginResult> {
  const match = DEV_USERS.find(u => u.email === credentials.email);
  if (!match) throw new Error('Unauthorized: Email not recognized');
  if (match.password !== credentials.password) throw new Error('Invalid password');
  return {
    role: match.role,
    name: match.name,
    user: { email: match.email },
    issuedAt: Date.now()
  };
}
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
  const result = await devAuthenticate(data);
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