import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './stores/authStore';
import { LoginPage } from './pages/auth/Login';
import { DashboardPage } from './pages/dashboard/Dashboard';
import { EmployeeListPage } from './pages/employees/EmployeeList';
import { PermanentEmployeeList } from './pages/employees/PermanentEmployeeList';
import { TemporaryEmployeeList } from './pages/employees/TemporaryEmployeeList';
import { AddEmployeePage } from './pages/employees/AddEmployee';
import { ImportEmployeesPage } from './pages/employees/ImportEmployees';
import { EmployeeDocumentsPage } from './pages/employees/Documents';
import { EmployeeLeavePage } from './pages/employees/Leave';
import { EndOfServicePage } from './pages/employees/EndOfService';
import { PayrollListPage } from './pages/payroll/PayrollList';
import { PayrollHistoryPage } from './pages/payroll/PayrollHistory';
import { PayslipsPage } from './pages/payroll/Payslips';
import { SalaryAdjustmentsPage } from './pages/payroll/SalaryAdjustments';
const ProcessPayrollPage = lazy(()=> import('./pages/payroll/ProcessPayroll').then(m=> ({ default: m.ProcessPayrollPage })));
const ReportsPage = lazy(()=> import('./pages/reports/Reports').then(m=> ({ default: m.ReportsPage })));
import { AccountsDashboardPage } from './pages/accounts/AccountsDashboard';
import { TransactionsPage } from './pages/accounts/Transactions';
import { PaymentVouchersPage } from './pages/accounts/PaymentVouchers';
import { ReceiptVouchersPage } from './pages/accounts/ReceiptVouchers';
import { BankAccountsPage } from './pages/accounts/BankAccounts';
import { ChartOfAccountsPage } from './pages/accounts/ChartOfAccounts';
import { ExpenseClaimsPage } from './pages/accounts/ExpenseClaims';
import { TrialBalancePage } from './pages/accounts/TrialBalance';
import { ProfitLossPage } from './pages/accounts/ProfitLoss';
import { CustomerList as CustomerListPage } from './pages/customers/CustomerList';
import { CustomerCreate as CustomerCreatePage } from './pages/customers/CustomerCreate';
import { CustomerDetail as CustomerDetailPage } from './pages/customers/CustomerDetail';
import { CustomerDeploy as CustomerDeployPage } from './pages/customers/CustomerDeploy';
import { CustomerContracts as CustomerContractsPage } from './pages/customers/CustomerContracts';
import { CustomerGenerateInvoice as CustomerGenerateInvoicePage } from './pages/customers/CustomerGenerateInvoice';
import { CustomerInvoices as CustomerInvoicesPage } from './pages/customers/CustomerInvoices';
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
  <Route path="/customers" element={<Protected><DashboardLayout><CustomerListPage /></DashboardLayout></Protected>} />
  <Route path="/customers/new" element={<Protected><DashboardLayout><CustomerCreatePage /></DashboardLayout></Protected>} />
  <Route path="/customers/contracts" element={<Protected><DashboardLayout><CustomerContractsPage /></DashboardLayout></Protected>} />
  <Route path="/customers/:id" element={<Protected><DashboardLayout><CustomerDetailPage /></DashboardLayout></Protected>} />
  <Route path="/customers/:id/deploy" element={<Protected><DashboardLayout><CustomerDeployPage /></DashboardLayout></Protected>} />
  <Route path="/customers/:id/invoice" element={<Protected><DashboardLayout><CustomerGenerateInvoicePage /></DashboardLayout></Protected>} />
  <Route path="/customers/invoices" element={<Protected><DashboardLayout><CustomerInvoicesPage /></DashboardLayout></Protected>} />
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