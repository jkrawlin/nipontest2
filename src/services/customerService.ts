import type { Customer } from '../types/customer';

const __mem: Record<string,string> = {};
const safeStore = {
  get(k:string){ try { return (globalThis as any).localStorage?.getItem(k) ?? __mem[k] ?? null; } catch { return __mem[k] ?? null; } },
  set(k:string,v:string){ try { (globalThis as any).localStorage?.setItem(k,v); } catch { /* ignore */ } __mem[k]=v; }
};

export class CustomerService {
  private static KEY='customers_simple';

  static getAll(): Customer[] {
    const raw = safeStore.get(this.KEY);
    if (!raw) { const sample = this.getSampleData(); this.saveAll(sample); return sample; }
    try { return JSON.parse(raw) as Customer[]; } catch { return []; }
  }

  static save(customer: Customer) {
    const list = this.getAll();
    const idx = list.findIndex(c => c.id === customer.id);
    if (idx >= 0) list[idx] = customer; else {
      customer.id = Date.now().toString();
      customer.code = `CUS-${(list.length + 1).toString().padStart(3,'0')}`;
      list.push(customer);
    }
    this.saveAll(list);
  }

  private static saveAll(list: Customer[]) { safeStore.set(this.KEY, JSON.stringify(list)); }

  private static getSampleData(): Customer[] {
    return [
      { id:'1', code:'CUS-001', name:'Qatar Petroleum', contactPerson:'Mr. Abdullah', mobile:'+974 4444 1111', email:'contact@qp.com', address:'West Bay, Doha', status:'Active' },
      { id:'2', code:'CUS-002', name:'Ashghal', contactPerson:'Mr. Mohammed', mobile:'+974 4444 2222', email:'info@ashghal.gov.qa', address:'Doha, Qatar', status:'Active' }
    ];
  }
}

export default CustomerService;
