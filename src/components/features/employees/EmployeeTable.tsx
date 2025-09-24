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
import { useCreateEmployee, useUpdateEmployee } from '../../../hooks/useEmployeeMutations';
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
  const createMutation = useCreateEmployee();
  const updateMutation = useUpdateEmployee(editing?.id);

  const openCreate = () => {
    setEditing(null);
    setOpen(true);
  };

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
        cell: ({ row }) => (
          <div>
            {row.original.personalInfo.firstName} {row.original.personalInfo.lastName}
            <div className="text-xs text-gray-500">{row.original.employment.position}</div>
          </div>
        )
      },
      {
        accessorFn: (r) => r.employment.department,
        id: 'department',
        header: 'Department',
        cell: ({ row }) => <Badge variant="secondary">{row.original.employment.department}</Badge>
      },
        {
        accessorFn: (r) => r.compensation.basicSalary,
        id: 'basicSalary',
        header: 'Basic Salary',
        cell: ({ row }) => formatCurrency(row.original.compensation.basicSalary)
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
        <Button size="sm" onClick={openCreate}>Add Employee</Button>
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
      <Dialog open={open} onClose={() => setOpen(false)} title={editing ? 'Edit Employee' : 'New Employee'} size="lg">
        <EmployeeForm
          employee={editing}
          submitting={createMutation.isPending || updateMutation.isPending}
          onSubmit={async (vals) => {
            try {
              if (editing) {
                await updateMutation.mutateAsync(vals);
                push({ title: 'Employee Updated', message: editing.employeeCode, type: 'success' });
              } else {
                const emp = await createMutation.mutateAsync(vals);
                push({ title: 'Employee Created', message: emp.employeeCode, type: 'success' });
              }
              setOpen(false);
            } catch (e) {
              push({ title: 'Save Failed', message: (e as Error).message, type: 'error' });
            }
          }}
        />
      </Dialog>
    </div>
  );
};