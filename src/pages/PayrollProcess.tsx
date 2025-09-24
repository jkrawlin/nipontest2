import React, { useState } from 'react';
import { EmployeeService } from '../services/employeeService';

export const PayrollProcess: React.FC = () => {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [year, setYear] = useState(today.getFullYear());
  const [payrollData, setPayrollData] = useState<any[]>([]);

  const processPayroll = () => {
    const employees = EmployeeService.getAll().filter(e => e.status === 'Active');
    const data = employees.map(emp => ({
      employeeCode: emp.employeeCode,
      name: `${emp.firstName} ${emp.lastName}`,
      basicSalary: emp.basicSalary,
      allowances: emp.allowances,
      total: emp.totalSalary,
      bank: emp.bankName,
      account: emp.accountNumber
    }));
    setPayrollData(data);
  };

  const downloadWPS = () => {
    const csv = [
      'Employee Code,Name,Amount,Bank,Account',
      ...payrollData.map(p => `${p.employeeCode},${p.name},${p.total},${p.bank},${p.account}`)
    ].join('\n');
    const blob = new Blob([csv], { type:'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `WPS_${year}_${month}.csv`; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Process Payroll</h1>
      <div className="bg-white p-6 rounded shadow mb-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Month</label>
            <select value={month} onChange={e=> setMonth(Number(e.target.value))} className="w-full p-2 border rounded">
              {['January','February','March','April','May','June','July','August','September','October','November','December'].map((m,i)=>(<option key={m} value={i+1}>{m}</option>))}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Year</label>
            <select value={year} onChange={e=> setYear(Number(e.target.value))} className="w-full p-2 border rounded">
              <option value={2024}>2024</option>
              <option value={2025}>2025</option>
            </select>
          </div>
        </div>
        <button onClick={processPayroll} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Calculate Payroll</button>
      </div>
      {payrollData.length>0 && (
        <div className="bg-white p-6 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Payroll Summary</h2>
            <button onClick={downloadWPS} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Download WPS File</button>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Employee</th>
                <th className="p-2 text-right">Basic</th>
                <th className="p-2 text-right">Allowances</th>
                <th className="p-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {payrollData.map((r,i)=>(
                <tr key={i} className="border-t">
                  <td className="p-2">{r.name}</td>
                  <td className="p-2 text-right">QAR {r.basicSalary}</td>
                  <td className="p-2 text-right">QAR {r.allowances}</td>
                  <td className="p-2 text-right font-bold">QAR {r.total}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t font-bold">
                <td className="p-2">Total</td>
                <td className="p-2 text-right">QAR {payrollData.reduce((s,r)=> s + r.basicSalary,0)}</td>
                <td className="p-2 text-right">QAR {payrollData.reduce((s,r)=> s + r.allowances,0)}</td>
                <td className="p-2 text-right">QAR {payrollData.reduce((s,r)=> s + r.total,0)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
};

export default PayrollProcess;
