import { LucideIcon, LayoutDashboard, Users, FileText, Calculator, Building2 } from 'lucide-react';

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

// SIMPLIFIED navigation – only essential sections
export const navigationItems: NavItem[] = [
  { title: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { title: 'Employees', icon: Users, path: '/employees' },
  { title: 'Customers', icon: Building2, path: '/customers' },
  { title: 'Payroll', icon: Calculator, path: '/payroll' },
  { title: 'Reports', icon: FileText, path: '/reports' }
];