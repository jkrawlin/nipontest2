import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { EmployeeService, EmployeeListResponse, EmployeeQueryParams } from '../services/api/employees';

export function useEmployees(params: EmployeeQueryParams): UseQueryResult<EmployeeListResponse, Error> {
  return useQuery<EmployeeListResponse, Error>({
    queryKey: ['employees', params],
    queryFn: () => EmployeeService.list(params),
    staleTime: 60_000,
    placeholderData: (previous) => previous
  });
}