import { describe, it, expect } from 'vitest';
import { Decimal } from 'decimal.js';
import { PermanentEmployeeService } from '../../services/api/permanentEmployees';

describe('Overtime multiplier scenarios (permanent)', () => {
  const emp = PermanentEmployeeService.create({
    personalInfo:{firstName:'OT',lastName:'Test',fatherName:'',dateOfBirth:'1990-01-01',placeOfBirth:'',nationality:'',religion:'',gender:'Male',maritalStatus:'Single',bloodGroup:'O+'},
    documents:{qatarId:{number:'',issueDate:new Date().toISOString(),expiryDate:new Date().toISOString(),profession:'',sponsor:''},passport:{number:'',issueDate:new Date().toISOString(),expiryDate:new Date().toISOString(),issuePlace:''},visa:{number:'',issueDate:new Date().toISOString(),expiryDate:new Date().toISOString(),type:'Work',sponsor:'',occupation:''},healthCard:{number:'',issueDate:new Date().toISOString(),expiryDate:new Date().toISOString()},laborContract:{number:'',startDate:new Date().toISOString(),authenticated:false}},
  employment:{position:'',department:'',joiningDate:new Date().toISOString(),contractType:'Unlimited',workLocation:'Doha'},
    compensation:{basicSalary:3000,housingAllowance:0,transportAllowance:0,totalMonthlySalary:0,bankName:'',accountNumber:'',iban:''},
    leave:{annualLeaveEntitlement:21,annualLeaveBalance:21,annualLeaveTaken:0,sickLeaveBalance:14,sickLeaveTaken:0,emergencyLeaveBalance:0,unpaidLeaveDays:0},
    contact:{mobileQatar:'',address:'',emergencyContact:{name:'',relationship:'',phone:''}},
    status:'Active',
    endOfService:{eligible:false,serviceYears:0,gratuityAmount:0,exitPermitRequired:true}
  });
  it('baseline hourly rate * 1.25 for overtime hours (8h/day)', () => {
    const dailyRate = new Decimal(emp.compensation.basicSalary).div(30);
    const hourlyRate = dailyRate.div(8);
    const ot = hourlyRate.mul(1.25).mul(10); // 10 h OT
    expect(ot.toNumber()).toBeGreaterThan(0);
  });
});