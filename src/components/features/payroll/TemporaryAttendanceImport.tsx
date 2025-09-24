import React, { useState } from 'react';
import { TemporaryEmployeeService } from '../../../services/api/temporaryEmployees';
import { PayrollService } from '../../../services/api/payroll';

interface ParsedRow { employeeCode: string; date: string; hours: number; overtime: number; weekend?: boolean; holiday?: boolean; }
interface Props { batchId: string; }

function parseCSV(text: string): { rows: ParsedRow[]; invalid: number; warnings: number } {
  const lines = text.trim().split(/\r?\n/).filter(l=>l.trim().length>0);
  if (!lines.length) return { rows: [], invalid: 0, warnings: 0 };
  const [header, ...rowsRaw] = lines;
  const cols = header.split(',').map(c=>c.trim().toLowerCase());
  const idx = {
    code: cols.indexOf('employeecode'),
    date: cols.indexOf('date'),
    hours: cols.indexOf('hours'),
    overtime: cols.indexOf('overtime'),
    weekend: cols.indexOf('weekend'),
    holiday: cols.indexOf('holiday')
  };
  if (idx.code===-1 || idx.date===-1) return { rows: [], invalid: rowsRaw.length, warnings: 0 };
  let invalid = 0; let warnings = 0;
  const out: ParsedRow[] = [];
  rowsRaw.forEach(r => {
    const parts = r.split(',');
    const employeeCode = (parts[idx.code]||'').trim();
    const dateStr = (parts[idx.date]||'').trim();
    const date = new Date(dateStr);
    if (!employeeCode || isNaN(date.getTime())) { invalid++; return; }
    const hours = parseFloat(parts[idx.hours]||'0');
    const overtime = parseFloat(parts[idx.overtime]||'0');
    if (hours < 0 || overtime < 0) { invalid++; return; }
    const weekend = idx.weekend!==-1 ? /(y|yes|true|1)/i.test((parts[idx.weekend]||'')) : false;
    const holiday = idx.holiday!==-1 ? /(y|yes|true|1)/i.test((parts[idx.holiday]||'')) : false;
    if (weekend && holiday) warnings++; // conflicting flags
    out.push({ employeeCode, date: date.toISOString().slice(0,10), hours, overtime, weekend, holiday });
  });
  return { rows: out, invalid, warnings };
}

function aggregate(rows: ParsedRow[]) {
  const byEmp: Record<string,{ days:Set<string>; totalHours:number; overtime:number; weekendOT:number; holidayOT:number; }> = {};
  rows.forEach(r => {
    if (!byEmp[r.employeeCode]) byEmp[r.employeeCode] = { days:new Set(), totalHours:0, overtime:0, weekendOT:0, holidayOT:0 };
    const bucket = byEmp[r.employeeCode];
    bucket.days.add(r.date);
    bucket.totalHours += r.hours;
    bucket.overtime += r.overtime;
    if (r.weekend) bucket.weekendOT += r.overtime; else if (r.holiday) bucket.holidayOT += r.overtime;
  });
  return byEmp;
}

export const TemporaryAttendanceImport: React.FC<Props> = ({ batchId }) => {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [includeUnknown, setIncludeUnknown] = useState(false);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(null); setError(null);
    const file = e.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    const { rows, invalid, warnings } = parseCSV(text);
    if (rows.length===0) { setError('No valid rows parsed. Required columns: employeeCode,date.'); return; }
    const temps = TemporaryEmployeeService.getAll();
    const codeSet = new Set(temps.map(t=>t.employeeCode));
    const filtered = rows.filter(r => codeSet.has(r.employeeCode) || includeUnknown);
    const aggregated = aggregate(filtered);
    let updated = 0;
    temps.forEach(t => {
      const agg = aggregated[t.employeeCode];
      if (agg) {
        t.attendance = {
          totalDaysWorked: agg.days.size,
          totalHoursWorked: agg.totalHours,
          overtimeHours: agg.overtime
        } as any;
        updated++;
      }
    });
    try { localStorage.setItem('nipon_temporary_employees', JSON.stringify(temps)); } catch {}
    PayrollService.addAttendanceImportAudit(batchId, { fileName: file.name, updated, invalid, warnings });
    setStatus(`Updated ${updated} temps. Invalid rows: ${invalid}${warnings ? `, warnings: ${warnings}`: ''}`);
  };

  return (
    <div className="border rounded p-4 space-y-3 bg-white">
      <h3 className="text-sm font-semibold">Temporary Attendance Import</h3>
      <p className="text-xs text-gray-600">CSV columns: employeeCode,date,hours,overtime,(optional weekend,holiday). Invalid rows skipped.</p>
      <div className="flex items-center gap-2 text-[11px]"><input type="checkbox" id="includeUnknown" checked={includeUnknown} onChange={e=> setIncludeUnknown(e.target.checked)} /><label htmlFor="includeUnknown">Allow unknown employee codes (ignored for update)</label></div>
      <input type="file" accept=".csv,text/csv" onChange={handleFile} className="text-xs" />
      {status && <div className="text-xs text-green-600">{status}</div>}
      {error && <div className="text-xs text-red-600">{error}</div>}
    </div>
  );
};
export default TemporaryAttendanceImport;