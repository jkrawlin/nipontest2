import React,{useEffect,useState} from 'react';
import { TemporaryEmployee } from '../../types/employee';
import { TemporaryEmployeeService } from '../../services/api/temporaryEmployees';
import { getAllTemporaryEmployeesFS } from '../../services/firestore/employees';
const USE_FS = import.meta.env.VITE_DATA_BACKEND === 'firestore';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Users, FileWarning } from 'lucide-react';
import { Dialog } from '../../components/ui/dialog';
import { EmployeeDetails } from '../../components/features/employees/EmployeeDetails';
import type { Employee } from '../../types/employee';

export const TemporaryEmployeeList: React.FC = () => {
  const [employees,setEmployees]=useState<TemporaryEmployee[]>([]);
  const [stats,setStats]=useState({total:0,active:0,endingSoon:0});
  const [openDetails, setOpenDetails] = useState(false);
  const [selected, setSelected] = useState<Employee | null>(null);
  useEffect(()=>{ (async ()=>{ const data = USE_FS ? await getAllTemporaryEmployeesFS() : TemporaryEmployeeService.getAll(); setEmployees(data); setStats({ total:data.length, active:data.filter(e=>e.status==='Active').length, endingSoon:data.filter(e=> { const d=new Date(e.contract.endDate).getTime()-Date.now(); const days=Math.floor(d/(1000*60*60*24)); return days<=30 && days>=0; }).length }); })(); },[]);
  return <div className="p-6 space-y-6">
    <div><h1 className="text-2xl font-semibold">Temporary Employees</h1><p className="text-xs text-gray-500">Contract / daily wage manpower</p></div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="p-4"><div className="flex justify-between"><div><p className="text-xs text-gray-500">Total</p><p className="text-xl font-bold">{stats.total}</p></div><Users className="w-6 h-6 text-purple-600"/></div></Card>
      <Card className="p-4"><div className="flex justify-between"><div><p className="text-xs text-gray-500">Active</p><p className="text-xl font-bold">{stats.active}</p></div><Users className="w-6 h-6 text-green-600"/></div></Card>
      <Card className="p-4"><div className="flex justify-between"><div><p className="text-xs text-gray-500">Ending ≤30d</p><p className="text-xl font-bold">{stats.endingSoon}</p></div><FileWarning className="w-6 h-6 text-amber-600"/></div></Card>
    </div>
    <div className="overflow-x-auto border rounded bg-white">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50"><tr><th className="px-3 py-2 text-left">Code</th><th className="px-3 py-2 text-left">Name</th><th className="px-3 py-2 text-left">Qatar ID</th><th className="px-3 py-2 text-left">Client</th><th className="px-3 py-2 text-left">Position</th><th className="px-3 py-2 text-left">Contract End</th><th className="px-3 py-2 text-right">Rate</th><th className="px-3 py-2 text-left">Status</th></tr></thead>
        <tbody>
          {employees.map(e=> { const endDays=Math.floor((new Date(e.contract.endDate).getTime()-Date.now())/(1000*60*60*24)); return <tr key={e.id} className="border-b last:border-0">
            <td className="px-3 py-2">{e.employeeCode}</td>
            <td className="px-3 py-2 whitespace-nowrap">
              <button className="text-indigo-600 hover:underline font-medium" onClick={()=> { setSelected(e as Employee); setOpenDetails(true); }}>
                {e.personalInfo.firstName} {e.personalInfo.lastName}
              </button>
            </td>
            <td className="px-3 py-2">{e.documents.qatarId?.number ?? '-'}</td>
            <td className="px-3 py-2">{e.contract.client}</td>
            <td className="px-3 py-2">{e.contract.position}</td>
            <td className="px-3 py-2"><Badge variant={endDays<0? 'destructive': endDays<30? 'outline': 'secondary'}>{endDays<0? 'ENDED': endDays+'d'}</Badge></td>
            <td className="px-3 py-2 text-right">{e.compensation.rate}/{e.compensation.rateType}</td>
            <td className="px-3 py-2"><Badge variant={e.status==='Active'? 'secondary':'outline'}>{e.status}</Badge></td>
          </tr>; })}
          {employees.length===0 && <tr><td colSpan={8} className="px-3 py-6 text-center text-gray-500">No records.</td></tr>}
        </tbody>
      </table>
    </div>
    <Dialog open={openDetails} onClose={()=> setOpenDetails(false)} title={selected ? `${selected.personalInfo.firstName} ${selected.personalInfo.lastName}` : 'Employee Details'} size="lg">
      {selected && (<EmployeeDetails employee={selected} />)}
    </Dialog>
  </div>;
};
export default TemporaryEmployeeList;
