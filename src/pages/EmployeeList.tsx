import React, { useEffect, useState } from 'react';
import { Employee } from '../types/employee';
import { EmployeeService } from '../services/employeeService';

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
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Employees</h1>
        <button
          onClick={() => window.location.href = '/employees/new'}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Employee
        </button>
      </div>

      <input
        type="text"
        placeholder="Search employees..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Code</th>
              <th className="border p-2 text-left">Name</th>
              <th className="border p-2 text-left">Position</th>
              <th className="border p-2 text-left">Department</th>
              <th className="border p-2 text-left">Qatar ID Expiry</th>
              <th className="border p-2 text-left">Status</th>
              <th className="border p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(emp => (
              <tr key={emp.id} className="hover:bg-gray-50">
                <td className="border p-2">{emp.employeeCode}</td>
                <td className="border p-2">{emp.firstName} {emp.lastName}</td>
                <td className="border p-2">{emp.position}</td>
                <td className="border p-2">{emp.department}</td>
                <td className="border p-2">
                  <span className={
                    new Date(emp.qatarIdExpiry) < new Date() ? 'text-red-600' :
                    new Date(emp.qatarIdExpiry) < new Date(Date.now() + 30*24*60*60*1000) ? 'text-orange-600' :
                    'text-green-600'
                  }>
                    {emp.qatarIdExpiry}
                  </span>
                </td>
                <td className="border p-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${emp.status==='Active' ? 'bg-green-100 text-green-800':'bg-gray-100 text-gray-700'}`}>{emp.status}</span>
                </td>
                <td className="border p-2">
                  <button className="text-blue-600 hover:underline mr-2" onClick={() => alert('Edit form simplified placeholder')}>Edit</button>
                  <button className="text-red-600 hover:underline" onClick={() => { if (confirm('Delete this employee?')) { EmployeeService.delete(emp.id); setEmployees(EmployeeService.getAll()); } }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
