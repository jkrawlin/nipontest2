import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EmployeeService } from '../../services/api/employees';
import type { Employee } from '../../types/employee';
import type { SalaryHistory, LeaveRecord } from '../../types/history';
import { SalaryHistoryService } from '../../services/api/salaryHistory';
import { LeaveService } from '../../services/api/leaves';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Dialog } from '../../components/ui/dialog';
import { Input } from '../../components/ui/input';

export const EmployeeDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = React.useState<Employee | null>(null);
  const [salaryHistory, setSalaryHistory] = React.useState<SalaryHistory[]>([]);
  const [leaveRecords, setLeaveRecords] = React.useState<LeaveRecord[]>([]);
  const [showSalaryModal, setShowSalaryModal] = React.useState(false);
  const [showLeaveModal, setShowLeaveModal] = React.useState(false);
  const [showPaymentModal, setShowPaymentModal] = React.useState(false);
  const [expanded, setExpanded] = React.useState({ personal: true, employment: true, salary: true, documents: true, leave: true });

  React.useEffect(() => {
    (async () => {
      if (!id) return;
      const emp = await EmployeeService.getById(id);
      if (!emp) { navigate('/employees'); return; }
      setEmployee(emp);
      setSalaryHistory(SalaryHistoryService.getByEmployee(id));
      setLeaveRecords(LeaveService.getEmployeeLeaves(id));
    })();
  }, [id, navigate]);

  if (!employee) return <div className="p-4 text-sm">Loading…</div>;

  const initials = `${employee.personalInfo.firstName[0] || ''}${employee.personalInfo.lastName[0] || ''}`;
  const fullName = `${employee.personalInfo.firstName} ${employee.personalInfo.lastName}`;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#8A1538] to-rose-400 rounded-full flex items-center justify-center text-white text-xl font-bold">
              {initials}
            </div>
            <div>
              <h1 className="text-xl font-bold">{fullName}</h1>
              <p className="text-gray-500 text-sm">{employee.employeeCode} • {employee.employeeType === 'Permanent' ? employee.employment.position : employee.contract.position}</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant={employee.status === 'Active' ? 'default' : employee.status === 'On Leave' ? 'secondary' : 'destructive'}>
                  {employee.status}
                </Badge>
                <Badge variant={employee.employeeType === 'Permanent' ? 'default' : 'outline'}>
                  {employee.employeeType}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => setShowPaymentModal(true)}>Add Payment</Button>
            <Button size="sm" variant="outline" onClick={() => setShowLeaveModal(true)}>Add Leave</Button>
            <Button size="sm" variant="outline" onClick={() => setShowSalaryModal(true)}>Update Salary</Button>
          </div>
        </div>
      </div>

      {/* Personal */}
      <Card>
        <CardHeader onClick={() => setExpanded(p => ({ ...p, personal: !p.personal }))} className="cursor-pointer">
          <div className="flex justify-between items-center"><CardTitle>Personal Information</CardTitle><span>{expanded.personal ? '▲' : '▼'}</span></div>
        </CardHeader>
        {expanded.personal && (
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div><div className="text-gray-500">Nationality</div><div className="font-medium">{employee.personalInfo.nationality}</div></div>
              <div><div className="text-gray-500">Date of Birth</div><div className="font-medium">{employee.personalInfo.dateOfBirth}</div></div>
              <div><div className="text-gray-500">Gender</div><div className="font-medium">{employee.personalInfo.gender}</div></div>
              <div><div className="text-gray-500">Marital Status</div><div className="font-medium">{employee.personalInfo.maritalStatus}</div></div>
              <div><div className="text-gray-500">Mobile</div><div className="font-medium">{employee.contact.mobileQatar}</div></div>
              {employee.contact.email && <div><div className="text-gray-500">Email</div><div className="font-medium">{employee.contact.email}</div></div>}
              <div className="md:col-span-2"><div className="text-gray-500">Address</div><div className="font-medium">{employee.contact.address}</div></div>
              <div className="md:col-span-2"><div className="text-gray-500">Emergency Contact</div><div className="font-medium">{employee.contact.emergencyContact.name} ({employee.contact.emergencyContact.relationship}) - {employee.contact.emergencyContact.phone}</div></div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Employment */}
      <Card>
        <CardHeader onClick={() => setExpanded(p => ({ ...p, employment: !p.employment }))} className="cursor-pointer">
          <div className="flex justify-between items-center"><CardTitle>Employment Details</CardTitle><span>{expanded.employment ? '▲' : '▼'}</span></div>
        </CardHeader>
        {expanded.employment && (
          <CardContent>
            {employee.employeeType === 'Permanent' ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div><div className="text-gray-500">Department</div><div className="font-medium">{employee.employment.department}</div></div>
                <div><div className="text-gray-500">Position</div><div className="font-medium">{employee.employment.position}</div></div>
                <div><div className="text-gray-500">Joining Date</div><div className="font-medium">{employee.employment.joiningDate}</div></div>
                <div><div className="text-gray-500">Contract Type</div><div className="font-medium">{employee.employment.contractType}</div></div>
                {employee.employment.contractEndDate && <div><div className="text-gray-500">Contract End</div><div className="font-medium">{employee.employment.contractEndDate}</div></div>}
                <div><div className="text-gray-500">Work Location</div><div className="font-medium">{employee.employment.workLocation}</div></div>
                {employee.employment.reportingTo && <div><div className="text-gray-500">Reporting To</div><div className="font-medium">{employee.employment.reportingTo}</div></div>}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div><div className="text-gray-500">Client</div><div className="font-medium">{employee.contract.client}</div></div>
                <div><div className="text-gray-500">Position</div><div className="font-medium">{employee.contract.position}</div></div>
                <div><div className="text-gray-500">Start Date</div><div className="font-medium">{employee.contract.startDate}</div></div>
                <div><div className="text-gray-500">End Date</div><div className="font-medium">{employee.contract.endDate}</div></div>
                <div><div className="text-gray-500">Location</div><div className="font-medium">{employee.contract.clientLocation}</div></div>
                <div><div className="text-gray-500">Work Type</div><div className="font-medium">{employee.contract.workType}</div></div>
              </div>
            )}
          </CardContent>
        )}
      </Card>

      {/* Salary and Payment History */}
      <Card>
        <CardHeader onClick={() => setExpanded(p => ({ ...p, salary: !p.salary }))} className="cursor-pointer">
          <div className="flex justify-between items-center"><CardTitle>Salary & Payments</CardTitle><span>{expanded.salary ? '▲' : '▼'}</span></div>
        </CardHeader>
        {expanded.salary && (
          <CardContent>
            <div className="bg-gray-50 p-4 rounded-lg mb-4 text-sm">
              {employee.employeeType === 'Permanent' ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div><div className="text-gray-500">Basic</div><div className="font-semibold">{employee.compensation.basicSalary}</div></div>
                  <div><div className="text-gray-500">Housing</div><div className="font-semibold">{employee.compensation.housingAllowance}</div></div>
                  <div><div className="text-gray-500">Transport</div><div className="font-semibold">{employee.compensation.transportAllowance}</div></div>
                  <div><div className="text-gray-500">Total</div><div className="font-bold text-green-600">{employee.compensation.totalMonthlySalary}</div></div>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div><div className="text-gray-500">Rate Type</div><div className="font-semibold">{employee.compensation.rateType}</div></div>
                  <div><div className="text-gray-500">Rate</div><div className="font-semibold">{employee.compensation.rate}</div></div>
                  <div><div className="text-gray-500">OT Rate</div><div className="font-semibold">{employee.compensation.overtimeRate || 0}</div></div>
                  <div><div className="text-gray-500">Earnings (to date)</div><div className="font-bold text-green-600">{employee.compensation.totalEarnings || 0}</div></div>
                </div>
              )}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 pt-4 border-t">
                <div><div className="text-gray-500">Payment Method</div><div className="font-medium">Bank Transfer</div></div>
                {employee.employeeType === 'Permanent' && (
                  <>
                    <div><div className="text-gray-500">Bank</div><div className="font-medium">{employee.compensation.bankName}</div></div>
                    <div><div className="text-gray-500">Account</div><div className="font-medium">{employee.compensation.accountNumber}</div></div>
                  </>
                )}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Payment History</h4>
              {salaryHistory.length === 0 ? (
                <div className="text-xs text-gray-500 border rounded p-3">No payment history yet.</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-gray-50">
                        <th className="text-left py-2 px-2">Month</th>
                        <th className="text-right py-2 px-2">Days</th>
                        <th className="text-right py-2 px-2">Basic</th>
                        <th className="text-right py-2 px-2">Allowances</th>
                        <th className="text-right py-2 px-2">Overtime</th>
                        <th className="text-right py-2 px-2">Deductions</th>
                        <th className="text-right py-2 px-2">Net</th>
                        <th className="text-left py-2 px-2">Payment Date</th>
                        <th className="text-left py-2 px-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {salaryHistory.map(rec => (
                        <tr key={rec.id} className="border-b hover:bg-gray-50">
                          <td className="py-2 px-2">{new Date(rec.year, rec.month - 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</td>
                          <td className="py-2 px-2 text-right">{rec.daysWorked}</td>
                          <td className="py-2 px-2 text-right">{rec.basic}</td>
                          <td className="py-2 px-2 text-right">{rec.allowances}</td>
                          <td className="py-2 px-2 text-right">{rec.overtime}</td>
                          <td className="py-2 px-2 text-right text-red-600">{rec.deductions > 0 ? `- ${rec.deductions}` : 0}</td>
                          <td className="py-2 px-2 text-right font-semibold">{rec.netSalary}</td>
                          <td className="py-2 px-2">{rec.paymentDate}</td>
                          <td className="py-2 px-2"><Badge variant={rec.status === 'Paid' ? 'default' : rec.status === 'Hold' ? 'secondary' : 'outline'}>{rec.status}</Badge></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </CardContent>
        )}
      </Card>

      {/* Documents */}
      <Card>
        <CardHeader onClick={() => setExpanded(p => ({ ...p, documents: !p.documents }))} className="cursor-pointer">
          <div className="flex justify-between items-center"><CardTitle>Documents</CardTitle><span>{expanded.documents ? '▲' : '▼'}</span></div>
        </CardHeader>
        {expanded.documents && (
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              {employee.employeeType === 'Permanent' ? (
                <>
                  <div className="border rounded p-3"><div className="font-semibold">Qatar ID</div><div>{employee.documents.qatarId.number}</div><div className="text-xs text-gray-500">Expires: {employee.documents.qatarId.expiryDate}</div></div>
                  <div className="border rounded p-3"><div className="font-semibold">Passport</div><div>{employee.documents.passport.number}</div><div className="text-xs text-gray-500">Expires: {employee.documents.passport.expiryDate}</div></div>
                  <div className="border rounded p-3"><div className="font-semibold">Visa</div><div>{employee.documents.visa.number}</div><div className="text-xs text-gray-500">Expires: {employee.documents.visa.expiryDate}</div></div>
                  <div className="border rounded p-3"><div className="font-semibold">Health Card</div><div>{employee.documents.healthCard.number}</div><div className="text-xs text-gray-500">Expires: {employee.documents.healthCard.expiryDate}</div></div>
                </>
              ) : (
                <>
                  <div className="border rounded p-3"><div className="font-semibold">Passport</div><div>{employee.documents.passport.number}</div><div className="text-xs text-gray-500">Expires: {employee.documents.passport.expiryDate}</div></div>
                  {employee.documents.visa && <div className="border rounded p-3"><div className="font-semibold">Visa</div><div>{employee.documents.visa.number}</div><div className="text-xs text-gray-500">Expires: {employee.documents.visa.expiryDate}</div></div>}
                  {employee.documents.workPermit && <div className="border rounded p-3"><div className="font-semibold">Work Permit</div><div>{employee.documents.workPermit.number}</div><div className="text-xs text-gray-500">Expires: {employee.documents.workPermit.expiryDate}</div></div>}
                </>
              )}
            </div>
          </CardContent>
        )}
      </Card>

      {/* Leave */}
      <Card>
        <CardHeader onClick={() => setExpanded(p => ({ ...p, leave: !p.leave }))} className="cursor-pointer">
          <div className="flex justify-between items-center"><CardTitle>Leave Management</CardTitle><span>{expanded.leave ? '▲' : '▼'}</span></div>
        </CardHeader>
        {expanded.leave && (
          <CardContent>
            <div className="space-y-3">
              {employee.employeeType === 'Permanent' && (
                <div className="grid grid-cols-4 gap-4 text-center text-sm">
                  <div className="p-3 rounded bg-blue-50"><div className="text-2xl font-bold text-blue-700">{employee.leave.annualLeaveEntitlement}</div><div className="text-gray-600">Annual</div></div>
                  <div className="p-3 rounded bg-green-50"><div className="text-2xl font-bold text-green-700">{employee.leave.sickLeaveBalance}</div><div className="text-gray-600">Sick</div></div>
                  <div className="p-3 rounded bg-orange-50"><div className="text-2xl font-bold text-orange-700">{employee.leave.annualLeaveTaken}</div><div className="text-gray-600">Taken</div></div>
                  <div className="p-3 rounded bg-purple-50"><div className="text-2xl font-bold text-purple-700">{employee.leave.annualLeaveBalance}</div><div className="text-gray-600">Balance</div></div>
                </div>
              )}
              <div>
                <h4 className="font-semibold mb-2">Leave History</h4>
                {leaveRecords.length === 0 ? (
                  <div className="text-xs text-gray-500 border rounded p-3">No leave history yet.</div>
                ) : (
                  <div className="space-y-2">
                    {leaveRecords.map(l => (
                      <div key={l.id} className="flex justify-between items-center p-3 border rounded">
                        <div>
                          <div className="font-medium text-sm">{l.type} Leave</div>
                          <div className="text-xs text-gray-500">{l.startDate} to {l.endDate} ({l.days} days)</div>
                        </div>
                        <Badge variant={l.status === 'Approved' ? 'default' : l.status === 'Rejected' ? 'destructive' : 'secondary'}>{l.status}</Badge>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Payment Modal */}
      <Dialog open={showPaymentModal} onClose={() => setShowPaymentModal(false)} title="Add Payment" size="md">
        <div className="space-y-3">
          <div>
            <div className="text-xs font-medium mb-1">Payment Date</div>
            <Input type="date" />
          </div>
          <div>
            <div className="text-xs font-medium mb-1">Amount</div>
            <Input type="number" placeholder="Enter amount" />
          </div>
          <div>
            <div className="text-xs font-medium mb-1">Payment Method</div>
            <select className="w-full border rounded px-2 py-2 text-sm">
              <option>Bank Transfer</option>
              <option>Cash</option>
              <option>Cheque</option>
            </select>
          </div>
          <div>
            <div className="text-xs font-medium mb-1">Reference</div>
            <Input placeholder="Transaction reference" />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={() => setShowPaymentModal(false)}>Cancel</Button>
            <Button onClick={() => setShowPaymentModal(false)}>Save Payment</Button>
          </div>
        </div>
      </Dialog>

      {/* Leave Modal */}
      <Dialog open={showLeaveModal} onClose={() => setShowLeaveModal(false)} title="Add Leave" size="md">
        <div className="space-y-3">
          <div>
            <div className="text-xs font-medium mb-1">Leave Type</div>
            <select className="w-full border rounded px-2 py-2 text-sm">
              <option>Annual</option>
              <option>Sick</option>
              <option>Emergency</option>
              <option>Unpaid</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-xs font-medium mb-1">Start Date</div>
              <Input type="date" />
            </div>
            <div>
              <div className="text-xs font-medium mb-1">End Date</div>
              <Input type="date" />
            </div>
          </div>
          <div>
            <div className="text-xs font-medium mb-1">Reason</div>
            <textarea className="w-full border rounded px-2 py-2 text-sm" rows={3} />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={() => setShowLeaveModal(false)}>Cancel</Button>
            <Button onClick={() => setShowLeaveModal(false)}>Submit Leave</Button>
          </div>
        </div>
      </Dialog>

      {/* Salary Modal */}
      <Dialog open={showSalaryModal} onClose={() => setShowSalaryModal(false)} title="Update Salary" size="md">
        <div className="space-y-3">
          {employee.employeeType === 'Permanent' ? (
            <>
              <div><div className="text-xs font-medium mb-1">Basic</div><Input type="number" defaultValue={(employee as any).compensation.basicSalary} /></div>
              <div><div className="text-xs font-medium mb-1">Housing</div><Input type="number" defaultValue={(employee as any).compensation.housingAllowance} /></div>
              <div><div className="text-xs font-medium mb-1">Transport</div><Input type="number" defaultValue={(employee as any).compensation.transportAllowance} /></div>
              <div><div className="text-xs font-medium mb-1">Other</div><Input type="number" defaultValue={(employee as any).compensation.otherAllowances || 0} /></div>
            </>
          ) : (
            <>
              <div><div className="text-xs font-medium mb-1">Rate Type</div><select className="w-full border rounded px-2 py-2 text-sm" defaultValue={(employee as any).compensation.rateType}><option>Daily</option><option>Hourly</option><option>Monthly</option></select></div>
              <div><div className="text-xs font-medium mb-1">Rate</div><Input type="number" defaultValue={(employee as any).compensation.rate} /></div>
              <div><div className="text-xs font-medium mb-1">OT Rate</div><Input type="number" defaultValue={(employee as any).compensation.overtimeRate || 0} /></div>
            </>
          )}
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={() => setShowSalaryModal(false)}>Cancel</Button>
            <Button onClick={() => setShowSalaryModal(false)}>Update</Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default EmployeeDetailPage;
