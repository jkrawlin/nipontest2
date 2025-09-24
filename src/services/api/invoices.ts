import { CustomerService } from './customers';
import type { CustomerInvoice, CustomerInvoiceLine, Customer } from '../../types/customer';

interface DraftInvoiceOptions {
  customerId: string;
  periodStart: string;
  periodEnd: string;
  includeInactive?: boolean;
}

export class InvoiceService {
  private static STORAGE_KEY = 'nipon_customer_invoices';

  static getAll(): CustomerInvoice[] {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  static getByCustomer(customerId: string): CustomerInvoice[] {
    return this.getAll().filter(i => i.customerId === customerId);
  }

  static createDraft(options: DraftInvoiceOptions): CustomerInvoice | undefined {
    const customer = CustomerService.getById(options.customerId);
    if (!customer) return undefined;

    const activeDeployments = customer.deployment.currentEmployees.filter(emp => options.includeInactive || emp.status === 'Active');
    const lines: CustomerInvoiceLine[] = [];
    activeDeployments.forEach(emp => {
      const rate = customer.rates.defaultRates.find(r => r.position === emp.position);
      if (rate) {
        let quantity = 1; // monthly default
        let unitRate = rate.normalRate;
        if (rate.rateType === 'Daily') {
          quantity = 30; // assume 30 days
        } else if (rate.rateType === 'Hourly') {
          quantity = 8 * 22; // working hours
        }
        const amount = quantity * unitRate;
        lines.push({ description: `${emp.position} - ${rate.rateType}`, position: emp.position, quantity, unitRate, amount });
      }
    });

    const subtotal = lines.reduce((s,l)=> s + l.amount, 0);
    const vatApplicable = customer.billing.vatRegistered;
    const vatAmount = vatApplicable ? subtotal * 0.05 : 0;
    const total = subtotal + vatAmount;
    const now = new Date();
    const invoice: CustomerInvoice = {
      id: crypto.randomUUID(),
      invoiceNumber: this.generateInvoiceNumber(),
      customerId: customer.id,
      periodStart: options.periodStart,
      periodEnd: options.periodEnd,
      issueDate: now.toISOString(),
      dueDate: new Date(now.getTime() + 1000*60*60*24*30).toISOString(),
      currency: customer.billing.currency,
      lines,
      subtotal,
      vatAmount,
      total,
      status: 'Draft',
      createdAt: now.toISOString()
    };
    const all = this.getAll();
    all.push(invoice);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(all));
    CustomerService.update(customer.id, {
      billing: { ...customer.billing, lastInvoiceDate: now.toISOString(), lastInvoiceAmount: total },
      financial: { ...customer.financial, totalRevenue: customer.financial.totalRevenue + total, currentMonthRevenue: customer.financial.currentMonthRevenue + total }
    } as Partial<Customer>);
    return invoice;
  }

  private static generateInvoiceNumber(): string {
    const year = new Date().getFullYear();
    const count = this.getAll().filter(i => i.invoiceNumber.startsWith(`INV-${year}`)).length + 1;
    return `INV-${year}-${String(count).padStart(4,'0')}`;
  }
}
