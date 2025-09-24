import { describe, it, expect } from 'vitest';
import { validatePayroll } from '../payroll/validation';
import { Decimal } from 'decimal.js';
import type { PayrollBatch } from '../../types/payroll';

describe('Payroll validation', () => {
  function makeBatch(overrides: Partial<PayrollBatch>): PayrollBatch {
    return { id: 'B1', month: 9, year: 2025, employees: [], totalAmount: new Decimal(0), status: 'draft', ...overrides } as PayrollBatch;
  }
  it('flags negative net', () => {
    const batch = makeBatch({ calculations: [{ employeeId: 'E', employeeName: 'Emp', workingDays: 30, basic: 1000, housing:0, transport:0, overtime:0, gross:1000, deductions:1200, net:-200, baseNet:-200, adjustmentsTotal:0 }] });
    const res = validatePayroll(batch);
    expect(res.hasErrors).toBe(true);
  });
  it('warns on high overtime', () => {
    const batch = makeBatch({ calculations: [{ employeeId: 'E', employeeName: 'Emp', workingDays: 30, basic: 1000, housing:0, transport:0, overtime:600, gross:1600, deductions:0, net:1600, baseNet:1600, adjustmentsTotal:0 }] });
    const res = validatePayroll(batch);
    expect(res.hasWarnings).toBe(true);
  });
  it('flags over deduction beyond baseNet', () => {
    const batch = makeBatch({ calculations: [{ employeeId: 'E', employeeName: 'Emp', workingDays: 30, basic: 1000, housing:0, transport:0, overtime:0, gross:1000, deductions:0, net:800, baseNet:800, adjustmentsTotal:-900 }] });
    const res = validatePayroll(batch);
    expect(res.hasErrors).toBe(true);
  });
});
