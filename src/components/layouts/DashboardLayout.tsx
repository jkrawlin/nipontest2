import React from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { NotificationCenter } from '../notifications/NotificationCenter';
import { EnvStatus } from '../system/EnvStatus';

export const DashboardLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
  <div className="flex h-screen w-screen overflow-hidden bg-qatar-beige">
      <Sidebar />
      <div className="flex flex-1 flex-col min-w-0">
        <EnvStatus />
        <TopBar />
        <main id="main" className="flex-1 overflow-y-auto focus:outline-none">
          {children}
        </main>
      </div>
      <NotificationCenter />
    </div>
  );
};