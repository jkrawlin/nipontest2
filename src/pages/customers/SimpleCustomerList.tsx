import React, { useEffect, useState } from 'react';
import { Customer } from '../../types/customer';
import { CustomerService } from '../../services/customerService';

export const SimpleCustomersPage: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [search, setSearch] = useState('');

  useEffect(()=> { setCustomers(CustomerService.getAll()); }, []);

  const filtered = customers.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.code.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Customers</h1>
        <button onClick={() => alert('Add Customer form placeholder')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Customer</button>
      </div>
      <input value={search} onChange={e=> setSearch(e.target.value)} placeholder="Search customers..." className="w-full p-2 border rounded mb-4" />
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Code</th>
              <th className="border p-2 text-left">Name</th>
              <th className="border p-2 text-left">Contact Person</th>
              <th className="border p-2 text-left">Mobile</th>
              <th className="border p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(c => (
              <tr key={c.id} className="hover:bg-gray-50">
                <td className="border p-2">{c.code}</td>
                <td className="border p-2">{c.name}</td>
                <td className="border p-2">{c.contactPerson}</td>
                <td className="border p-2">{c.mobile}</td>
                <td className="border p-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${c.status==='Active'?'bg-green-100 text-green-800':'bg-gray-100 text-gray-700'}`}>{c.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SimpleCustomersPage;
