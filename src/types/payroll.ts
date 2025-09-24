export interface PayrollAdjustment {
  id: string;
  employeeId: string;
  type: 'overtime' | 'bonus' | 'deduction';
  amount: number;
  notes?: string;
  appliedAt: Date | string;
}

export interface PayrollRecord {
  id: string;
  month: number;
  year: number;
  employeeId: string;
  basicSalary: number;
  housingAllowance: number;
  transportAllowance: number;
  otherAllowances: number;
  overtimeAmount: number;
  bonusAmount: number;
  deductions: number;
  grossSalary: number;
  netSalary: number;
  status: 'Draft' | 'Pending' | 'Approved' | 'Paid' | 'Cancelled';
  createdAt: Date | string;
  updatedAt: Date | string;
}

// Phase 2 additional types
export interface SalaryCalculation {
  employeeId: string;
  employeeName: string;
  workingDays: number;
  basic: number;
  housing: number;
  transport: number;
  other?: number;
  overtime: number;
  gross: number;
  deductions: number;
  net: number;
}

export interface PayrollAttendanceEntry {
  presentDays: number;
  absentDays: number;
  overtimeHours: number;
}

export interface PayrollBatch {
  id?: string;
  month: number;
  year: number;
  employees: string[]; // employee IDs included in this run
  attendance?: Record<string, PayrollAttendanceEntry>;
  calculations?: SalaryCalculation[];
  totalAmount: import('decimal.js').Decimal;
  status: 'draft' | 'approved' | 'processed';
}