import { describe, it, expect } from 'vitest';
import { buildPayslipFromCalculation } from '../../types/payslip';
import type { PayrollBatch, SalaryCalculation, PayrollAdjustment } from '../../types/payroll';
import { Decimal } from 'decimal.js';

describe('Payslip builder', () => {
  const batch: PayrollBatch = { id: 'PB-2025-09-abc', month: 9, year: 2025, employees: [], totalAmount: new Decimal(0), status: 'processed' };
  const calc: SalaryCalculation = {
    employeeId: 'E1', employeeName: 'Test Emp', workingDays: 30,
    basic: 3000, housing: 1000, transport: 500, overtime: 200, other: 0, gross: 4700, deductions: 100, net: 4600, baseNet: 4600, adjustmentsTotal: 0
  };
  it('aggregates adjustments correctly', () => {
    const adjustments: PayrollAdjustment[] = [
      { id: 'a1', employeeId: 'E1', type: 'bonus', amount: 100, appliedAt: new Date() },
      { id: 'a2', employeeId: 'E1', type: 'deduction', amount: 50, appliedAt: new Date() }
    ];
  const slip = buildPayslipFromCalculation(batch, calc, adjustments, 'testhash');
    expect(slip.lines.find(l => l.code==='BASIC')?.amount).toBe(3000);
    expect(slip.lines.some(l => l.code==='BONUS')).toBeTruthy();
    expect(slip.gross).toBeGreaterThan(0);
    const dedTotal = slip.lines.filter(l=> l.type==='deduction').reduce((s,l)=> s + l.amount,0);
    expect(dedTotal).toBe(150); // 100 absence + 50 deduction
    expect(slip.net).toBe(slip.gross - slip.deductions);
  });
});
