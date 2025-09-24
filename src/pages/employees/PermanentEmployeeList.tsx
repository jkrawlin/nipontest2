import React,{useEffect,useState} from 'react';
import { PermanentEmployee } from '../../types/employee';
import { PermanentEmployeeService } from '../../services/api/permanentEmployees';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Users, FileWarning, DollarSign } from 'lucide-react';

export const PermanentEmployeeList: React.FC = () => {
  const [employees,setEmployees]=useState<PermanentEmployee[]>([]);
  const [stats,setStats]=useState({total:0,active:0,onLeave:0,totalSalary:0});
  useEffect(()=>{ const data=PermanentEmployeeService.getAll(); setEmployees(data); setStats({ total:data.length, active:data.filter(e=>e.status==='Active').length, onLeave:data.filter(e=>e.status==='On Leave').length, totalSalary:data.reduce((s,e)=> s+ e.compensation.totalMonthlySalary,0)}); },[]);
  return <div className="p-6 space-y-6">
    <div>
      <h1 className="text-2xl font-semibold">Permanent Employees</h1>
      <p className="text-xs text-gray-500">Full-time staff with Qatar IDs & monthly payroll</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card className="p-4"><div className="flex justify-between"><div><p className="text-xs text-gray-500">Total</p><p className="text-xl font-bold">{stats.total}</p></div><Users className="w-6 h-6 text-blue-600"/></div></Card>
      <Card className="p-4"><div className="flex justify-between"><div><p className="text-xs text-gray-500">Active</p><p className="text-xl font-bold">{stats.active}</p></div><Users className="w-6 h-6 text-green-600"/></div></Card>
      <Card className="p-4"><div className="flex justify-between"><div><p className="text-xs text-gray-500">On Leave</p><p className="text-xl font-bold">{stats.onLeave}</p></div><FileWarning className="w-6 h-6 text-amber-600"/></div></Card>
      <Card className="p-4"><div className="flex justify-between"><div><p className="text-xs text-gray-500">Monthly Payroll</p><p className="text-xl font-bold">QAR {stats.totalSalary.toFixed(0)}</p></div><DollarSign className="w-6 h-6 text-green-600"/></div></Card>
    </div>
    <div className="overflow-x-auto border rounded bg-white">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50"><tr><th className="px-3 py-2 text-left">Code</th><th className="px-3 py-2 text-left">Name</th><th className="px-3 py-2 text-left">Position</th><th className="px-3 py-2 text-left">Qatar ID</th><th className="px-3 py-2 text-left">ID Expiry</th><th className="px-3 py-2 text-right">Salary</th><th className="px-3 py-2 text-left">Status</th></tr></thead>
        <tbody>
          {employees.map(e=>{ const expDays=Math.floor((new Date(e.documents.qatarId.expiryDate).getTime()-Date.now())/(1000*60*60*24)); return <tr key={e.id} className="border-b last:border-0"> <td className="px-3 py-2">{e.employeeCode}</td><td className="px-3 py-2 whitespace-nowrap">{e.personalInfo.firstName} {e.personalInfo.lastName}</td><td className="px-3 py-2">{e.employment.position}</td><td className="px-3 py-2">{e.documents.qatarId.number}</td><td className="px-3 py-2"><Badge variant={expDays<0? 'destructive': expDays<30? 'outline': 'secondary'}>{expDays<0? 'EXPIRED': expDays+ 'd'}</Badge></td><td className="px-3 py-2 text-right">{e.compensation.totalMonthlySalary.toFixed(0)}</td><td className="px-3 py-2"><Badge variant={e.status==='Active'? 'secondary': 'outline'}>{e.status}</Badge></td></tr>; })}
          {employees.length===0 && <tr><td colSpan={7} className="px-3 py-6 text-center text-gray-500">No records.</td></tr>}
        </tbody>
      </table>
    </div>
  </div>;
};
export default PermanentEmployeeList;
