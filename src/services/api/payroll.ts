import { Decimal } from 'decimal.js';
import type { PayrollBatch, SalaryCalculation, PayrollAttendanceEntry } from '../../types/payroll';

const LS_KEY = 'payroll_batches';

let _BATCHES: PayrollBatch[] = [];
let _loaded = false;

function load() {
  if (_loaded) return;
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      const parsed: any[] = JSON.parse(raw);
      _BATCHES = parsed.map(p => ({
        ...p,
        totalAmount: new Decimal(p.totalAmount),
      }));
    }
  } catch {}
  _loaded = true;
}

function persist() {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(_BATCHES.map(b => ({ ...b, totalAmount: b.totalAmount.toString() }))));
  } catch {}
}

function generateId(month: number, year: number) {
  return `PB-${year}-${String(month).padStart(2, '0')}-${Date.now().toString(36)}`;
}

export const PayrollService = {
  list(): PayrollBatch[] { load(); return [..._BATCHES]; },

  getById(id: string): PayrollBatch | undefined { load(); return _BATCHES.find(b => b.id === id); },

  getDraft(month: number, year: number): PayrollBatch | undefined {
    load();
    return _BATCHES.find(b => b.month === month && b.year === year && b.status === 'draft');
  },

  createDraft(month: number, year: number): PayrollBatch {
    load();
    const existing = this.getDraft(month, year);
    if (existing) return existing;
    const batch: PayrollBatch = {
      id: generateId(month, year),
      month,
      year,
      employees: [],
      attendance: {},
      calculations: [],
      totalAmount: new Decimal(0),
      status: 'draft'
    };
    _BATCHES.push(batch);
    persist();
    return batch;
  },

  upsert(batch: PayrollBatch) {
    load();
    const idx = _BATCHES.findIndex(b => b.id === batch.id);
    if (idx >= 0) _BATCHES[idx] = batch; else _BATCHES.push(batch);
    persist();
    return batch;
  },

  updateAttendance(batchId: string, attendance: Record<string, PayrollAttendanceEntry>) {
    load();
    const batch = this.getById(batchId);
    if (!batch) throw new Error('Batch not found');
    batch.attendance = attendance;
    this.upsert(batch);
    return batch;
  },

  updateCalculations(batchId: string, calculations: SalaryCalculation[]) {
    load();
    const batch = this.getById(batchId);
    if (!batch) throw new Error('Batch not found');
    batch.calculations = calculations;
    batch.totalAmount = new Decimal(calculations.reduce((s, c) => s + c.net, 0));
    this.upsert(batch);
    return batch;
  },

  approve(batchId: string) {
    load();
    const batch = this.getById(batchId);
    if (!batch) throw new Error('Batch not found');
    batch.status = 'approved';
    this.upsert(batch);
    return batch;
  },

  markProcessed(batchId: string) {
    load();
    const batch = this.getById(batchId);
    if (!batch) throw new Error('Batch not found');
    batch.status = 'processed';
    this.upsert(batch);
    return batch;
  }
};

export type { PayrollBatch };