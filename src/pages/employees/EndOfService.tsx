import React, { useEffect, useState } from 'react';
import { EmployeeService } from '../../services/api/employees';
import type { Employee } from '../../types/employee';
import Decimal from 'decimal.js';

export const EndOfServicePage: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [recalcLoading, setRecalcLoading] = useState(false);

  useEffect(() => { (async () => {
    const emps = await EmployeeService.getActiveEmployees();
    setEmployees(emps);
    setLoading(false);
  })(); }, []);

  const recalc = async () => {
    setRecalcLoading(true);
    await EmployeeService.recalcEndOfServiceAll();
    const emps = await EmployeeService.getActiveEmployees();
    setEmployees(emps);
    setRecalcLoading(false);
  };

  const totalLiability = employees.reduce((s,e)=> s.plus(e.endOfService.eligibleAmount), new Decimal(0));

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-semibold">End of Service (EOS) Summary</h1>
          <p className="text-xs text-gray-500 max-w-xl">Gratuity approximated per Qatar Labor Law Article 54: 3 weeks basic salary per year for first 5 years, 4 weeks thereafter. This is a simplified estimator and should be validated against current legislation.</p>
        </div>
        <button onClick={recalc} disabled={recalcLoading} className="px-3 py-1.5 rounded text-xs bg-qatar-maroon text-white disabled:opacity-60">{recalcLoading ? 'Recalculating…' : 'Recalculate'}</button>
      </div>
      {loading ? <div className="text-sm text-gray-500">Loading…</div> : (
        <>
          <div className="text-sm font-medium">Total EOS Liability: <span className="text-qatar-maroon font-semibold">{totalLiability.toFixed(2)}</span></div>
          <div className="overflow-x-auto border rounded bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left">Employee</th>
                  <th className="px-3 py-2 text-right">Years of Service</th>
                  <th className="px-3 py-2 text-right">Basic Salary</th>
                  <th className="px-3 py-2 text-right">Eligible Amount</th>
                  <th className="px-3 py-2 text-left">Last Calculation</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(e => (
                  <tr key={e.id} className="border-b last:border-0">
                    <td className="px-3 py-2 font-medium whitespace-nowrap">{e.personalInfo.firstName} {e.personalInfo.lastName}</td>
                    <td className="px-3 py-2 text-right">{e.endOfService.yearsOfService.toFixed(2)}</td>
                    <td className="px-3 py-2 text-right">{e.compensation.basicSalary.toFixed(2)}</td>
                    <td className="px-3 py-2 text-right font-semibold">{e.endOfService.eligibleAmount.toFixed(2)}</td>
                    <td className="px-3 py-2 text-left text-xs">{new Date(e.endOfService.lastCalculationDate).toLocaleDateString('en-US')}</td>
                  </tr>
                ))}
                {employees.length === 0 && <tr><td colSpan={5} className="px-3 py-6 text-center text-gray-500">No employees.</td></tr>}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};
export default EndOfServicePage;
