import { Decimal } from 'decimal.js';
import type { PayrollBatch, SalaryCalculation, PayrollAttendanceEntry, PayrollAdjustment } from '../../types/payroll';

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
      status: 'draft',
      calculationMode: 'Permanent',
      overtimeConfig: { regular: 1.25, weekend: 1.5, holiday: 2 },
      attendanceImportAudit: []
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
  updateCalculationMode(batchId: string, mode: 'Permanent' | 'Temporary' | 'All') {
    load();
    const batch = this.getById(batchId);
    if (!batch) throw new Error('Batch not found');
    batch.calculationMode = mode;
    this.upsert(batch);
    return batch;
  },
  updateOvertimeConfig(batchId: string, cfg: Partial<{ regular: number; weekend: number; holiday: number }>) {
    load();
    const batch = this.getById(batchId);
    if (!batch) throw new Error('Batch not found');
    batch.overtimeConfig = { ...(batch.overtimeConfig || { regular:1.25, weekend:1.5, holiday:2 }), ...cfg };
    this.upsert(batch);
    return batch.overtimeConfig;
  },
  addAttendanceImportAudit(batchId: string, entry: { fileName?: string; updated: number; invalid: number; warnings: number; }) {
    load();
    const batch = this.getById(batchId);
    if (!batch) throw new Error('Batch not found');
    batch.attendanceImportAudit = batch.attendanceImportAudit || [];
    batch.attendanceImportAudit.push({ id: crypto.randomUUID(), at: new Date().toISOString(), ...entry });
    this.upsert(batch);
    return batch.attendanceImportAudit[batch.attendanceImportAudit.length - 1];
  },
  computeVersionHash(batchId: string) {
    // Lightweight deterministic hash: JSON stable stringify of relevant batch slices.
    load();
    const batch = this.getById(batchId);
    if (!batch) throw new Error('Batch not found');
    const payload = {
      month: batch.month,
      year: batch.year,
      calculations: (batch.calculations||[]).map(c => ({
        employeeId: c.employeeId,
        basic: c.basic,
        housing: c.housing,
        transport: c.transport,
        other: c.other,
        overtime: c.overtime,
        deductions: c.deductions,
        baseNet: c.baseNet ?? c.net - (c.adjustmentsTotal||0)
      })),
      adjustments: (batch.adjustments||[]).map(a => ({ id: a.id, employeeId: a.employeeId, type: a.type, amount: a.amount, reason: a.reason }))
    };
    const json = JSON.stringify(payload);
    // Simple FNV-1a hash for speed
    let hash = 2166136261;
    for (let i=0; i<json.length; i++) {
      hash ^= json.charCodeAt(i);
      hash = (hash * 16777619) >>> 0;
    }
    return hash.toString(16);
  },

  addAdjustment(batchId: string, adj: Omit<PayrollAdjustment, 'id' | 'appliedAt'>) {
    load();
    const batch = this.getById(batchId);
    if (!batch) throw new Error('Batch not found');
    const full: PayrollAdjustment = { ...adj, id: crypto.randomUUID(), appliedAt: new Date() };
    batch.adjustments = batch.adjustments || [];
    batch.adjustments.push(full);
    batch.adjustmentAudit = batch.adjustmentAudit || [];
    batch.adjustmentAudit.push({ action: 'add', adjustmentId: full.id, at: new Date().toISOString(), details: { type: full.type, amount: full.amount } });
    // Recompute per-employee net values
    if (batch.calculations) {
      const map = new Map(batch.calculations.map(c => [c.employeeId, c]));
      batch.calculations.forEach(c => { if (c.baseNet == null) c.baseNet = c.net; c.adjustmentsTotal = 0; });
      batch.adjustments.forEach(a => {
        const calc = map.get(a.employeeId);
        if (!calc) return;
        const delta = a.type === 'deduction' ? -a.amount : a.amount; // allowance/bonus/overtime all positive
        calc.adjustmentsTotal = (calc.adjustmentsTotal || 0) + delta;
        if (calc.baseNet == null) calc.baseNet = calc.net; // capture baseline once
        calc.net = (calc.baseNet) + (calc.adjustmentsTotal || 0);
      });
      batch.totalAmount = new Decimal(batch.calculations.reduce((s, c) => s + c.net, 0));
    }
    this.upsert(batch);
    return full;
  },

  removeAdjustment(batchId: string, adjustmentId: string) {
    load();
    const batch = this.getById(batchId);
    if (!batch || !batch.adjustments) return;
    batch.adjustments = batch.adjustments.filter(a => a.id !== adjustmentId);
    batch.adjustmentAudit = batch.adjustmentAudit || [];
    batch.adjustmentAudit.push({ action: 'remove', adjustmentId, at: new Date().toISOString() });
    if (batch.calculations) {
      batch.calculations.forEach(c => { if (c.baseNet != null) c.net = c.baseNet; c.adjustmentsTotal = 0; });
      batch.adjustments.forEach(a => {
        const calc = batch.calculations!.find(c => c.employeeId === a.employeeId);
        if (!calc) return;
        const delta = a.type === 'deduction' ? -a.amount : a.amount;
        calc.adjustmentsTotal = (calc.adjustmentsTotal || 0) + delta;
        if (calc.baseNet == null) calc.baseNet = calc.net;
        calc.net = (calc.baseNet) + (calc.adjustmentsTotal || 0);
      });
      batch.totalAmount = new Decimal(batch.calculations.reduce((s, c) => s + c.net, 0));
    }
    this.upsert(batch);
  },

  editAdjustment(batchId: string, adjustmentId: string, changes: Partial<Pick<PayrollAdjustment, 'amount' | 'reason' | 'type'>>) {
    load();
    const batch = this.getById(batchId);
    if (!batch || !batch.adjustments) throw new Error('Batch not found');
    const adj = batch.adjustments.find(a => a.id === adjustmentId);
    if (!adj) throw new Error('Adjustment not found');
    Object.assign(adj, changes, { editedAt: new Date() });
    batch.adjustmentAudit = batch.adjustmentAudit || [];
    batch.adjustmentAudit.push({ action: 'edit', adjustmentId, at: new Date().toISOString(), details: changes });
    // Recompute nets similar to add/remove
    if (batch.calculations) {
      batch.calculations.forEach(c => { if (c.baseNet != null) c.net = c.baseNet; c.adjustmentsTotal = 0; });
      batch.adjustments.forEach(a => {
        const calc = batch.calculations!.find(c => c.employeeId === a.employeeId);
        if (!calc) return;
        const delta = a.type === 'deduction' ? -a.amount : a.amount;
        calc.adjustmentsTotal = (calc.adjustmentsTotal || 0) + delta;
        if (calc.baseNet == null) calc.baseNet = calc.net;
        calc.net = (calc.baseNet) + (calc.adjustmentsTotal || 0);
      });
      batch.totalAmount = new Decimal(batch.calculations.reduce((s, c) => s + c.net, 0));
    }
    this.upsert(batch);
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