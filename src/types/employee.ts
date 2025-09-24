// ---------------------------
// Phase 1: Comprehensive Employee Domain Model (Qatar-specific)
// ---------------------------

export interface ExpiringDocument {
  employeeId: string;
  employeeName: string;
  documentType: string;
  expiryDate: Date;
  daysRemaining: number;
  status: 'expired' | 'expiring-soon' | 'expiring' | 'valid';
}

export interface Employee {
  id: string;
  employeeCode: string; // Auto-generated e.g. EMP-2024-0001

  // Personal Information
  personalInfo: {
    firstName: string;
    lastName: string;
    firstNameArabic?: string;
    lastNameArabic?: string;
    dateOfBirth: Date;
    nationality: string;
    gender: 'Male' | 'Female';
    maritalStatus: 'Single' | 'Married' | 'Divorced' | 'Widowed';
    photoUrl?: string;
    bloodGroup?: string;
    religion?: string;
  };

  // Qatar Specific Documents
  documents: {
    qatarId: {
      number: string;
      issueDate: Date;
      expiryDate: Date;
      fileUrl?: string;
      profession: string; // As per Qatar ID
    };
    passport: {
      number: string;
      issueDate: Date;
      expiryDate: Date;
      issueCountry: string;
      fileUrl?: string;
    };
    visa: {
      number: string;
      issueDate: Date;
      expiryDate: Date;
      type: 'Work' | 'Family' | 'Business Visit';
      sponsor: string;
      fileUrl?: string;
    };
    healthCard?: {
      number: string;
      expiryDate: Date;
      fileUrl?: string;
    };
    laborContract?: {
      number: string;
      startDate: Date;
      endDate?: Date;
      fileUrl?: string;
    };
  };

  // Employment Details
  employment: {
    position: string;
    positionArabic?: string;
    department: string;
    joiningDate: Date;
    confirmationDate?: Date;
    contractType: 'Permanent' | 'Contract' | 'Temporary';
    workLocation: string;
    costCenter?: string;
    reportingTo?: string;
    employmentStatus: 'Probation' | 'Confirmed' | 'Notice Period';
  };

  // Compensation (Qatar-specific)
  compensation: {
    basicSalary: number;
    housingAllowance: number;
    transportAllowance: number;
    foodAllowance?: number;
    telephoneAllowance?: number;
    otherAllowances?: number;
    totalMonthlySalary: number; // Auto-calculated
    bankName: string;
    bankNameArabic?: string;
    accountNumber: string;
    iban: string;
    wpsEmployerId?: string; // Qatar WPS system
  };

  // Leave Management
  leave: {
    annualLeaveBalance: number;
    annualLeaveUsed: number;
    sickLeaveBalance: number;
    sickLeaveUsed: number;
    unpaidLeaveDays: number;
    lastLeaveDate?: Date;
  };

  // Contact Information
  contact: {
    mobileNumber: string;
    alternativeNumber?: string;
    email?: string;
    currentAddress: string;
    currentAddressArabic?: string;
    homeCountryAddress: string;
    emergencyContact: {
      name: string;
      relationship: string;
      phoneNumber: string;
      address?: string;
    };
  };

  // End of Service Calculation (computed and stored snapshot)
  endOfService: {
    eligibleAmount: number; // Auto-calculated based on Qatar labor law
    lastCalculationDate: Date;
    yearsOfService: number;
  };

  // Status & Metadata
  status: 'Active' | 'On Leave' | 'Terminated' | 'Absconded';
  terminationDate?: Date;
  terminationReason?: string;
  finalSettlementAmount?: number;

  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  lastModifiedBy: string;
}

// Lightweight form shape(s) can be defined later for creation/updating if needed.