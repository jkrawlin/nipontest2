import { jsPDF } from 'jspdf';
import { PayslipService } from '../api/payslips';
import { PayrollService } from '../api/payroll';

export async function generateBatchPayslipPDF(batchId: string) {
  const batch = PayrollService.getById(batchId);
  if (!batch) throw new Error('Batch not found');
  const slips = PayslipService.list(batchId);
  if (!slips.length) throw new Error('No payslips generated');
  const doc = new jsPDF();
  slips.forEach((p, idx) => {
    if (idx>0) doc.addPage();
    const isTemp = p.employeeType === 'Temporary';
    doc.setFontSize(14);
    doc.text(`${isTemp ? 'TEMPORARY' : 'PERMANENT'} PAYSLIP`, 14, 16);
    doc.setFontSize(10);
    doc.text(`Employee: ${p.employeeName} (${p.employeeId})`, 14, 26);
    doc.text(`Period: ${p.period.month}/${p.period.year}`, 14, 32);
    doc.text(`Type: ${p.employeeType || 'N/A'}`, 14, 38);
    let y = 48;
    doc.setFontSize(11);
    doc.text('Earnings / Deductions', 14, y); y += 6;
    doc.setFontSize(9);
    const lines = p.lines.filter(l => l.amount !== 0);
    lines.forEach(l => {
      doc.text(l.code, 14, y);
      doc.text(l.description, 30, y);
      const amt = l.type === 'deduction' ? `- ${l.amount.toFixed(2)}` : l.amount.toFixed(2);
      doc.text(amt, 170, y, { align: 'right' });
      y += 5;
      if (y > 270) { doc.addPage(); y = 20; }
    });
    y += 4;
    doc.setFontSize(10);
    doc.text(`Gross: ${p.gross.toFixed(2)}`, 14, y); y +=5;
    doc.text(`Deductions: ${p.deductions.toFixed(2)}`, 14, y); y +=5;
    doc.text(`Net Pay: ${p.net.toFixed(2)}`, 14, y);
    if (isTemp) {
      y += 8;
      doc.setFontSize(8);
      doc.text('Temporary payslip: consolidated earning reflects approved timesheet & allowances.', 14, y);
    }
  });
  doc.save(`Payslips-${batch.month}-${batch.year}.pdf`);
}
