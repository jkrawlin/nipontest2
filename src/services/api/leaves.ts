import { LeaveRecord } from '../../types/history';
import { LeaveFS } from '../firestore/leaves';
const USE_FS = import.meta.env.VITE_DATA_BACKEND === 'firestore' && import.meta.env.MODE !== 'test';

const mem: Record<string, string> = {};
const store = {
  getItem(k: string) { try { return (globalThis as any).localStorage?.getItem(k) ?? mem[k] ?? null; } catch { return mem[k] ?? null; } },
  setItem(k: string, v: string) { try { (globalThis as any).localStorage?.setItem(k, v); } catch {} mem[k]=v; }
};

const KEY = 'nipon_leave_records';

export const LeaveService = {
  getAll(): LeaveRecord[] | Promise<LeaveRecord[]> { return USE_FS ? LeaveFS.getAll() : (store.getItem(KEY) ? JSON.parse(store.getItem(KEY) as string) : []); },
  getEmployeeLeaves(employeeId: string): LeaveRecord[] | Promise<LeaveRecord[]> { return USE_FS ? LeaveFS.getEmployeeLeaves(employeeId) : (this.getAll() as LeaveRecord[]).filter(r => r.employeeId === employeeId); },
  add(record: Omit<LeaveRecord, 'id'>): LeaveRecord | Promise<LeaveRecord> { return USE_FS ? LeaveFS.add(record) : (()=>{ const all = (this.getAll() as LeaveRecord[]); const rec: LeaveRecord = { ...record, id: crypto.randomUUID() }; all.push(rec); store.setItem(KEY, JSON.stringify(all)); return rec; })(); }
};
