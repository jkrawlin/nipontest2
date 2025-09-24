import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomerService } from '../../services/api/customers';
import type { Customer } from '../../types/customer';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';

interface FormState {
  companyInfo: Customer['companyInfo'];
  contact: Customer['contact'];
  primaryContact: Customer['primaryContact'];
  contract: Customer['contract'];
  billing: Customer['billing'];
  requirements: Customer['requirements'];
  rates: Customer['rates'];
}

const emptyState = (): FormState => ({
  companyInfo: { name:'', nameArabic:'', tradeLicenseNumber:'', registrationNumber:'', industry:'Other', type:'Corporate' },
  contact: { address:'', city:'Doha', country:'Qatar', phone:'', email:'' },
  primaryContact: { name:'', position:'', mobile:'', email:'' },
  contract: { contractNumber:'', startDate: new Date().toISOString().substring(0,10), type:'Annual', status:'Active', paymentTerms:'30 Days' },
  billing: { vatRegistered:false, currency:'QAR', invoiceFrequency:'Monthly' },
  requirements: { manpowerTypes:[], locations:[], safetyTrainingRequired:true, medicalRequired:true, transportProvided:false, accommodationProvided:false },
  rates: { defaultRates: [] }
});

export const CustomerCreate: React.FC = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<FormState>(emptyState());
  const [saving, setSaving] = useState(false);

  const update = <K extends keyof FormState>(section: K, value: Partial<FormState[K]>) => {
    setState(prev => ({ ...prev, [section]: { ...prev[section], ...value } }));
  };

  const addRate = () => {
    setState(prev => ({ ...prev, rates: { ...prev.rates, defaultRates: [...prev.rates.defaultRates, { position:'', rateType:'Daily', normalRate:0, overtimeRate:0 }] }}));
  };

  const updateRate = (idx: number, key: string, value: any) => {
    setState(prev => ({ ...prev, rates: { ...prev.rates, defaultRates: prev.rates.defaultRates.map((r,i)=> i===idx ? { ...r, [key]: value } : r) }}));
  };

  const removeRate = (idx: number) => {
    setState(prev => ({ ...prev, rates: { ...prev.rates, defaultRates: prev.rates.defaultRates.filter((_,i)=> i!==idx) }}));
  };

  const submit = () => {
    setSaving(true);
    const payload: Omit<Customer, 'id' | 'customerCode' | 'createdAt' | 'updatedAt'> = {
      ...state,
      secondaryContact: undefined,
      deployment: { currentEmployees: [], totalDeployed:0, totalActive:0 },
      financial: { totalRevenue:0, currentMonthRevenue:0, outstandingAmount:0, creditUsed:0, paymentHistory:[] },
      documents: {},
      status: 'Active',
      rating: 'Good',
      notes: '',
      createdBy: 'admin@niponpayroll.qa',
      lastModifiedBy: 'admin@niponpayroll.qa'
    } as any;
    const created = CustomerService.create(payload);
    setSaving(false);
    navigate(`/customers/${created.id}`);
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Add Customer</h1>
        <p className="text-sm text-gray-600">Register a new client organization</p>
      </div>
      <Card className="p-6 space-y-6">
        <section className="space-y-4">
          <h2 className="font-semibold text-sm tracking-wide uppercase text-gray-500">Company Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div><label className="block text-[11px] uppercase mb-1">Name</label><input className="w-full border rounded px-2 py-1" value={state.companyInfo.name} onChange={e=> update('companyInfo',{ name:e.target.value })} /></div>
            <div><label className="block text-[11px] uppercase mb-1">Arabic Name</label><input className="w-full border rounded px-2 py-1" value={state.companyInfo.nameArabic} onChange={e=> update('companyInfo',{ nameArabic:e.target.value })} /></div>
            <div><label className="block text-[11px] uppercase mb-1">Industry</label><select className="w-full border rounded px-2 py-1" value={state.companyInfo.industry} onChange={e=> update('companyInfo',{ industry:e.target.value as any })}><option>Oil & Gas</option><option>Construction</option><option>Manufacturing</option><option>Services</option><option>Government</option><option>Other</option></select></div>
            <div><label className="block text-[11px] uppercase mb-1">Type</label><select className="w-full border rounded px-2 py-1" value={state.companyInfo.type} onChange={e=> update('companyInfo',{ type:e.target.value as any })}><option>Corporate</option><option>Government</option><option>Semi-Government</option></select></div>
            <div><label className="block text-[11px] uppercase mb-1">Trade License #</label><input className="w-full border rounded px-2 py-1" value={state.companyInfo.tradeLicenseNumber} onChange={e=> update('companyInfo',{ tradeLicenseNumber:e.target.value })} /></div>
            <div><label className="block text-[11px] uppercase mb-1">CR #</label><input className="w-full border rounded px-2 py-1" value={state.companyInfo.registrationNumber} onChange={e=> update('companyInfo',{ registrationNumber:e.target.value })} /></div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-semibold text-sm tracking-wide uppercase text-gray-500">Primary Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div><label className="block text-[11px] uppercase mb-1">Name</label><input className="w-full border rounded px-2 py-1" value={state.primaryContact.name} onChange={e=> update('primaryContact',{ name:e.target.value })} /></div>
            <div><label className="block text-[11px] uppercase mb-1">Position</label><input className="w-full border rounded px-2 py-1" value={state.primaryContact.position} onChange={e=> update('primaryContact',{ position:e.target.value })} /></div>
            <div><label className="block text-[11px] uppercase mb-1">Mobile</label><input className="w-full border rounded px-2 py-1" value={state.primaryContact.mobile} onChange={e=> update('primaryContact',{ mobile:e.target.value })} /></div>
            <div><label className="block text-[11px] uppercase mb-1">Email</label><input className="w-full border rounded px-2 py-1" value={state.primaryContact.email} onChange={e=> update('primaryContact',{ email:e.target.value })} /></div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-semibold text-sm tracking-wide uppercase text-gray-500">Contract</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div><label className="block text-[11px] uppercase mb-1">Contract #</label><input className="w-full border rounded px-2 py-1" value={state.contract.contractNumber} onChange={e=> update('contract',{ contractNumber:e.target.value })} /></div>
            <div><label className="block text-[11px] uppercase mb-1">Start Date</label><input type="date" className="w-full border rounded px-2 py-1" value={state.contract.startDate} onChange={e=> update('contract',{ startDate:e.target.value })} /></div>
            <div><label className="block text-[11px] uppercase mb-1">End Date</label><input type="date" className="w-full border rounded px-2 py-1" value={state.contract.endDate||''} onChange={e=> update('contract',{ endDate:e.target.value })} /></div>
            <div><label className="block text-[11px] uppercase mb-1">Payment Terms</label><select className="w-full border rounded px-2 py-1" value={state.contract.paymentTerms} onChange={e=> update('contract',{ paymentTerms:e.target.value as any })}><option>15 Days</option><option>30 Days</option><option>45 Days</option><option>60 Days</option></select></div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-semibold text-sm tracking-wide uppercase text-gray-500">Rates</h2>
          <div className="space-y-3">
            {state.rates.defaultRates.map((r,i)=> (
              <div key={i} className="grid grid-cols-1 md:grid-cols-6 gap-2 text-xs items-end">
                <div><label className="block text-[10px] uppercase mb-1">Position</label><input className="w-full border rounded px-2 py-1" value={r.position} onChange={e=> updateRate(i,'position', e.target.value)} /></div>
                <div><label className="block text-[10px] uppercase mb-1">Rate Type</label><select className="w-full border rounded px-2 py-1" value={r.rateType} onChange={e=> updateRate(i,'rateType', e.target.value)}><option>Daily</option><option>Hourly</option><option>Monthly</option></select></div>
                <div><label className="block text-[10px] uppercase mb-1">Normal Rate</label><input type="number" className="w-full border rounded px-2 py-1" value={r.normalRate} onChange={e=> updateRate(i,'normalRate', Number(e.target.value))} /></div>
                <div><label className="block text-[10px] uppercase mb-1">OT Rate</label><input type="number" className="w-full border rounded px-2 py-1" value={r.overtimeRate} onChange={e=> updateRate(i,'overtimeRate', Number(e.target.value))} /></div>
                <div className="flex gap-2"><Button type="button" variant="outline" onClick={()=> removeRate(i)}>Remove</Button></div>
              </div>
            ))}
            <Button type="button" variant="outline" onClick={addRate}>Add Rate</Button>
          </div>
        </section>

        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline" onClick={()=> navigate('/customers')}>Cancel</Button>
          <Button disabled={saving || !state.companyInfo.name} onClick={submit}>{saving? 'Saving...':'Create Customer'}</Button>
        </div>
      </Card>
    </div>
  );
};

export default CustomerCreate;
