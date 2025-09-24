import { describe, it, expect } from 'vitest';
import { TemporaryEmployeeService } from '../../services/api/temporaryEmployees';

describe('Temporary employee earnings by rate type', () => {
  it('Daily rate multiplies days (no overtime)', () => {
    const e = TemporaryEmployeeService.create({
      personalInfo:{firstName:'D',lastName:'Rate',fatherName:'',dateOfBirth:'1995-01-01',placeOfBirth:'',nationality:'',religion:'',gender:'Male',maritalStatus:'Single',bloodGroup:'O+'},
      documents:{passport:{number:'',issueDate:new Date().toISOString(),expiryDate:new Date().toISOString(),issuePlace:''}},
      contract:{contractNumber:'',startDate:new Date().toISOString(),endDate:new Date().toISOString(),client:'Client',clientLocation:'',position:'Worker',workType:'Daily Wage'},
      compensation:{rateType:'Daily',rate:100,transportProvided:true,accommodationProvided:true},
      attendance:{totalDaysWorked:5},
      payment:{paymentMethod:'Cash'},
      contact:{mobileQatar:'',address:'',emergencyContact:{name:'',relationship:'',phone:''}},
      status:'Active'
    });
    expect(TemporaryEmployeeService.calculateEarnings(e)).toBe(500);
  });
  it('Hourly rate multiplies hours + overtime', () => {
    const e = TemporaryEmployeeService.create({
      personalInfo:{firstName:'H',lastName:'Rate',fatherName:'',dateOfBirth:'1995-01-01',placeOfBirth:'',nationality:'',religion:'',gender:'Male',maritalStatus:'Single',bloodGroup:'O+'},
      documents:{passport:{number:'',issueDate:new Date().toISOString(),expiryDate:new Date().toISOString(),issuePlace:''}},
      contract:{contractNumber:'',startDate:new Date().toISOString(),endDate:new Date().toISOString(),client:'Client',clientLocation:'',position:'Worker',workType:'Daily Wage'},
      compensation:{rateType:'Hourly',rate:20,overtimeRate:30,transportProvided:true,accommodationProvided:true},
  attendance:{totalDaysWorked:5,totalHoursWorked:40,overtimeHours:5},
      payment:{paymentMethod:'Cash'},
      contact:{mobileQatar:'',address:'',emergencyContact:{name:'',relationship:'',phone:''}},
      status:'Active'
    });
    expect(TemporaryEmployeeService.calculateEarnings(e)).toBe(20*40 + 30*5);
  });
});