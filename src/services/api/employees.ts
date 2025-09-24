// Simplified shim: legacy import path re-exporting new simplified EmployeeService
import { EmployeeService as CoreEmployeeService } from '../../services/employeeService';
import type { Employee, ExpiringDocument } from '../../types/employee';

export interface EmployeeQueryParams { search?: string; }
export interface EmployeeListResponse { employees: Employee[]; count: number; }

export const EmployeeService = {
  async list(params: EmployeeQueryParams = {}): Promise<EmployeeListResponse> {
    const all: Employee[] = CoreEmployeeService.getAll();
    const term = params.search?.toLowerCase();
    const filtered = term ? all.filter((e: Employee) =>
      e.employeeCode.toLowerCase().includes(term) ||
      `${e.firstName} ${e.lastName}`.toLowerCase().includes(term)
    ) : all;
    return { employees: filtered, count: filtered.length };
  },
  async getAllEmployees(): Promise<Employee[]> { return CoreEmployeeService.getAll(); },
  async getActiveEmployees(): Promise<Employee[]> { return CoreEmployeeService.getAll().filter((e: Employee)=> e.status==='Active'); },
  async getExpiringDocuments(): Promise<ExpiringDocument[]> { return CoreEmployeeService.getExpiringDocuments(); }
};