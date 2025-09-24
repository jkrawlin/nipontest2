import React, { useState } from 'react';
import { PermanentEmployeeService } from '../../../services/api/permanentEmployees';
import type { PermanentEmployee } from '../../../types/employee';

interface Props { onCreated?: (emp: PermanentEmployee) => void }
export const PermanentEmployeeForm: React.FC<Props> = ({ onCreated }) => {
  const [form, setForm] = useState({ firstName:'', lastName:'', department:'', position:'', basic:0, housing:0, transport:0 });
  const [saving, setSaving] = useState(false);
  const submit = () => {
    setSaving(true);
    const emp = PermanentEmployeeService.create({
      personalInfo:{firstName:form.firstName,lastName:form.lastName,fatherName:'',dateOfBirth:'1990-01-01',placeOfBirth:'',nationality:'',religion:'',gender:'Male',maritalStatus:'Single',bloodGroup:'O+'},
      documents:{qatarId:{number:'',issueDate:new Date().toISOString(),expiryDate:new Date().toISOString(),profession:'',sponsor:''},passport:{number:'',issueDate:new Date().toISOString(),expiryDate:new Date().toISOString(),issuePlace:''},visa:{number:'',issueDate:new Date().toISOString(),expiryDate:new Date().toISOString(),type:'Work',sponsor:'',occupation:''},healthCard:{number:'',issueDate:new Date().toISOString(),expiryDate:new Date().toISOString()},laborContract:{number:'',startDate:new Date().toISOString(),authenticated:false}},
      employment:{position:form.position,positionArabic:'',department:form.department,joiningDate:new Date().toISOString(),contractType:'Unlimited',workLocation:'Doha'},
      compensation:{basicSalary:form.basic,housingAllowance:form.housing,transportAllowance:form.transport,totalMonthlySalary:0,bankName:'',accountNumber:'',iban:''},
      leave:{annualLeaveEntitlement:21,annualLeaveBalance:21,annualLeaveTaken:0,sickLeaveBalance:14,sickLeaveTaken:0,emergencyLeaveBalance:0,unpaidLeaveDays:0},
      contact:{mobileQatar:'',address:'',emergencyContact:{name:'',relationship:'',phone:''}},
      status:'Active',
      endOfService:{eligible:false,serviceYears:0,gratuityAmount:0,exitPermitRequired:true}
    });
    onCreated?.(emp);
    setSaving(false);
  };
  return <div className="space-y-3 p-4 border rounded">
    <h3 className="text-sm font-semibold">New Permanent Employee</h3>
    <div className="grid grid-cols-2 gap-2 text-xs">
      <label className="flex flex-col gap-1">First Name<input className="border rounded px-2 py-1" value={form.firstName} onChange={e=> setForm(f=>({...f,firstName:e.target.value}))}/></label>
      <label className="flex flex-col gap-1">Last Name<input className="border rounded px-2 py-1" value={form.lastName} onChange={e=> setForm(f=>({...f,lastName:e.target.value}))}/></label>
      <label className="flex flex-col gap-1 col-span-2">Department<input className="border rounded px-2 py-1" value={form.department} onChange={e=> setForm(f=>({...f,department:e.target.value}))}/></label>
      <label className="flex flex-col gap-1 col-span-2">Position<input className="border rounded px-2 py-1" value={form.position} onChange={e=> setForm(f=>({...f,position:e.target.value}))}/></label>
      <label className="flex flex-col gap-1">Basic<input type="number" className="border rounded px-2 py-1" value={form.basic} onChange={e=> setForm(f=>({...f,basic:parseFloat(e.target.value)||0}))}/></label>
      <label className="flex flex-col gap-1">Housing<input type="number" className="border rounded px-2 py-1" value={form.housing} onChange={e=> setForm(f=>({...f,housing:parseFloat(e.target.value)||0}))}/></label>
      <label className="flex flex-col gap-1">Transport<input type="number" className="border rounded px-2 py-1" value={form.transport} onChange={e=> setForm(f=>({...f,transport:parseFloat(e.target.value)||0}))}/></label>
    </div>
    <button disabled={saving} onClick={submit} className="text-xs px-3 py-1 rounded bg-blue-600 text-white disabled:opacity-50">{saving?'Saving...':'Create'}</button>
  </div>;
};
export default PermanentEmployeeForm;