// Enhanced in-memory EmployeeService aligned with Phase 1 comprehensive domain model.
import type { Employee, ExpiringDocument } from '../../types/employee';
import Decimal from 'decimal.js';
import dayjs from 'dayjs';

// Basic local form type (progressive enhancement: expand as UI forms grow)
export interface CreateEmployeePayload {
  firstName: string;
  lastName: string;
  nationality: string;
  gender: 'Male' | 'Female';
  joiningDate: Date;
  department: string;
  position: string;
  basicSalary: number;
  housingAllowance?: number;
  transportAllowance?: number;
  otherAllowances?: number;
}

export interface EmployeeQueryParams {
  page?: number; // 1-based
  pageSize?: number;
  search?: string;
}

// LocalStorage key
const LS_KEY = 'employees';

export interface EmployeeListResponse {
  employees: Employee[];
  count: number;
}

const _EMPLOYEE_MEM: Map<string, Employee> = new Map();

function persist() {
  const arr = Array.from(_EMPLOYEE_MEM.values());
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(arr));
  } catch {}
}

function load() {
  if (_EMPLOYEE_MEM.size > 0) return;
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      const parsed: Employee[] = JSON.parse(raw);
      parsed.forEach(e => _EMPLOYEE_MEM.set(e.id, {
        ...e,
        // revive dates
        createdAt: new Date(e.createdAt),
        updatedAt: new Date(e.updatedAt),
        personalInfo: { ...e.personalInfo, dateOfBirth: new Date(e.personalInfo.dateOfBirth) },
        documents: {
          ...e.documents,
          qatarId: { ...e.documents.qatarId, issueDate: new Date(e.documents.qatarId.issueDate), expiryDate: new Date(e.documents.qatarId.expiryDate) },
          passport: { ...e.documents.passport, issueDate: new Date(e.documents.passport.issueDate), expiryDate: new Date(e.documents.passport.expiryDate) },
          visa: { ...e.documents.visa, issueDate: new Date(e.documents.visa.issueDate), expiryDate: new Date(e.documents.visa.expiryDate) }
        },
        employment: { ...e.employment, joiningDate: new Date(e.employment.joiningDate), confirmationDate: e.employment.confirmationDate ? new Date(e.employment.confirmationDate) : undefined },
        leave: { ...e.leave, lastLeaveDate: e.leave.lastLeaveDate ? new Date(e.leave.lastLeaveDate) : undefined },
        endOfService: { ...e.endOfService, lastCalculationDate: new Date(e.endOfService.lastCalculationDate) },
        terminationDate: e.terminationDate ? new Date(e.terminationDate) : undefined
      }));
    } else {
      seedSampleEmployees();
    }
  } catch {
    seedSampleEmployees();
  }
}

function seedSampleEmployees() {
  const now = new Date();
  const base: Omit<Employee, 'id' | 'employeeCode'> = {
    personalInfo: {
      firstName: 'Ali',
      lastName: 'Hassan',
      dateOfBirth: new Date('1995-05-20'),
      nationality: 'Qatar',
      gender: 'Male',
      maritalStatus: 'Single'
    },
    documents: {
      qatarId: { number: '28945612345', issueDate: new Date('2022-01-01'), expiryDate: dayjs().add(180, 'day').toDate(), profession: 'Accountant' },
      passport: { number: 'P1234567', issueDate: new Date('2021-06-01'), expiryDate: dayjs().add(540, 'day').toDate(), issueCountry: 'Qatar' },
      visa: { number: 'VISA001', issueDate: new Date('2022-01-05'), expiryDate: dayjs().add(365, 'day').toDate(), type: 'Work', sponsor: 'Company LLC' }
    },
    employment: {
      position: 'Accountant',
      department: 'Finance',
      joiningDate: new Date('2022-02-01'),
      contractType: 'Permanent',
      workLocation: 'Doha',
      employmentStatus: 'Confirmed'
    },
    compensation: {
      basicSalary: 4500,
      housingAllowance: 1500,
      transportAllowance: 500,
      totalMonthlySalary: 4500 + 1500 + 500,
      bankName: 'QNB',
      accountNumber: '1234567890',
      iban: 'QA00QNB0000000001234567890'
    },
    leave: { annualLeaveBalance: 30, annualLeaveUsed: 5, sickLeaveBalance: 14, sickLeaveUsed: 0, unpaidLeaveDays: 0 },
    contact: { mobileNumber: '+97450000001', currentAddress: 'Doha', homeCountryAddress: 'Doha', emergencyContact: { name: 'Mohammed', relationship: 'Brother', phoneNumber: '+97450000002' } },
    endOfService: { eligibleAmount: 0, lastCalculationDate: now, yearsOfService: 0 },
    status: 'Active',
    createdAt: now,
    updatedAt: now,
    createdBy: 'system',
    lastModifiedBy: 'system'
  };
  const first: Employee = { id: crypto.randomUUID(), employeeCode: generateEmployeeCode(1), ...base };
  const second: Employee = { ...first, id: crypto.randomUUID(), employeeCode: generateEmployeeCode(2), personalInfo: { ...first.personalInfo, firstName: 'Sara', lastName: 'Ahmed', gender: 'Female', maritalStatus: 'Married' }, employment: { ...first.employment, position: 'HR Officer', department: 'HR' } };
  [first, second].forEach(e => _EMPLOYEE_MEM.set(e.id, e));
  persist();
}

function generateEmployeeCode(seq: number) {
  const year = new Date().getFullYear();
  return `EMP-${year}-${String(seq).padStart(4, '0')}`;
}

function calculateEndOfService(employee: Employee): Decimal {
  const yearsOfService = dayjs().diff(dayjs(employee.employment.joiningDate), 'year');
  const basicSalary = new Decimal(employee.compensation.basicSalary);
  if (yearsOfService < 1) return new Decimal(0);
  let gratuity = new Decimal(0);
  const firstFiveYears = Math.min(yearsOfService, 5);
  gratuity = gratuity.plus(basicSalary.mul(3).mul(firstFiveYears).div(52));
  if (yearsOfService > 5) {
    const remainingYears = yearsOfService - 5;
    gratuity = gratuity.plus(basicSalary.mul(4).mul(remainingYears).div(52));
  }
  return gratuity.toDecimalPlaces(2);
}

function updateEOSSnapshot(employee: Employee) {
  const eos = calculateEndOfService(employee);
  const years = dayjs().diff(dayjs(employee.employment.joiningDate), 'year', true);
  employee.endOfService.eligibleAmount = eos.toNumber();
  employee.endOfService.yearsOfService = parseFloat(years.toFixed(2));
  employee.endOfService.lastCalculationDate = new Date();
}

export const EmployeeService = {
  initialize() { load(); },

  async list(params: EmployeeQueryParams = {}): Promise<EmployeeListResponse> {
    load();
    const arr = Array.from(_EMPLOYEE_MEM.values());
    const pageSize = params.pageSize ?? 20;
    const page = params.page && params.page > 0 ? params.page : 1;
    let filtered = arr;
    if (params.search) {
      const s = params.search.toLowerCase();
      filtered = filtered.filter(e =>
        e.employeeCode.toLowerCase().includes(s) ||
        e.personalInfo.firstName.toLowerCase().includes(s) ||
        e.personalInfo.lastName.toLowerCase().includes(s)
      );
    }
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    return { employees: filtered.slice(from, to), count: filtered.length };
  },

  async getById(id: string): Promise<Employee | null> { load(); return _EMPLOYEE_MEM.get(id) || null; },

  async getActiveEmployees(): Promise<Employee[]> {
    load();
    return Array.from(_EMPLOYEE_MEM.values()).filter(e => e.status === 'Active');
  },

  async create(payload: CreateEmployeePayload & { createdBy: string }): Promise<Employee> {
    load();
    const seq = _EMPLOYEE_MEM.size + 1;
    const now = new Date();
    const totalMonthlySalary = (payload.basicSalary + (payload.housingAllowance||0) + (payload.transportAllowance||0) + (payload.otherAllowances||0));
    const employee: Employee = {
      id: crypto.randomUUID(),
      employeeCode: generateEmployeeCode(seq),
      personalInfo: {
        firstName: payload.firstName,
        lastName: payload.lastName,
        dateOfBirth: new Date('1990-01-01'), // placeholder
        nationality: payload.nationality,
        gender: payload.gender,
        maritalStatus: 'Single'
      },
      documents: {
        qatarId: { number: 'NA', issueDate: now, expiryDate: dayjs().add(365, 'day').toDate(), profession: payload.position },
        passport: { number: 'NA', issueDate: now, expiryDate: dayjs().add(720, 'day').toDate(), issueCountry: payload.nationality },
        visa: { number: 'NA', issueDate: now, expiryDate: dayjs().add(365, 'day').toDate(), type: 'Work', sponsor: 'Company' }
      },
      employment: {
        position: payload.position,
        department: payload.department,
        joiningDate: payload.joiningDate,
        contractType: 'Permanent',
        workLocation: 'Doha',
        employmentStatus: 'Probation'
      },
      compensation: {
        basicSalary: payload.basicSalary,
        housingAllowance: payload.housingAllowance || 0,
        transportAllowance: payload.transportAllowance || 0,
        otherAllowances: payload.otherAllowances,
        totalMonthlySalary,
        bankName: 'QNB',
        accountNumber: 'NA',
        iban: 'NA'
      },
      leave: { annualLeaveBalance: 30, annualLeaveUsed: 0, sickLeaveBalance: 14, sickLeaveUsed: 0, unpaidLeaveDays: 0 },
      contact: { mobileNumber: '+974', currentAddress: 'Doha', homeCountryAddress: 'Home Country', emergencyContact: { name: 'N/A', relationship: 'N/A', phoneNumber: '+974' } },
      endOfService: { eligibleAmount: 0, lastCalculationDate: now, yearsOfService: 0 },
      status: 'Active',
      createdAt: now,
      updatedAt: now,
      createdBy: payload.createdBy,
      lastModifiedBy: payload.createdBy,
    };
    updateEOSSnapshot(employee);
    _EMPLOYEE_MEM.set(employee.id, employee);
    persist();
    return employee;
  },

  async update(id: string, changes: Partial<Employee> & { modifiedBy: string }): Promise<Employee> {
    load();
    const existing = _EMPLOYEE_MEM.get(id);
    if (!existing) throw new Error('Employee not found');
    const merged: Employee = { ...existing, ...changes, updatedAt: new Date(), lastModifiedBy: changes.modifiedBy };
    if (changes.compensation) {
      merged.compensation.totalMonthlySalary = (changes.compensation.basicSalary ?? existing.compensation.basicSalary) + (changes.compensation.housingAllowance ?? existing.compensation.housingAllowance) + (changes.compensation.transportAllowance ?? existing.compensation.transportAllowance) + (changes.compensation.otherAllowances ?? existing.compensation.otherAllowances ?? 0);
    }
    updateEOSSnapshot(merged);
    _EMPLOYEE_MEM.set(id, merged);
    persist();
    return merged;
  },

  async recalcEndOfServiceAll() {
    load();
    _EMPLOYEE_MEM.forEach(e => { updateEOSSnapshot(e); });
    persist();
  },

  getDocumentExpiryStatus(expiryDate: Date) {
    const today = dayjs();
    const expiry = dayjs(expiryDate);
    const daysRemaining = expiry.diff(today, 'day');
    if (daysRemaining < 0) return { status: 'expired' as const, daysRemaining, color: 'red' };
    if (daysRemaining <= 30) return { status: 'expiring-soon' as const, daysRemaining, color: 'orange' };
    if (daysRemaining <= 90) return { status: 'expiring' as const, daysRemaining, color: 'yellow' };
    return { status: 'valid' as const, daysRemaining, color: 'green' };
  },

  async getExpiringDocuments(withinDays = 90): Promise<ExpiringDocument[]> {
    load();
    const list: ExpiringDocument[] = [];
    _EMPLOYEE_MEM.forEach(e => {
      if (e.status !== 'Active') return;
      const pushIf = (label: string, date: Date) => {
        const info = this.getDocumentExpiryStatus(date);
        if (info.daysRemaining <= withinDays) {
          list.push({ employeeId: e.id, employeeName: `${e.personalInfo.firstName} ${e.personalInfo.lastName}`, documentType: label, expiryDate: date, daysRemaining: info.daysRemaining, status: info.status });
        }
      };
      pushIf('Qatar ID', e.documents.qatarId.expiryDate);
      pushIf('Passport', e.documents.passport.expiryDate);
      pushIf('Visa', e.documents.visa.expiryDate);
    });
    return list.sort((a,b)=> a.daysRemaining - b.daysRemaining);
  }
};