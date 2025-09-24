import { PermanentEmployee } from '../../types/employee';

export class PermanentEmployeeService {
  private static STORAGE_KEY = 'nipon_permanent_employees';

  static getAll(): PermanentEmployee[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (!stored) { this.seedInitialData(); return this.getAll(); }
    return JSON.parse(stored);
  }

  static create(data: Omit<PermanentEmployee, 'id' | 'employeeCode' | 'createdAt' | 'updatedAt' | 'employeeType'>): PermanentEmployee {
    const employees = this.getAll();
    const newEmployee: PermanentEmployee = {
      ...data,
      id: crypto.randomUUID(),
      employeeCode: this.generateEmployeeCode(),
      employeeType: 'Permanent',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    newEmployee.compensation.totalMonthlySalary = this.computeTotalSalary(newEmployee);
    newEmployee.endOfService.serviceYears = this.calculateServiceYears(newEmployee.employment.joiningDate);
    newEmployee.endOfService.gratuityAmount = this.calculateGratuity(newEmployee);
    newEmployee.endOfService.eligible = newEmployee.endOfService.serviceYears >= 1;
    employees.push(newEmployee); this.save(employees); return newEmployee;
  }

  private static computeTotalSalary(e: Pick<PermanentEmployee,'compensation'>): number {
    const c = e.compensation; return c.basicSalary + c.housingAllowance + c.transportAllowance + (c.foodAllowance||0) + (c.phoneAllowance||0) + (c.otherAllowances||0);
  }
  private static calculateServiceYears(joiningDate: string): number {
    const start = new Date(joiningDate).getTime(); const diffYears = (Date.now()-start)/(1000*60*60*24*365); return Math.round(diffYears*10)/10;
  }
  static calculateGratuity(employee: PermanentEmployee): number {
    const years = employee.endOfService.serviceYears; if (years <1) return 0; const basic = employee.compensation.basicSalary; let g=0; const firstFive=Math.min(years,5); g += (basic*3*firstFive)/4.33; if(years>5) g += (basic*4*(years-5))/4.33; return Math.round(g*100)/100; }
  private static generateEmployeeCode(): string { const year=new Date().getFullYear(); const count=this.getAll().filter(e=>e.employeeCode.startsWith(`PRM-${year}`)).length+1; return `PRM-${year}-${String(count).padStart(4,'0')}`; }
  private static save(list: PermanentEmployee[]) { localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list)); }
  private static seedInitialData() {
    const sample: Omit<PermanentEmployee,'id'|'employeeCode'|'createdAt'|'updatedAt'|'employeeType'>[] = [
      {
        personalInfo:{firstName:'Ahmed',lastName:'Hassan',fatherName:'Hassan Ali',dateOfBirth:'1985-03-15',placeOfBirth:'Cairo',nationality:'Egyptian',religion:'Islam',gender:'Male',maritalStatus:'Married',bloodGroup:'O+'},
        documents:{qatarId:{number:'28512345678',issueDate:'2022-01-15',expiryDate:'2025-01-14',profession:'Engineer',sponsor:'Nipon Trading WLL'},passport:{number:'A12345678',issueDate:'2020-06-01',expiryDate:'2030-05-31',issuePlace:'Cairo'},visa:{number:'VN123456',issueDate:'2022-01-01',expiryDate:'2024-12-31',type:'Work',sponsor:'Nipon Trading WLL',occupation:'Engineer'},healthCard:{number:'HC123456',issueDate:'2022-02-01',expiryDate:'2025-01-31'},laborContract:{number:'MADLSA/2022/12345',startDate:'2022-01-15',authenticated:true}},
        employment:{position:'Senior Engineer',positionArabic:'مهندس أول',department:'Engineering',joiningDate:'2022-01-15',confirmationDate:'2022-04-15',contractType:'Unlimited',workLocation:'Doha Head Office'},
        compensation:{basicSalary:8000,housingAllowance:2000,transportAllowance:500,foodAllowance:300,phoneAllowance:100,otherAllowances:0,totalMonthlySalary:0,bankName:'QNB',accountNumber:'1234567890',iban:'QA58QNBA000000000001234567890'},
        leave:{annualLeaveEntitlement:21,annualLeaveBalance:15,annualLeaveTaken:6,sickLeaveBalance:14,sickLeaveTaken:2,emergencyLeaveBalance:3,unpaidLeaveDays:0},
        contact:{mobileQatar:'+97433456789',address:'Building 25, Street 850, Zone 55, Doha',emergencyContact:{name:'Fatima Hassan',relationship:'Wife',phone:'+97455678901'}},
        status:'Active',
        endOfService:{eligible:true,serviceYears:0,gratuityAmount:0,exitPermitRequired:true}
      }
    ];
    const enriched = sample.map(s=>({
      ...s,
      id: crypto.randomUUID(), employeeCode: this.generateEmployeeCode(), employeeType:'Permanent', createdAt:new Date().toISOString(), updatedAt:new Date().toISOString()
    })) as PermanentEmployee[];
    enriched.forEach(e=> { e.compensation.totalMonthlySalary=this.computeTotalSalary(e); e.endOfService.serviceYears=this.calculateServiceYears(e.employment.joiningDate); e.endOfService.gratuityAmount=this.calculateGratuity(e); });
    this.save(enriched);
  }
}
