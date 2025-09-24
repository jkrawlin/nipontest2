export interface SalaryHistory {
  id: string;
  employeeId: string;
  month: number; // 1-12
  year: number;
  basic: number;
  allowances: number;
  overtime: number;
  deductions: number;
  advance: number;
  netSalary: number;
  daysWorked: number;
  paymentDate: string; // ISO date
  paymentMethod: 'Bank Transfer' | 'Cash' | 'Cheque';
  paymentReference?: string;
  status: 'Pending' | 'Paid' | 'Hold';
}

export interface LeaveRecord {
  id: string;
  employeeId: string;
  type: 'Annual' | 'Sick' | 'Emergency' | 'Unpaid';
  startDate: string; // ISO
  endDate: string; // ISO
  days: number;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  approvedBy?: string;
}
