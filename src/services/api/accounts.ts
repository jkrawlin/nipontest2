import type { AccountsSummary, Account, BankAccount, Transaction, TrialBalanceRow, PaymentVoucher } from '../../types';

// Simple in-memory stores for development only
const _ACCOUNTS: Account[] = [];
const _BANKS: BankAccount[] = [];
const _TRANSACTIONS: Transaction[] = [];
const _PAYMENT_VOUCHERS: PaymentVoucher[] = [];

function seed() {
  if (_ACCOUNTS.length > 0) return;
  const now = new Date();
  const seedAccounts: Array<Pick<Account,'accountCode'|'accountName'|'accountType'|'category'>> = [
    { accountCode: '1010', accountName: 'Cash and Cash Equivalents', accountType: 'Asset', category: 'Current Assets' },
    { accountCode: '1012', accountName: 'Bank Accounts', accountType: 'Asset', category: 'Current Assets' },
    { accountCode: '2010', accountName: 'Accounts Payable', accountType: 'Liability', category: 'Current Liabilities' },
    { accountCode: '5010', accountName: 'Salary Expense', accountType: 'Expense', category: 'Personnel' },
    { accountCode: '4000', accountName: 'Revenue', accountType: 'Revenue', category: 'Operating Revenue' }
  ];
  seedAccounts.forEach(a => _ACCOUNTS.push({
    id: crypto.randomUUID(),
    accountCode: a.accountCode,
    accountName: a.accountName,
    accountType: a.accountType,
    category: a.category,
    balance: 0,
    currency: 'QAR',
    isActive: true,
    createdAt: now,
    updatedAt: now
  }));
  _BANKS.push({
    id: crypto.randomUUID(),
    bankName: 'Qatar National Bank',
    accountName: 'Main Operating',
    accountNumber: '1234567890',
    iban: 'QA00QNB0000000001234567890',
    branch: 'Doha',
    currency: 'QAR',
    currentBalance: 150000,
    isDefault: true,
    isActive: true
  });
}
seed();

export const AccountsService = {
  async getSummary(): Promise<AccountsSummary> {
    const totalAssets = _ACCOUNTS.filter(a => a.accountType === 'Asset').reduce((s,a)=>s+a.balance,0);
    const totalLiabilities = _ACCOUNTS.filter(a => a.accountType === 'Liability').reduce((s,a)=>s+a.balance,0);
    const cashInBanks = _BANKS.reduce((s,b)=>s+b.currentBalance,0);
    const monthlyExpenses = _ACCOUNTS.filter(a => a.accountType === 'Expense').reduce((s,a)=>s+Math.abs(a.balance),0);
    return { totalAssets, totalLiabilities, cashInBanks, monthlyExpenses };
  },
  async getBankAccounts(): Promise<BankAccount[]> { return _BANKS; },
  async getTransactions(opts?: { limit?: number }): Promise<Transaction[]> {
    const list = [..._TRANSACTIONS].sort((a,b)=> (b.date as any) - (a.date as any));
    return opts?.limit ? list.slice(0, opts.limit) : list;
  },
  async getTrialBalance(range: { from: Date; to: Date }): Promise<TrialBalanceRow[]> {
    // Simplified: just map accounts into debit/credit based on sign
    return _ACCOUNTS.map(a => ({
      id: a.id,
      code: a.accountCode,
      name: a.accountName,
      debit: a.accountType === 'Asset' || a.accountType === 'Expense' ? Math.max(a.balance,0) : 0,
      credit: a.accountType === 'Liability' || a.accountType === 'Equity' || a.accountType === 'Revenue' ? Math.max(a.balance,0) : 0
    }));
  },
  async createPaymentVoucher(data: Omit<PaymentVoucher,'id'|'voucherNumber'|'approvalStatus'|'approvedAt'|'approvedBy'|'transactionId'>): Promise<PaymentVoucher> {
    const seq = String(_PAYMENT_VOUCHERS.length + 1).padStart(5,'0');
    const year = new Date().getFullYear();
    const pv: PaymentVoucher = { ...data, id: crypto.randomUUID(), voucherNumber: `PV-${year}-${seq}`, approvalStatus: 'Pending' };
    _PAYMENT_VOUCHERS.push(pv);
    return pv;
  }
};
