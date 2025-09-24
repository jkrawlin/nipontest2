import { SalaryHistory } from '../../types/history';

const mem: Record<string, string> = {};
const store = {
  getItem(k: string) { try { return (globalThis as any).localStorage?.getItem(k) ?? mem[k] ?? null; } catch { return mem[k] ?? null; } },
  setItem(k: string, v: string) { try { (globalThis as any).localStorage?.setItem(k, v); } catch {} mem[k]=v; }
};

const KEY = 'nipon_salary_history';

export const SalaryHistoryService = {
  getAll(): SalaryHistory[] { const s = store.getItem(KEY); return s ? JSON.parse(s) : []; },
  getByEmployee(employeeId: string): SalaryHistory[] { return this.getAll().filter(h => h.employeeId === employeeId); },
  add(record: Omit<SalaryHistory, 'id'>): SalaryHistory {
    const all = this.getAll();
    const newRec: SalaryHistory = { ...record, id: crypto.randomUUID() };
    all.push(newRec); store.setItem(KEY, JSON.stringify(all)); return newRec;
  }
};
