import { SalaryHistory } from '../../types/history';
import { SalaryHistoryFS } from '../firestore/salaryHistory';
const USE_FS = import.meta.env.VITE_DATA_BACKEND === 'firestore' && import.meta.env.MODE !== 'test';

const mem: Record<string, string> = {};
const store = {
  getItem(k: string) { try { return (globalThis as any).localStorage?.getItem(k) ?? mem[k] ?? null; } catch { return mem[k] ?? null; } },
  setItem(k: string, v: string) { try { (globalThis as any).localStorage?.setItem(k, v); } catch {} mem[k]=v; }
};

const KEY = 'nipon_salary_history';

export const SalaryHistoryService = {
  getAll(): SalaryHistory[] | Promise<SalaryHistory[]> { return USE_FS ? SalaryHistoryFS.getAll() : (store.getItem(KEY) ? JSON.parse(store.getItem(KEY) as string) : []); },
  getByEmployee(employeeId: string): SalaryHistory[] | Promise<SalaryHistory[]> {
    if (USE_FS) return SalaryHistoryFS.getByEmployee(employeeId);
    return (this.getAll() as SalaryHistory[]).filter(h => h.employeeId === employeeId);
  },
  add(record: Omit<SalaryHistory, 'id'>): SalaryHistory | Promise<SalaryHistory> {
    if (USE_FS) return SalaryHistoryFS.add(record);
    const all = (this.getAll() as SalaryHistory[]);
    const newRec: SalaryHistory = { ...record, id: crypto.randomUUID() };
    all.push(newRec); store.setItem(KEY, JSON.stringify(all)); return newRec;
  }
};
