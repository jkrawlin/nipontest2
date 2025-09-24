import { LucideIcon, LayoutDashboard, Users, FileText, Calculator, DollarSign, Settings, Archive } from 'lucide-react';

export interface NavChildItem {
  title: string;
  path: string;
  permission?: string;
}

export interface NavItem {
  title: string;
  icon: LucideIcon;
  path: string;
  permission?: string;
  children?: NavChildItem[];
}

export const navigationItems: NavItem[] = [
  { title: 'Dashboard', icon: LayoutDashboard, path: '/dashboard', permission: 'view_dashboard' },
  {
    title: 'Employees', icon: Users, path: '/employees', permission: 'view_employees',
    children: [
      { title: 'All Employees', path: '/employees' },
      { title: 'Add Employee', path: '/employees/new', permission: 'create_employee' },
      { title: 'Import Data', path: '/employees/import' },
  { title: 'Documents', path: '/employees/documents' },
  { title: 'Leave', path: '/employees/leave' },
  { title: 'End of Service', path: '/employees/eos' }
    ]
  },
  {
    title: 'Payroll', icon: Calculator, path: '/payroll', permission: 'view_payroll',
    children: [
      { title: 'Process Payroll', path: '/payroll/process', permission: 'process_payroll' },
      { title: 'Payroll History', path: '/payroll/history' },
      { title: 'Payslips', path: '/payroll/payslips' },
      { title: 'Salary Adjustments', path: '/payroll/adjustments' }
    ]
  },
  {
    title: 'Accounts', icon: DollarSign, path: '/accounts', permission: 'view_accounts',
    children: [
      { title: 'Overview', path: '/accounts' },
      { title: 'Transactions', path: '/accounts/transactions', permission: 'view_transactions' },
      { title: 'Payment Vouchers', path: '/accounts/payments', permission: 'create_payment_voucher' },
      { title: 'Receipt Vouchers', path: '/accounts/receipts' },
      { title: 'Bank Accounts', path: '/accounts/banks' },
      { title: 'Chart of Accounts', path: '/accounts/chart' },
      { title: 'Expense Claims', path: '/accounts/expenses' },
      { title: 'Trial Balance', path: '/accounts/trial-balance' },
      { title: 'P&L Statement', path: '/accounts/profit-loss' }
    ]
  },
  { title: 'Reports', icon: FileText, path: '/reports', permission: 'view_reports' },
  {
    title: 'Settings', icon: Settings, path: '/settings', permission: 'view_settings',
    children: [
      { title: 'Company Info', path: '/settings/company' },
      { title: 'Payroll Settings', path: '/settings/payroll' },
      { title: 'Email Templates', path: '/settings/templates' },
      { title: 'Backup & Restore', path: '/settings/backup' }
    ]
  }
];