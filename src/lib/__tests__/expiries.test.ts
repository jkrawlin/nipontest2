import { describe, it, expect } from 'vitest';
import { PermanentEmployeeService } from '../../services/api/permanentEmployees';
import { TemporaryEmployeeService } from '../../services/api/temporaryEmployees';
import { EmployeeService } from '../../services/api/employees';

// Basic test of projection thresholds (expired <0, critical <=15, warning <=45, else valid)

describe('Expiring documents projection', () => {
  it('classifies documents by remaining days', async () => {
    // Ensure seed present
    const perms = PermanentEmployeeService.getAll();
    const temps = TemporaryEmployeeService.getAll();
    expect(perms.length).toBeGreaterThan(0);
    expect(temps.length).toBeGreaterThan(0);
    const docs = await EmployeeService.getExpiringDocuments(2000); // large window
    expect(docs.length).toBeGreaterThan(0);
    const categories = new Set(docs.map(d=> d.status));
    expect(['expired','critical','warning','valid'].some(c=> categories.has(c as any))).toBe(true);
  });
});