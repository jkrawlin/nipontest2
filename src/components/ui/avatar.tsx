import * as React from 'react';
import { cn } from '../../lib/cn';

export const Avatar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-sand', className)} {...props} />
);

export const AvatarImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img className="aspect-square h-full w-full" {...props} />
);

export const AvatarFallback: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ className, ...props }) => (
  <span className={cn('flex h-full w-full items-center justify-center text-sm font-medium text-qatar-maroon', className)} {...props} />
);