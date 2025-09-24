import React, { useEffect, useState } from 'react';
import { CustomerService } from '../../services/api/customers';
import type { Customer } from '../../types/customer';
import { Badge } from '../../components/ui/badge';

export const CustomerContracts: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [expiring, setExpiring] = useState<Customer[]>([]);

  useEffect(()=> {
    const all = CustomerService.getAll();
    setCustomers(all);
    setExpiring(CustomerService.getExpiringContracts(90));
  }, []);

  const contractStatusBadge = (c: Customer) => {
    if (c.contract.status !== 'Active') return <Badge variant="destructive">{c.contract.status}</Badge>;
    if (!c.contract.endDate) return <Badge variant="success">Active</Badge>;
    const days = Math.ceil((new Date(c.contract.endDate).getTime() - Date.now())/86400000);
    if (days < 0) return <Badge variant="destructive">Expired</Badge>;
    if (days <= 30) return <Badge variant="warning">{days}d</Badge>;
    if (days <= 60) return <Badge variant="outline">{days}d</Badge>;
    return <Badge variant="success">Active</Badge>;
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Contracts</h1>
        <p className="text-sm text-gray-600">Contract status and expiries (next 90 days)</p>
      </div>
      <div className="overflow-x-auto border rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500"><tr><th className="text-left px-3 py-2">Customer</th><th className="text-left px-3 py-2">Contract #</th><th className="text-left px-3 py-2">Type</th><th className="text-left px-3 py-2">End Date</th><th className="text-left px-3 py-2">Status</th></tr></thead>
          <tbody>
            {customers.map(c => (
              <tr key={c.id} className="border-t hover:bg-gray-50">
                <td className="px-3 py-2 font-medium">{c.companyInfo.name}</td>
                <td className="px-3 py-2 text-xs">{c.contract.contractNumber}</td>
                <td className="px-3 py-2 text-xs">{c.contract.type}</td>
                <td className="px-3 py-2 text-xs">{c.contract.endDate ? new Date(c.contract.endDate).toLocaleDateString() : '-'}</td>
                <td className="px-3 py-2">{contractStatusBadge(c)}</td>
              </tr>
            ))}
            {customers.length===0 && <tr><td colSpan={5} className="px-3 py-6 text-center text-xs text-gray-500">No contracts.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerContracts;
