import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-qatar-maroon text-white border-transparent',
        secondary: 'bg-sand text-qatar-maroon border-transparent',
        outline: 'text-qatar-maroon border-qatar-maroon',
        destructive: 'bg-red-600 text-white border-transparent',
        success: 'bg-green-600 text-white border-transparent',
        warning: 'bg-amber-500 text-white border-transparent',
        info: 'bg-blue-600 text-white border-transparent'
      }
    },
    defaultVariants: { variant: 'default' }
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge: React.FC<BadgeProps> = ({ className, variant, ...props }) => (
  <div className={cn(badgeVariants({ variant }), className)} {...props} />
);