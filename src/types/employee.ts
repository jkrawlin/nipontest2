export interface EmployeeDocumentInfo {
  number: string;
  expiryDate: Date | string;
  fileUrl?: string;
  type?: string;
}

export interface Employee {
  id: string;
  employeeCode: string;
  personalInfo: {
    firstName: string;
    lastName: string;
    dateOfBirth: Date | string;
    nationality: string;
    gender: 'Male' | 'Female';
    maritalStatus: 'Single' | 'Married' | 'Divorced' | 'Widowed';
    photoUrl?: string;
  };
  documents: {
    qatarId?: EmployeeDocumentInfo;
    passport: EmployeeDocumentInfo;
    visa?: EmployeeDocumentInfo & { type: 'Work' | 'Family' | 'Visit' };
  };
  employment: {
    position: string;
    department: string;
    joiningDate: Date | string;
    contractType: 'Permanent' | 'Contract' | 'Temporary';
    workLocation: string;
    reportingTo?: string;
  };
  compensation: {
    basicSalary: number;
    housingAllowance: number;
    transportAllowance: number;
    otherAllowances: number;
    bankName: string;
    accountNumber: string;
    iban: string;
  };
  contact: {
    mobileNumber: string;
    email?: string;
    currentAddress: string;
    homeCountryAddress: string;
    emergencyContact: string;
    emergencyContactNumber: string;
  };
  status: 'Active' | 'On Leave' | 'Terminated';
  terminationDate?: Date | string;
  createdAt: Date | string;
  updatedAt: Date | string;
}