import React, { useState } from 'react';
import { TemporaryEmployeeService } from '../../../services/api/temporaryEmployees';
import { createTemporaryEmployeeFS } from '../../../services/firestore/employees';
const USE_FS = import.meta.env.VITE_DATA_BACKEND === 'firestore';
import type { TemporaryEmployee } from '../../../types/employee';

interface Props { onCreated?: (emp: TemporaryEmployee) => void }
export const TemporaryEmployeeForm: React.FC<Props> = ({ onCreated }) => {
  const [form, setForm] = useState({ firstName:'', lastName:'', client:'', position:'', rate:0, rateType:'Daily' as 'Daily'|'Hourly'|'Monthly' });
  const [saving, setSaving] = useState(false);
  const submit = async () => {
    setSaving(true);
    const payload = {
      personalInfo:{firstName:form.firstName,lastName:form.lastName,fatherName:'',dateOfBirth:'1995-01-01',placeOfBirth:'',nationality:'',religion:'',gender:'Male',maritalStatus:'Single',bloodGroup:'O+'},
      documents:{passport:{number:'',issueDate:new Date().toISOString(),expiryDate:new Date().toISOString(),issuePlace:''}},
      contract:{contractNumber:'',startDate:new Date().toISOString(),endDate:new Date(Date.now()+86400000*30).toISOString(),client:form.client,clientLocation:'',position:form.position,workType:'Daily Wage'},
      compensation:{rateType:form.rateType,rate:form.rate,transportProvided:true,accommodationProvided:true},
      attendance:{totalDaysWorked:0},
      payment:{paymentMethod:'Cash'},
      contact:{mobileQatar:'',address:'',emergencyContact:{name:'',relationship:'',phone:''}},
      status:'Active'
    } as const;
    try {
      const emp = USE_FS ? await createTemporaryEmployeeFS(payload as any) : TemporaryEmployeeService.create(payload as any);
      onCreated?.(emp);
    } finally {
      setSaving(false);
    }
  };
  return <div className="space-y-3 p-4 border rounded">
    <h3 className="text-sm font-semibold">New Temporary Employee</h3>
    <div className="grid grid-cols-2 gap-2 text-xs">
      <label className="flex flex-col gap-1">First Name<input className="border rounded px-2 py-1" value={form.firstName} onChange={e=> setForm(f=>({...f,firstName:e.target.value}))}/></label>
      <label className="flex flex-col gap-1">Last Name<input className="border rounded px-2 py-1" value={form.lastName} onChange={e=> setForm(f=>({...f,lastName:e.target.value}))}/></label>
      <label className="flex flex-col gap-1 col-span-2">Client<input className="border rounded px-2 py-1" value={form.client} onChange={e=> setForm(f=>({...f,client:e.target.value}))}/></label>
      <label className="flex flex-col gap-1 col-span-2">Position<input className="border rounded px-2 py-1" value={form.position} onChange={e=> setForm(f=>({...f,position:e.target.value}))}/></label>
      <label className="flex flex-col gap-1">Rate<input type="number" className="border rounded px-2 py-1" value={form.rate} onChange={e=> setForm(f=>({...f,rate:parseFloat(e.target.value)||0}))}/></label>
      <label className="flex flex-col gap-1">Rate Type<select className="border rounded px-2 py-1" value={form.rateType} onChange={e=> setForm(f=>({...f,rateType:e.target.value as any}))}><option>Daily</option><option>Hourly</option><option>Monthly</option></select></label>
    </div>
    <button disabled={saving} onClick={submit} className="text-xs px-3 py-1 rounded bg-blue-600 text-white disabled:opacity-50">{saving?'Saving...':'Create'}</button>
  </div>;
};
export default TemporaryEmployeeForm;