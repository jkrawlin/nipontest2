import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CustomerService } from '../../services/api/customers';
import { InvoiceService } from '../../services/api/invoices';
import type { Customer, CustomerInvoice } from '../../types/customer';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';

export const CustomerGenerateInvoice: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [invoice, setInvoice] = useState<CustomerInvoice | null>(null);
  const [periodStart, setPeriodStart] = useState<string>(new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().substring(0,10));
  const [periodEnd, setPeriodEnd] = useState<string>(new Date().toISOString().substring(0,10));

  useEffect(()=> {
    if (id) {
      setCustomer(CustomerService.getById(id) || null);
    }
  }, [id]);

  if (!customer) return <div className="p-6 text-sm">Loading...</div>;

  const generate = () => {
    const draft = InvoiceService.createDraft({ customerId: customer.id, periodStart, periodEnd });
    if (draft) setInvoice(draft);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Generate Invoice</h1>
          <p className="text-sm text-gray-600">{customer.companyInfo.name}</p>
        </div>
        <Button variant="outline" onClick={()=> navigate(-1)}>Back</Button>
      </div>
      <Card className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
          <div><label className="block text-[11px] uppercase mb-1">Period Start</label><input type="date" className="w-full border rounded px-2 py-1" value={periodStart} onChange={e=> setPeriodStart(e.target.value)} /></div>
          <div><label className="block text-[11px] uppercase mb-1">Period End</label><input type="date" className="w-full border rounded px-2 py-1" value={periodEnd} onChange={e=> setPeriodEnd(e.target.value)} /></div>
          <div className="flex items-end"><Button onClick={generate}>Draft Invoice</Button></div>
        </div>
        {invoice && (
          <div className="space-y-4">
            <div className="flex justify-between text-sm"><div>Invoice #</div><div className="font-medium">{invoice.invoiceNumber}</div></div>
            <table className="w-full text-xs">
              <thead><tr className="border-b"><th className="text-left py-2">Description</th><th className="text-right py-2">Qty</th><th className="text-right py-2">Rate</th><th className="text-right py-2">Amount</th></tr></thead>
              <tbody>{invoice.lines.map((l,i)=>(<tr key={i} className="border-b"><td className="py-1">{l.description}</td><td className="py-1 text-right">{l.quantity}</td><td className="py-1 text-right">{l.unitRate.toFixed(2)}</td><td className="py-1 text-right">{l.amount.toFixed(2)}</td></tr>))}</tbody>
              <tfoot>
                <tr><td colSpan={3} className="text-right py-1">Subtotal</td><td className="py-1 text-right font-medium">{invoice.subtotal.toFixed(2)}</td></tr>
                <tr><td colSpan={3} className="text-right py-1">VAT</td><td className="py-1 text-right font-medium">{invoice.vatAmount.toFixed(2)}</td></tr>
                <tr><td colSpan={3} className="text-right py-1">Total</td><td className="py-1 text-right font-bold">{invoice.total.toFixed(2)}</td></tr>
              </tfoot>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
};

export default CustomerGenerateInvoice;
