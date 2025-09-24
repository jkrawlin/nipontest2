import React from 'react';
import { cn } from '../../lib/cn';

interface StatCardProps {
  label: string;
  value: React.ReactNode;
  icon?: React.ReactNode;
  trend?: { value: number; label?: string } | null;
  tone?: 'default' | 'success' | 'warning' | 'danger';
}

const toneClasses: Record<string,string> = {
  default: 'text-qatar-maroon',
  success: 'text-green-600',
  warning: 'text-amber-600',
  danger: 'text-red-600'
};

export const StatCard: React.FC<StatCardProps> = ({ label, value, icon, trend, tone='default' }) => {
  return (
    <div className="rounded-lg border border-qatar-maroon/10 bg-white p-4 shadow-sm flex flex-col gap-2">
      <div className="flex items-start justify-between">
        <p className="text-[11px] font-medium tracking-wide text-gray-500 uppercase">{label}</p>
        {icon && <span className="text-gray-400">{icon}</span>}
      </div>
      <div className={cn('text-2xl font-semibold leading-none', toneClasses[tone])}>{value}</div>
      {trend && (
        <div className="text-[11px] font-medium text-gray-500 flex items-center gap-1">
          <span className={trend.value >=0 ? 'text-green-600' : 'text-red-600'}>
            {trend.value >=0 ? '▲' : '▼'} {Math.abs(trend.value)}%
          </span>
          {trend.label && <span>{trend.label}</span>}
        </div>
      )}
    </div>
  );
};
