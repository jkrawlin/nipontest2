import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { formatCurrency } from '../../lib/formatters';
import { Badge } from '../../components/ui/badge';
import { EmployeeService } from '../../services/api/employees';
import { PayrollService } from '../../services/api/payroll';
import type { ExpiringDocument } from '../../types/employee';

interface DashboardStats {
  totalEmployees: number;
  activeEmployees: number;
  onLeaveEmployees: number;
  documentsCritical: number;
  documentsWarning: number;
  documentsExpired: number;
  currentMonthPayroll: number;
  lastMonthPayroll: number;
  payrollTrend: number;
  departments: number;
  nationalities: number;
}

export const DashboardPage: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [expiringDocs, setExpiringDocs] = useState<ExpiringDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { (async () => {
    try {
      const employees = await EmployeeService.getAllEmployees();
      const active = employees.filter(e => e.status === 'Active');
      const expDocs = await EmployeeService.getExpiringDocuments(120);
      const month = new Date().getMonth()+1; const year = new Date().getFullYear();
      // Approx payroll: sum current draft/approved batch or calculations if exist
      const batches = PayrollService.list().filter(b => b.month===month && b.year===year);
      const currentPayroll = batches.reduce((s,b)=> s + (b.calculations?.reduce((a,c)=> a + c.net,0) || 0),0);
      const dLast = new Date(); dLast.setMonth(dLast.getMonth()-1);
      const lastBatches = PayrollService.list().filter(b => b.month=== (dLast.getMonth()+1) && b.year===dLast.getFullYear());
      const lastPayroll = lastBatches.reduce((s,b)=> s + (b.calculations?.reduce((a,c)=> a + c.net,0) || 0),0);
      // Departments only meaningful for permanent employees
      const departments = new Set(
        employees.filter(e=> e.employeeType==='Permanent').map(e => e.employment.department)
      ).size;
      const nationalities = new Set(employees.map(e => e.personalInfo.nationality)).size;
      const docsCritical = expDocs.filter(d=> d.status==='critical').length;
      const docsWarning = expDocs.filter(d=> d.status==='warning').length;
      const docsExpired = expDocs.filter(d=> d.status==='expired').length;
      setStats({
        totalEmployees: employees.length,
        activeEmployees: active.length,
        onLeaveEmployees: employees.filter(e=> e.status==='On Leave').length,
        documentsCritical: docsCritical,
        documentsWarning: docsWarning,
        documentsExpired: docsExpired,
        currentMonthPayroll: currentPayroll,
        lastMonthPayroll: lastPayroll,
        payrollTrend: lastPayroll>0 ? ((currentPayroll-lastPayroll)/lastPayroll)*100 : 0,
        departments,
        nationalities
      });
      setExpiringDocs(expDocs.slice(0,8));
    } finally { setLoading(false); }
  })(); }, []);

  if (loading) return <div className="p-6 text-sm text-gray-500">Loading dashboard…</div>;

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-gray-600">Operational overview & compliance snapshot</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card><CardHeader><CardTitle className="text-sm font-medium text-gray-500">Total Employees</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">{stats?.totalEmployees}</p><p className="text-[11px] text-gray-500">{stats?.activeEmployees} active</p></CardContent></Card>
        <Card><CardHeader><CardTitle className="text-sm font-medium text-gray-500">This Month Payroll</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">{formatCurrency(stats?.currentMonthPayroll||0)}</p><p className="text-[11px] text-gray-500">Trend {stats && stats.payrollTrend.toFixed(1)}%</p></CardContent></Card>
        <Card><CardHeader><CardTitle className="text-sm font-medium text-gray-500">Document Alerts</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">{(stats?.documentsCritical||0)+(stats?.documentsExpired||0)}</p><p className="text-[11px] text-gray-500">{stats?.documentsExpired} expired</p></CardContent></Card>
        <Card><CardHeader><CardTitle className="text-sm font-medium text-gray-500">Departments</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">{stats?.departments}</p><p className="text-[11px] text-gray-500">{stats?.nationalities} nationalities</p></CardContent></Card>
      </div>
      {expiringDocs.length>0 && (
        <Card>
          <CardHeader><CardTitle>Upcoming Expiries</CardTitle><CardDescription>Top priority documents (next 120 days)</CardDescription></CardHeader>
          <CardContent>
            <div className="divide-y">
              {expiringDocs.map(d => (
                <div key={d.employeeId + d.documentType} className="flex items-center justify-between py-2 text-sm">
                  <div className="flex flex-col">
                    <span className="font-medium">{d.employeeName}</span>
                    <span className="text-[11px] text-gray-500">{d.documentType} – {new Date(d.expiryDate).toLocaleDateString('en-GB')}</span>
                  </div>
                  <Badge variant={d.status==='expired' ? 'destructive' : d.status==='critical' ? 'outline' : 'secondary'} className={d.status==='critical' ? 'border-amber-500 text-amber-700' : ''}>{d.status==='expired'?'EXPIRED': `${d.daysRemaining}d`}</Badge>
                </div>
              ))}
              {expiringDocs.length===0 && <div className="text-xs text-gray-500 py-4">No upcoming expiries in window.</div>}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
