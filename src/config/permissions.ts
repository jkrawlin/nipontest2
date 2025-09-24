export type Role = 'admin' | 'manager'; // extend later with 'accountant', etc.

export const permissions = {
  employee: {
    create: ['admin', 'manager'],
    update: ['admin', 'manager'],
    delete: ['admin'],
    view: ['admin', 'manager']
  },
  payroll: {
    process: ['admin', 'manager'],
    approve: ['admin'],
    view: ['admin', 'manager']
  },
  accounts: {
    view: ['admin', 'manager'],
    create_account: ['admin'],
    update_account: ['admin'],
    view_transactions: ['admin', 'manager'],
    post_transaction: ['admin'],
    create_payment_voucher: ['admin', 'manager'],
    approve_payment_voucher: ['admin']
  }
} as const;

// Granular permission strings used in navigation & feature gating
export const rolePermissions: Record<Role, string[]> = {
  admin: [
    'view_dashboard',
    'view_employees','create_employee','update_employee','delete_employee',
    'view_payroll','process_payroll','approve_payroll',
    'view_accounts','create_account','update_account','view_transactions','post_transaction','create_payment_voucher','approve_payment_voucher',
    'view_reports','view_settings'
  ],
  manager: [
    'view_dashboard',
    'view_employees','create_employee','update_employee',
    'view_payroll','process_payroll',
    'view_accounts','view_transactions','create_payment_voucher',
    'view_reports'
  ]
};

export function hasPermission(role: Role | undefined, perm?: string): boolean {
  if (!perm) return true; // no permission required
  if (!role) return false;
  return rolePermissions[role]?.includes(perm) ?? false;
}

export const can = (role: Role | undefined, domain: keyof typeof permissions, action: string): boolean => {
  if (!role) return false;
  const domainPerm = permissions[domain] as Record<string, readonly Role[]>;
  return (domainPerm[action] ?? []).includes(role);
};