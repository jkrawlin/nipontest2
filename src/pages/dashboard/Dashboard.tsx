import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmployeeService } from '../../services/employeeService';
import { CustomerService } from '../../services/customerService';
import type { ExpiringDocument } from '../../types/employee';
import { Card, CardContent } from '../../components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '../../components/ui/alert';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Users, Building2, DollarSign, AlertTriangle, FileText, CreditCard, TrendingUp } from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const [expiringDocs, setExpiringDocs] = useState<ExpiringDocument[]>([]);
  const [stats, setStats] = useState({ totalEmployees:0, activeEmployees:0, totalCustomers:0, activeCustomers:0, monthlyPayroll:0, expiringDocuments:0 });

  useEffect(() => {
    const employees = EmployeeService.getAll();
    const exp = EmployeeService.getExpiringDocuments();
    const customers = CustomerService.getAll();
    setStats({
      totalEmployees: employees.length,
      activeEmployees: employees.filter(e=> e.status==='Active').length,
      totalCustomers: customers.length,
      activeCustomers: customers.filter(c=> c.status==='Active').length,
      monthlyPayroll: employees.filter(e=> e.status==='Active').reduce((sum,e)=> sum + e.totalSalary,0),
      expiringDocuments: exp.filter(d=> d.daysLeft <= 30).length
    });
    setExpiringDocs(exp.slice(0,5));
  }, []);

  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-[#8A1538] to-red-600 rounded-lg p-6 text-white shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
        <p className="mt-2 text-white/80 text-sm">Here's what's happening today.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card><CardContent className="p-5 flex items-center justify-between"><div><p className="text-xs font-medium text-gray-500 uppercase">Employees</p><p className="text-3xl font-bold text-gray-900">{stats.totalEmployees}</p><p className="text-xs text-green-600 flex items-center gap-1 mt-1"><TrendingUp className="w-3 h-3" />{stats.activeEmployees} active</p></div><div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"><Users className="w-6 h-6 text-blue-600" /></div></CardContent></Card>
        <Card><CardContent className="p-5 flex items-center justify-between"><div><p className="text-xs font-medium text-gray-500 uppercase">Customers</p><p className="text-3xl font-bold text-gray-900">{stats.totalCustomers}</p><p className="text-xs text-green-600 flex items-center gap-1 mt-1"><TrendingUp className="w-3 h-3" />{stats.activeCustomers} active</p></div><div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center"><Building2 className="w-6 h-6 text-purple-600" /></div></CardContent></Card>
        <Card><CardContent className="p-5 flex items-center justify-between"><div><p className="text-xs font-medium text-gray-500 uppercase">Monthly Payroll</p><p className="text-2xl font-bold text-gray-900">QAR {(stats.monthlyPayroll||0).toLocaleString()}</p><p className="text-xs text-gray-500 mt-1">Due soon</p></div><div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center"><DollarSign className="w-6 h-6 text-green-600" /></div></CardContent></Card>
        <Card><CardContent className="p-5 flex items-center justify-between"><div><p className="text-xs font-medium text-gray-500 uppercase">Alerts</p><p className="text-3xl font-bold text-amber-600">{stats.expiringDocuments}</p><p className="text-xs text-amber-600 mt-1">Expiring docs</p></div><div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center"><AlertTriangle className="w-6 h-6 text-amber-600" /></div></CardContent></Card>
      </div>
      {expiringDocs.length > 0 && (
        <Alert className="border-amber-200 bg-amber-50">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <AlertTitle className="text-amber-900">Document Expiry Alerts</AlertTitle>
          <AlertDescription>
            <div className="mt-3 space-y-2">
              {expiringDocs.map((doc, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-amber-100 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center"><FileText className="w-4 h-4 text-amber-600" /></div>
                    <div>
                      <p className="font-medium text-gray-900 leading-tight">{doc.employee}</p>
                      <p className="text-xs text-gray-500">{doc.document}</p>
                    </div>
                  </div>
                  <Badge variant={doc.daysLeft <= 0 ? 'destructive' : doc.daysLeft <=30 ? 'warning':'secondary'}>
                    {doc.daysLeft <= 0 ? 'EXPIRED' : `${doc.daysLeft}d`}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4" onClick={()=> navigate('/reports')}>View All</Button>
          </AlertDescription>
        </Alert>
      )}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight text-gray-900">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card onClick={() => navigate('/employees')} className="cursor-pointer hover:shadow-md transition-shadow"><CardContent className="p-5 flex items-center gap-4"><div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"><Users className="w-6 h-6 text-blue-600" /></div><div><p className="font-semibold text-gray-900">View Employees</p><p className="text-xs text-gray-500">Manage staff</p></div></CardContent></Card>
          <Card onClick={() => navigate('/payroll')} className="cursor-pointer hover:shadow-md transition-shadow"><CardContent className="p-5 flex items-center gap-4"><div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center"><CreditCard className="w-6 h-6 text-green-600" /></div><div><p className="font-semibold text-gray-900">Process Payroll</p><p className="text-xs text-gray-500">Run salaries</p></div></CardContent></Card>
          <Card onClick={() => navigate('/reports')} className="cursor-pointer hover:shadow-md transition-shadow"><CardContent className="p-5 flex items-center gap-4"><div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center"><FileText className="w-6 h-6 text-purple-600" /></div><div><p className="font-semibold text-gray-900">Reports</p><p className="text-xs text-gray-500">View analytics</p></div></CardContent></Card>
        </div>
      </div>
    </div>
  );
};
