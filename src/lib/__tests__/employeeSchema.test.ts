import { describe, it, expect } from 'vitest';
import { employeeBaseSchema } from '../schemas/employee';

describe('employeeBaseSchema', () => {
  it('accepts a valid payload', () => {
    const parsed = employeeBaseSchema.parse({
      employeeCode: 'EMP001',
      firstName: 'Ali',
      lastName: 'Hassan',
      position: 'Accountant',
      department: 'Finance',
      basicSalary: 4500,
      status: 'Active'
    });
    expect(parsed.employeeCode).toBe('EMP001');
  });

  it('rejects negative salary', () => {
    expect(() =>
      employeeBaseSchema.parse({
        employeeCode: 'E2',
        firstName: 'A',
        lastName: 'B',
        position: 'Dev',
        department: 'IT',
        basicSalary: -10,
        status: 'Active'
      })
    ).toThrow();
  });
});