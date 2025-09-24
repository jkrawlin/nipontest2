// Expanded Qatar-compliant employee domain (superset of earlier model).

export interface ExpiringDocument {
  employeeId: string;
  employeeName: string;
  documentType: string;
  documentNumber?: string;
  expiryDate: Date;
  daysRemaining: number;
  status: 'expired' | 'critical' | 'warning' | 'upcoming' | 'expiring-soon' | 'expiring' | 'valid';
}

export interface Employee {
  id: string;
  employeeCode: string; // EMP-YYYY-NNNN

  personalInfo: {
    firstName: string;
    lastName: string;
    firstNameArabic?: string;
    lastNameArabic?: string;
    fatherName?: string;
    dateOfBirth: Date;
    placeOfBirth?: string;
    nationality: string;
    religion?: string;
    gender: 'Male' | 'Female';
    maritalStatus: 'Single' | 'Married' | 'Divorced' | 'Widowed';
    bloodGroup?: string;
    photoUrl?: string;
  };

  documents: {
    qatarId: {
      number: string;
      issueDate: Date;
      expiryDate: Date;
      profession: string;
      sponsor?: string;
      zone?: string;
      street?: string;
      building?: string;
      fileUrl?: string;
    };
    passport: {
      number: string;
      issueDate: Date;
      expiryDate: Date;
      issuePlace?: string;
      nationality: string;
      fileUrl?: string;
    };
    visa: {
      number: string;
      issueDate: Date;
      expiryDate: Date;
      type: 'Work Visa' | 'Family Visa' | 'Business Visa' | 'Visit Visa' | 'Work' | 'Family' | 'Business Visit';
      sponsorId?: string;
      sponsorName?: string;
      occupation?: string;
      fileUrl?: string;
    };
    healthCard?: {
      number: string;
      issueDate?: Date;
      expiryDate: Date;
      bloodGroup?: string;
      fileUrl?: string;
    };
    laborContract?: {
      number: string;
      startDate: Date;
      endDate?: Date;
      authenticated?: boolean;
      fileUrl?: string;
    };
    entryPermit?: { number: string; issueDate: Date; fileUrl?: string };
  };

  employment: {
    position: string;
    positionArabic?: string;
    department: string;
    section?: string;
    joiningDate: Date;
    confirmationDate?: Date;
    contractStartDate?: Date; // new fields; if undefined fallback to joiningDate
    contractEndDate?: Date;
    contractType: 'Unlimited' | 'Limited' | 'Permanent' | 'Contract' | 'Temporary';
    employmentType?: 'Full Time' | 'Part Time' | 'Contract';
    workLocation: string;
    costCenter?: string;
    reportingTo?: string;
    qatarExperience?: number;
    totalExperience?: number;
    employmentStatus?: 'Probation' | 'Confirmed' | 'Notice Period';
  };

  compensation: {
    basicSalary: number;
    housingAllowance: number;
    transportAllowance: number;
    foodAllowance?: number;
    phoneAllowance?: number; // alias of telephoneAllowance
    telephoneAllowance?: number; // backward compat
    otherAllowances?: number;
    totalSalary: number; // new canonical total
    totalMonthlySalary?: number; // legacy name (kept for backward compatibility)
    bankName: string;
    bankNameArabic?: string;
    branchName?: string;
    accountNumber: string;
    iban: string;
    cardNumber?: string;
    wpsEmployerId?: string;
    wpsReferenceNumber?: string;
    paymentMethod?: 'Bank Transfer' | 'Cash' | 'Cheque';
  };

  leave: {
    annualLeaveEntitlement: number; // calculated (21 / 30)
    annualLeaveBalance: number;
    annualLeaveUsed?: number; // legacy alias
    annualLeaveTaken?: number; // new name
    sickLeaveBalance: number;
    sickLeaveUsed?: number; // legacy alias
    sickLeaveTaken?: number; // new name
    emergencyLeaveBalance?: number;
    emergencyLeaveTaken?: number;
    unpaidLeaveDays: number;
    publicHolidaysEntitled?: number;
    lastLeaveDate?: Date;
    leaveReturnDate?: Date;
  };

  contact: {
    mobileQatar: string; // +974 XXXX XXXX
    mobileHome?: string;
    email: string;
    personalEmail?: string;
    qatarAddress: {
      zone?: string;
      street?: string;
      building?: string;
      unitNumber?: string;
      poBox?: string;
      area?: string;
    };
    homeCountryAddress: string;
    emergencyContact: {
      name: string;
      nameArabic?: string;
      relationship: string;
      mobileQatar?: string;
      mobileHome?: string;
      address: string;
    };
  };

  endOfService: {
    eligible: boolean;
    totalServiceYears: number;
    gratuityAmount: number;
    eligibleAmount?: number; // legacy amount
    yearsOfService?: number; // legacy years
    lastWorkingDate?: Date;
    noticePeriod?: number;
    exitPermitRequired: boolean;
    flightTicketProvided: boolean;
    finalSettlementStatus?: 'Pending' | 'Processing' | 'Completed';
    lastCalculationDate?: Date;
  };

  status: 'Active' | 'On Leave' | 'Notice Period' | 'Terminated' | 'Absconded';
  statusReason?: string;
  blacklisted?: boolean;
  rehirable?: boolean;
  terminationDate?: Date;
  terminationReason?: string;
  finalSettlementAmount?: number;

  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  lastModifiedBy?: string; // legacy alias
  notes?: string;
}

export interface DocumentExpiry extends ExpiringDocument {}
