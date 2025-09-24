import { LucideIcon, LayoutDashboard, Users, FileText, Calculator, DollarSign, Settings, Clock, Building2, Plus, Receipt } from 'lucide-react';

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
  { title: 'Employees', icon: Users, path: '/employees', permission: 'view_employees', children: [
    { title: 'Permanent Employees', path: '/employees/permanent', },
    { title: 'Temporary Employees', path: '/employees/temporary', },
    { title: 'All Employees', path: '/employees/all' },
    { title: 'Document Expiry', path: '/employees/documents' },
  ]},
  { title: 'Payroll', icon: Calculator, path: '/payroll', permission: 'view_payroll', children: [
    { title: 'Permanent Payroll', path: '/payroll/permanent' },
    { title: 'Temporary Payroll', path: '/payroll/temporary' },
    { title: 'WPS Generation', path: '/payroll/wps' },
    { title: 'Payroll History', path: '/payroll/history' },
  ]},
  { title: 'Attendance', icon: Clock, path: '/attendance', permission: 'view_attendance', children: [
    { title: 'Daily Attendance', path: '/attendance/daily' },
    { title: 'Temporary Workers Log', path: '/attendance/temporary' },
    { title: 'Import Attendance', path: '/attendance/import' },
  ]},
  { title: 'Customers', icon: Building2, path: '/customers', children: [
    { title: 'All Customers', path: '/customers' },
    { title: 'Add Customer', path: '/customers/new' },
    { title: 'Contracts', path: '/customers/contracts' },
    { title: 'Deploy Staff', path: '/customers/deploy' },
    { title: 'Customer Invoices', path: '/customers/invoices' },
  ]},
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