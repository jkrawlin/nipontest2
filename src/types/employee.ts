// CRITICAL SEPARATION: Permanent vs Temporary employees
export type EmployeeType = 'Permanent' | 'Temporary';

export interface BaseEmployee {
  id: string;
  employeeCode: string;
  employeeType: EmployeeType;
  personalInfo: {
    firstName: string;
    lastName: string;
    firstNameArabic?: string;
    lastNameArabic?: string;
    fatherName: string;
    motherName?: string;
    dateOfBirth: string;
    placeOfBirth: string;
    nationality: string;
    religion: string;
    gender: 'Male' | 'Female';
    maritalStatus: 'Single' | 'Married' | 'Divorced' | 'Widowed';
    bloodGroup: string;
    photoUrl?: string;
  };
  contact: {
    mobileQatar: string;
    mobileHome?: string;
    email?: string;
    address: string;
    emergencyContact: { name: string; relationship: string; phone: string };
  };
  status: 'Active' | 'On Leave' | 'Terminated' | 'Contract Ended';
  createdAt: string;
  updatedAt: string;
}

export interface PermanentEmployee extends BaseEmployee {
  employeeType: 'Permanent';
  documents: {
    qatarId: { number: string; issueDate: string; expiryDate: string; profession: string; sponsor: string; fileUrl?: string };
    passport: { number: string; issueDate: string; expiryDate: string; issuePlace: string; fileUrl?: string };
    visa: { number: string; issueDate: string; expiryDate: string; type: 'Work' | 'Family'; sponsor: string; occupation: string; fileUrl?: string };
    healthCard: { number: string; issueDate: string; expiryDate: string; fileUrl?: string };
    laborContract: { number: string; startDate: string; authenticated: boolean; fileUrl?: string };
  };
  employment: {
    position: string; positionArabic: string; department: string; joiningDate: string; confirmationDate?: string;
    contractType: 'Unlimited' | 'Limited'; contractEndDate?: string; workLocation: string; reportingTo?: string;
  };
  compensation: {
    basicSalary: number; housingAllowance: number; transportAllowance: number; foodAllowance?: number; phoneAllowance?: number; otherAllowances?: number; totalMonthlySalary: number; bankName: string; accountNumber: string; iban: string;
  };
  leave: { annualLeaveEntitlement: number; annualLeaveBalance: number; annualLeaveTaken: number; sickLeaveBalance: number; sickLeaveTaken: number; emergencyLeaveBalance: number; unpaidLeaveDays: number };
  endOfService: { eligible: boolean; serviceYears: number; gratuityAmount: number; lastWorkingDate?: string; exitPermitRequired: boolean };
}

export interface TemporaryEmployee extends BaseEmployee {
  employeeType: 'Temporary';
  documents: {
    qatarId?: { number: string; issueDate: string; expiryDate: string; profession?: string; sponsor?: string; fileUrl?: string };
    passport: { number: string; issueDate: string; expiryDate: string; issuePlace: string; fileUrl?: string };
    visa?: { number: string; issueDate: string; expiryDate: string; type: 'Visit' | 'Business' | 'Tourist'; sponsor: string; fileUrl?: string };
    workPermit?: { number: string; issueDate: string; expiryDate: string; fileUrl?: string };
  };
  contract: { contractNumber: string; startDate: string; endDate: string; client: string; clientLocation: string; position: string; workType: 'Daily Wage' | 'Hourly' | 'Project Based'; contractFileUrl?: string };
  compensation: { rateType: 'Daily' | 'Hourly' | 'Monthly'; rate: number; overtimeRate?: number; foodAllowance?: number; transportProvided: boolean; accommodationProvided: boolean; totalEarnings?: number };
  attendance: { totalDaysWorked: number; totalHoursWorked?: number; overtimeHours?: number; lastWorkDate?: string };
  payment: { paymentMethod: 'Cash' | 'Bank Transfer'; bankName?: string; accountNumber?: string; lastPaymentDate?: string; lastPaymentAmount?: number };
}

export type Employee = PermanentEmployee | TemporaryEmployee;

// Re-introduced generic document expiry projection for dashboards
export interface ExpiringDocument {
  employeeId: string;
  employeeType: EmployeeType;
  employeeName: string;
  documentType: string;
  documentNumber?: string;
  expiryDate: string; // ISO date string
  daysRemaining: number;
  status: 'expired' | 'critical' | 'warning' | 'valid';
}

