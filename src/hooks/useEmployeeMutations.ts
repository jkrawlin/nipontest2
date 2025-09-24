import { useMutation, useQueryClient } from '@tanstack/react-query';
import { EmployeeService } from '../services/api/employees';
import type { EmployeeBaseForm } from '../lib/schemas/employee';
import { useAuthStore } from '../stores/authStore';

export function useCreateEmployee() {
  const qc = useQueryClient();
  const session = useAuthStore(s=>s.session);
  return useMutation({
    mutationFn: (data: EmployeeBaseForm) => {
      // Map minimal form to create payload (using placeholders for new required fields not yet on form)
      return EmployeeService.create({
        firstName: data.firstName,
        lastName: data.lastName,
        nationality: 'Qatar',
        gender: 'Male',
        joiningDate: new Date(),
        department: data.department,
        position: data.position,
        basicSalary: data.basicSalary,
        createdBy: session?.user.email || 'system'
      });
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['employees'] });
    }
  });
}

export function useUpdateEmployee(id: string | undefined) {
  const qc = useQueryClient();
  const session = useAuthStore(s=>s.session);
  return useMutation({
    mutationFn: (data: Partial<EmployeeBaseForm>) => {
      if (!id) throw new Error('Missing employee id');
      return EmployeeService.update(id, {
        personalInfo: {
          ...(data.firstName ? { firstName: data.firstName } : {}),
          ...(data.lastName ? { lastName: data.lastName } : {})
        } as any,
        employment: {
          ...(data.position ? { position: data.position } : {})
        } as any,
        compensation: data.basicSalary !== undefined ? { basicSalary: data.basicSalary } as any : undefined,
        status: data.status as any,
        modifiedBy: session?.user.email || 'system'
      });
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['employees'] });
    }
  });
}