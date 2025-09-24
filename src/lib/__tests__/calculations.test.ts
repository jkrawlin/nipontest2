import { describe, it, expect } from 'vitest';
import { calculateNetSalary, computeOvertime } from '../calculations';

describe('calculations', () => {
  it('computes net salary with deductions and bonuses precisely', () => {
    const { gross, net } = calculateNetSalary({
      basic: 5000,
      housing: 1500,
      transport: 500,
      other: 0,
      overtime: 250.55,
      bonus: 100.45,
      deductions: 300.1
    });
    expect(gross).toBeCloseTo(7351, 2); // 5000+1500+500+250.55+100.45
    expect(net).toBeCloseTo(7050.9, 2);
  });

  it('computes overtime with configured multiplier', () => {
    const amt = computeOvertime(3000, 10, 8); // base salary 3000
    expect(amt).toBeGreaterThan(0);
  });
});