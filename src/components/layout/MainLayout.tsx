import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, Building2, Calculator, FileText, LogOut, Menu } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';
import { Button } from '../ui/button';
import { cn } from '../../lib/cn';

export const MainLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, session } = useAuthStore();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Employees', href: '/employees', icon: Users },
    { name: 'Customers', href: '/customers', icon: Building2 },
    { name: 'Payroll', href: '/payroll', icon: Calculator },
    { name: 'Reports', href: '/reports', icon: FileText },
  ];

  const handleLogout = () => { logout(); navigate('/login'); };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className={cn('fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out', sidebarOpen ? 'translate-x-0' : '-translate-x-full')}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-9 h-9 bg-gradient-to-br from-[#8A1538] to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">NP</div>
            <span className="ml-3 text-lg font-semibold tracking-tight">Nipon Pro</span>
          </div>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {navigation.map(item => {
            const isActive = location.pathname === item.href;
            return (
              <button
                key={item.name}
                onClick={() => navigate(item.href)}
                className={cn('flex items-center w-full px-3 py-2 text-sm font-medium rounded-lg transition-colors outline-none focus-visible:ring-2 focus-visible:ring-qatar-maroon', isActive ? 'bg-[#8A1538] text-white shadow-sm' : 'text-gray-700 hover:bg-gray-100')}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </button>
            );
          })}
        </nav>
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center font-semibold text-gray-600">
              {session?.name ? session.name.charAt(0) : 'A'}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{session?.name || 'Admin'}</p>
              <p className="text-xs text-gray-500">{session?.role || 'Manager'}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="w-full mt-3 justify-start" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>
      </div>
      <div className={cn('transition-all duration-200', sidebarOpen ? 'ml-64' : 'ml-0')}>        
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="flex items-center justify-between px-6 py-4">
            <button onClick={() => setSidebarOpen(o => !o)} className="p-2 rounded-lg hover:bg-gray-100" aria-label="Toggle navigation">
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              {new Date().toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'short', day:'numeric' })}
            </div>
          </div>
        </header>
        <main className="p-6 min-h-[calc(100vh-4rem)]">          
          <Outlet />
        </main>
      </div>
    </div>
  );
};
