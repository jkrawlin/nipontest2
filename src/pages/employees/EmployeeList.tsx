import React from 'react';
import { EmployeeTable } from '../../components/features/employees/EmployeeTable';

export const EmployeeListPage: React.FC = () => (
  <div className="p-6 space-y-6">
    <div className="space-y-1">
      <h1 className="text-2xl font-semibold">Employees</h1>
      <p className="text-sm text-gray-600">Manage and monitor all active personnel.</p>
    </div>
    <EmployeeTable />
  </div>
);