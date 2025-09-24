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