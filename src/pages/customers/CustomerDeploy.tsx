import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CustomerService } from '../../services/api/customers';
import { useEmployees } from '../../hooks/useEmployees';
import type { Employee } from '../../types/employee';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import type { Customer } from '../../types/customer';

export const CustomerDeploy: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const employeeQuery = useEmployees({ pageSize: 1000 });
  const allEmployees: Employee[] = employeeQuery.data?.employees || [];
  const [selectedEmployees, setSelected] = useState<string[]>([]);
  const [position, setPosition] = useState('');
  const [deploying, setDeploying] = useState(false);

  useEffect(()=> {
    if (id) {
      const c = CustomerService.getById(id);
      setCustomer(c||null);
    }
  }, [id]);

  if (!customer) return <div className="p-6 text-sm">Loading...</div>;

  const toggle = (empId: string) => {
    setSelected(s => s.includes(empId) ? s.filter(i => i!==empId) : [...s, empId]);
  };

  const deploy = () => {
    if (!position) return;
    setDeploying(true);
    selectedEmployees.forEach(empId => {
      const emp = allEmployees.find((e: Employee) => e.id === empId);
      if (emp) {
        const fullName = `${emp.personalInfo.firstName} ${emp.personalInfo.lastName}`;
        const existingPosition = emp.employeeType === 'Permanent' ? emp.employment.position : emp.contract.position;
        CustomerService.deployEmployee(customer.id, {
          employeeId: emp.id,
          employeeName: fullName,
          position: position || existingPosition,
          startDate: new Date().toISOString(),
          status: 'Active'
        });
      }
    });
    setDeploying(false);
    navigate(`/customers/${customer.id}`);
  };

  const availableEmployees = allEmployees.filter((e: Employee) => !customer.deployment.currentEmployees.some(d => d.employeeId === e.id && d.status === 'Active'));

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Deploy Staff</h1>
          <p className="text-sm text-gray-600">Assign employees to {customer.companyInfo.name}</p>
        </div>
        <Button variant="outline" onClick={()=> navigate(-1)}>Back</Button>
      </div>
      <Card className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-[11px] uppercase mb-1">Deployment Position</label>
            <input className="w-full border rounded px-2 py-1" value={position} onChange={e=> setPosition(e.target.value)} placeholder="e.g. Technician" />
          </div>
          <div>
            <label className="block text-[11px] uppercase mb-1">Selected</label>
            <div className="text-sm font-medium">{selectedEmployees.length} employees</div>
          </div>
          <div className="md:col-span-2 flex justify-end">
            <Button disabled={deploying || selectedEmployees.length===0 || !position} onClick={deploy}>{deploying? 'Deploying...':'Deploy Selected'}</Button>
          </div>
        </div>
        <div className="border rounded overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500"><tr><th className="text-left px-3 py-2">Select</th><th className="text-left px-3 py-2">Employee</th><th className="text-left px-3 py-2">Type</th><th className="text-left px-3 py-2">Position</th></tr></thead>
            <tbody>
              {availableEmployees.map((emp: Employee) => (
                <tr key={emp.id} className="border-t hover:bg-gray-50">
                  <td className="px-3 py-2"><input type="checkbox" checked={selectedEmployees.includes(emp.id)} onChange={()=> toggle(emp.id)} /></td>
                  <td className="px-3 py-2 font-medium">{emp.personalInfo.firstName} {emp.personalInfo.lastName}</td>
                  <td className="px-3 py-2 text-xs">{emp.employeeType}</td>
                  <td className="px-3 py-2 text-xs">{emp.employeeType==='Permanent'? emp.employment.position : emp.contract.position}</td>
                </tr>
              ))}
              {availableEmployees.length===0 && <tr><td colSpan={4} className="px-3 py-4 text-center text-xs text-gray-500">No available employees</td></tr>}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default CustomerDeploy;
