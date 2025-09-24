import React from 'react';
import { Employee, PermanentEmployee, TemporaryEmployee } from '../../../types/employee';
import { Badge } from '../../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

interface EmployeeDetailsProps {
  employee: Employee;
}

const Row: React.FC<{ label: string; children?: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>> = ({ label, children, className }) => (
  <div className={['grid grid-cols-3 gap-2 py-1 text-sm', className].filter(Boolean).join(' ')}>
    <div className="text-gray-500">{label}</div>
    <div className="col-span-2 font-medium break-words">{children ?? '-'}</div>
  </div>
);

function PermanentSection({ emp }: { emp: PermanentEmployee }) {
  return (
    <div className="space-y-3">
      <Card>
        <CardHeader>
          <CardTitle>Employment</CardTitle>
        </CardHeader>
        <CardContent>
          <Row label="Department">{emp.employment.department}</Row>
          <Row label="Position">{emp.employment.position}</Row>
          <Row label="Joining Date">{emp.employment.joiningDate}</Row>
          {emp.employment.contractEndDate && <Row label="Contract End">{emp.employment.contractEndDate}</Row>}
          <Row label="Contract Type">{emp.employment.contractType}</Row>
          {emp.employment.reportingTo && <Row label="Reporting To">{emp.employment.reportingTo}</Row>}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Compensation</CardTitle>
        </CardHeader>
        <CardContent>
          <Row label="Basic Salary">{emp.compensation.basicSalary}</Row>
          <Row label="Housing Allowance">{emp.compensation.housingAllowance}</Row>
          <Row label="Transport Allowance">{emp.compensation.transportAllowance}</Row>
          {emp.compensation.foodAllowance != null && <Row label="Food Allowance">{emp.compensation.foodAllowance}</Row>}
          {emp.compensation.phoneAllowance != null && <Row label="Phone Allowance">{emp.compensation.phoneAllowance}</Row>}
          {emp.compensation.otherAllowances != null && <Row label="Other Allowances">{emp.compensation.otherAllowances}</Row>}
          <Row label="Total Monthly Salary">{emp.compensation.totalMonthlySalary}</Row>
          <Row label="Bank">{emp.compensation.bankName}</Row>
          <Row label="Account Number">{emp.compensation.accountNumber}</Row>
          <Row label="IBAN">{emp.compensation.iban}</Row>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <Row label="QID">{emp.documents.qatarId.number} (exp {emp.documents.qatarId.expiryDate})</Row>
          <Row label="Passport">{emp.documents.passport.number} (exp {emp.documents.passport.expiryDate})</Row>
          <Row label="Visa">{emp.documents.visa.number} (exp {emp.documents.visa.expiryDate})</Row>
          <Row label="Health Card">{emp.documents.healthCard.number} (exp {emp.documents.healthCard.expiryDate})</Row>
          <Row label="Labor Contract">{emp.documents.laborContract.number}</Row>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Leave</CardTitle>
        </CardHeader>
        <CardContent>
          <Row label="Annual Entitlement">{emp.leave.annualLeaveEntitlement}</Row>
          <Row label="Annual Balance">{emp.leave.annualLeaveBalance}</Row>
          <Row label="Annual Taken">{emp.leave.annualLeaveTaken}</Row>
          <Row label="Sick Balance">{emp.leave.sickLeaveBalance}</Row>
          <Row label="Sick Taken">{emp.leave.sickLeaveTaken}</Row>
          <Row label="Emergency Balance">{emp.leave.emergencyLeaveBalance}</Row>
          <Row label="Unpaid Days">{emp.leave.unpaidLeaveDays}</Row>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>End of Service</CardTitle>
        </CardHeader>
        <CardContent>
          <Row label="Eligible">{emp.endOfService.eligible ? 'Yes' : 'No'}</Row>
          <Row label="Service Years">{emp.endOfService.serviceYears}</Row>
          <Row label="Gratuity Amount">{emp.endOfService.gratuityAmount}</Row>
          {emp.endOfService.lastWorkingDate && <Row label="Last Working Date">{emp.endOfService.lastWorkingDate}</Row>}
          <Row label="Exit Permit Required">{emp.endOfService.exitPermitRequired ? 'Yes' : 'No'}</Row>
        </CardContent>
      </Card>
    </div>
  );
}

function TemporarySection({ emp }: { emp: TemporaryEmployee }) {
  return (
    <div className="space-y-3">
      <Card>
        <CardHeader>
          <CardTitle>Contract</CardTitle>
        </CardHeader>
        <CardContent>
          <Row label="Contract #">{emp.contract.contractNumber}</Row>
          <Row label="Client">{emp.contract.client}</Row>
          <Row label="Position">{emp.contract.position}</Row>
          <Row label="Work Type">{emp.contract.workType}</Row>
          <Row label="Start Date">{emp.contract.startDate}</Row>
          <Row label="End Date">{emp.contract.endDate}</Row>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Compensation</CardTitle>
        </CardHeader>
        <CardContent>
          <Row label="Rate Type">{emp.compensation.rateType}</Row>
          <Row label="Rate">{emp.compensation.rate}</Row>
          {emp.compensation.overtimeRate != null && <Row label="Overtime Rate">{emp.compensation.overtimeRate}</Row>}
          {emp.compensation.foodAllowance != null && <Row label="Food Allowance">{emp.compensation.foodAllowance}</Row>}
          <Row label="Transport Provided">{emp.compensation.transportProvided ? 'Yes' : 'No'}</Row>
          <Row label="Accommodation Provided">{emp.compensation.accommodationProvided ? 'Yes' : 'No'}</Row>
          {emp.compensation.totalEarnings != null && <Row label="Total Earnings (to date)">{emp.compensation.totalEarnings}</Row>}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <Row label="Passport">{emp.documents.passport.number} (exp {emp.documents.passport.expiryDate})</Row>
          {emp.documents.visa && <Row label="Visa">{emp.documents.visa.number} (exp {emp.documents.visa.expiryDate})</Row>}
          {emp.documents.workPermit && <Row label="Work Permit">{emp.documents.workPermit.number} (exp {emp.documents.workPermit.expiryDate})</Row>}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Attendance & Payment</CardTitle>
        </CardHeader>
        <CardContent>
          <Row label="Days Worked">{emp.attendance.totalDaysWorked}</Row>
          {emp.attendance.totalHoursWorked != null && <Row label="Hours Worked">{emp.attendance.totalHoursWorked}</Row>}
          {emp.attendance.overtimeHours != null && <Row label="Overtime Hours">{emp.attendance.overtimeHours}</Row>}
          {emp.attendance.lastWorkDate && <Row label="Last Work Date">{emp.attendance.lastWorkDate}</Row>}
          <Row label="Payment Method">{emp.payment.paymentMethod}</Row>
          {emp.payment.bankName && <Row label="Bank">{emp.payment.bankName}</Row>}
          {emp.payment.accountNumber && <Row label="Account Number">{emp.payment.accountNumber}</Row>}
          {emp.payment.lastPaymentDate && <Row label="Last Payment Date">{emp.payment.lastPaymentDate}</Row>}
          {emp.payment.lastPaymentAmount != null && <Row label="Last Payment Amount">{emp.payment.lastPaymentAmount}</Row>}
        </CardContent>
      </Card>
    </div>
  );
}

export const EmployeeDetails: React.FC<EmployeeDetailsProps> = ({ employee }) => {
  const fullName = `${employee.personalInfo.firstName} ${employee.personalInfo.lastName}`;
  return (
    <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-lg font-semibold">{fullName}</div>
          <div className="text-sm text-gray-500">Code: {employee.employeeCode}</div>
          <div className="mt-1">
            <Badge variant={employee.employeeType === 'Permanent' ? 'default' : 'secondary'}>{employee.employeeType}</Badge>
            <span className="ml-2">Status: </span>
            <Badge variant={
              employee.status === 'Active' ? 'default' : employee.status === 'On Leave' ? 'secondary' : 'destructive'
            }>
              {employee.status}
            </Badge>
          </div>
        </div>
        {/* Optional photo */}
        {employee.personalInfo.photoUrl && (
          <img src={employee.personalInfo.photoUrl} alt={fullName} className="w-20 h-20 rounded object-cover border" />
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Personal & Contact</CardTitle>
        </CardHeader>
        <CardContent>
          <Row label="Name (Arabic)">{[employee.personalInfo.firstNameArabic, employee.personalInfo.lastNameArabic].filter(Boolean).join(' ') || '-'}</Row>
          <Row label="Father Name">{employee.personalInfo.fatherName}</Row>
          {employee.personalInfo.motherName && <Row label="Mother Name">{employee.personalInfo.motherName}</Row>}
          <Row label="DOB">{employee.personalInfo.dateOfBirth}</Row>
          <Row label="Birth Place">{employee.personalInfo.placeOfBirth}</Row>
          <Row label="Nationality">{employee.personalInfo.nationality}</Row>
          <Row label="Religion">{employee.personalInfo.religion}</Row>
          <Row label="Gender">{employee.personalInfo.gender}</Row>
          <Row label="Marital Status">{employee.personalInfo.maritalStatus}</Row>
          <Row label="Blood Group">{employee.personalInfo.bloodGroup}</Row>
          <Row label="Mobile (Qatar)">{employee.contact.mobileQatar}</Row>
          {employee.contact.mobileHome && <Row label="Mobile (Home)">{employee.contact.mobileHome}</Row>}
          {employee.contact.email && <Row label="Email">{employee.contact.email}</Row>}
          <Row label="Address">{employee.contact.address}</Row>
          <Row label="Emergency Contact">{employee.contact.emergencyContact.name} ({employee.contact.emergencyContact.relationship}) - {employee.contact.emergencyContact.phone}</Row>
        </CardContent>
      </Card>

      {employee.employeeType === 'Permanent' ? (
        <PermanentSection emp={employee} />
      ) : (
        <TemporarySection emp={employee} />
      )}
    </div>
  );
};
