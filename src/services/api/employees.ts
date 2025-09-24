// Replaced Supabase-backed implementation with in-memory mock for development.
import type { Employee } from '../../types/employee';
import type { EmployeeBaseForm } from '../../lib/schemas/employee';

export interface EmployeeQueryParams {
  page?: number; // 1-based
  pageSize?: number;
  search?: string;
}

interface EmployeeRow {
  id: string;
  employee_code: string;
  first_name: string;
  last_name: string;
  position: string | null;
  department_id: string | null;
  basic_salary: number | null;
  status: string | null;
  created_at: string;
  updated_at: string;
}

/**
 * Maps a (flattened) database row to the richer nested `Employee` domain model.
 * NOTE: Only a subset of fields are populated initially; the rest will be
 * hydrated on demand (progressive enhancement to reduce payload size on list view).
 */
function mapRowToEmployee(row: EmployeeRow): Employee {
  return {
    id: row.id,
    employeeCode: row.employee_code,
    personalInfo: {
      firstName: row.first_name,
      lastName: row.last_name,
      dateOfBirth: new Date(), // placeholder; fetch detail view for precise value
      nationality: 'Unknown',
      gender: 'Male', // placeholder fallback
      maritalStatus: 'Single'
    },
    documents: {
      passport: { number: '—', expiryDate: new Date() }
    },
    employment: {
      position: row.position || '—',
      department: row.department_id || '—',
      joiningDate: new Date(),
      contractType: 'Permanent',
      workLocation: 'Qatar'
    },
    compensation: {
      basicSalary: row.basic_salary || 0,
      housingAllowance: 0,
      transportAllowance: 0,
      otherAllowances: 0,
      bankName: '',
      accountNumber: '',
      iban: ''
    },
    contact: {
      mobileNumber: '',
      currentAddress: '',
      homeCountryAddress: '',
      emergencyContact: '',
      emergencyContactNumber: ''
    },
    status: (row.status as Employee['status']) || 'Active',
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

export interface EmployeeListResponse {
  employees: Employee[];
  count: number;
}

// Simple in-memory store so UI keeps functioning without backend.
const _EMPLOYEE_MEM: Employee[] = [];

// Seed a couple of mock employees if empty
if (_EMPLOYEE_MEM.length === 0) {
  _EMPLOYEE_MEM.push(
    {
      id: 'e1',
      employeeCode: 'EMP001',
      personalInfo: { firstName: 'Ali', lastName: 'Hassan', dateOfBirth: new Date(), nationality: 'QA', gender: 'Male', maritalStatus: 'Single' },
      documents: { passport: { number: 'P123', expiryDate: new Date() } },
      employment: { position: 'Accountant', department: 'Finance', joiningDate: new Date(), contractType: 'Permanent', workLocation: 'Qatar' },
      compensation: { basicSalary: 4500, housingAllowance: 1500, transportAllowance: 500, otherAllowances: 0, bankName: 'QNB', accountNumber: '123456', iban: 'QA00TEST' },
      contact: { mobileNumber: '+97450000001', currentAddress: 'Doha', homeCountryAddress: 'Doha', emergencyContact: 'Mohammed', emergencyContactNumber: '+97450000002' },
      status: 'Active', createdAt: new Date(), updatedAt: new Date()
    },
    {
      id: 'e2',
      employeeCode: 'EMP002',
      personalInfo: { firstName: 'Sara', lastName: 'Ahmed', dateOfBirth: new Date(), nationality: 'QA', gender: 'Female', maritalStatus: 'Married' },
      documents: { passport: { number: 'P456', expiryDate: new Date() } },
      employment: { position: 'HR Officer', department: 'HR', joiningDate: new Date(), contractType: 'Permanent', workLocation: 'Qatar' },
      compensation: { basicSalary: 5200, housingAllowance: 1700, transportAllowance: 600, otherAllowances: 0, bankName: 'QNB', accountNumber: '654321', iban: 'QA00TEST2' },
      contact: { mobileNumber: '+97450000003', currentAddress: 'Doha', homeCountryAddress: 'Doha', emergencyContact: 'Laila', emergencyContactNumber: '+97450000004' },
      status: 'Active', createdAt: new Date(), updatedAt: new Date()
    }
  );
}

export const EmployeeService = {
  /**
   * Fetches a lightweight employee collection for table listing.
   * Applies basic search on first_name / last_name / employee_code using ilike.
   */
  async list(params: EmployeeQueryParams = {}): Promise<EmployeeListResponse> {
    const pageSize = params.pageSize ?? 20;
    const page = params.page && params.page > 0 ? params.page : 1;
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;
    let filtered = _EMPLOYEE_MEM;
    if (params.search) {
      const s = params.search.toLowerCase();
      filtered = filtered.filter(e =>
        e.employeeCode.toLowerCase().includes(s) ||
        e.personalInfo.firstName.toLowerCase().includes(s) ||
        e.personalInfo.lastName.toLowerCase().includes(s)
      );
    }
    const slice = filtered.slice(from, to + 1);
    return { employees: slice, count: filtered.length };
  }
  ,
  async getById(id: string): Promise<Employee | null> {
    return _EMPLOYEE_MEM.find(e => e.id === id) || null;
  },
  async create(payload: EmployeeBaseForm): Promise<Employee> {
    const now = new Date();
    const employee: Employee = {
      id: crypto.randomUUID(),
      employeeCode: payload.employeeCode,
      personalInfo: { firstName: payload.firstName, lastName: payload.lastName, dateOfBirth: now, nationality: 'QA', gender: 'Male', maritalStatus: 'Single' },
      documents: { passport: { number: 'N/A', expiryDate: now } },
      employment: { position: payload.position, department: payload.department, joiningDate: now, contractType: 'Permanent', workLocation: 'Qatar' },
      compensation: { basicSalary: payload.basicSalary, housingAllowance: 0, transportAllowance: 0, otherAllowances: 0, bankName: '', accountNumber: '', iban: '' },
      contact: { mobileNumber: '', currentAddress: '', homeCountryAddress: '', emergencyContact: '', emergencyContactNumber: '' },
      status: payload.status,
      createdAt: now,
      updatedAt: now
    };
    _EMPLOYEE_MEM.push(employee);
    return employee;
  },
  async update(id: string, payload: Partial<EmployeeBaseForm>): Promise<Employee> {
    const existing = _EMPLOYEE_MEM.find(e => e.id === id);
    if (!existing) throw new Error('Not found');
    if (payload.employeeCode) existing.employeeCode = payload.employeeCode;
    if (payload.firstName) existing.personalInfo.firstName = payload.firstName;
    if (payload.lastName) existing.personalInfo.lastName = payload.lastName;
    if (payload.position) existing.employment.position = payload.position;
    if (payload.department) existing.employment.department = payload.department;
    if (typeof payload.basicSalary === 'number') existing.compensation.basicSalary = payload.basicSalary;
    if (payload.status) existing.status = payload.status as Employee['status'];
    existing.updatedAt = new Date();
    return existing;
  }
};