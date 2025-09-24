import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qatar-maroon disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-qatar-maroon text-white hover:bg-qatar-maroon/90',
        secondary: 'bg-sand text-qatar-maroon hover:bg-sand/80',
        outline: 'border border-qatar-maroon bg-transparent hover:bg-qatar-maroon hover:text-white',
        ghost: 'hover:bg-qatar-maroon/10',
        destructive: 'bg-red-600 text-white hover:bg-red-700'
      },
      size: {
        sm: 'h-8 px-3',
        md: 'h-10 px-4',
        lg: 'h-12 px-6'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ className, variant, size, asChild, ...props }) => {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
};

export { buttonVariants };