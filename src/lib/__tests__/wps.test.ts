import { describe, it, expect } from 'vitest';
import { WPSReportService } from '../../services/reports/wps';
import { PayrollService } from '../../services/api/payroll';
import type { PayrollBatch, SalaryCalculation } from '../../types/payroll';
import { Decimal } from 'decimal.js';

// Minimal in-memory setup for test
function seedBatch(): PayrollBatch {
  const batch: PayrollBatch = {
    id: 'TEST-BATCH', month: 9, year: 2025, employees: ['E1'], totalAmount: new Decimal(0), status: 'processed',
    calculations: [{ employeeId: 'E1', employeeName: 'Emp One', workingDays:30, basic:1000, housing:200, transport:100, overtime:50, other:0, gross:1350, deductions:100, net:1250, baseNet:1250, adjustmentsTotal:0 } as SalaryCalculation]
  };
  (PayrollService as any).upsert(batch);
  return batch;
}

describe('WPS report', () => {
  it('totals net equals sum of record nets', async () => {
    const b = seedBatch();
    const rep = await WPSReportService.generate(b.id!);
    expect(rep.totalNet).toBe(rep.records.reduce((s,r)=> s + r.net,0));
  });
});
