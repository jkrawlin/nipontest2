import type { PayrollBatch, SalaryCalculation, PayrollAdjustment } from './payroll';

export interface PayslipLine {
  code: string;          // e.g. BASIC, HOU, TRANS, OT, BONUS, DED
  description: string;
  amount: number;        // positive numbers; deductions separated in grouping
  type: 'earning' | 'deduction';
}

export interface Payslip {
  id: string;
  batchId: string;
  employeeId: string;
  employeeName: string;
  employeeType?: 'Permanent' | 'Temporary';
  period: { month: number; year: number };
  lines: PayslipLine[];
  gross: number;
  deductions: number;
  net: number;
  generatedAt: Date;
  versionHash: string; // deterministic hash of source batch calc + adjustments snapshot
}

export interface PayslipGenerationResult {
  batchId: string;
  count: number;
  totalNet: number;
  payslips: Payslip[];
}

export function buildPayslipFromCalculation(batch: PayrollBatch, calc: SalaryCalculation, adjustments: PayrollAdjustment[] = [], versionHash: string): Payslip {
  // Distinguish layout for Temporary: consolidated earnings line; Permanent: detailed breakdown.
  const earningLines: PayslipLine[] = [];
  if (calc.employeeType === 'Temporary') {
    earningLines.push({ code: 'EARN', description: 'Total Earnings', amount: calc.basic, type: 'earning' });
    if (calc.overtime) earningLines.push({ code: 'OT', description: 'Overtime', amount: calc.overtime, type: 'earning' });
  } else {
    earningLines.push({ code: 'BASIC', description: 'Basic Salary', amount: calc.basic, type: 'earning' });
    earningLines.push({ code: 'HOU', description: 'Housing Allowance', amount: calc.housing, type: 'earning' });
    earningLines.push({ code: 'TRANS', description: 'Transport Allowance', amount: calc.transport, type: 'earning' });
    if (calc.other) earningLines.push({ code: 'OTHR', description: 'Other Allowances', amount: calc.other, type: 'earning' });
    if (calc.overtime) earningLines.push({ code: 'OT', description: 'Overtime', amount: calc.overtime, type: 'earning' });
  }

  const deductionLines: PayslipLine[] = [];
  if (calc.deductions) deductionLines.push({ code: 'ABS', description: 'Absence / Leave Deductions', amount: calc.deductions, type: 'deduction' });

  adjustments.forEach(a => {
    const common = { description: a.reason || a.type, amount: a.amount };
    if (a.type === 'deduction') {
      deductionLines.push({ code: 'DED', ...common, type: 'deduction' });
    } else {
      earningLines.push({ code: a.type.toUpperCase().slice(0,5), ...common, type: 'earning' });
    }
  });

  const gross = earningLines.reduce((s,l)=> s + l.amount, 0);
  const deductions = deductionLines.reduce((s,l)=> s + l.amount, 0);
  const net = gross - deductions;

  return {
    id: `${batch.id}-${calc.employeeId}`,
    batchId: batch.id!,
    employeeId: calc.employeeId,
    employeeName: calc.employeeName,
  period: { month: batch.month, year: batch.year },
  employeeType: calc.employeeType,
    lines: [...earningLines, ...deductionLines],
    gross,
    deductions,
    net,
    generatedAt: new Date(),
    versionHash
  };
}
