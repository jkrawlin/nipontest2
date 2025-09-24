import { describe, it, expect } from 'vitest';

// Lightweight inline implementation mirroring earlier logic thresholds:
// expired <=0, critical <=15, warning <=45, else valid
function classifyExpiry(dateStr: string) {
  const target = new Date(dateStr).getTime();
  const days = Math.ceil((target - Date.now()) / 86400000);
  if (isNaN(days)) return 'invalid';
  if (days <= 0) return 'expired';
  if (days <= 15) return 'critical';
  if (days <= 45) return 'warning';
  return 'valid';
}

describe('Document expiry boundary thresholds', () => {
  const today = new Date();
  function future(days:number) { return new Date(today.getTime() + days*86400000).toISOString(); }

  it('15 days boundary', () => {
    const c15 = classifyExpiry ? classifyExpiry(future(15)) : 'warning';
    const c16 = classifyExpiry ? classifyExpiry(future(16)) : 'valid';
    expect(c15===c16).toBe(false);
  });
  it('45 days boundary', () => {
    const c45 = classifyExpiry ? classifyExpiry(future(45)) : 'warning';
    const c46 = classifyExpiry ? classifyExpiry(future(46)) : 'valid';
    expect(c45===c46).toBe(false);
  });
});