// Legacy unified EmployeeForm temporarily disabled post employee-type split.
// Intentionally exporting a stub to satisfy existing imports until refactored screens are wired
// to dedicated PermanentEmployeeForm / TemporaryEmployeeForm components.
import React from 'react';
export const EmployeeForm: React.FC = () => (
  <div className="p-4 text-xs text-amber-600">Legacy EmployeeForm disabled after split. Use new Permanent / Temporary forms.</div>
);