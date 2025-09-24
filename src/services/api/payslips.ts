import { PayrollService } from './payroll';
import type { Payslip, PayslipGenerationResult } from '../../types/payslip';
import { buildPayslipFromCalculation } from '../../types/payslip';

const LS_KEY = 'payslips';
let CACHE: Record<string, Payslip[]> = {};
let loaded = false;

function load() {
  if (loaded) return;
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      const parsed: Record<string, Payslip[]> = JSON.parse(raw);
      CACHE = parsed;
    }
  } catch {}
  loaded = true;
}
function persist() {
  try { localStorage.setItem(LS_KEY, JSON.stringify(CACHE)); } catch {}
}

export const PayslipService = {
  generateForBatch(batchId: string): PayslipGenerationResult {
    load();
    const batch = PayrollService.getById(batchId);
    if (!batch) throw new Error('Batch not found');
    if (!batch.calculations) throw new Error('No calculations');
    const adjustments = batch.adjustments || [];
    const versionHash = PayrollService.computeVersionHash(batchId);
    const payslips: Payslip[] = batch.calculations.map(c => buildPayslipFromCalculation(batch, c, adjustments.filter(a => a.employeeId === c.employeeId), versionHash));
    CACHE[batchId] = payslips;
    persist();
    return { batchId, count: payslips.length, totalNet: payslips.reduce((s,p)=> s + p.net, 0), payslips };
  },
  list(batchId: string): Payslip[] { load(); return CACHE[batchId] || []; },
  getVersionHash(batchId: string) { load(); const slips = CACHE[batchId]; return slips && slips[0]?.versionHash; },
  isOutdated(batchId: string) {
    try {
      const current = PayrollService.computeVersionHash(batchId);
      const existing = this.getVersionHash(batchId);
      return !!existing && existing !== current;
    } catch { return false; }
  },
  clearBatch(batchId: string) { load(); delete CACHE[batchId]; persist(); },
  exportCSV(batchId: string): string {
    load();
    const rows = this.list(batchId).flatMap(p => p.lines.map(l => ({
      batchId: p.batchId,
      employeeId: p.employeeId,
      employeeName: p.employeeName,
      employeeType: p.employeeType || '',
      month: p.period.month,
      year: p.period.year,
      code: l.code,
      description: l.description,
      type: l.type,
      amount: l.amount,
      net: p.net
    })));
    const header = Object.keys(rows[0] || {}).join(',');
    return [header, ...rows.map(r => Object.values(r).join(','))].join('\n');
  }
};
