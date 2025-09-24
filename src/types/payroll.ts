export interface PayrollAdjustment {
  id: string;
  employeeId: string;
  type: 'overtime' | 'bonus' | 'deduction' | 'allowance';
  amount: number; // positive number; sign derived from type (deduction treated as negative when aggregating)
  reason?: string; // user-provided description
  appliedAt: Date | string;
  editedAt?: Date | string;
  editedReason?: string;
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
  // Final net after adjustments (mutable during adjustment phase)
  net: number;
  // Snapshots to preserve original calculation baselines
  baseNet?: number; // original net before adjustments
  adjustmentsTotal?: number; // aggregate adjustments applied (bonuses + allowances - deductions)
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
  adjustments?: PayrollAdjustment[]; // granular adjustment entries
  adjustmentAudit?: Array<{ action: 'add' | 'edit' | 'remove'; adjustmentId: string; at: string; by?: string; details?: any }>;
  totalAmount: import('decimal.js').Decimal;
  status: 'draft' | 'approved' | 'processed';
}