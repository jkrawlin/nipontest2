import React from 'react';
import { cn } from '../../lib/cn';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> { variant?: 'default' | 'destructive' | 'warning'; }

const variantClasses: Record<string,string> = {
  default: 'bg-gray-50 border border-gray-200 text-gray-800',
  destructive: 'bg-red-50 border border-red-200 text-red-800',
  warning: 'bg-amber-50 border border-amber-200 text-amber-800'
};

export const Alert: React.FC<AlertProps> = ({ className, variant='default', ...rest }) => (
  <div role="alert" className={cn('rounded-md p-4 text-sm flex gap-3', variantClasses[variant], className)} {...rest} />
);

export const AlertTitle: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className, ...rest }) => (
  <p className={cn('font-semibold leading-none tracking-tight', className)} {...rest} />
);

export const AlertDescription: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={cn('text-sm text-current/90 space-y-1', className)} {...rest} />
);
