import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { formatCurrency } from '../../lib/formatters';
import { Badge } from '../../components/ui/badge';

interface SimpleStat { title: string; value: number; }

const mockStats: SimpleStat[] = [
  { title: 'Total Employees', value: 0 },
  { title: "This Month's Payroll", value: 0 },
  { title: 'Pending Payments', value: 0 },
  { title: 'Expiring Documents', value: 0 }
];

export const DashboardPage: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-gray-600">Welcome back! Here's your company overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockStats.map((s) => (
          <Card key={s.title} className="bg-white">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-gray-500">{s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {s.title.includes('Payroll') ? formatCurrency(s.value) : s.value}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Notes</CardTitle>
          <CardDescription>Initial scaffold — wire real data sources next.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>Replace mock stats by querying Supabase views (e.g., monthly_payroll_summary).</p>
          <p>Implement expiring documents alert using expiring_documents view.</p>
          <Badge variant="outline">Next Steps</Badge>
        </CardContent>
      </Card>
    </div>
  );
};