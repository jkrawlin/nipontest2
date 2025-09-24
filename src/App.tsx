import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './stores/authStore';
const LoginPage = lazy(() => import('./pages/auth/Login').then(m => ({ default: m.LoginPage })));
const DashboardPage = lazy(() => import('./pages/dashboard/Dashboard').then(m => ({ default: m.DashboardPage })));
const EmployeeListPage = lazy(() => import('./pages/employees/EmployeeList').then(m => ({ default: m.EmployeeListPage })));
const PermanentEmployeeList = lazy(() => import('./pages/employees/PermanentEmployeeList').then(m => ({ default: m.PermanentEmployeeList })));
const TemporaryEmployeeList = lazy(() => import('./pages/employees/TemporaryEmployeeList').then(m => ({ default: m.TemporaryEmployeeList })));
const AddEmployeePage = lazy(() => import('./pages/employees/AddEmployee').then(m => ({ default: m.AddEmployeePage })));
const ImportEmployeesPage = lazy(() => import('./pages/employees/ImportEmployees').then(m => ({ default: m.ImportEmployeesPage })));
const EmployeeDocumentsPage = lazy(() => import('./pages/employees/Documents').then(m => ({ default: m.EmployeeDocumentsPage })));
const EmployeeLeavePage = lazy(() => import('./pages/employees/Leave').then(m => ({ default: m.EmployeeLeavePage })));
const EndOfServicePage = lazy(() => import('./pages/employees/EndOfService').then(m => ({ default: m.EndOfServicePage })));
const PayrollListPage = lazy(() => import('./pages/payroll/PayrollList').then(m => ({ default: m.PayrollListPage })));
const ProcessPayrollPage = lazy(() => import('./pages/payroll/ProcessPayroll').then(m => ({ default: m.ProcessPayrollPage })));
const PayrollHistoryPage = lazy(() => import('./pages/payroll/PayrollHistory').then(m => ({ default: m.PayrollHistoryPage })));
const PayslipsPage = lazy(() => import('./pages/payroll/Payslips').then(m => ({ default: m.PayslipsPage })));
const SalaryAdjustmentsPage = lazy(() => import('./pages/payroll/SalaryAdjustments').then(m => ({ default: m.SalaryAdjustmentsPage })));
const ReportsPage = lazy(() => import('./pages/reports/Reports').then(m => ({ default: m.ReportsPage })));
const AccountsDashboardPage = lazy(() => import('./pages/accounts/AccountsDashboard').then(m => ({ default: m.AccountsDashboardPage })));
const TransactionsPage = lazy(() => import('./pages/accounts/Transactions').then(m => ({ default: m.TransactionsPage })));
const PaymentVouchersPage = lazy(() => import('./pages/accounts/PaymentVouchers').then(m => ({ default: m.PaymentVouchersPage })));
const ReceiptVouchersPage = lazy(() => import('./pages/accounts/ReceiptVouchers').then(m => ({ default: m.ReceiptVouchersPage })));
const BankAccountsPage = lazy(() => import('./pages/accounts/BankAccounts').then(m => ({ default: m.BankAccountsPage })));
const ChartOfAccountsPage = lazy(() => import('./pages/accounts/ChartOfAccounts').then(m => ({ default: m.ChartOfAccountsPage })));
const ExpenseClaimsPage = lazy(() => import('./pages/accounts/ExpenseClaims').then(m => ({ default: m.ExpenseClaimsPage })));
const TrialBalancePage = lazy(() => import('./pages/accounts/TrialBalance').then(m => ({ default: m.TrialBalancePage })));
const ProfitLossPage = lazy(() => import('./pages/accounts/ProfitLoss').then(m => ({ default: m.ProfitLossPage })));
import { DashboardLayout } from './components/layouts/DashboardLayout';
import { ErrorBoundary } from './components/common/ErrorBoundary';

const Protected: React.FC<React.PropsWithChildren> = ({ children }) => {
  const isAuthenticated = useAuthStore((s) => !!s.session);
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

const App: React.FC = () => (
  <ErrorBoundary>
    <Suspense fallback={<div className="p-6 text-sm">Loading...</div>}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <DashboardLayout>
                <DashboardPage />
              </DashboardLayout>
            </Protected>
          }
        />
  <Route path="/employees" element={<Protected><DashboardLayout><EmployeeListPage /></DashboardLayout></Protected>} />
  <Route path="/employees/permanent" element={<Protected><DashboardLayout><PermanentEmployeeList /></DashboardLayout></Protected>} />
  <Route path="/employees/temporary" element={<Protected><DashboardLayout><TemporaryEmployeeList /></DashboardLayout></Protected>} />
        <Route path="/employees/new" element={<Protected><DashboardLayout><AddEmployeePage /></DashboardLayout></Protected>} />
        <Route path="/employees/import" element={<Protected><DashboardLayout><ImportEmployeesPage /></DashboardLayout></Protected>} />
  <Route path="/employees/documents" element={<Protected><DashboardLayout><EmployeeDocumentsPage /></DashboardLayout></Protected>} />
  <Route path="/employees/leave" element={<Protected><DashboardLayout><EmployeeLeavePage /></DashboardLayout></Protected>} />
  <Route path="/employees/eos" element={<Protected><DashboardLayout><EndOfServicePage /></DashboardLayout></Protected>} />
        <Route path="/accounts" element={<Protected><DashboardLayout><AccountsDashboardPage /></DashboardLayout></Protected>} />
        <Route path="/accounts/transactions" element={<Protected><DashboardLayout><TransactionsPage /></DashboardLayout></Protected>} />
        <Route path="/accounts/payments" element={<Protected><DashboardLayout><PaymentVouchersPage /></DashboardLayout></Protected>} />
        <Route path="/accounts/receipts" element={<Protected><DashboardLayout><ReceiptVouchersPage /></DashboardLayout></Protected>} />
        <Route path="/accounts/banks" element={<Protected><DashboardLayout><BankAccountsPage /></DashboardLayout></Protected>} />
        <Route path="/accounts/chart" element={<Protected><DashboardLayout><ChartOfAccountsPage /></DashboardLayout></Protected>} />
        <Route path="/accounts/expenses" element={<Protected><DashboardLayout><ExpenseClaimsPage /></DashboardLayout></Protected>} />
        <Route path="/accounts/trial-balance" element={<Protected><DashboardLayout><TrialBalancePage /></DashboardLayout></Protected>} />
        <Route path="/accounts/profit-loss" element={<Protected><DashboardLayout><ProfitLossPage /></DashboardLayout></Protected>} />
        <Route path="/payroll" element={<Protected><DashboardLayout><PayrollListPage /></DashboardLayout></Protected>} />
        <Route path="/payroll/process" element={<Protected><DashboardLayout><ProcessPayrollPage /></DashboardLayout></Protected>} />
        <Route path="/payroll/history" element={<Protected><DashboardLayout><PayrollHistoryPage /></DashboardLayout></Protected>} />
        <Route path="/payroll/payslips" element={<Protected><DashboardLayout><PayslipsPage /></DashboardLayout></Protected>} />
        <Route path="/payroll/adjustments" element={<Protected><DashboardLayout><SalaryAdjustmentsPage /></DashboardLayout></Protected>} />
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