import type { Role } from '../config/permissions';
import { firebaseAuth } from '../config/firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export interface AuthUser {
  id: string;
  email: string;
  role: Role | 'manager' | 'admin';
  name: string;
  permissions: string[];
}

export interface AuthResponse { user: AuthUser; token: string; success: boolean; }

export class AuthService {
  private static readonly USERS: AuthUser[] & { password?: string }[] = [
    {
      id: 'usr_admin',
      email: 'admin@niponpayroll.qa',
      role: 'admin',
      name: 'System Administrator',
      permissions: ['*'],
      password: 'Admin@2024'
    },
    {
      id: 'usr_manager',
      email: 'manager@niponpayroll.qa',
      role: 'manager',
      name: 'Payroll Manager',
      permissions: [
        'employees.view','employees.create','employees.edit','payroll.*','reports.*','accounts.view'
      ],
      password: 'Manager@2024'
    }
  ];

  static async login(email: string, password: string): Promise<AuthResponse> {
    // If Firebase is configured, use it; otherwise fall back to local dev users
    const hasFirebase = !!firebaseAuth?.app?.options?.projectId;
    if (hasFirebase) {
      const cred = await signInWithEmailAndPassword(firebaseAuth, email, password);
      const token = await cred.user.getIdToken();
      const user: AuthUser = {
        id: cred.user.uid,
        email: cred.user.email || email,
        role: 'manager', // map roles via custom claims or Firestore if needed
        name: cred.user.displayName || email.split('@')[0],
        permissions: ['employees.view','payroll.*','reports.*']
      };
      localStorage.setItem('auth_token', token);
      localStorage.setItem('auth_user', JSON.stringify(user));
      return { user, token, success: true };
    }
    // fallback: local mock users
    const user = this.USERS.find(u => u.email === email && (u as any).password === password);
    if (!user) throw new Error('Invalid credentials');
    const token = btoa(JSON.stringify({ userId: user.id, exp: Date.now() + 60*60*1000 }));
    localStorage.setItem('auth_token', token);
    localStorage.setItem('auth_user', JSON.stringify(user));
    return { user: { ...user }, token, success: true };
  }
  static async logout() { try { await signOut(firebaseAuth); } catch {} finally { localStorage.removeItem('auth_token'); localStorage.removeItem('auth_user'); } }
  static getCurrentUser(): AuthUser | null { const raw = localStorage.getItem('auth_user'); return raw ? JSON.parse(raw) : null; }
  static isAuthenticated(): boolean {
    const t = localStorage.getItem('auth_token'); if (!t) return false;
    try { const payload = JSON.parse(atob(t)); return payload.exp > Date.now(); } catch { return false; }
  }
  static hasPermission(perm: string): boolean {
    const user = this.getCurrentUser(); if (!user) return false;
    if (user.permissions.includes('*')) return true;
    return user.permissions.some(p => p.endsWith('*') ? perm.startsWith(p.slice(0,-1)) : p === perm);
  }
}
