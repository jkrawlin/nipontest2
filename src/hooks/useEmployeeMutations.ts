import { useMutation, useQueryClient } from '@tanstack/react-query';
import { EmployeeService } from '../services/api/employees';
import type { EmployeeBaseForm } from '../lib/schemas/employee';

export function useCreateEmployee() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: EmployeeBaseForm) => EmployeeService.create(data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['employees'] });
    }
  });
}

export function useUpdateEmployee(id: string | undefined) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: Partial<EmployeeBaseForm>) => {
      if (!id) throw new Error('Missing employee id');
      return EmployeeService.update(id, data);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['employees'] });
    }
  });
}