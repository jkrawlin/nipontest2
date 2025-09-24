import React, { useEffect, useState } from 'react';
import { Employee } from '../types/employee';
import { EmployeeService } from '../services/employeeService';
import { PageHeader } from '../components/ui/page-header';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => { setEmployees(EmployeeService.getAll()); }, []);

  const filtered = employees.filter(e =>
    e.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.employeeCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <PageHeader
        title="Employees"
        description="Manage your workforce. Search and maintain basic employee records."
        actions={<Button onClick={() => alert('Add Employee form placeholder')}>Add Employee</Button>}
      />
      <Card>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <input
                type="text"
                placeholder="Search employees..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full md:w-72 rounded-md border border-qatar-maroon/30 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-qatar-maroon"
                aria-label="Search employees"
              />
              <div className="text-xs text-gray-500">{filtered.length} of {employees.length} shown</div>
            </div>
            <div className="overflow-x-auto -mx-2">
              <table className="min-w-full text-sm border-separate border-spacing-y-1">
                <thead>
                  <tr className="text-[11px] uppercase tracking-wide text-gray-500">
                    <th className="text-left px-2 py-1 font-medium">Code</th>
                    <th className="text-left px-2 py-1 font-medium">Name</th>
                    <th className="text-left px-2 py-1 font-medium">Position</th>
                    <th className="text-left px-2 py-1 font-medium">Department</th>
                    <th className="text-left px-2 py-1 font-medium">QID Expiry</th>
                    <th className="text-left px-2 py-1 font-medium">Status</th>
                    <th className="text-left px-2 py-1 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(emp => {
                    const expiry = new Date(emp.qatarIdExpiry);
                    const now = new Date();
                    const soon = new Date(Date.now() + 30*24*60*60*1000);
                    const expiryTone = expiry < now ? 'text-red-600 font-semibold' : expiry < soon ? 'text-amber-600 font-medium' : 'text-green-600';
                    return (
                      <tr key={emp.id} className="bg-white shadow-sm hover:shadow rounded">
                        <td className="px-2 py-2 font-medium text-gray-700">{emp.employeeCode}</td>
                        <td className="px-2 py-2 text-gray-700">{emp.firstName} {emp.lastName}</td>
                        <td className="px-2 py-2 text-gray-600">{emp.position}</td>
                        <td className="px-2 py-2 text-gray-600">{emp.department}</td>
                        <td className="px-2 py-2"><span className={expiryTone}>{emp.qatarIdExpiry}</span></td>
                        <td className="px-2 py-2">
                          <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${emp.status==='Active' ? 'bg-green-100 text-green-700':'bg-gray-100 text-gray-600'}`}>{emp.status}</span>
                        </td>
                        <td className="px-2 py-2">
                          <div className="flex gap-2">
                            <button className="text-qatar-maroon hover:underline text-xs" onClick={() => alert('Edit form placeholder')}>Edit</button>
                            <button className="text-red-600 hover:underline text-xs" onClick={() => { if (confirm('Delete this employee?')) { EmployeeService.delete(emp.id); setEmployees(EmployeeService.getAll()); } }}>Delete</button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployeeList;
