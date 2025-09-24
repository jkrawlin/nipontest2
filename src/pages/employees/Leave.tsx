import React, { useEffect, useState } from 'react';
import { EmployeeService } from '../../services/api/employees';
import type { Employee } from '../../types/employee';

export const EmployeeLeavePage: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { (async () => {
    const emps = await EmployeeService.getActiveEmployees();
    setEmployees(emps);
    setLoading(false);
  })(); }, []);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-xl font-semibold">Leave Balances</h1>
        <p className="text-xs text-gray-500">Qatar labor law: Minimum annual leave entitlements reflect years of service (custom logic can expand here).</p>
      </div>
      {loading ? <div className="text-sm text-gray-500">Loading…</div> : (
        <div className="overflow-x-auto border rounded bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left">Employee</th>
                <th className="px-3 py-2 text-right">Annual Balance</th>
                <th className="px-3 py-2 text-right">Annual Used</th>
                <th className="px-3 py-2 text-right">Sick Balance</th>
                <th className="px-3 py-2 text-right">Sick Used</th>
                <th className="px-3 py-2 text-right">Unpaid Leave Days</th>
              </tr>
            </thead>
            <tbody>
              {employees.filter(e=> e.employeeType==='Permanent').map(e => (
                <tr key={e.id} className="border-b last:border-0">
                  <td className="px-3 py-2 font-medium whitespace-nowrap">{e.personalInfo.firstName} {e.personalInfo.lastName}</td>
                  <td className="px-3 py-2 text-right">{e.leave.annualLeaveBalance}</td>
                  <td className="px-3 py-2 text-right">{e.leave.annualLeaveTaken}</td>
                  <td className="px-3 py-2 text-right">{e.leave.sickLeaveBalance}</td>
                  <td className="px-3 py-2 text-right">{e.leave.sickLeaveTaken}</td>
                  <td className="px-3 py-2 text-right">{e.leave.unpaidLeaveDays}</td>
                </tr>
              ))}
              {employees.filter(e=> e.employeeType==='Permanent').length === 0 && <tr><td colSpan={6} className="px-3 py-6 text-center text-gray-500">No permanent employees.</td></tr>}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default EmployeeLeavePage;
