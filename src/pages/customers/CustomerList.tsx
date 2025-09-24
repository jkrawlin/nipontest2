import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomerService } from '../../services/api/customers';
import type { Customer } from '../../types/customer';
import { Building2, Users, DollarSign, AlertTriangle, Plus, Search } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

export const CustomerList: React.FC = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [stats, setStats] = useState<any>({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => { load(); }, []);

  const load = () => {
    const data = CustomerService.getAll();
    setCustomers(data);
    setStats({
      totalCustomers: data.length,
      activeCustomers: data.filter(c => c.status === 'Active').length,
      totalRevenue: data.reduce((s,c)=> s + c.financial.currentMonthRevenue, 0),
      totalDeployed: data.reduce((s,c)=> s + c.deployment.totalActive, 0),
      expiringContracts: CustomerService.getExpiringContracts(30).length
    });
  };

  const filtered = customers.filter(c => c.companyInfo.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.customerCode.toLowerCase().includes(searchTerm.toLowerCase()));
  // Safeguard: cap render count to avoid UI lock if data ballooned unexpectedly
  const limited = filtered.slice(0,500);

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">Customers</h1>
        <p className="text-sm text-gray-600">Manage client companies and contracts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="p-4"><CardContent className="p-0"><div className="flex justify-between items-center"><div><p className="text-xs text-gray-500">Total Customers</p><p className="text-2xl font-bold">{stats.totalCustomers||0}</p></div><Building2 className="h-8 w-8 text-blue-600"/></div></CardContent></Card>
        <Card className="p-4"><CardContent className="p-0"><div className="flex justify-between items-center"><div><p className="text-xs text-gray-500">Active</p><p className="text-2xl font-bold">{stats.activeCustomers||0}</p></div><Building2 className="h-8 w-8 text-green-600"/></div></CardContent></Card>
        <Card className="p-4"><CardContent className="p-0"><div className="flex justify-between items-center"><div><p className="text-xs text-gray-500">Monthly Revenue</p><p className="text-xl font-bold">QAR {(stats.totalRevenue||0).toFixed(0)}</p></div><DollarSign className="h-8 w-8 text-green-600"/></div></CardContent></Card>
        <Card className="p-4"><CardContent className="p-0"><div className="flex justify-between items-center"><div><p className="text-xs text-gray-500">Deployed Staff</p><p className="text-2xl font-bold">{stats.totalDeployed||0}</p></div><Users className="h-8 w-8 text-purple-600"/></div></CardContent></Card>
        <Card className="p-4"><CardContent className="p-0"><div className="flex justify-between items-center"><div><p className="text-xs text-gray-500">Expiring Soon</p><p className="text-2xl font-bold">{stats.expiringContracts||0}</p></div><AlertTriangle className="h-8 w-8 text-orange-600"/></div></CardContent></Card>
      </div>

      <div className="flex justify-between items-center">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input value={searchTerm} onChange={e=> setSearchTerm(e.target.value)} placeholder="Search customers..." className="pl-9 pr-3 py-2 border rounded-lg w-72 text-sm" />
        </div>
        <Button onClick={()=> navigate('/customers/new')}><Plus className="mr-2 h-4 w-4"/>Add Customer</Button>
      </div>

      <div className="overflow-x-auto border rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="text-left px-3 py-2">Code</th>
              <th className="text-left px-3 py-2">Company</th>
              <th className="text-left px-3 py-2">Contract</th>
              <th className="text-left px-3 py-2">Deployed</th>
              <th className="text-left px-3 py-2">Monthly Revenue</th>
              <th className="text-left px-3 py-2">Outstanding</th>
              <th className="text-left px-3 py-2">Status</th>
              <th className="text-left px-3 py-2">Rating</th>
            </tr>
          </thead>
          <tbody>
            {limited.map(c => (
              <tr key={c.id} className="border-t hover:bg-gray-50 cursor-pointer" onClick={()=> navigate(`/customers/${c.id}`)}>
                <td className="px-3 py-2 font-medium">{c.customerCode}</td>
                <td className="px-3 py-2"><div className="font-medium">{c.companyInfo.name}</div><div className="text-[11px] text-gray-500">{c.companyInfo.industry}</div></td>
                <td className="px-3 py-2 text-xs"><div>{c.contract.contractNumber}</div>{c.contract.endDate && <div className="text-[10px] text-gray-500">Expires {new Date(c.contract.endDate).toLocaleDateString()}</div>}</td>
                <td className="px-3 py-2"><Badge variant="outline">{c.deployment.totalActive} workers</Badge></td>
                <td className="px-3 py-2 font-medium">QAR {c.financial.currentMonthRevenue.toLocaleString()}</td>
                <td className={`px-3 py-2 font-medium ${c.financial.outstandingAmount>0?'text-red-600':'text-green-600'}`}>QAR {c.financial.outstandingAmount.toLocaleString()}</td>
                <td className="px-3 py-2"><Badge variant={c.status==='Active'?'success': c.status==='Suspended'?'warning': c.status==='Inactive'?'secondary':'destructive'}>{c.status}</Badge></td>
                <td className="px-3 py-2"><Badge variant={c.rating==='Excellent'?'success': c.rating==='Good'?'info': c.rating==='Average'?'secondary':'destructive'}>{c.rating}</Badge></td>
              </tr>
            ))}
            {limited.length===0 && (
              <tr><td colSpan={8} className="px-3 py-6 text-center text-xs text-gray-500">No customers found.</td></tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default CustomerList;
