import React from 'react';
import ReactDOM from 'react-dom';
import { cn } from '../../lib/cn';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl'
};

export const Dialog: React.FC<DialogProps> = ({ open, onClose, title, children, size = 'md' }) => {
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden />
      <div role="dialog" aria-modal="true" className={cn('relative bg-white rounded shadow-lg w-full mx-4', sizeMap[size])}>
        <div className="px-5 py-4 border-b flex items-center justify-between">
          <h2 className="font-semibold text-lg">{title}</h2>
          <button onClick={onClose} aria-label="Close dialog" className="text-gray-500 hover:text-gray-800">×</button>
        </div>
        <div className="p-5 space-y-4">{children}</div>
      </div>
    </div>,
    document.body
  );
};