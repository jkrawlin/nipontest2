import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CustomerService } from '../../services/api/customers';
import type { Customer } from '../../types/customer';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Users, FileText } from 'lucide-react';

export const CustomerDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (id) {
      const c = CustomerService.getById(id);
      setCustomer(c || null);
    }
  }, [id]);

  if (!customer) return <div className="p-6 text-sm text-gray-500">Loading...</div>;

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-semibold">{customer.companyInfo.name}</h1>
          <p className="text-sm text-gray-600">{customer.customerCode} • {customer.companyInfo.industry}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={()=> navigate(`/customers/${customer.id}/deploy`)}><Users className="mr-2 h-4 w-4"/>Deploy Staff</Button>
          <Button onClick={()=> navigate(`/customers/${customer.id}/invoice`)}><FileText className="mr-2 h-4 w-4"/>Generate Invoice</Button>
        </div>
      </div>

      <div className="border-b">
        <div className="flex gap-6">
          {['overview','employees','contracts','financials','documents'].map(tab => (
            <button key={tab} onClick={()=> setActiveTab(tab)} className={`pb-3 px-1 border-b-2 font-medium text-sm capitalize ${activeTab===tab ? 'border-blue-600 text-blue-600':'border-transparent text-gray-600 hover:text-gray-900'}`}>{tab}</button>
          ))}
        </div>
      </div>

      {activeTab==='overview' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6"><h3 className="font-semibold mb-4">Company Information</h3><dl className="space-y-2">
            <div className="flex justify-between"><dt className="text-gray-600">Trade License:</dt><dd className="font-medium">{customer.companyInfo.tradeLicenseNumber}</dd></div>
            <div className="flex justify-between"><dt className="text-gray-600">Type:</dt><dd className="font-medium">{customer.companyInfo.type}</dd></div>
            <div className="flex justify-between"><dt className="text-gray-600">Payment Terms:</dt><dd className="font-medium">{customer.contract.paymentTerms}</dd></div>
            <div className="flex justify-between"><dt className="text-gray-600">Credit Limit:</dt><dd className="font-medium">QAR {customer.contract.creditLimit?.toLocaleString()}</dd></div>
          </dl></Card>
          <Card className="p-6"><h3 className="font-semibold mb-4">Primary Contact</h3><dl className="space-y-2">
            <div className="flex justify-between"><dt className="text-gray-600">Name:</dt><dd className="font-medium">{customer.primaryContact.name}</dd></div>
            <div className="flex justify-between"><dt className="text-gray-600">Position:</dt><dd className="font-medium">{customer.primaryContact.position}</dd></div>
            <div className="flex justify-between"><dt className="text-gray-600">Mobile:</dt><dd className="font-medium">{customer.primaryContact.mobile}</dd></div>
            <div className="flex justify-between"><dt className="text-gray-600">Email:</dt><dd className="font-medium">{customer.primaryContact.email}</dd></div>
          </dl></Card>
        </div>
      )}

      {activeTab==='employees' && (
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Deployed Employees</h3>
          {customer.deployment.currentEmployees.length>0 ? (
            <table className="w-full text-sm">
              <thead><tr className="border-b"><th className="text-left py-2">Employee</th><th className="text-left py-2">Position</th><th className="text-left py-2">Start Date</th><th className="text-left py-2">Status</th></tr></thead>
              <tbody>
                {customer.deployment.currentEmployees.map((emp,i)=>(
                  <tr key={i} className="border-b">
                    <td className="py-2">{emp.employeeName}</td>
                    <td className="py-2">{emp.position}</td>
                    <td className="py-2">{new Date(emp.startDate).toLocaleDateString()}</td>
                    <td className="py-2"><Badge>{emp.status}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : <p className="text-xs text-gray-500">No employees currently deployed</p>}
        </Card>
      )}
    </div>
  );
};

export default CustomerDetail;
