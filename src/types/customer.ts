export interface Customer {
  id: string;
  customerCode: string; // CUS-2024-XXXX
  companyInfo: {
    name: string;
    nameArabic: string;
    tradeLicenseNumber: string;
    registrationNumber: string;
    taxNumber?: string;
    industry: 'Oil & Gas' | 'Construction' | 'Manufacturing' | 'Services' | 'Government' | 'Other';
    type: 'Corporate' | 'Government' | 'Semi-Government';
    website?: string;
    establishedDate?: string;
  };
  contact: {
    address: string;
    addressArabic?: string;
    poBox?: string;
    city: string;
    country: string;
    phone: string;
    fax?: string;
    email: string;
  };
  primaryContact: {
    name: string;
    nameArabic?: string;
    position: string;
    mobile: string;
    email: string;
    qatarId?: string;
  };
  secondaryContact?: {
    name: string;
    position: string;
    mobile: string;
    email: string;
  };
  contract: {
    contractNumber: string;
    startDate: string;
    endDate?: string;
    type: 'Master Agreement' | 'Project Based' | 'Annual' | 'Adhoc';
    status: 'Active' | 'Expired' | 'Suspended' | 'Terminated';
    creditLimit?: number;
    paymentTerms: '15 Days' | '30 Days' | '45 Days' | '60 Days';
    contractFileUrl?: string;
  };
  billing: {
    billingAddress?: string;
    billingEmail?: string;
    vatRegistered: boolean;
    vatNumber?: string;
    currency: 'QAR' | 'USD';
    invoiceFrequency: 'Monthly' | 'Bi-Monthly' | 'Project-Based';
    lastInvoiceDate?: string;
    lastInvoiceAmount?: number;
  };
  requirements: {
    manpowerTypes: string[];
    locations: string[];
    minimumWorkers?: number;
    maximumWorkers?: number;
    specialRequirements?: string;
    safetyTrainingRequired: boolean;
    medicalRequired: boolean;
    transportProvided: boolean;
    accommodationProvided: boolean;
  };
  rates: {
    defaultRates: Array<{
      position: string;
      rateType: 'Daily' | 'Hourly' | 'Monthly';
      normalRate: number;
      overtimeRate: number;
      holidayRate?: number;
      nightShiftRate?: number;
    }>;
    discountPercentage?: number;
    mobilizationFee?: number;
    demobilizationFee?: number;
  };
  deployment: {
    currentEmployees: Array<{
      employeeId: string;
      employeeName: string;
      position: string;
      startDate: string;
      endDate?: string;
      status: 'Active' | 'Completed' | 'Terminated';
    }>;
    totalDeployed: number;
    totalActive: number;
  };
  financial: {
    totalRevenue: number;
    currentMonthRevenue: number;
    outstandingAmount: number;
    lastPaymentDate?: string;
    lastPaymentAmount?: number;
    creditUsed: number;
    paymentHistory: Array<{
      date: string;
      amount: number;
      reference: string;
      method: string;
    }>;
  };
  documents: {
    tradeLicense?: { fileUrl: string; expiryDate: string; };
    contract?: { fileUrl: string; uploadDate: string; };
    insuranceCertificate?: { fileUrl: string; expiryDate: string; };
    otherDocuments?: Array<{ name: string; fileUrl: string; uploadDate: string; }>;
  };
  invoices?: CustomerInvoice[];
  status: 'Active' | 'Inactive' | 'Suspended' | 'Blacklisted';
  rating: 'Excellent' | 'Good' | 'Average' | 'Poor';
  notes?: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  lastModifiedBy: string;
}

export interface CustomerInvoiceLine {
  description: string;
  position?: string;
  quantity: number;
  unitRate: number;
  amount: number;
}

export interface CustomerInvoice {
  id: string;
  invoiceNumber: string; // INV-YYYY-XXXX
  customerId: string;
  periodStart: string;
  periodEnd: string;
  issueDate: string;
  dueDate: string;
  currency: 'QAR' | 'USD';
  lines: CustomerInvoiceLine[];
  subtotal: number;
  vatAmount: number;
  total: number;
  status: 'Draft' | 'Sent' | 'Paid' | 'Overdue' | 'Cancelled';
  notes?: string;
  createdAt: string;
}
