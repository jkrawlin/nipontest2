// Revised EmployeeService implementing expanded Qatar compliance domain (backward compatible)
import type { Employee, ExpiringDocument, DocumentExpiry } from '../../types/employee';
import Decimal from 'decimal.js';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc); dayjs.extend(timezone); dayjs.tz.setDefault('Asia/Qatar');

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
const LEGACY_LS_KEY = 'employees';
const LS_KEY = 'nipon_employees';

export interface EmployeeListResponse {
  employees: Employee[];
  count: number;
}

const _EMPLOYEE_MEM: Map<string, Employee> = new Map();

function persist() {
  const arr = Array.from(_EMPLOYEE_MEM.values()).map(migrateOutbound);
  try { localStorage.setItem(LS_KEY, JSON.stringify(arr)); } catch {}
}

function reviveDates<T extends Record<string, any>>(obj: T): T {
  if (!obj || typeof obj !== 'object') return obj;
  for (const k of Object.keys(obj)) {
    const v = (obj as any)[k];
    if (typeof v === 'string' && /\d{4}-\d{2}-\d{2}T/.test(v)) {
      (obj as any)[k] = new Date(v);
    } else if (v && typeof v === 'object') reviveDates(v);
  }
  return obj;
}

function migrateInbound(raw: any): Employee {
  reviveDates(raw);
  // Ensure new required calculated fields
  const basic = raw.compensation.basicSalary || 0;
  const total = basic + (raw.compensation.housingAllowance||0) + (raw.compensation.transportAllowance||0) + (raw.compensation.foodAllowance||0) + (raw.compensation.phoneAllowance||raw.compensation.telephoneAllowance||0) + (raw.compensation.otherAllowances||0);
  raw.compensation.totalSalary = raw.compensation.totalSalary ?? raw.compensation.totalMonthlySalary ?? total;
  raw.compensation.totalMonthlySalary = raw.compensation.totalMonthlySalary ?? raw.compensation.totalSalary;
  // End of service mapping
  if (raw.endOfService) {
    raw.endOfService.eligible = raw.endOfService.eligible ?? (raw.endOfService.yearsOfService ?? 0) >= 1;
    raw.endOfService.totalServiceYears = raw.endOfService.totalServiceYears ?? raw.endOfService.yearsOfService ?? 0;
    raw.endOfService.gratuityAmount = raw.endOfService.gratuityAmount ?? raw.endOfService.eligibleAmount ?? 0;
    raw.endOfService.exitPermitRequired = raw.endOfService.exitPermitRequired ?? true;
    raw.endOfService.flightTicketProvided = raw.endOfService.flightTicketProvided ?? true;
  }
  return raw as Employee;
}

function migrateOutbound(emp: Employee): any {
  return {
    ...emp,
  };
}

function load() {
  if (_EMPLOYEE_MEM.size > 0) return;
  try {
    const rawNew = localStorage.getItem(LS_KEY);
    const rawOld = !rawNew ? localStorage.getItem(LEGACY_LS_KEY) : null;
    const source = rawNew || rawOld;
    if (source) {
      const parsed: any[] = JSON.parse(source);
      parsed.forEach(e => {
        try { const migrated = migrateInbound(e); _EMPLOYEE_MEM.set(migrated.id, migrated); } catch { /* ignore */ }
      });
      if (rawOld && !rawNew) persist(); // migrate forward
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
      passport: { number: 'P1234567', issueDate: new Date('2021-06-01'), expiryDate: dayjs().add(540, 'day').toDate(), nationality: 'Qatar' },
      visa: { number: 'VISA001', issueDate: new Date('2022-01-05'), expiryDate: dayjs().add(365, 'day').toDate(), type: 'Work', sponsorName: 'Company LLC' }
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
      totalSalary: 4500 + 1500 + 500,
      bankName: 'QNB',
      accountNumber: '1234567890',
      iban: 'QA00QNB0000000001234567890'
    },
    leave: { annualLeaveEntitlement: 30, annualLeaveBalance: 30, annualLeaveUsed: 5, sickLeaveBalance: 14, sickLeaveUsed: 0, unpaidLeaveDays: 0 },
    contact: { 
      mobileQatar: '+97450000001', 
      email: 'ali.hassan@example.qa',
      homeCountryAddress: 'Doha',
      qatarAddress: { area: 'Doha' },
      emergencyContact: { name: 'Mohammed', relationship: 'Brother', mobileQatar: '+97450000002', address: 'Doha' } 
    },
    endOfService: { eligible: false, totalServiceYears: 0, gratuityAmount: 0, eligibleAmount: 0, yearsOfService: 0, exitPermitRequired: true, flightTicketProvided: true, lastCalculationDate: now },
    status: 'Active',
    createdAt: now,
    updatedAt: now,
    createdBy: 'system',
    lastModifiedBy: 'system',
    updatedBy: 'system'
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
  const serviceYears = dayjs().diff(dayjs(employee.employment.joiningDate), 'year', true);
  const basicSalary = new Decimal(employee.compensation.basicSalary || 0);
  if (serviceYears < 1) return new Decimal(0);
  const firstFive = Math.min(serviceYears, 5);
  let gratuity = basicSalary.mul(3).mul(firstFive).div(4.33); // 3 weeks per year (approx month weeks)
  if (serviceYears > 5) {
    const remaining = serviceYears - 5;
    gratuity = gratuity.plus(basicSalary.mul(4).mul(remaining).div(4.33));
  }
  return gratuity.toDecimalPlaces(2);
}

function updateEOSSnapshot(employee: Employee) {
  const eos = calculateEndOfService(employee);
  const years = dayjs().diff(dayjs(employee.employment.joiningDate), 'year', true);
  employee.endOfService.gratuityAmount = eos.toNumber();
  employee.endOfService.eligibleAmount = employee.endOfService.gratuityAmount; // legacy mirror
  employee.endOfService.totalServiceYears = parseFloat(years.toFixed(2));
  employee.endOfService.yearsOfService = employee.endOfService.totalServiceYears; // legacy mirror
  employee.endOfService.eligible = employee.endOfService.totalServiceYears >= 1;
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
        passport: { number: 'NA', issueDate: now, expiryDate: dayjs().add(720, 'day').toDate(), nationality: payload.nationality },
        visa: { number: 'NA', issueDate: now, expiryDate: dayjs().add(365, 'day').toDate(), type: 'Work', sponsorName: 'Company' }
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
        totalSalary: totalMonthlySalary,
        bankName: 'QNB',
        accountNumber: 'NA',
        iban: 'NA'
      },
  leave: { annualLeaveEntitlement: 30, annualLeaveBalance: 30, annualLeaveUsed: 0, sickLeaveBalance: 14, sickLeaveUsed: 0, unpaidLeaveDays: 0 },
  contact: { mobileQatar: '+97400000000', email: `${payload.firstName.toLowerCase()}.${payload.lastName.toLowerCase()}@example.qa`, homeCountryAddress: 'Home Country', qatarAddress: { area: 'Doha' }, emergencyContact: { name: 'N/A', relationship: 'N/A', address: 'Doha' } },
      endOfService: { eligible: false, totalServiceYears: 0, gratuityAmount: 0, eligibleAmount: 0, yearsOfService: 0, exitPermitRequired: true, flightTicketProvided: true, lastCalculationDate: now },
      status: 'Active',
      createdAt: now,
      updatedAt: now,
      createdBy: payload.createdBy,
      lastModifiedBy: payload.createdBy,
      updatedBy: payload.createdBy,
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
  const merged: Employee = { ...existing, ...changes, updatedAt: new Date(), lastModifiedBy: changes.modifiedBy, updatedBy: changes.modifiedBy };
    if (changes.compensation) {
      merged.compensation.totalMonthlySalary = (changes.compensation.basicSalary ?? existing.compensation.basicSalary) + (changes.compensation.housingAllowance ?? existing.compensation.housingAllowance) + (changes.compensation.transportAllowance ?? existing.compensation.transportAllowance) + (changes.compensation.otherAllowances ?? existing.compensation.otherAllowances ?? 0) + (changes.compensation.foodAllowance ?? existing.compensation.foodAllowance ?? 0) + (changes.compensation.phoneAllowance ?? existing.compensation.phoneAllowance ?? existing.compensation.telephoneAllowance ?? 0);
      merged.compensation.totalSalary = merged.compensation.totalMonthlySalary;
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
  },

  // New API (wrapper for backward compat)
  async createEmployee(partial: Partial<Employee>) {
    return this.create({
      firstName: partial.personalInfo?.firstName || 'New',
      lastName: partial.personalInfo?.lastName || 'Employee',
      nationality: partial.personalInfo?.nationality || 'Qatar',
      gender: partial.personalInfo?.gender || 'Male',
      joiningDate: partial.employment?.joiningDate || new Date(),
      department: partial.employment?.department || 'General',
      position: partial.employment?.position || 'Staff',
      basicSalary: partial.compensation?.basicSalary || 0,
      housingAllowance: partial.compensation?.housingAllowance || 0,
      transportAllowance: partial.compensation?.transportAllowance || 0,
      otherAllowances: partial.compensation?.otherAllowances,
      createdBy: 'system'
    });
  },
  async getAllEmployees(): Promise<Employee[]> { load(); return Array.from(_EMPLOYEE_MEM.values()); }
};