import React from 'react';
import { cn } from '../../lib/cn';

interface ProgressProps {
  value: number; // 0 - 100
  className?: string;
  tone?: 'default' | 'success' | 'warning' | 'danger';
}

const toneColors: Record<string,string> = {
  default: 'bg-qatar-maroon',
  success: 'bg-green-600',
  warning: 'bg-amber-500',
  danger: 'bg-red-600'
};

export const Progress: React.FC<ProgressProps> = ({ value, className, tone='default' }) => (
  <div className={cn('w-full h-2 rounded-full bg-gray-200 overflow-hidden', className)}>
    <div className={cn('h-full transition-all duration-300', toneColors[tone])} style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
  </div>
);
