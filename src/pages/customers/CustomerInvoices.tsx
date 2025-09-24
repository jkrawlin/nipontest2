import React, { useEffect, useState } from 'react';
import { CustomerService } from '../../services/api/customers';
import { InvoiceService } from '../../services/api/invoices';
import type { Customer, CustomerInvoice } from '../../types/customer';
import { Badge } from '../../components/ui/badge';

export const CustomerInvoices: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [invoices, setInvoices] = useState<CustomerInvoice[]>([]);

  useEffect(()=> {
    setCustomers(CustomerService.getAll());
    setInvoices(InvoiceService.getAll());
  }, []);

  const customerMap = Object.fromEntries(customers.map(c => [c.id, c]));

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Customer Invoices</h1>
        <p className="text-sm text-gray-600">All generated customer invoices (drafts included)</p>
      </div>
      <div className="overflow-x-auto border rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500"><tr><th className="text-left px-3 py-2">Invoice #</th><th className="text-left px-3 py-2">Customer</th><th className="text-left px-3 py-2">Period</th><th className="text-right px-3 py-2">Amount</th><th className="text-left px-3 py-2">Status</th></tr></thead>
          <tbody>
            {invoices.map(inv => (
              <tr key={inv.id} className="border-t">
                <td className="px-3 py-2 font-medium">{inv.invoiceNumber}</td>
                <td className="px-3 py-2">{customerMap[inv.customerId]?.companyInfo.name || '—'}</td>
                <td className="px-3 py-2 text-xs">{inv.periodStart} → {inv.periodEnd}</td>
                <td className="px-3 py-2 text-right font-medium">{inv.total.toFixed(2)} {inv.currency}</td>
                <td className="px-3 py-2"><Badge variant={inv.status==='Draft' ? 'outline': inv.status==='Paid'? 'success': inv.status==='Overdue'? 'warning': 'secondary'}>{inv.status}</Badge></td>
              </tr>
            ))}
            {invoices.length===0 && <tr><td colSpan={5} className="px-3 py-6 text-center text-xs text-gray-500">No invoices yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerInvoices;
