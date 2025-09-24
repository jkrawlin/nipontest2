import { PayrollService } from '../api/payroll';
import { EmployeeService } from '../api/employees';
import type { Employee } from '../../types/employee';

// Simplified Qatar WPS report generator (SIF-like skeleton)
// Future: conform exactly to Qatari MOL specifications (record types 1/2/3, fixed-width, checksum)
export interface WPSRecord {
  employeeId: string;
  employeeName: string;
  bank: string;
  account: string;
  iban: string;
  basic: number;
  allowances: number;
  deductions: number;
  net: number;
}

export interface WPSReport {
  batchId: string;
  period: { month: number; year: number };
  records: WPSRecord[];
  totalNet: number;
  generatedAt: Date;
}

export const WPSReportService = {
  async generate(batchId: string): Promise<WPSReport> {
    const batch = PayrollService.getById(batchId);
    if (!batch || !batch.calculations) throw new Error('Batch not found or incomplete');
    const employeeResp = await EmployeeService.list({ pageSize: 500 });
    const employees = new Map<string, Employee>(employeeResp.employees.map(e => [e.id, e]));

    const records: WPSRecord[] = batch.calculations.map(c => {
      const emp = employees.get(c.employeeId);
      const allowancesBase = (c.housing + c.transport + (c.other||0));
      const adjustmentPositives = (c.adjustmentsTotal && c.adjustmentsTotal > 0 ? c.adjustmentsTotal : 0) || 0;
      const adjustmentNegatives = (c.adjustmentsTotal && c.adjustmentsTotal < 0 ? Math.abs(c.adjustmentsTotal) : 0) || 0;
      return {
        employeeId: c.employeeId,
        employeeName: c.employeeName,
        bank: emp?.compensation.bankName || '',
        account: emp?.compensation.accountNumber || '',
        iban: emp?.compensation.iban || '',
        basic: c.basic,
        allowances: allowancesBase + c.overtime + adjustmentPositives,
        deductions: c.deductions + adjustmentNegatives,
        net: c.net
      };
    });

    return {
      batchId: batch.id!,
      period: { month: batch.month, year: batch.year },
      records,
      totalNet: records.reduce((s,r)=> s + r.net, 0),
      generatedAt: new Date()
    };
  },
  async exportCSV(batchId: string): Promise<string> {
    const report = await this.generate(batchId);
    const header = 'EmployeeID,EmployeeName,Bank,Account,IBAN,Basic,Allowances,Deductions,Net';
    const rows = report.records.map(r => [r.employeeId,r.employeeName,r.bank,r.account,r.iban,r.basic,r.allowances,r.deductions,r.net].join(','));
    return [header, ...rows].join('\n');
  }
};
