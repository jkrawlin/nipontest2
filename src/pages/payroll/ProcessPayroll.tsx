import React, { useState, useEffect } from 'react';
import { Decimal } from 'decimal.js';
import { useNavigate } from 'react-router-dom';
import { EmployeeService } from '../../services/api/employees';
import { PayrollService } from '../../services/api/payroll';
import { formatCurrency } from '../../lib/formatters';
import type { PayrollBatch, SalaryCalculation } from '../../types/payroll';
import { Check, Calendar, Clock, Calculator, PlusCircle, CheckCircle, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

// UI components (lightweight local fallbacks if not present in project structure)
import { Button } from '../../components/ui/button';
// Table primitives (create simple minimal if table system not yet integrated here)

const Table: React.FC<{ children: React.ReactNode }> = ({ children }) => <table className="min-w-full text-sm">{children}</table>;
const TableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <thead className="bg-gray-50">{children}</thead>;
const TableBody: React.FC<{ children: React.ReactNode }> = ({ children }) => <tbody>{children}</tbody>;
const TableRow: React.FC<{ children: React.ReactNode }> = ({ children }) => <tr className="border-b last:border-0">{children}</tr>;
const TableHead: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => <th className={"px-3 py-2 text-left font-medium text-gray-600 " + (className||'')}>{children}</th>;
const TableCell: React.FC<{ children: React.ReactNode; className?: string; colSpan?: number }> = ({ children, className, colSpan }) => <td colSpan={colSpan} className={"px-3 py-2 align-middle " + (className||'')}>{children}</td>;
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

// Placeholder steps for next phases
const AdjustmentsStep: React.FC<StepComponentProps> = ({ onNext, onBack }) => (
	<div className="space-y-4">
		<h3 className="text-lg font-semibold">Add Adjustments</h3>
		<p className="text-sm text-gray-600">(Placeholder) – bonuses, deductions, overtime fine-tuning.</p>
		<div className="flex justify-between pt-4">
			<Button variant="outline" onClick={onBack}><ChevronLeft className="mr-1 h-4 w-4"/>Back</Button>
			<Button onClick={() => onNext()}>Continue<ChevronRight className="ml-1 h-4 w-4"/></Button>
		</div>
	</div>
);
const ReviewApprovalStep: React.FC<StepComponentProps> = ({ onNext, onBack, payrollData }) => {
	const total = payrollData.calculations?.reduce((s,c)=> s + c.net, 0) || 0;
	return (
		<div className="space-y-4">
			<h3 className="text-lg font-semibold">Review & Approve</h3>
			<div className="border rounded p-4 bg-gray-50 text-sm space-y-2">
				<div className="flex justify-between"><span>Period:</span><span>{payrollData.month}/{payrollData.year}</span></div>
				<div className="flex justify-between"><span>Employees:</span><span>{payrollData.calculations?.length || 0}</span></div>
				<div className="flex justify-between font-medium"><span>Total Net Payroll:</span><span>{formatCurrency(total)}</span></div>
				<div className="pt-2 text-xs text-gray-500">(Future) Add compliance checks: negative nets, abnormal OT, allowance caps.</div>
			</div>
			<div className="flex justify-between pt-4">
				<Button variant="outline" onClick={onBack}><ChevronLeft className="mr-1 h-4 w-4"/>Back</Button>
				<Button onClick={() => onNext({ approved: true })}>Approve & Generate Payslips<Check className="ml-1 h-4 w-4"/></Button>
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
