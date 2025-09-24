// SIMPLIFIED Employee model – ONLY essential, user-facing daily fields
// Intentionally removes deep nesting & advanced HR constructs
export interface Employee {
  id: string;
  employeeCode: string; // EMP-001 style
  type: 'Permanent' | 'Temporary';

  // Basic Info
  firstName: string;
  lastName: string;
  nationality: string;
  position: string;
  department: string;
  joiningDate: string; // ISO date

  // Documents (only key ones retained)
  qatarId: string;
  qatarIdExpiry: string; // ISO date
  passport: string;
  passportExpiry: string; // ISO date

  // Salary (simple)
  basicSalary: number;
  allowances: number;
  totalSalary: number; // basic + allowances (pre-computed for convenience)

  // Bank
  bankName: string;
  accountNumber: string;

  // Contact
  mobile: string;
  email?: string;

  status: 'Active' | 'Inactive';
}

// Lightweight structure used for document expiry widget
export interface ExpiringDocument {
  employee: string;        // full name
  document: 'Qatar ID' | 'Passport';
  expiryDate: string;      // ISO date
  daysLeft: number;        // negative = expired
}


