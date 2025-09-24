import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { AccountsService } from '../../services/api/accounts';

export const AccountsDashboardPage: React.FC = () => {
  const { data: summary } = useQuery({ queryKey: ['accounts-summary'], queryFn: AccountsService.getSummary });
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Accounts & Finance</h1>
      <p className="text-sm text-muted-foreground mb-6">Finance overview (placeholder minimal implementation).</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 border rounded-lg">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Total Assets</p>
          <p className="text-lg font-bold">{summary?.totalAssets?.toLocaleString('en-US',{minimumFractionDigits:2}) || '0.00'} QAR</p>
        </div>
        <div className="p-4 border rounded-lg">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Total Liabilities</p>
          <p className="text-lg font-bold">{summary?.totalLiabilities?.toLocaleString('en-US',{minimumFractionDigits:2}) || '0.00'} QAR</p>
        </div>
        <div className="p-4 border rounded-lg">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Cash in Banks</p>
          <p className="text-lg font-bold">{summary?.cashInBanks?.toLocaleString('en-US',{minimumFractionDigits:2}) || '0.00'} QAR</p>
        </div>
        <div className="p-4 border rounded-lg">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Monthly Expenses</p>
          <p className="text-lg font-bold">{summary?.monthlyExpenses?.toLocaleString('en-US',{minimumFractionDigits:2}) || '0.00'} QAR</p>
        </div>
      </div>
    </div>
  );
};

export default AccountsDashboardPage;
