import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './stores/authStore';
import { LoginPage } from './pages/auth/Login';
import { DashboardPage } from './pages/dashboard/Dashboard';
import { EmployeeList } from './pages/EmployeeList';
import { PayrollProcess } from './pages/PayrollProcess';
import { ReportsPage } from './pages/reports/Reports';
import SimpleCustomersPage from './pages/customers/SimpleCustomerList';
import { DashboardLayout } from './components/layouts/DashboardLayout';
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
        <Route path="/dashboard" element={<Protected><DashboardLayout><DashboardPage /></DashboardLayout></Protected>} />
        <Route path="/employees" element={<Protected><DashboardLayout><EmployeeList /></DashboardLayout></Protected>} />
        <Route path="/customers" element={<Protected><DashboardLayout><SimpleCustomersPage /></DashboardLayout></Protected>} />
        <Route path="/payroll" element={<Protected><DashboardLayout><PayrollProcess /></DashboardLayout></Protected>} />
        <Route
          path="/reports"
          element={
            <Protected>
              <DashboardLayout>
                <ReportsPage />
              </DashboardLayout>
            </Protected>
          }
        />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Suspense>
  </ErrorBoundary>
);

export default App;