import React, { useEffect, useState } from 'react';
import { PayrollService } from '../../services/api/payroll';
import type { PayrollBatch } from '../../types/payroll';
import { useNavigate } from 'react-router-dom';

export const PayrollHistoryPage: React.FC = () => {
	const [batches, setBatches] = useState<PayrollBatch[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		setBatches(PayrollService.list().sort((a,b) => (b.year - a.year) || (b.month - a.month)));
	}, []);

	return (
		<div className="p-6 space-y-6">
			<div className="flex items-center justify-between">
				<h1 className="text-xl font-semibold">Payroll History</h1>
				<button onClick={()=> navigate('/payroll/process')} className="px-3 py-1.5 text-sm rounded bg-blue-600 text-white">Start New Run</button>
			</div>
			<div className="overflow-x-auto border rounded bg-white">
				<table className="min-w-full text-sm">
					<thead className="bg-gray-50">
						<tr>
							<th className="px-3 py-2 text-left">Period</th>
							<th className="px-3 py-2 text-left">Status</th>
							<th className="px-3 py-2 text-right">Employees</th>
							<th className="px-3 py-2 text-right">Total Amount</th>
							<th className="px-3 py-2 text-left">Created</th>
							<th className="px-3 py-2"></th>
						</tr>
					</thead>
					<tbody>
						{batches.map(b => (
							<tr key={b.id} className="border-b last:border-0">
								<td className="px-3 py-2 font-medium">{b.month}/{b.year}</td>
								<td className="px-3 py-2 capitalize"><span className={`px-2 py-0.5 rounded text-xs bg-${b.status==='processed'?'green':'blue'}-100 text-${b.status==='processed'?'green':'blue'}-700`}>{b.status}</span></td>
								<td className="px-3 py-2 text-right">{b.calculations?.length || 0}</td>
								<td className="px-3 py-2 text-right font-medium">{b.totalAmount.toFixed(2)}</td>
								<td className="px-3 py-2 text-xs text-gray-500">{/* created from id timestamp base36 part */}{(() => { try { return new Date(parseInt(b.id!.split('-').pop()!,36)).toLocaleDateString(); } catch { return '-'; } })()}</td>
								<td className="px-3 py-2 text-right"><button className="text-blue-600 hover:underline text-xs" onClick={()=> navigate(`/payroll/payslips?batch=${b.id}`)}>View Payslips</button></td>
							</tr>
						))}
						{batches.length === 0 && (
							<tr><td colSpan={6} className="px-3 py-6 text-center text-gray-500 text-sm">No payroll batches yet.</td></tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};
export default PayrollHistoryPage;
