import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PayrollService } from '../../services/api/payroll';
import { EmployeeService } from '../../services/api/employees';
import { PayslipService } from '../../services/api/payslips';
import type { Payslip } from '../../types/payslip';
import { WPSReportService } from '../../services/reports/wps';
import { PayslipPDFExporter } from '../../services/export/payslipPdf';

function useQuery() { const { search } = useLocation(); return useMemo(() => new URLSearchParams(search), [search]); }

export const PayslipsPage: React.FC = () => {
	const q = useQuery();
	const navigate = useNavigate();
	const batchId = q.get('batch') || '';
		const [payslips, setPayslips] = useState<Payslip[]>([]);
		const [search, setSearch] = useState('');
		const [department, setDepartment] = useState('');
		const [departments, setDepartments] = useState<string[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [selected, setSelected] = useState<Payslip | null>(null);

		useEffect(() => {
		if (!batchId) return;
		try {
			// generate if not already
			const batch = PayrollService.getById(batchId);
			if (!batch) { setError('Batch not found'); return; }
			if (!PayslipService.list(batchId).length && batch.calculations?.length) {
				PayslipService.generateForBatch(batchId);
			}
					setPayslips([...PayslipService.list(batchId)]);
		} catch (e:any) { setError(e.message); }
	}, [batchId]);

		useEffect(() => { (async () => {
			const emps = await EmployeeService.getActiveEmployees();
			setDepartments(Array.from(new Set(emps.map(e => e.employment.department))).sort());
		})(); }, []);

	const handleCSV = () => {
		if (!batchId) return;
		const csv = PayslipService.exportCSV(batchId);
		const blob = new Blob([csv], { type: 'text/csv' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url; a.download = `Payslips-${batchId}.csv`; a.click();
		URL.revokeObjectURL(url);
	};
	const handleWPS = async () => {
		if (!batchId) return;
		const csv = await WPSReportService.exportCSV(batchId);
		const blob = new Blob([csv], { type: 'text/csv' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url; a.download = `WPS-${batchId}.csv`; a.click();
		URL.revokeObjectURL(url);
	};

	const handleBatchPDF = () => {
		if (!batchId) return;
		try { PayslipPDFExporter.exportBatch(batchId); } catch(e:any){ setError(e.message); }
	};

	const handleSinglePDF = () => {
		if (selected) {
			try { PayslipPDFExporter.exportSingle(selected); } catch(e:any){ setError(e.message); }
		}
	};

	const batches = PayrollService.list().filter(b => b.status !== 'draft');

	return (
		<div className="p-6 space-y-6">
			<div className="flex flex-wrap items-center gap-4">
				<h1 className="text-xl font-semibold">Payslips</h1>
				<select value={batchId} onChange={e=> navigate(`/payroll/payslips?batch=${e.target.value}`)} className="border rounded px-2 py-1 text-sm">
					<option value="">Select batch...</option>
					{batches.map(b => <option key={b.id} value={b.id}>{b.month}/{b.year} - {b.status}</option>)}
				</select>
				{batchId && (
					<>
						<button onClick={handleCSV} className="px-3 py-1.5 text-xs rounded bg-blue-600 text-white">Export Payslips CSV</button>
						<button onClick={handleWPS} className="px-3 py-1.5 text-xs rounded bg-indigo-600 text-white">Export WPS CSV</button>
						<button onClick={handleBatchPDF} className="px-3 py-1.5 text-xs rounded bg-emerald-600 text-white">Export Payslips PDF</button>
					</>
				)}
			</div>
			{!batchId && <div className="text-sm text-gray-600">Select a processed batch to view payslips.</div>}
			{error && <div className="text-sm text-red-600">{error}</div>}
					{batchId && !error && (
						<div className="space-y-3">
								{PayslipService.isOutdated(batchId) && (
									<div className="text-xs bg-amber-50 border border-amber-300 text-amber-800 px-3 py-2 rounded flex items-center justify-between">
										<span>Payslips are outdated due to calculation/adjustment changes. Regenerate to refresh.</span>
										<button className="text-xs font-medium underline" onClick={()=> { PayslipService.clearBatch(batchId); PayslipService.generateForBatch(batchId); setPayslips([...PayslipService.list(batchId)]); }}>Regenerate</button>
									</div>
								)}
							<div className="flex flex-wrap gap-3 items-end">
								<div>
									<label className="block text-[11px] font-medium mb-1">Search</label>
									<input value={search} onChange={e=> setSearch(e.target.value)} placeholder="Employee name..." className="border rounded px-2 py-1 text-sm" />
								</div>
								<div>
									<label className="block text-[11px] font-medium mb-1">Department</label>
									<select value={department} onChange={e=> setDepartment(e.target.value)} className="border rounded px-2 py-1 text-sm">
										<option value="">All</option>
										{departments.map(d => <option key={d} value={d}>{d}</option>)}
									</select>
								</div>
							</div>
				<div className="overflow-x-auto border rounded bg-white">
					<table className="min-w-full text-sm">
						<thead className="bg-gray-50">
							<tr>
								<th className="px-3 py-2 text-left">Employee</th>
								<th className="px-3 py-2 text-right">Gross</th>
								<th className="px-3 py-2 text-right">Deductions</th>
								<th className="px-3 py-2 text-right">Net</th>
								<th className="px-3 py-2"></th>
							</tr>
						</thead>
						<tbody>
											{payslips
												.filter(p => !search || p.employeeName.toLowerCase().includes(search.toLowerCase()))
												.filter(p => !department || (EmployeeService as any)._EMPLOYEE_MEM?.get?.(p.employeeId)?.employment?.department === department)
												.map(p => (
								<tr key={p.id} className="border-b last:border-0">
									<td className="px-3 py-2 font-medium">{p.employeeName}</td>
									<td className="px-3 py-2 text-right">{p.gross.toFixed(2)}</td>
									<td className="px-3 py-2 text-right text-red-600">{p.deductions.toFixed(2)}</td>
									<td className="px-3 py-2 text-right font-semibold text-green-600">{p.net.toFixed(2)}</td>
									<td className="px-3 py-2 text-right"><button className="text-blue-600 text-xs hover:underline" onClick={()=> setSelected(p)}>View</button></td>
								</tr>
							))}
											{payslips.length === 0 && (
								<tr><td colSpan={5} className="px-3 py-6 text-center text-gray-500">No payslips generated.</td></tr>
							)}
						</tbody>
					</table>
				</div>
								</div>
			)}
			{selected && (
				<div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50" onClick={()=> setSelected(null)}>
					<div className="bg-white rounded shadow max-w-lg w-full" onClick={e=> e.stopPropagation()}>
						<div className="p-4 border-b flex justify-between items-center">
							<h2 className="font-semibold text-sm">Payslip: {selected.employeeName}</h2>
							<div className="flex items-center gap-2">
								<button onClick={handleSinglePDF} className="text-xs px-2 py-1 rounded bg-emerald-600 text-white">PDF</button>
								<button onClick={()=> setSelected(null)} className="text-xs">Close</button>
							</div>
						</div>
						<div className="p-4 max-h-[60vh] overflow-auto text-xs space-y-4">
							<div className="grid grid-cols-2 gap-y-1">
								<span className="text-gray-500">Batch:</span><span>{selected.batchId}</span>
								<span className="text-gray-500">Period:</span><span>{selected.period.month}/{selected.period.year}</span>
								<span className="text-gray-500">Generated:</span><span>{typeof selected.generatedAt === 'string' ? selected.generatedAt : selected.generatedAt.toLocaleString()}</span>
							</div>
							<table className="w-full text-xs border">
								<thead className="bg-gray-50">
									<tr>
										<th className="px-2 py-1 text-left">Code</th>
										<th className="px-2 py-1 text-left">Description</th>
										<th className="px-2 py-1 text-right">Type</th>
										<th className="px-2 py-1 text-right">Amount</th>
									</tr>
								</thead>
								<tbody>
									{selected.lines.map(l => (
										<tr key={l.code + l.description + l.amount} className="border-b last:border-0">
											<td className="px-2 py-1 font-mono text-[11px]">{l.code}</td>
											<td className="px-2 py-1">{l.description}</td>
											<td className="px-2 py-1 text-right capitalize {l.type==='deduction'?'text-red-600':''}">{l.type}</td>
											<td className={`px-2 py-1 text-right ${l.type==='deduction'?'text-red-600':'text-gray-700'}`}>{l.type==='deduction' && '-'}{l.amount.toFixed(2)}</td>
										</tr>
									))}
								</tbody>
								<tfoot className="bg-gray-50 font-medium">
									<tr>
										<td className="px-2 py-1" colSpan={3}>Gross</td>
										<td className="px-2 py-1 text-right">{selected.gross.toFixed(2)}</td>
									</tr>
									<tr>
										<td className="px-2 py-1" colSpan={3}>Deductions</td>
										<td className="px-2 py-1 text-right text-red-600">{selected.deductions.toFixed(2)}</td>
									</tr>
									<tr>
										<td className="px-2 py-1" colSpan={3}>Net</td>
										<td className="px-2 py-1 text-right font-semibold text-green-600">{selected.net.toFixed(2)}</td>
									</tr>
								</tfoot>
							</table>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default PayslipsPage;
