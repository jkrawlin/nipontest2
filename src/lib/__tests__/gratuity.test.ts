import { describe, it, expect } from 'vitest';
import { PermanentEmployeeService } from '../../services/api/permanentEmployees';

function makeEmployee(years: number, basic: number) {
  const now = new Date();
  // Use millisecond subtraction so fractional years (<1) are respected; previous approach truncated year producing >=1 year service
  const join = new Date(now.getTime() - years * 365 * 24 * 60 * 60 * 1000).toISOString();
  return PermanentEmployeeService.create({
    personalInfo:{firstName:'Test',lastName:'Emp',fatherName:'F',dateOfBirth:'1990-01-01',placeOfBirth:'',nationality:'',religion:'',gender:'Male',maritalStatus:'Single',bloodGroup:'O+'},
    documents:{qatarId:{number:'',issueDate:now.toISOString(),expiryDate:now.toISOString(),profession:'',sponsor:''},passport:{number:'',issueDate:now.toISOString(),expiryDate:now.toISOString(),issuePlace:''},visa:{number:'',issueDate:now.toISOString(),expiryDate:now.toISOString(),type:'Work',sponsor:'',occupation:''},healthCard:{number:'',issueDate:now.toISOString(),expiryDate:now.toISOString()},laborContract:{number:'',startDate:join,authenticated:false}},
    employment:{position:'',positionArabic:'',department:'',joiningDate:join,contractType:'Unlimited',workLocation:'Doha'},
    compensation:{basicSalary:basic,housingAllowance:0,transportAllowance:0,totalMonthlySalary:0,bankName:'',accountNumber:'',iban:''},
    leave:{annualLeaveEntitlement:21,annualLeaveBalance:21,annualLeaveTaken:0,sickLeaveBalance:14,sickLeaveTaken:0,emergencyLeaveBalance:0,unpaidLeaveDays:0},
    contact:{mobileQatar:'',address:'',emergencyContact:{name:'',relationship:'',phone:''}},
    status:'Active',
    endOfService:{eligible:false,serviceYears:0,gratuityAmount:0,exitPermitRequired:true}
  });
}

describe('Gratuity calculation boundary', () => {
  it('gratuity is zero below 1 year', () => {
    const emp = makeEmployee(0.5, 6000);
    expect(emp.endOfService.gratuityAmount).toBe(0);
  });
  it('gratuity increases after 5 years slope', () => {
    const emp = makeEmployee(6, 6000);
    expect(emp.endOfService.gratuityAmount).toBeGreaterThan(0);
  });
});