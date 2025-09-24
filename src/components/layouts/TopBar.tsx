import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../ui/button';
import { useNotificationStore } from '../../stores/notificationStore';

export const TopBar: React.FC = () => {
  const { session, logout } = useAuth();
  const unread = useNotificationStore((s) => s.items.length);

  return (
    <header className="h-14 border-b bg-white/70 backdrop-blur flex items-center gap-4 px-4">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-qatar-maroon text-white px-2 py-1 rounded">
        Skip to content
      </a>
      <div className="ml-auto flex items-center gap-3">
        <div className="text-sm text-gray-600 hidden md:block" aria-live="polite">
          {session?.name} <span className="text-gray-400">({session?.role})</span>
        </div>
        <Button variant="ghost" size="sm" aria-label="Notifications">
          🔔
          {unread > 0 && (
            <span className="ml-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-qatar-maroon px-1 text-[10px] font-semibold text-white">
              {unread}
            </span>
          )}
        </Button>
        <Button variant="outline" size="sm" onClick={() => logout()} aria-label="Sign out">
          Sign Out
        </Button>
      </div>
    </header>
  );
};