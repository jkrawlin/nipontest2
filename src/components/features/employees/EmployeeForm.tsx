import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { employeeBaseSchema, EmployeeBaseForm } from '../../../lib/schemas/employee';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import type { Employee } from '../../../types/employee';

interface EmployeeFormProps {
  defaultValues?: Partial<EmployeeBaseForm>;
  onSubmit: (values: EmployeeBaseForm) => Promise<void> | void;
  submitting?: boolean;
  employee?: Employee | null;
}

export const EmployeeForm: React.FC<EmployeeFormProps> = ({ defaultValues, onSubmit, submitting, employee }) => {
  const form = useForm<EmployeeBaseForm>({
    resolver: zodResolver(employeeBaseSchema),
    defaultValues: {
      firstName: employee?.personalInfo.firstName || defaultValues?.firstName || '',
      lastName: employee?.personalInfo.lastName || defaultValues?.lastName || '',
      position: employee?.employment.position || defaultValues?.position || '',
      department: employee?.employment.department || defaultValues?.department || '',
      basicSalary: employee?.compensation.basicSalary ?? defaultValues?.basicSalary ?? 0,
      status: (employee?.status as any) || 'Active'
    }
  });

  const handleSubmit = form.handleSubmit(async (vals) => {
    await onSubmit(vals);
  });

  const error = (name: keyof EmployeeBaseForm) => form.formState.errors[name]?.message && (
    <p className="text-xs text-red-600">{form.formState.errors[name]?.message}</p>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-medium">Position</label>
            <Input {...form.register('position')} />
          {error('position')}
        </div>
        <div>
          <label className="text-xs font-medium">First Name</label>
          <Input {...form.register('firstName')} />
          {error('firstName')}
        </div>
        <div>
          <label className="text-xs font-medium">Last Name</label>
          <Input {...form.register('lastName')} />
          {error('lastName')}
        </div>
        <div>
          <label className="text-xs font-medium">Department</label>
          <Input {...form.register('department')} />
          {error('department')}
        </div>
        <div>
          <label className="text-xs font-medium">Basic Salary</label>
          <Input type="number" step="0.01" {...form.register('basicSalary', { valueAsNumber: true })} />
          {error('basicSalary')}
        </div>
      </div>
      <div className="pt-2 flex justify-end gap-2">
        <Button type="submit" disabled={submitting}>{submitting ? 'Saving…' : employee ? 'Update' : 'Create'}</Button>
      </div>
    </form>
  );
};