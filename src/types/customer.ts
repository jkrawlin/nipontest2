// SIMPLIFIED Customer model – only core business contact & status
export interface Customer {
  id: string;
  code: string; // CUS-001
  name: string;
  contactPerson: string;
  mobile: string;
  email: string;
  address: string;
  status: 'Active' | 'Inactive';
}

