import { LeaveRecord } from '../../types/history';

const mem: Record<string, string> = {};
const store = {
  getItem(k: string) { try { return (globalThis as any).localStorage?.getItem(k) ?? mem[k] ?? null; } catch { return mem[k] ?? null; } },
  setItem(k: string, v: string) { try { (globalThis as any).localStorage?.setItem(k, v); } catch {} mem[k]=v; }
};

const KEY = 'nipon_leave_records';

export const LeaveService = {
  getAll(): LeaveRecord[] { const s = store.getItem(KEY); return s ? JSON.parse(s) : []; },
  getEmployeeLeaves(employeeId: string): LeaveRecord[] { return this.getAll().filter(r => r.employeeId === employeeId); },
  add(record: Omit<LeaveRecord, 'id'>): LeaveRecord { const all = this.getAll(); const rec: LeaveRecord = { ...record, id: crypto.randomUUID() }; all.push(rec); store.setItem(KEY, JSON.stringify(all)); return rec; }
};
