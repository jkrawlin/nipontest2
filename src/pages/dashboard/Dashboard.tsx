import React, { useEffect, useState } from 'react';
import { EmployeeService } from '../../services/employeeService';
import { CustomerService } from '../../services/customerService';
import type { ExpiringDocument } from '../../types/employee';
import { PageHeader } from '../../components/ui/page-header';
import { StatCard } from '../../components/ui/stat-card';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';

export const DashboardPage: React.FC = () => {
  const [expiringDocs, setExpiringDocs] = useState<ExpiringDocument[]>([]);
  const [stats, setStats] = useState({ totalEmployees:0, activeEmployees:0, totalCustomers:0, expiringDocuments:0 });

  useEffect(() => {
    const employees = EmployeeService.getAll();
    const exp = EmployeeService.getExpiringDocuments();
    const customers = CustomerService.getAll();
    setStats({
      totalEmployees: employees.length,
      activeEmployees: employees.filter(e=> e.status==='Active').length,
      totalCustomers: customers.length,
      expiringDocuments: exp.filter(d=> d.daysLeft <= 30).length
    });
    setExpiringDocs(exp.slice(0,5));
  }, []);

  return (
    <div className="p-6 space-y-8">
      <PageHeader
        title="Dashboard"
        description="Quick overview of workforce and partner status."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Employees" value={stats.totalEmployees} icon={<span>👥</span>} />
        <StatCard label="Active Employees" value={stats.activeEmployees} tone="success" icon={<span>✅</span>} />
        <StatCard label="Customers" value={stats.totalCustomers} icon={<span>🏢</span>} />
        <StatCard label="Expiring Docs (≤30d)" value={stats.expiringDocuments} tone={stats.expiringDocuments>0? 'warning':'default'} icon={<span>📄</span>} />
      </div>
      {expiringDocs.length>0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between w-full">
              <CardTitle className="text-base tracking-tight font-semibold text-qatar-maroon">Document Expiry Alerts</CardTitle>
              <span className="text-xs text-gray-500">Top {expiringDocs.length}</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto -mx-2">
              <table className="min-w-full text-sm border-separate border-spacing-y-1">
                <thead>
                  <tr className="text-xs uppercase tracking-wide text-gray-500">
                    <th className="text-left px-2 py-1 font-medium">Employee</th>
                    <th className="text-left px-2 py-1 font-medium">Document</th>
                    <th className="text-left px-2 py-1 font-medium">Expiry</th>
                    <th className="text-left px-2 py-1 font-medium">Days Left</th>
                  </tr>
                </thead>
                <tbody>
                  {expiringDocs.map((d,i)=>(
                    <tr key={i} className="bg-white shadow-sm rounded">
                      <td className="px-2 py-2 font-medium text-gray-700">{d.employee}</td>
                      <td className="px-2 py-2 text-gray-600">{d.document}</td>
                      <td className="px-2 py-2 text-gray-600">{d.expiryDate}</td>
                      <td className="px-2 py-2">
                        <span className={
                          d.daysLeft <= 0 ? 'text-red-600 font-bold':
                          d.daysLeft <= 30 ? 'text-amber-600 font-medium':'text-green-600'
                        }>{d.daysLeft <= 0 ? 'EXPIRED' : `${d.daysLeft}d`}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
