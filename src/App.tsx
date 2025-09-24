import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './stores/authStore';
import { LoginPage } from './pages/auth/Login';
import { DashboardPage } from './pages/dashboard/Dashboard';
import { EmployeeList } from './pages/EmployeeList';
import { PayrollProcess } from './pages/PayrollProcess';
import { ReportsPage } from './pages/reports/Reports';
import SimpleCustomersPage from './pages/customers/SimpleCustomerList';
import { MainLayout } from './components/layout/MainLayout';
import { ErrorBoundary } from './components/common/ErrorBoundary';

const Protected: React.FC<React.PropsWithChildren> = ({ children }) => {
  const isAuthenticated = useAuthStore((s) => !!s.session);
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

const App: React.FC = () => (
  <ErrorBoundary>
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Protected><MainLayout /></Protected>}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/customers" element={<SimpleCustomersPage />} />
          <Route path="/payroll" element={<PayrollProcess />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Route>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Suspense>
  </ErrorBoundary>
);

export default App;