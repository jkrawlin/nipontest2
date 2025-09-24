import jsPDF from 'jspdf';
import type { Payslip, PayslipLine } from '../../types/payslip';
import { PayslipService } from '../api/payslips';

/** Utility responsible for producing PDF representations of payslips.
 *  Keeps layout intentionally simple (text grid) to avoid heavy dependencies.
 *  Future enhancement: brand styling, Arabic support, company metadata, signature blocks.
 */
export class PayslipPDFExporter {
  static PAGE_MARGIN_X = 14;
  static PAGE_MARGIN_TOP = 16;
  static LINE_HEIGHT = 6;
  static FONT_SIZE_BASE = 10;

  /** Export a single payslip as an on-demand PDF download */
  static exportSingle(p: Payslip) {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    this.drawPayslip(doc, p, 1, 1);
    doc.save(`Payslip-${p.employeeName.replace(/\s+/g,'_')}-${p.period.month}-${p.period.year}.pdf`);
  }

  /** Export all payslips for a batch in a single PDF (one per page) */
  static exportBatch(batchId: string) {
    const payslips = PayslipService.list(batchId);
    if (!payslips.length) throw new Error('No payslips to export');
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    payslips.forEach((p, idx) => {
      if (idx > 0) doc.addPage();
      this.drawPayslip(doc, p, idx + 1, payslips.length);
    });
    // Use batch period from first payslip
    const first = payslips[0];
    doc.save(`Payslips-Batch-${batchId}-${first.period.month}-${first.period.year}.pdf`);
  }

  /** Core drawing routine */
  private static drawPayslip(doc: jsPDF, p: Payslip, page: number, totalPages: number) {
    doc.setFont('helvetica','bold');
    doc.setFontSize(14);
    doc.text('PAYSLIP', this.PAGE_MARGIN_X, this.PAGE_MARGIN_TOP);
    doc.setFontSize(8);
    doc.setFont('helvetica','normal');
    doc.text(`Generated: ${typeof p.generatedAt === 'string' ? p.generatedAt : p.generatedAt.toLocaleString()}`, this.PAGE_MARGIN_X, this.PAGE_MARGIN_TOP + 5);

    // Employee / period block
    let y = this.PAGE_MARGIN_TOP + 14;
    doc.setFontSize(this.FONT_SIZE_BASE);
    doc.setFont('helvetica','bold');
    doc.text(p.employeeName, this.PAGE_MARGIN_X, y);
    doc.setFont('helvetica','normal');
    y += this.LINE_HEIGHT;
    doc.text(`Employee ID: ${p.employeeId}`, this.PAGE_MARGIN_X, y);
    y += this.LINE_HEIGHT;
    doc.text(`Batch / Period: ${p.batchId}  (${p.period.month}/${p.period.year})`, this.PAGE_MARGIN_X, y);
    y += this.LINE_HEIGHT;

    // Monetary summary
    doc.setFont('helvetica','bold');
    doc.text(`Gross: ${p.gross.toFixed(2)}`, this.PAGE_MARGIN_X, y);
    doc.setFont('helvetica','normal');
    doc.text(`Deductions: ${p.deductions.toFixed(2)}`, this.PAGE_MARGIN_X + 50, y);
    doc.setFont('helvetica','bold');
    doc.text(`Net: ${p.net.toFixed(2)}`, this.PAGE_MARGIN_X + 100, y);
    y += this.LINE_HEIGHT + 2;

    // Table header
    const colX = [this.PAGE_MARGIN_X, this.PAGE_MARGIN_X + 18, this.PAGE_MARGIN_X + 96, this.PAGE_MARGIN_X + 126];
    doc.setFontSize(9);
    doc.setFont('helvetica','bold');
    doc.text('Code', colX[0], y);
    doc.text('Description', colX[1], y);
    doc.text('Type', colX[2], y, { align: 'right' });
    doc.text('Amount', colX[3], y, { align: 'right' });
    y += 2;
    doc.setDrawColor(200);
    doc.setLineWidth(0.1);
    doc.line(this.PAGE_MARGIN_X, y, 195, y);
    y += 4;

    doc.setFont('helvetica','normal');
    doc.setFontSize(8.5);
    const sorted: PayslipLine[] = [...p.lines];
    // Group earnings first then deductions
    sorted.sort((a,b)=> (a.type === b.type ? 0 : a.type === 'earning' ? -1 : 1));
    sorted.forEach(line => {
      if (y > 270) { // new page safeguard
        doc.addPage();
        page += 1;
        y = this.PAGE_MARGIN_TOP;
      }
      doc.text(line.code, colX[0], y);
      this.wrapText(doc, line.description, colX[1], y, 70, this.LINE_HEIGHT - 1, (ny) => { y = ny; });
      doc.text(line.type, colX[2], y, { align: 'right' });
      const amtStr = (line.type === 'deduction' ? '-' : '') + line.amount.toFixed(2);
      doc.text(amtStr, colX[3], y, { align: 'right' });
      y += this.LINE_HEIGHT;
    });

    // Footer summary line (restate net for quick glance)
    if (y > 250) { doc.addPage(); page += 1; y = this.PAGE_MARGIN_TOP; }
    doc.setFont('helvetica','bold');
    doc.text(`Net Pay: ${p.net.toFixed(2)}`, this.PAGE_MARGIN_X, y + 4);

    // Page number
    doc.setFontSize(7);
    doc.setFont('helvetica','normal');
    doc.text(`Page ${page} / ${totalPages}`, 200 - this.PAGE_MARGIN_X, 287, { align: 'right' });
  }

  /** Simple text wrapping helper */
  private static wrapText(doc: jsPDF, text: string, x: number, y: number, maxWidth: number, lineHeight: number, updateY: (y:number)=>void) {
    const words = text.split(/\s+/);
    let line = '';
    words.forEach((w, idx) => {
      const test = line ? line + ' ' + w : w;
      const width = doc.getTextWidth(test);
      if (width > maxWidth) {
        doc.text(line, x, y);
        y += lineHeight;
        line = w;
      } else {
        line = test;
      }
      if (idx === words.length -1) {
        doc.text(line, x, y);
      }
    });
    updateY(y);
  }
}

export default PayslipPDFExporter;
