import React, { useState, useEffect } from 'react';
import { Decimal } from 'decimal.js';
import { useNavigate } from 'react-router-dom';
import { EmployeeService } from '../../services/api/employees';
import { PayrollService } from '../../services/api/payroll';
import { formatCurrency } from '../../lib/formatters';
import type { PayrollBatch, SalaryCalculation } from '../../types/payroll';
import { Check, Calendar, Clock, Calculator, PlusCircle, CheckCircle, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { validatePayroll } from '../../lib/payroll/validation';
import { WPSReportService } from '../../services/reports/wps';
import { PayslipService } from '../../services/api/payslips';

// UI components (lightweight local fallbacks if not present in project structure)
import { Button } from '../../components/ui/button';
// Use shared table primitives
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/table';
const TableFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => <tfoot className="bg-gray-50 font-medium">{children}</tfoot>;

// Simple card shell
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => <div className={`bg-white border rounded-lg shadow-sm ${className||''}`}>{children}</div>;
const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => <div className={className}>{children}</div>;

// Utility class join
function cn(...parts: Array<string | false | null | undefined>) { return parts.filter(Boolean).join(' '); }

interface StepComponentProps { onNext: (data?: any) => void; onBack?: () => void; payrollData: PayrollBatch; setPayrollData: React.Dispatch<React.SetStateAction<PayrollBatch>>; }

const PeriodSelectionStep: React.FC<StepComponentProps> = ({ onNext, payrollData, setPayrollData }) => {
	return (
		<div className="space-y-4">
			<h3 className="text-lg font-semibold">Select Period</h3>
			<div className="flex gap-4">
				<div>
					<label className="text-xs font-medium">Month</label>
					<select
						value={payrollData.month}
						onChange={e => setPayrollData(p => ({ ...p, month: parseInt(e.target.value,10) }))}
						className="border rounded px-2 py-1 text-sm"
					>
						{Array.from({ length: 12 }, (_, i) => i + 1).map(m => <option key={m} value={m}>{m}</option>)}
					</select>
				</div>
				<div>
					<label className="text-xs font-medium">Year</label>
						<input
							type="number"
							value={payrollData.year}
							onChange={e => setPayrollData(p => ({ ...p, year: parseInt(e.target.value,10) }))}
							className="border rounded px-2 py-1 text-sm w-28"
						/>
				</div>
			</div>
			<div className="pt-4 flex justify-end">
				<Button onClick={() => onNext()}>Continue <ChevronRight className="ml-1 h-4 w-4"/></Button>
			</div>
		</div>
	);
};

const AttendanceReviewStep: React.FC<StepComponentProps> = ({ onNext, onBack, payrollData, setPayrollData }) => {
	const [rows, setRows] = useState<Array<{ id: string; name: string; presentDays: number; absentDays: number; overtimeHours: number }>>([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => { (async () => {
		const emps = await EmployeeService.getActiveEmployees();
		const mapped = emps.map(e => ({
			id: e.id,
			name: `${e.personalInfo.firstName} ${e.personalInfo.lastName}`,
			presentDays: payrollData.attendance?.[e.id]?.presentDays ?? 30,
			absentDays: payrollData.attendance?.[e.id]?.absentDays ?? 0,
			overtimeHours: payrollData.attendance?.[e.id]?.overtimeHours ?? 0
		}));
		setRows(mapped);
		setLoading(false);
	})(); }, []);

	const updateCell = (id: string, field: 'presentDays' | 'absentDays' | 'overtimeHours', value: number) => {
		setRows(r => r.map(row => row.id === id ? { ...row, [field]: value } : row));
	};

	const handleContinue = () => {
		const attendance: any = {};
		rows.forEach(r => { attendance[r.id] = { presentDays: r.presentDays, absentDays: r.absentDays, overtimeHours: r.overtimeHours }; });
		setPayrollData(p => ({ ...p, attendance }));
		onNext({ attendance });
	};
	return (
		<div className="space-y-4">
			<h3 className="text-lg font-semibold">Review Attendance</h3>
			{loading ? <div className="text-sm text-gray-500">Loading employees…</div> : (
				<div className="overflow-x-auto border rounded">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Employee</TableHead>
								<TableHead className="text-center">Present Days</TableHead>
								<TableHead className="text-center">Absent Days</TableHead>
								<TableHead className="text-center">Overtime Hrs</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{rows.map(r => (
								<TableRow key={r.id}>
									<TableCell className="font-medium whitespace-nowrap">{r.name}</TableCell>
									<TableCell className="text-center"><input type="number" min={0} max={31} value={r.presentDays} onChange={e => updateCell(r.id,'presentDays', parseInt(e.target.value||'0',10))} className="w-20 border rounded px-1 py-0.5 text-sm text-center"/></TableCell>
									<TableCell className="text-center"><input type="number" min={0} max={31} value={r.absentDays} onChange={e => updateCell(r.id,'absentDays', parseInt(e.target.value||'0',10))} className="w-20 border rounded px-1 py-0.5 text-sm text-center"/></TableCell>
									<TableCell className="text-center"><input type="number" min={0} value={r.overtimeHours} onChange={e => updateCell(r.id,'overtimeHours', parseInt(e.target.value||'0',10))} className="w-24 border rounded px-1 py-0.5 text-sm text-center"/></TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			)}
			<div className="flex justify-between pt-4">
				<Button variant="outline" onClick={onBack}><ChevronLeft className="mr-1 h-4 w-4"/>Back</Button>
				<Button onClick={handleContinue}>Continue<ChevronRight className="ml-1 h-4 w-4"/></Button>
			</div>
		</div>
	);
};

interface SalaryCalculationStepProps { payrollData: PayrollBatch; onNext: (data: { calculations: SalaryCalculation[] }) => void; onBack: () => void; }
const SalaryCalculationStep: React.FC<SalaryCalculationStepProps> = ({ payrollData, onNext, onBack }) => {
	const [calculations, setCalculations] = useState<SalaryCalculation[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => { void calculateSalaries(); // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const calculateSalaries = async () => {
		setLoading(true);
		const employees = await EmployeeService.getActiveEmployees();
		const calcs: SalaryCalculation[] = employees.map(emp => {
			const workingDays = payrollData.attendance?.[emp.id]?.presentDays || 30;
			const dailyRate = new Decimal(emp.compensation.basicSalary).div(30);
			const basic = dailyRate.mul(workingDays);
			const housing = new Decimal(emp.compensation.housingAllowance || 0);
			const transport = new Decimal(emp.compensation.transportAllowance || 0);
			const other = new Decimal(emp.compensation.otherAllowances || 0);
			const overtimeHours = payrollData.attendance?.[emp.id]?.overtimeHours || 0;
			const hourlyRate = dailyRate.div(8);
			const overtime = hourlyRate.mul(1.25).mul(overtimeHours); // basic normal OT multiplier (extend for Friday/holiday rules later)
			const gross = basic.plus(housing).plus(transport).plus(other).plus(overtime);
			const absenceDays = payrollData.attendance?.[emp.id]?.absentDays || 0;
			const absenceDeduction = dailyRate.mul(absenceDays);
			const unpaidLeave = dailyRate.mul(emp.leave.unpaidLeaveDays || 0);
			const totalDeductions = absenceDeduction.plus(unpaidLeave);
			const net = gross.minus(totalDeductions);
			return {
				employeeId: emp.id,
				employeeName: `${emp.personalInfo.firstName} ${emp.personalInfo.lastName}`,
				workingDays,
				basic: basic.toNumber(),
				housing: housing.toNumber(),
				transport: transport.toNumber(),
				other: other.toNumber(),
				overtime: overtime.toNumber(),
				gross: gross.toNumber(),
				deductions: totalDeductions.toNumber(),
				net: net.toNumber()
			};
		});
		setCalculations(calcs);
		setLoading(false);
	};

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h3 className="text-lg font-semibold">Salary Calculations</h3>
				<span className="text-xs bg-gray-100 px-2 py-1 rounded">{payrollData.month}/{payrollData.year}</span>
			</div>
			{loading ? (
				<div className="py-10 text-center text-sm text-gray-500">Calculating…</div>
			) : (
				<div className="overflow-x-auto border rounded">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Employee</TableHead>
								<TableHead className="text-center">Days</TableHead>
								<TableHead className="text-right">Basic</TableHead>
								<TableHead className="text-right">Housing</TableHead>
								<TableHead className="text-right">Transport</TableHead>
								<TableHead className="text-right">Overtime</TableHead>
								<TableHead className="text-right">Gross</TableHead>
								<TableHead className="text-right">Deductions</TableHead>
								<TableHead className="text-right">Net</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{calculations.map(c => (
								<TableRow key={c.employeeId}>
									<TableCell className="font-medium">{c.employeeName}</TableCell>
									<TableCell className="text-center">{c.workingDays}</TableCell>
									<TableCell className="text-right">{formatCurrency(c.basic)}</TableCell>
									<TableCell className="text-right">{formatCurrency(c.housing)}</TableCell>
									<TableCell className="text-right">{formatCurrency(c.transport)}</TableCell>
									<TableCell className="text-right">{formatCurrency(c.overtime)}</TableCell>
									<TableCell className="text-right font-medium">{formatCurrency(c.gross)}</TableCell>
									<TableCell className="text-right text-red-600">{c.deductions>0 && '-'}{formatCurrency(c.deductions)}</TableCell>
									<TableCell className="text-right font-semibold text-green-600">{formatCurrency(c.net)}</TableCell>
								</TableRow>
							))}
						</TableBody>
						<TableFooter>
							<TableRow>
								<TableCell colSpan={8} className="text-right font-semibold">Total Payroll:</TableCell>
								<TableCell className="text-right font-bold text-green-700">
									{formatCurrency(calculations.reduce((s,c)=> s + c.net, 0))}
								</TableCell>
							</TableRow>
						</TableFooter>
					</Table>
				</div>
			)}
			<div className="flex justify-between">
				<Button variant="outline" onClick={onBack}><ChevronLeft className="mr-1 h-4 w-4"/>Back</Button>
				<Button onClick={() => onNext({ calculations })}>Continue<ChevronRight className="ml-1 h-4 w-4"/></Button>
			</div>
		</div>
	);
};

// Adjustments Step
const adjustmentTypes = [
	{ value: 'bonus', label: 'Bonus (+)' },
	{ value: 'allowance', label: 'Allowance (+)' },
	{ value: 'overtime', label: 'Overtime (+)' },
	{ value: 'deduction', label: 'Deduction (-)' }
] as const;

const AdjustmentsStep: React.FC<StepComponentProps> = ({ onNext, onBack, payrollData, setPayrollData }) => {
	const [form, setForm] = useState({ employeeId: '', type: 'bonus', amount: '', reason: '' });
	const [editingId, setEditingId] = useState<string | null>(null);
	const employees = payrollData.calculations?.map(c => ({ id: c.employeeId, name: c.employeeName })) || [];
	const adjustments = payrollData.adjustments || [];
	const [formError, setFormError] = useState<string | null>(null);

	const addOrUpdate = () => {
		setFormError(null);
		if (!form.employeeId || !form.amount) { setFormError('Employee and amount required'); return; }
		const amount = parseFloat(form.amount);
		if (isNaN(amount) || amount <= 0) { setFormError('Enter a positive amount'); return; }
		// Inline validation rules
		const calc = payrollData.calculations?.find(c => c.employeeId === form.employeeId);
		if (!calc) { setFormError('Calculation missing for employee'); return; }
		const baseNet = calc.baseNet ?? (calc.net - (calc.adjustmentsTotal||0));
		// Predict new adjustments total
		let existingAdjTotal = calc.adjustmentsTotal || 0;
		if (editingId) {
			const prev = adjustments.find(a => a.id === editingId);
			if (prev) existingAdjTotal -= (prev.type === 'deduction' ? -prev.amount : prev.amount);
		}
		const delta = form.type === 'deduction' ? -amount : amount;
		const projectedAdjTotal = existingAdjTotal + delta;
		const projectedNet = baseNet + projectedAdjTotal;
		if (form.type === 'deduction' && amount > baseNet) { setFormError('Deduction exceeds base net pay'); return; }
		if (projectedNet < 0) { setFormError('Adjustment would result in negative net pay'); return; }
		// Soft warning on large bonus (>50% of base net)
		if ((form.type === 'bonus' || form.type === 'allowance') && amount > baseNet * 0.5) {
			// Just a warning; could convert to confirm dialog later
			console.warn('Large positive adjustment (>50% base net)');
		}
		if (editingId) {
			PayrollService.editAdjustment(payrollData.id!, editingId, { amount, reason: form.reason, type: form.type as any });
			setEditingId(null);
		} else {
			PayrollService.addAdjustment(payrollData.id!, { employeeId: form.employeeId, type: form.type as any, amount, reason: form.reason });
		}
		setPayrollData(p => ({ ...PayrollService.getById(p.id!)! }));
		setForm(f => ({ ...f, amount: '', reason: '' }));
	};
	const remove = (id: string) => { PayrollService.removeAdjustment(payrollData.id!, id); setPayrollData(p => ({ ...PayrollService.getById(p.id!)! })); };
	const startEdit = (id: string) => { const adj = adjustments.find(a => a.id === id); if (!adj) return; setEditingId(id); setForm({ employeeId: adj.employeeId, type: adj.type, amount: String(adj.amount), reason: adj.reason || '' }); };
	const cancelEdit = () => { setEditingId(null); setForm(f => ({ ...f, amount: '', reason: '' })); };

	const perEmployee = (payrollData.calculations || []).map(c => ({ id: c.employeeId, name: c.employeeName, baseNet: c.baseNet ?? c.net - (c.adjustmentsTotal || 0), adjustments: c.adjustmentsTotal || 0, net: c.net }));

	return (
		<div className="space-y-6">
			<h3 className="text-lg font-semibold">Adjustments</h3>
			<div className="grid md:grid-cols-3 gap-6">
				<div className="md:col-span-2 space-y-4">
					<div className="overflow-x-auto border rounded">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Employee</TableHead>
									<TableHead className="text-right">Base Net</TableHead>
									<TableHead className="text-right">Adj Delta</TableHead>
									<TableHead className="text-right">New Net</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{perEmployee.map(r => (
									<TableRow key={r.id}>
										<TableCell className="font-medium">{r.name}</TableCell>
										<TableCell className="text-right">{formatCurrency(r.baseNet)}</TableCell>
										<TableCell className={cn('text-right', r.adjustments >=0 ? 'text-green-600' : 'text-red-600')}>{r.adjustments>=0?'+':''}{formatCurrency(r.adjustments)}</TableCell>
										<TableCell className="text-right font-semibold">{formatCurrency(r.net)}</TableCell>
									</TableRow>
								))}
							</TableBody>
							<TableFooter>
								<TableRow>
									<TableCell colSpan={3} className="text-right font-semibold">Batch Total:</TableCell>
									<TableCell className="text-right font-bold">{formatCurrency(perEmployee.reduce((s,c)=> s + c.net,0))}</TableCell>
								</TableRow>
							</TableFooter>
						</Table>
					</div>
					<div>
						<h4 className="text-sm font-medium mb-2">Adjustment Lines</h4>
						{adjustments.length === 0 && <div className="text-xs text-gray-500 border rounded p-3">No adjustments added yet.</div>}
						{adjustments.length > 0 && (
							<div className="overflow-x-auto border rounded">
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Employee</TableHead>
											<TableHead>Type</TableHead>
											<TableHead className="text-right">Amount</TableHead>
											<TableHead>Reason</TableHead>
											<TableHead>&nbsp;</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{adjustments.map(a => {
											const emp = employees.find(e => e.id === a.employeeId); return (
												<TableRow key={a.id}>
													<TableCell>{emp?.name || a.employeeId}</TableCell>
													<TableCell className="capitalize text-xs">{a.type}</TableCell>
													<TableCell className={cn('text-right text-sm', a.type==='deduction' ? 'text-red-600' : 'text-green-600')}>{a.type==='deduction' && '-'}{formatCurrency(a.amount)}</TableCell>
													<TableCell className="text-xs max-w-[240px] truncate" title={a.reason}>{a.reason}</TableCell>
													<TableCell className="text-right space-x-2">
														<button onClick={()=>startEdit(a.id)} className="text-xs text-blue-600 hover:underline">Edit</button>
														<button onClick={()=>remove(a.id)} className="text-xs text-red-600 hover:underline">Remove</button>
													</TableCell>
												</TableRow>
											); })}
									</TableBody>
								</Table>
							</div>
						)}
					</div>
				</div>
				<div className="space-y-4">
					<div className="border rounded p-4 space-y-3 bg-gray-50">
						<h4 className="text-sm font-semibold">{editingId ? 'Edit Adjustment' : 'Add Adjustment'}</h4>
						<div className="space-y-2">
							<div>
								<label className="text-xs font-medium block mb-1">Employee</label>
								<select value={form.employeeId} onChange={e=> setForm(f => ({...f, employeeId: e.target.value}))} className="w-full border rounded px-2 py-1 text-sm">
									<option value="">Select employee...</option>
									{employees.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
								</select>
							</div>
							<div className="grid grid-cols-2 gap-2">
								<div>
									<label className="text-xs font-medium block mb-1">Type</label>
									<select value={form.type} onChange={e=> setForm(f => ({...f, type: e.target.value}))} className="w-full border rounded px-2 py-1 text-sm">
										{adjustmentTypes.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
									</select>
								</div>
								<div>
									<label className="text-xs font-medium block mb-1">Amount</label>
									<input type="number" min="0" step="0.01" value={form.amount} onChange={e=> setForm(f => ({...f, amount: e.target.value}))} className="w-full border rounded px-2 py-1 text-sm" placeholder="0.00" />
								</div>
							</div>
							<div>
								<label className="text-xs font-medium block mb-1">Reason</label>
								<input type="text" value={form.reason} onChange={e=> setForm(f => ({...f, reason: e.target.value}))} className="w-full border rounded px-2 py-1 text-sm" placeholder="Optional" />
							</div>
							<div className="flex gap-2">
								<Button type="button" onClick={addOrUpdate} className="flex-1" disabled={!form.employeeId || !form.amount}>{editingId ? 'Update' : 'Add'}</Button>
								{editingId && <Button type="button" variant="outline" onClick={cancelEdit}>Cancel</Button>}
							</div>
							{formError && <div className="text-[11px] text-red-600">{formError}</div>}
						</div>
					</div>
					<div className="text-xs text-gray-500 leading-relaxed">
						<p>Rules (future validation):</p>
						<ul className="list-disc ml-4 mt-1 space-y-1">
							<li>Deductions cannot exceed base net.</li>
							<li>Overtime may have tiered multipliers.</li>
							<li>Track taxable vs non-taxable allowances.</li>
						</ul>
					</div>
					{payrollData.adjustmentAudit && payrollData.adjustmentAudit.length > 0 && (
						<div className="border rounded p-3 bg-white/50 max-h-48 overflow-auto">
							<h4 className="font-semibold text-xs mb-2">Adjustment Audit</h4>
							<ul className="space-y-1 text-[11px]">
								{payrollData.adjustmentAudit.slice().reverse().map(a => (
									<li key={a.at + a.adjustmentId}>{new Date(a.at).toLocaleString()} - {a.action.toUpperCase()} #{a.adjustmentId.slice(0,6)} {a.details?.amount && `(amt:${a.details.amount})`}</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
			<div className="flex justify-between">
				<Button variant="outline" onClick={onBack}><ChevronLeft className="mr-1 h-4 w-4"/>Back</Button>
				<Button onClick={()=> onNext()}>Continue<ChevronRight className="ml-1 h-4 w-4"/></Button>
			</div>
		</div>
	);
};
const ReviewApprovalStep: React.FC<StepComponentProps> = ({ onNext, onBack, payrollData }) => {
	const total = payrollData.calculations?.reduce((s,c)=> s + c.net, 0) || 0;
	const validation = validatePayroll(payrollData);

	const handleExportWPS = async () => {
		const csv = await WPSReportService.exportCSV(payrollData.id!);
		const blob = new Blob([csv], { type: 'text/csv' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url; a.download = `WPS-${payrollData.month}-${payrollData.year}.csv`; a.click();
		URL.revokeObjectURL(url);
	};
	const handleGeneratePayslips = () => {
		PayslipService.generateForBatch(payrollData.id!);
		onNext({ approved: true });
	};
	return (
		<div className="space-y-4">
			<h3 className="text-lg font-semibold">Review & Approve</h3>
			<div className="border rounded p-4 bg-gray-50 text-sm space-y-2">
				<div className="flex justify-between"><span>Period:</span><span>{payrollData.month}/{payrollData.year}</span></div>
				<div className="flex justify-between"><span>Employees:</span><span>{payrollData.calculations?.length || 0}</span></div>
				<div className="flex justify-between font-medium"><span>Total Net Payroll:</span><span>{formatCurrency(total)}</span></div>
				<div className="pt-2 text-xs">
					{validation.issues.length === 0 ? <span className="text-green-600">No validation issues.</span> : (
						<ul className="space-y-1 max-h-40 overflow-auto">
							{validation.issues.map(i => (
								<li key={i.code + i.employeeId} className={i.severity==='error'?'text-red-600':'text-amber-600'}>
									[{i.severity.toUpperCase()}] {i.message}
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
			<div className="flex justify-between pt-4">
				<Button variant="outline" onClick={onBack}><ChevronLeft className="mr-1 h-4 w-4"/>Back</Button>
				<Button variant="outline" onClick={handleExportWPS}>Export WPS CSV</Button>
				<Button disabled={validation.hasErrors} onClick={handleGeneratePayslips}>Approve & Generate Payslips<Check className="ml-1 h-4 w-4"/></Button>
			</div>
		</div>
	);
};
const PayslipGenerationStep: React.FC<StepComponentProps> = ({ onBack, payrollData }) => {
	return (
		<div className="space-y-4">
			<h3 className="text-lg font-semibold">Payslips</h3>
			<p className="text-sm text-gray-600">(Placeholder) – payslip dataset is ready (batch {payrollData.id}). Future: generate PDF / WPS file.</p>
			<div className="flex gap-3">
				<Button variant="outline" onClick={onBack}><ChevronLeft className="mr-1 h-4 w-4"/>Back</Button>
				<Button onClick={() => window.history.back()}>Finish</Button>
			</div>
		</div>
	);
};

export const ProcessPayrollPage: React.FC = () => {
	const navigate = useNavigate();
	const [step, setStep] = useState(0);
		const initialMonth = new Date().getMonth() + 1;
		const initialYear = new Date().getFullYear();
		const [payrollData, setPayrollData] = useState<PayrollBatch>(() => {
			const draft = PayrollService.getDraft(initialMonth, initialYear) || PayrollService.createDraft(initialMonth, initialYear);
			return draft;
		});

	const steps = [
		{ title: 'Select Period', icon: Calendar },
		{ title: 'Review Attendance', icon: Clock },
		{ title: 'Calculate Salaries', icon: Calculator },
		{ title: 'Add Adjustments', icon: PlusCircle },
		{ title: 'Review & Approve', icon: CheckCircle },
		{ title: 'Generate Payslips', icon: FileText }
	];

	return (
		<div className="max-w-7xl mx-auto p-6">
			{/* Stepper */}
			<div className="mb-8 overflow-x-auto">
				<ol className="flex items-center gap-6">
					{steps.map((s, idx) => {
						const ActiveIcon = s.icon;
						const state = idx === step ? 'active' : idx < step ? 'done' : 'upcoming';
						return (
							<li key={s.title} className="flex items-center gap-2 min-w-[140px]">
								<div
									className={cn(
										'h-10 w-10 rounded-full flex items-center justify-center text-white text-sm font-medium',
										state === 'done' && 'bg-green-600',
										state === 'active' && 'bg-blue-600 ring-4 ring-blue-100',
										state === 'upcoming' && 'bg-gray-300 text-gray-700'
									)}
								>
									{state === 'done' ? <Check className="h-5 w-5"/> : <ActiveIcon className="h-5 w-5"/>}
								</div>
								<span className={cn('text-xs font-medium', state === 'active' && 'text-blue-700')}>{s.title}</span>
							</li>
						);
					})}
				</ol>
			</div>
			<Card>
				<CardContent className="p-6 space-y-4">
					{step === 0 && <PeriodSelectionStep payrollData={payrollData} setPayrollData={setPayrollData} onNext={() => setStep(1)} />}
					{step === 1 && <AttendanceReviewStep payrollData={payrollData} setPayrollData={setPayrollData} onBack={() => setStep(0)} onNext={() => setStep(2)} />}
								{step === 2 && <SalaryCalculationStep payrollData={payrollData} onBack={() => setStep(1)} onNext={(d) => { setPayrollData(p => { const updated = { ...p, calculations: d.calculations }; PayrollService.updateCalculations(p.id!, d.calculations); return updated; }); setStep(3); }} />}
					{step === 3 && <AdjustmentsStep payrollData={payrollData} setPayrollData={setPayrollData} onBack={() => setStep(2)} onNext={() => setStep(4)} />}
									{step === 4 && <ReviewApprovalStep payrollData={payrollData} setPayrollData={setPayrollData} onBack={() => setStep(3)} onNext={() => { setPayrollData(p => { const updated = { ...p, status: 'approved' as const }; PayrollService.approve(p.id!); return updated; }); setStep(5); }} />}
								{step === 5 && <PayslipGenerationStep payrollData={payrollData} setPayrollData={setPayrollData} onBack={() => setStep(4)} onNext={() => { setPayrollData(p => { const updated = { ...p, status: 'processed' as const }; PayrollService.markProcessed(p.id!); return updated; }); navigate('/payroll/history'); }} />}
				</CardContent>
			</Card>
		</div>
	);
};

export default ProcessPayrollPage;
