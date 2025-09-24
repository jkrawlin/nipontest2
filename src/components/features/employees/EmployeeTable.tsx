import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Employee } from '../../../types/employee';
import { DataTable } from '../../common/DataTable';
import { Badge } from '../../ui/badge';
import { useEmployees } from '../../../hooks/useEmployees';
import { DataTableToolbar } from '../../common/DataTable';
import { formatCurrency } from '../../../lib/formatters';
import { useDebounce } from '../../../hooks/useDebounce';
import { useNotificationStore } from '../../../stores/notificationStore';
import { Dialog } from '../../ui/dialog';
import { EmployeeForm } from './EmployeeForm';
import { PermanentEmployeeForm } from './PermanentEmployeeForm';
import { TemporaryEmployeeForm } from './TemporaryEmployeeForm';
// Creation/Update disabled in compatibility phase – forms will be reintroduced per employee type
// import { useCreateEmployee, useUpdateEmployee } from '../../../hooks/useEmployeeMutations';
import { Button } from '../../ui/button';
import { EmployeeService } from '../../../services/api/employees';

export const EmployeeTable: React.FC = () => {
  const push = useNotificationStore((s) => s.push);
  const [search, setSearch] = React.useState('');
  const debounced = useDebounce(search, 400);

  const [page, setPage] = React.useState(1);
  const pageSize = 20;
  const { data, isLoading, refetch, error } = useEmployees({ search: debounced || undefined, page, pageSize });
  const [open, setOpen] = React.useState(false);
  const [editing, setEditing] = React.useState<Employee | null>(null);
  // const createMutation = useCreateEmployee();
  // const updateMutation = useUpdateEmployee(editing?.id);

  const [showAddPerm, setShowAddPerm] = React.useState(false);
  const [showAddTemp, setShowAddTemp] = React.useState(false);
  const openCreatePermanent = () => setShowAddPerm(true);
  const openCreateTemporary = () => setShowAddTemp(true);

  const onRowClick = async (emp: Employee) => {
    // Optionally could refetch full record; placeholder uses existing object
    setEditing(emp);
    setOpen(true);
  };

  React.useEffect(() => {
    if (error) {
      push({ title: 'Employee Fetch Failed', message: error.message, type: 'error' });
    }
  }, [error, push]);

  const columns = React.useMemo<ColumnDef<Employee>[]>(
    () => [
      {
        accessorKey: 'employeeCode',
        header: 'Code',
        cell: ({ row }) => <span className="font-medium">{row.original.employeeCode}</span>
      },
      {
        id: 'name',
        header: 'Name',
        cell: ({ row }) => {
          const emp = row.original;
          const position = emp.employeeType==='Permanent' ? emp.employment.position : emp.contract.position;
          return (
            <div>
              {emp.personalInfo.firstName} {emp.personalInfo.lastName}
              <div className="text-xs text-gray-500">{position}</div>
            </div>
          );
        }
      },
      {
        id: 'deptOrClient',
        header: 'Dept/Client',
        cell: ({ row }) => {
          const emp = row.original;
          if (emp.employeeType==='Permanent') {
            return <Badge variant="secondary">{emp.employment.department}</Badge>;
          }
            return <Badge variant="outline">{emp.contract.client}</Badge>;
        }
      },
      {
        id: 'baseOrRate',
        header: 'Base / Rate',
        cell: ({ row }) => {
          const emp = row.original;
          if (emp.employeeType==='Permanent') {
            return formatCurrency(emp.compensation.basicSalary);
          }
          return `${emp.compensation.rateType} ${formatCurrency(emp.compensation.rate)}`;
        }
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => (
          <Badge
            variant={
              row.original.status === 'Active'
                ? 'default'
                : row.original.status === 'On Leave'
                ? 'secondary'
                : 'destructive'
            }
          >
            {row.original.status}
          </Badge>
        )
      }
    ],
    []
  );

  return (
    <div className="space-y-2">
      <DataTableToolbar value={search} onChange={(v) => { setSearch(v); setPage(1); }} onRefresh={() => refetch()}>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={openCreatePermanent}>Add Permanent</Button>
          <Button size="sm" variant="outline" onClick={openCreateTemporary}>Add Temporary</Button>
        </div>
      </DataTableToolbar>
      <DataTable<Employee>
        columns={columns}
        data={(data?.employees ?? []).map((e) => ({ ...e }))}
        isLoading={isLoading}
        emptyMessage={debounced ? 'No employees match your search.' : 'No employees yet.'}
      />
      {data && (
        <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
          <p>Showing {data.employees.length} of {data.count} employees</p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled={page === 1 || isLoading} onClick={() => setPage(p => Math.max(1, p - 1))}>Prev</Button>
            <span>Page {page}{data.count > pageSize ? ` / ${Math.max(1, Math.ceil(data.count / pageSize))}` : ''}</span>
            <Button variant="outline" size="sm" disabled={isLoading || (data.count <= page * pageSize)} onClick={() => setPage(p => p + 1)}>Next</Button>
          </div>
        </div>
      )}
  {showAddPerm && <div className="mt-4"><PermanentEmployeeForm onCreated={()=> { setShowAddPerm(false); refetch(); }} /></div>}
  {showAddTemp && <div className="mt-4"><TemporaryEmployeeForm onCreated={()=> { setShowAddTemp(false); refetch(); }} /></div>}
    </div>
  );
};