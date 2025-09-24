import React from 'react';
import { cn } from '../../lib/cn';

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description, actions, className, children, ...rest }) => (
  <div className={cn('mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between', className)} {...rest}>
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-qatar-maroon">{title}</h1>
      {description && <p className="mt-1 text-sm text-gray-600 max-w-prose">{description}</p>}
      {children}
    </div>
    {actions && (
      <div className="flex flex-wrap gap-2">{actions}</div>
    )}
  </div>
);
