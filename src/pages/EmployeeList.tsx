import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Employee } from '../types/employee';
import { EmployeeService } from '../services/employeeService';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { DataTable } from '../components/common/DataTable';
import { Users, Search, Download, UserPlus } from 'lucide-react';

export const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => { setEmployees(EmployeeService.getAll()); }, []);

  const filtered = employees.filter(e =>
    e.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.employeeCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigate = useNavigate();

  const getExpiryBadge = (exp: string) => {
    const days = Math.ceil((new Date(exp).getTime() - Date.now()) / 86400000);
    if (days < 0) return <Badge variant="destructive">Expired</Badge>;
    if (days <= 30) return <Badge variant="warning">{days}d</Badge>;
    if (days <= 90) return <Badge variant="secondary">{days}d</Badge>;
    return <Badge variant="success">Valid</Badge>;
  };

  const columns = [
    { header: 'Employee', accessor: 'employee', cell: (row: Employee) => (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-[#8A1538] to-red-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
          {row.firstName.charAt(0)}{row.lastName.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-gray-900 leading-tight">{row.firstName} {row.lastName}</p>
          <p className="text-xs text-gray-500">{row.employeeCode}</p>
        </div>
      </div>
    ) },
    { header: 'Role', accessor: 'position', cell: (row: Employee) => (
      <div>
        <p className="text-sm font-medium text-gray-700">{row.position}</p>
        <p className="text-xs text-gray-500">{row.department}</p>
      </div>
    ) },
    { header: 'Type', accessor: 'type', cell: (row: Employee) => (
      <Badge variant={row.type === 'Permanent' ? 'default' : 'secondary'}>{row.type}</Badge>
    ) },
    { header: 'QID', accessor: 'qatarIdExpiry', cell: (row: Employee) => getExpiryBadge(row.qatarIdExpiry) },
    { header: 'Salary', accessor: 'totalSalary', cell: (row: Employee) => <span className="font-medium">QAR {row.totalSalary.toLocaleString()}</span> },
    { header: 'Status', accessor: 'status', cell: (row: Employee) => <Badge variant={row.status === 'Active' ? 'success':'secondary'}>{row.status}</Badge> }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Employees</h1>
          <p className="text-gray-500 mt-1">Manage your workforce</p>
        </div>
        <Button onClick={() => alert('Add Employee placeholder')} className="bg-[#8A1538] hover:bg-[#6A0F2B]">
          <UserPlus className="w-4 h-4 mr-2" /> Add Employee
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card><CardContent className="p-4 flex items-center justify-between"><div><p className="text-xs font-medium text-gray-500 uppercase">Total</p><p className="text-2xl font-bold">{employees.length}</p></div><div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"><Users className="w-5 h-5 text-blue-600"/></div></CardContent></Card>
        <Card><CardContent className="p-4 flex items-center justify-between"><div><p className="text-xs font-medium text-gray-500 uppercase">Active</p><p className="text-2xl font-bold text-green-600">{employees.filter(e=> e.status==='Active').length}</p></div><div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center"><Users className="w-5 h-5 text-green-600"/></div></CardContent></Card>
        <Card><CardContent className="p-4 flex items-center justify-between"><div><p className="text-xs font-medium text-gray-500 uppercase">Permanent</p><p className="text-2xl font-bold text-purple-600">{employees.filter(e=> e.type==='Permanent').length}</p></div><div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center"><Users className="w-5 h-5 text-purple-600"/></div></CardContent></Card>
        <Card><CardContent className="p-4 flex items-center justify-between"><div><p className="text-xs font-medium text-gray-500 uppercase">Temporary</p><p className="text-2xl font-bold text-amber-600">{employees.filter(e=> e.type==='Temporary').length}</p></div><div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center"><Users className="w-5 h-5 text-amber-600"/></div></CardContent></Card>
      </div>
      <Card>
        <CardContent className="p-4 flex flex-col gap-4">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="relative flex-1 min-w-[240px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Search by name, code, or position..." value={searchTerm} onChange={e=> setSearchTerm(e.target.value)} className="pl-9" />
            </div>
            <Button variant="outline" onClick={()=> alert('Export placeholder')}><Download className="w-4 h-4 mr-2"/>Export</Button>
          </div>
          <DataTable data={filtered} columns={columns} onRowClick={(row)=> navigate(`/employees/${(row as Employee).id}`)} />
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployeeList;
