import React, { useEffect } from 'react';
import { useNotificationStore } from '../../stores/notificationStore';
import { cn } from '../../lib/cn';

export const NotificationCenter: React.FC = () => {
  const { items, remove } = useNotificationStore();

  // Auto dismiss after 6s
  useEffect(() => {
    if (!items.length) return;
    const timers = items.map((n) => setTimeout(() => remove(n.id), 6000));
    return () => { timers.forEach(clearTimeout); };
  }, [items, remove]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 flex flex-col items-end gap-2 p-4"
      aria-live="assertive"
      role="region"
      aria-label="Notifications"
    >
      {items.map((n) => (
        <div
          key={n.id}
            className={cn(
            'pointer-events-auto w-80 rounded border p-3 shadow bg-white text-sm relative',
            n.type === 'success' && 'border-green-500',
            n.type === 'error' && 'border-red-600',
            n.type === 'warning' && 'border-amber-500',
            n.type === 'info' && 'border-qatar-maroon'
          )}
        >
          <div className="font-medium mb-1 flex items-center justify-between">
            <span>{n.title}</span>
            <button
              onClick={() => remove(n.id)}
              className="text-xs text-gray-500 hover:text-gray-800"
              aria-label="Dismiss notification"
            >✕</button>
          </div>
          {n.message && <p className="text-xs text-gray-600 leading-snug">{n.message}</p>}
        </div>
      ))}
    </div>
  );
};