import React, { useEffect, useState } from 'react';
import { EmployeeService } from '../../services/employeeService';
import { CustomerService } from '../../services/customerService';
import type { ExpiringDocument } from '../../types/employee';

export const DashboardPage: React.FC = () => {
  const [expiringDocs, setExpiringDocs] = useState<ExpiringDocument[]>([]);
  const [stats, setStats] = useState({ totalEmployees:0, activeEmployees:0, totalCustomers:0, expiringDocuments:0 });

  useEffect(() => {
    const employees = EmployeeService.getAll();
    const exp = EmployeeService.getExpiringDocuments();
    const customers = CustomerService.getAll();
    setStats({
      totalEmployees: employees.length,
      activeEmployees: employees.filter(e=> e.status==='Active').length,
      totalCustomers: customers.length,
      expiringDocuments: exp.filter(d=> d.daysLeft <= 30).length
    });
    setExpiringDocs(exp.slice(0,5));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-600 text-sm">Total Employees</h3>
            <p className="text-2xl font-bold">{stats.totalEmployees}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-600 text-sm">Active Employees</h3>
          <p className="text-2xl font-bold text-green-600">{stats.activeEmployees}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-600 text-sm">Customers</h3>
          <p className="text-2xl font-bold">{stats.totalCustomers}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-600 text-sm">Expiring Documents</h3>
          <p className="text-2xl font-bold text-orange-600">{stats.expiringDocuments}</p>
        </div>
      </div>
      {expiringDocs.length>0 && (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Document Expiry Alerts</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Employee</th>
                <th className="p-2 text-left">Document</th>
                <th className="p-2 text-left">Expiry Date</th>
                <th className="p-2 text-left">Days Left</th>
              </tr>
            </thead>
            <tbody>
              {expiringDocs.map((d,i)=>(
                <tr key={i} className="border-t">
                  <td className="p-2">{d.employee}</td>
                  <td className="p-2">{d.document}</td>
                  <td className="p-2">{d.expiryDate}</td>
                  <td className="p-2">
                    <span className={
                      d.daysLeft <= 0 ? 'text-red-600 font-bold':
                      d.daysLeft <= 30 ? 'text-orange-600':'text-gray-600'
                    }>{d.daysLeft <= 0 ? 'EXPIRED' : `${d.daysLeft} days`}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
