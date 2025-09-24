import { describe, it, expect } from 'vitest';
import { TemporaryEmployeeService } from '../../services/api/temporaryEmployees';

describe('Temporary employee earnings', () => {
  it('daily rate multiplies days worked', () => {
    const emp = TemporaryEmployeeService.create({
      personalInfo:{firstName:'Temp',lastName:'Daily',fatherName:'',dateOfBirth:'1995-01-01',placeOfBirth:'',nationality:'',religion:'',gender:'Male',maritalStatus:'Single',bloodGroup:'O+'},
      documents:{passport:{number:'',issueDate:new Date().toISOString(),expiryDate:new Date().toISOString(),issuePlace:''}},
      contract:{contractNumber:'',startDate:new Date().toISOString(),endDate:new Date().toISOString(),client:'Client',clientLocation:'',position:'Worker',workType:'Daily Wage'},
      compensation:{rateType:'Daily',rate:100,transportProvided:true,accommodationProvided:true},
      attendance:{totalDaysWorked:10},
      payment:{paymentMethod:'Cash'},
      contact:{mobileQatar:'',address:'',emergencyContact:{name:'',relationship:'',phone:''}},
      status:'Active'
    });
    const total = TemporaryEmployeeService.calculateEarnings(emp);
    expect(total).toBe(1000);
  });
  it('hourly rate multiplies hours and overtime', () => {
    const emp = TemporaryEmployeeService.create({
      personalInfo:{firstName:'Temp',lastName:'Hourly',fatherName:'',dateOfBirth:'1995-01-01',placeOfBirth:'',nationality:'',religion:'',gender:'Male',maritalStatus:'Single',bloodGroup:'O+'},
      documents:{passport:{number:'',issueDate:new Date().toISOString(),expiryDate:new Date().toISOString(),issuePlace:''}},
      contract:{contractNumber:'',startDate:new Date().toISOString(),endDate:new Date().toISOString(),client:'Client',clientLocation:'',position:'Worker',workType:'Daily Wage'},
      compensation:{rateType:'Hourly',rate:20,overtimeRate:30,transportProvided:true,accommodationProvided:true},
      attendance:{totalHoursWorked:40,overtimeHours:10,totalDaysWorked:0},
      payment:{paymentMethod:'Cash'},
      contact:{mobileQatar:'',address:'',emergencyContact:{name:'',relationship:'',phone:''}},
      status:'Active'
    });
    const total = TemporaryEmployeeService.calculateEarnings(emp);
    expect(total).toBe(20*40 + 30*10);
  });
});