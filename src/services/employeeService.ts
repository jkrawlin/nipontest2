import type { Employee, ExpiringDocument } from '../types/employee';

// Simple resilient storage (falls back to in-memory for tests / SSR)
const __mem: Record<string,string> = {};
const safeStore = {
  get(key: string){ try { return (globalThis as any).localStorage?.getItem(key) ?? __mem[key] ?? null; } catch { return __mem[key] ?? null; } },
  set(key: string, val: string){ try { (globalThis as any).localStorage?.setItem(key,val); } catch { /* ignore */ } __mem[key]=val; }
};

export class EmployeeService {
  private static STORAGE_KEY = 'employees_simple';

  static getAll(): Employee[] {
    const raw = safeStore.get(this.STORAGE_KEY);
    if (!raw) { const sample = this.getSampleData(); this.save(sample); return sample; }
    try { return JSON.parse(raw) as Employee[]; } catch { return []; }
  }

  static saveRecord(employee: Employee): void {
    const list = this.getAll();
    const idx = list.findIndex(e => e.id === employee.id);
    if (idx >= 0) {
      list[idx] = { ...employee, totalSalary: employee.basicSalary + employee.allowances };
    } else {
      employee.id = Date.now().toString();
      employee.employeeCode = `EMP-${(list.length + 1).toString().padStart(3,'0')}`;
      employee.totalSalary = employee.basicSalary + employee.allowances;
      list.push(employee);
    }
    this.save(list);
  }

  static delete(id: string) {
    const list = this.getAll().filter(e => e.id !== id);
    this.save(list);
  }

  static getExpiringDocuments(): ExpiringDocument[] {
    const today = new Date();
    const DAY = 1000*60*60*24;
    const out: ExpiringDocument[] = [];
    this.getAll().forEach(emp => {
      const push = (label: 'Qatar ID' | 'Passport', expiry: string) => {
        const diff = Math.ceil((new Date(expiry).getTime() - today.getTime())/DAY);
        if (diff <= 180) out.push({ employee: emp.firstName + ' ' + emp.lastName, document: label, expiryDate: expiry, daysLeft: diff });
      };
      push('Qatar ID', emp.qatarIdExpiry);
      push('Passport', emp.passportExpiry);
    });
    return out.sort((a,b)=> a.daysLeft - b.daysLeft);
  }

  private static save(list: Employee[]) { safeStore.set(this.STORAGE_KEY, JSON.stringify(list)); }

  private static getSampleData(): Employee[] {
    return [
      { id: '1', employeeCode: 'EMP-001', type:'Permanent', firstName:'Ahmed', lastName:'Hassan', nationality:'Egyptian', position:'Accountant', department:'Finance', joiningDate:'2022-01-15', qatarId:'28512345678', qatarIdExpiry:'2025-01-14', passport:'A1234567', passportExpiry:'2030-05-31', basicSalary:5000, allowances:2000, totalSalary:7000, bankName:'QNB', accountNumber:'1234567890', mobile:'+97433456789', email:'ahmed@company.com', status:'Active' },
      { id: '2', employeeCode: 'EMP-002', type:'Permanent', firstName:'Sara', lastName:'Ali', nationality:'Jordanian', position:'HR Officer', department:'HR', joiningDate:'2023-03-10', qatarId:'28998765432', qatarIdExpiry:'2024-12-20', passport:'B9876543', passportExpiry:'2029-11-15', basicSalary:6000, allowances:1500, totalSalary:7500, bankName:'CBQ', accountNumber:'222333444', mobile:'+97455667788', email:'sara@company.com', status:'Active' },
      { id: '3', employeeCode: 'EMP-003', type:'Temporary', firstName:'John', lastName:'Doe', nationality:'Kenyan', position:'Driver', department:'Logistics', joiningDate:'2024-06-01', qatarId:'', qatarIdExpiry:'2024-11-01', passport:'C1239876', passportExpiry:'2027-02-05', basicSalary:2500, allowances:500, totalSalary:3000, bankName:'Doha Bank', accountNumber:'998877665', mobile:'+97450112233', status:'Active' },
      { id: '4', employeeCode: 'EMP-004', type:'Permanent', firstName:'Khalid', lastName:'Omar', nationality:'Qatari', position:'Operations Manager', department:'Operations', joiningDate:'2021-09-01', qatarId:'28711223344', qatarIdExpiry:'2026-06-30', passport:'Q5566778', passportExpiry:'2031-08-12', basicSalary:12000, allowances:4000, totalSalary:16000, bankName:'QNB', accountNumber:'5544332211', mobile:'+97466778899', email:'khalid@company.com', status:'Active' },
      { id: '5', employeeCode: 'EMP-005', type:'Permanent', firstName:'Fatima', lastName:'Yousef', nationality:'Sudanese', position:'Procurement Officer', department:'Procurement', joiningDate:'2022-11-20', qatarId:'28822334455', qatarIdExpiry:'2025-02-10', passport:'D4455667', passportExpiry:'2028-04-18', basicSalary:5500, allowances:1200, totalSalary:6700, bankName:'QIB', accountNumber:'6677889900', mobile:'+97477889900', email:'fatima@company.com', status:'Inactive' }
    ];
  }
}

export default EmployeeService;
