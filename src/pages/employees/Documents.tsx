import React, { useEffect, useState } from 'react';
import { EmployeeService } from '../../services/api/employees';
import type { ExpiringDocument } from '../../types/employee';

export const EmployeeDocumentsPage: React.FC = () => {
	const [docs, setDocs] = useState<ExpiringDocument[]>([]);
	const [loading, setLoading] = useState(true);
	const [windowDays, setWindowDays] = useState(120);

	useEffect(() => { (async () => {
		const list = await EmployeeService.getExpiringDocuments(windowDays);
		setDocs(list);
		setLoading(false);
	})(); }, [windowDays]);

	return (
		<div className="p-6 space-y-6">
			<div className="flex items-end gap-6 flex-wrap">
				<div>
					<h1 className="text-xl font-semibold">Employee Documents</h1>
					<p className="text-xs text-gray-500">Track Qatar ID, Passport & Visa expiries. Renew before expiration to remain compliant.</p>
				</div>
				<div className="ml-auto flex gap-2 items-center">
					<label className="text-[11px] font-medium">Window (days)</label>
					<select value={windowDays} onChange={e=> setWindowDays(parseInt(e.target.value,10))} className="border rounded px-2 py-1 text-xs">
						{[30,60,90,120,180].map(d => <option key={d} value={d}>{d}</option>)}
					</select>
				</div>
			</div>
			{loading ? <div className="text-sm text-gray-500">Loading…</div> : (
				<div className="overflow-x-auto border rounded bg-white">
					<table className="min-w-full text-sm">
						<thead className="bg-gray-50">
							<tr>
								<th className="px-3 py-2 text-left">Employee</th>
								<th className="px-3 py-2 text-left">Document</th>
								<th className="px-3 py-2 text-right">Days Remaining</th>
								<th className="px-3 py-2 text-left">Expiry Date</th>
								<th className="px-3 py-2 text-left">Status</th>
							</tr>
						</thead>
						<tbody>
							{docs.map(d => (
								<tr key={d.employeeId + d.documentType} className="border-b last:border-0">
									<td className="px-3 py-2 whitespace-nowrap font-medium">{d.employeeName}</td>
									<td className="px-3 py-2">{d.documentType}</td>
									<td className={"px-3 py-2 text-right font-mono text-xs " + (d.status==='expired' ? 'text-red-600' : d.status==='critical' ? 'text-amber-600' : d.status==='warning' ? 'text-yellow-600':'text-green-600')}>{d.daysRemaining}</td>
									<td className="px-3 py-2 text-xs">{new Date(d.expiryDate).toLocaleDateString('en-US')}</td>
									<td className="px-3 py-2 capitalize text-xs">{d.status}</td>
								</tr>
							))}
							{docs.length === 0 && <tr><td colSpan={5} className="px-3 py-8 text-center text-gray-500">No documents within selected window.</td></tr>}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};
export default EmployeeDocumentsPage;

