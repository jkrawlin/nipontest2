export type AccountType = 'Asset' | 'Liability' | 'Equity' | 'Revenue' | 'Expense';

export interface Account {
  id: string;
  accountCode: string;
  accountName: string;
  accountType: AccountType;
  category?: string;
  balance: number;
  currency: 'QAR';
  description?: string;
  parentAccountId?: string;
  isActive: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface TransactionEntry {
  id: string;
  accountId: string;
  debit: number; // either debit or credit will be > 0 (never both)
  credit: number;
  description?: string;
}

export type TransactionType = 'Payment' | 'Receipt' | 'Journal' | 'Payroll';
export type TransactionStatus = 'Draft' | 'Posted' | 'Cancelled';

export interface Transaction {
  id: string;
  transactionNumber: string; // e.g. TXN-2025-00001
  date: Date | string;
  type: TransactionType;
  status: TransactionStatus;
  entries: TransactionEntry[];
  reference?: string;
  description: string;
  attachments?: string[];
  relatedEntity?: {
    type: 'Employee' | 'Payroll' | 'Vendor' | 'Other';
    id: string;
    name: string;
  };
  createdBy: string;
  approvedBy?: string;
  postedAt?: Date | string;
}

export interface BankAccount {
  id: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  iban: string;
  swiftCode?: string;
  branch: string;
  currency: 'QAR';
  currentBalance: number;
  isDefault: boolean;
  isActive: boolean;
}

export type PaymentVoucherCategory = 'Salary' | 'Allowance' | 'Reimbursement' | 'Vendor Payment' | 'Other';
export type PaymentMethod = 'Bank Transfer' | 'Cash' | 'Cheque';
export type PaymentApprovalStatus = 'Pending' | 'Approved' | 'Rejected' | 'Paid';

export interface PaymentVoucher {
  id: string;
  voucherNumber: string; // PV-2025-00001
  date: Date | string;
  paymentMethod: PaymentMethod;
  payee: {
    type: 'Employee' | 'Vendor' | 'Other';
    id?: string;
    name: string;
  };
  bankAccountId?: string;
  chequeNumber?: string;
  amount: number;
  currency: 'QAR';
  purpose: string;
  category: PaymentVoucherCategory;
  approvalStatus: PaymentApprovalStatus;
  approvedBy?: string;
  approvedAt?: Date | string;
  attachments?: string[];
  notes?: string;
  transactionId?: string; // link to GL transaction
}

// Lightweight summary shapes for dashboard widgets
export interface AccountsSummary {
  totalAssets: number;
  totalLiabilities: number;
  cashInBanks: number;
  monthlyExpenses: number;
}

export interface TrialBalanceRow {
  id: string;
  code: string;
  name: string;
  debit: number;
  credit: number;
}
