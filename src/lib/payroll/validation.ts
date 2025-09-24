import type { PayrollBatch } from '../../types/payroll';

export interface PayrollValidationIssue {
  code: string;
  severity: 'info' | 'warning' | 'error';
  message: string;
  employeeId?: string;
}

export interface PayrollValidationSummary {
  batchId: string;
  issues: PayrollValidationIssue[];
  hasErrors: boolean;
  hasWarnings: boolean;
}

export function validatePayroll(batch: PayrollBatch): PayrollValidationSummary {
  const issues: PayrollValidationIssue[] = [];
  if (!batch.calculations || batch.calculations.length === 0) {
    issues.push({ code: 'NO_CALC', severity: 'error', message: 'No salary calculations present.' });
  } else {
    batch.calculations.forEach(c => {
      if (c.net < 0) issues.push({ code: 'NEG_NET', severity: 'error', message: `Negative net salary for ${c.employeeName}`, employeeId: c.employeeId });
      if (c.overtime > c.basic * 0.5) issues.push({ code: 'HIGH_OT', severity: 'warning', message: `Overtime exceeds 50% of basic for ${c.employeeName}`, employeeId: c.employeeId });
      if ((c.adjustmentsTotal||0) < 0 && Math.abs(c.adjustmentsTotal||0) > c.baseNet!) issues.push({ code: 'OVER_DEDUCT', severity: 'error', message: `Deductions exceed base net for ${c.employeeName}`, employeeId: c.employeeId });
    });
  }
  return { batchId: batch.id!, issues, hasErrors: issues.some(i=> i.severity==='error'), hasWarnings: issues.some(i=> i.severity==='warning') };
}
