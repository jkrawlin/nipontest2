// Compatibility shim bridging legacy unified EmployeeService API with new separated
// PermanentEmployeeService & TemporaryEmployeeService. Only exposes read/aggregate
// operations needed by existing dashboard & report code. Creation/updating should
// use the specific services directly.
import type { Employee, PermanentEmployee, TemporaryEmployee, ExpiringDocument } from '../../types/employee';
import { PermanentEmployeeService } from './permanentEmployees';
import { TemporaryEmployeeService } from './temporaryEmployees';

export interface EmployeeQueryParams { page?: number; pageSize?: number; search?: string }
export interface EmployeeListResponse { employees: Employee[]; count: number }

function searchFilter(list: Employee[], term?: string) {
  if (!term) return list; const s = term.toLowerCase();
  return list.filter(e => e.employeeCode.toLowerCase().includes(s) || e.personalInfo.firstName.toLowerCase().includes(s) || e.personalInfo.lastName.toLowerCase().includes(s));
}

function projectExpiries(permanent: PermanentEmployee[], temporary: TemporaryEmployee[], withinDays: number): ExpiringDocument[] {
  const todayMs = Date.now(); const DAY = 86400000; const out: ExpiringDocument[] = [];
  const add = (emp: Employee, label: string, dateStr?: string, number?: string) => {
    if (!dateStr) return; const diffDays = Math.floor((new Date(dateStr).getTime() - todayMs)/DAY);
    if (diffDays > withinDays) return;
    let status: ExpiringDocument['status'] = 'valid';
    if (diffDays < 0) status = 'expired'; else if (diffDays <= 15) status = 'critical'; else if (diffDays <= 45) status = 'warning';
    out.push({ employeeId: emp.id, employeeType: emp.employeeType, employeeName: `${emp.personalInfo.firstName} ${emp.personalInfo.lastName}`, documentType: label, documentNumber: number, expiryDate: dateStr, daysRemaining: diffDays, status });
  };
  permanent.forEach(p => {
    add(p,'Qatar ID', p.documents.qatarId.expiryDate, p.documents.qatarId.number);
    add(p,'Passport', p.documents.passport.expiryDate, p.documents.passport.number);
    add(p,'Visa', p.documents.visa.expiryDate, p.documents.visa.number);
    add(p,'Health Card', p.documents.healthCard.expiryDate, p.documents.healthCard.number);
  });
  temporary.forEach(t => {
    add(t,'Passport', t.documents.passport.expiryDate, t.documents.passport.number);
    if (t.documents.visa) add(t,'Visa', t.documents.visa.expiryDate, t.documents.visa.number);
    if (t.documents.workPermit) add(t,'Work Permit', t.documents.workPermit.expiryDate, t.documents.workPermit.number);
  });
  return out.sort((a,b)=> a.daysRemaining - b.daysRemaining);
}

export const EmployeeService = {
  initialize() {/* no-op for shim */},
  async list(params: EmployeeQueryParams = {}): Promise<EmployeeListResponse> {
    const all = [...PermanentEmployeeService.getAll(), ...TemporaryEmployeeService.getAll()];
    const filtered = searchFilter(all, params.search);
    const pageSize = params.pageSize ?? 20; const page = params.page && params.page>0 ? params.page : 1; const start=(page-1)*pageSize; const end=start+pageSize;
    return { employees: filtered.slice(start,end), count: filtered.length };
  },
  async getAllEmployees(): Promise<Employee[]> { return [...PermanentEmployeeService.getAll(), ...TemporaryEmployeeService.getAll()]; },
  async getActiveEmployees(): Promise<Employee[]> { return (await this.getAllEmployees()).filter(e=> e.status==='Active'); },
  async getExpiringDocuments(withinDays=90): Promise<ExpiringDocument[]> { return projectExpiries(PermanentEmployeeService.getAll(), TemporaryEmployeeService.getAll(), withinDays); },
  async recalcEndOfServiceAll() { /* To be implemented if gratuity recalculation changes */ },
  async create() { throw new Error('Use PermanentEmployeeService.create or TemporaryEmployeeService.create'); },
  async update() { throw new Error('Use specific service update method'); },
  async getById(id:string) { return (await this.getAllEmployees()).find(e=> e.id===id) || null; }
};