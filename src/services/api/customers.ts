import type { Customer } from '../../types/customer';

export class CustomerService {
  private static STORAGE_KEY = 'nipon_customers';
  private static _seeding = false;
  private static _seedCodeCounter = 0;

  static getAll(): Customer[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) {
        if (!this._seeding) {
          this.seedInitialData();
        }
        // During seeding return the in-memory building list fallback (empty until saved)
        const interim = localStorage.getItem(this.STORAGE_KEY);
        return interim ? JSON.parse(interim) : [];
      }
      return JSON.parse(stored) as Customer[];
    } catch {
      return [];
    }
  }

  static getById(id: string): Customer | undefined {
    return this.getAll().find(c => c.id === id);
  }

  static create(data: Omit<Customer, 'id' | 'customerCode' | 'createdAt' | 'updatedAt'>): Customer {
    const customers = this.getAll();
    const newCustomer: Customer = {
      ...data,
      id: crypto.randomUUID(),
      customerCode: this.generateCustomerCode(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    } as Customer;
    customers.push(newCustomer);
    this.save(customers);
    return newCustomer;
  }

  static update(id: string, data: Partial<Customer>): Customer | undefined {
    const customers = this.getAll();
    const index = customers.findIndex(c => c.id === id);
    if (index === -1) return undefined;
    customers[index] = { ...customers[index], ...data, updatedAt: new Date().toISOString() };
    this.save(customers);
    return customers[index];
  }

  static deployEmployee(customerId: string, employeeData: any): void {
    const customer = this.getById(customerId);
    if (!customer) return;
    customer.deployment.currentEmployees.push(employeeData);
    customer.deployment.totalDeployed++;
    customer.deployment.totalActive++;
    this.update(customerId, customer);
  }

  static removeEmployee(customerId: string, employeeId: string): void {
    const customer = this.getById(customerId);
    if (!customer) return;
    const idx = customer.deployment.currentEmployees.findIndex(e => e.employeeId === employeeId);
    if (idx !== -1) {
      customer.deployment.currentEmployees[idx].status = 'Completed';
      customer.deployment.currentEmployees[idx].endDate = new Date().toISOString();
      customer.deployment.totalActive--;
    }
    this.update(customerId, customer);
  }

  static calculateMonthlyRevenue(customerId: string): number {
    const customer = this.getById(customerId);
    if (!customer) return 0;
    let revenue = 0;
    customer.deployment.currentEmployees.filter(e => e.status === 'Active').forEach(emp => {
      const rate = customer.rates.defaultRates.find(r => r.position === emp.position);
      if (rate) {
        if (rate.rateType === 'Monthly') revenue += rate.normalRate; else if (rate.rateType === 'Daily') revenue += rate.normalRate * 30; else if (rate.rateType === 'Hourly') revenue += rate.normalRate * 8 * 22; // rough
      }
    });
    return revenue;
  }

  static getTopCustomers(limit = 5): Customer[] {
    return this.getAll().sort((a,b) => b.financial.totalRevenue - a.financial.totalRevenue).slice(0, limit);
  }

  static getExpiringContracts(days = 30): Customer[] {
    const cutoff = new Date(); cutoff.setDate(cutoff.getDate()+days);
    return this.getAll().filter(c => c.contract.endDate && new Date(c.contract.endDate) <= cutoff && new Date(c.contract.endDate) >= new Date());
  }

  private static generateCustomerCode(): string {
    const year = new Date().getFullYear();
    if (this._seeding) {
      this._seedCodeCounter += 1;
      return `CUS-${year}-${String(this._seedCodeCounter).padStart(4,'0')}`;
    }
    const count = this.getAll().filter(c => c.customerCode.startsWith(`CUS-${year}`)).length + 1;
    return `CUS-${year}-${String(count).padStart(4,'0')}`;
  }

  private static save(customers: Customer[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(customers));
  }

  private static seedInitialData(): void {
    if (this._seeding) return; // prevent re-entry
    this._seeding = true;
    this._seedCodeCounter = 0;
    const sample: any[] = [
      {
        companyInfo: { name: 'Qatar Petroleum', nameArabic: 'قطر للبترول', tradeLicenseNumber: 'TL123456', registrationNumber: 'CR123456', taxNumber: 'TAX123456', industry: 'Oil & Gas', type: 'Government', website: 'www.qp.com.qa' },
        contact: { address: 'P.O. Box 3212, West Bay, Doha, Qatar', city: 'Doha', country: 'Qatar', phone: '+974 4444 1111', email: 'contracts@qp.com.qa' },
        primaryContact: { name: 'Abdullah Al-Thani', nameArabic: 'عبدالله الثاني', position: 'Procurement Manager', mobile: '+974 5555 1234', email: 'abdullah.thani@qp.com.qa' },
        contract: { contractNumber: 'QP-2024-MC-001', startDate: '2024-01-01', endDate: '2026-12-31', type: 'Master Agreement', status: 'Active', creditLimit: 500000, paymentTerms: '30 Days' },
        billing: { vatRegistered: true, vatNumber: 'VAT123456789', currency: 'QAR', invoiceFrequency: 'Monthly' },
        requirements: { manpowerTypes: ['Engineers','Technicians','Safety Officers','Laborers'], locations: ['Ras Laffan','Dukhan','Mesaieed'], minimumWorkers: 50, maximumWorkers: 200, safetyTrainingRequired: true, medicalRequired: true, transportProvided: true, accommodationProvided: false },
        rates: { defaultRates: [ { position:'Engineer', rateType:'Daily', normalRate:350, overtimeRate:60, holidayRate:700 }, { position:'Technician', rateType:'Daily', normalRate:250, overtimeRate:45, holidayRate:500 }, { position:'Laborer', rateType:'Daily', normalRate:150, overtimeRate:25, holidayRate:300 } ] },
        deployment: { currentEmployees: [], totalDeployed: 0, totalActive: 0 },
        financial: { totalRevenue: 2500000, currentMonthRevenue: 180000, outstandingAmount: 360000, creditUsed: 360000, paymentHistory: [] },
        documents: {},
        status: 'Active', rating: 'Excellent'
      },
      {
        companyInfo: { name: 'Ashghal Public Works Authority', nameArabic: 'هيئة الأشغال العامة', tradeLicenseNumber: 'TL789012', registrationNumber: 'CR789012', industry: 'Construction', type: 'Government', website: 'www.ashghal.gov.qa' },
        contact: { address: 'P.O. Box 22188, Doha, Qatar', city: 'Doha', country: 'Qatar', phone: '+974 4444 2222', email: 'procurement@ashghal.gov.qa' },
        primaryContact: { name: 'Mohammed Al-Kuwari', position: 'HR Manager', mobile: '+974 5555 5678', email: 'mohammed.kuwari@ashghal.gov.qa' },
        contract: { contractNumber: 'ASH-2024-001', startDate: '2024-03-01', endDate: '2025-02-28', type: 'Annual', status: 'Active', creditLimit: 300000, paymentTerms: '45 Days' },
        billing: { vatRegistered: false, currency: 'QAR', invoiceFrequency: 'Monthly' },
        requirements: { manpowerTypes: ['Civil Engineers','Surveyors','Drivers','Laborers'], locations: ['Lusail','Pearl Qatar','Doha Metro Sites'], safetyTrainingRequired: true, medicalRequired: true, transportProvided: false, accommodationProvided: false },
        rates: { defaultRates: [ { position:'Civil Engineer', rateType:'Monthly', normalRate:12000, overtimeRate:70 }, { position:'Surveyor', rateType:'Monthly', normalRate:8000, overtimeRate:50 }, { position:'Driver', rateType:'Daily', normalRate:180, overtimeRate:30 } ] },
        deployment: { currentEmployees: [], totalDeployed: 0, totalActive: 0 },
        financial: { totalRevenue: 1800000, currentMonthRevenue: 120000, outstandingAmount: 240000, creditUsed: 240000, paymentHistory: [] },
        documents: {},
        status: 'Active', rating: 'Good'
      }
    ];

    const customers: Customer[] = sample.map(s => ({
      ...s,
      id: crypto.randomUUID(),
      customerCode: this.generateCustomerCode(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      createdBy: 'admin@niponpayroll.qa',
      lastModifiedBy: 'admin@niponpayroll.qa'
    }));
    this.save(customers);
    this._seeding = false;
  }
}
