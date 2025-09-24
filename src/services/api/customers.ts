// Shim for legacy import path -> simplified customer service
import { CustomerService as CoreCustomerService } from '../../services/customerService';
import type { Customer } from '../../types/customer';

export const CustomerService = {
  getAll(): Customer[] { return CoreCustomerService.getAll(); },
  getById(id: string): Customer | undefined { return CoreCustomerService.getAll().find(c=> c.id===id); }
};
