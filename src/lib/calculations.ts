import Decimal from 'decimal.js';
import { APP_CONSTANTS } from './constants';

export interface SalaryComponents {
  basic: number;
  housing: number;
  transport: number;
  other: number;
  overtime?: number;
  bonus?: number;
  deductions?: number;
}

export interface NetSalaryResult {
  gross: number;
  net: number;
}

/**
 * Calculates net salary with high precision using decimal.js to avoid FP drift.
 */
export function calculateNetSalary(components: SalaryComponents): NetSalaryResult {
  const gross = new Decimal(components.basic)
    .plus(components.housing)
    .plus(components.transport)
    .plus(components.other)
    .plus(components.overtime || 0)
    .plus(components.bonus || 0);

  const net = gross.minus(components.deductions || 0);

  return { gross: Number(gross.toFixed(2)), net: Number(net.toFixed(2)) };
}

/**
 * Computes overtime amount given base salary & overtime hours.
 */
export function computeOvertime(baseSalary: number, hours: number, hoursPerDay = 8) {
  const dailyRate = new Decimal(baseSalary).div(APP_CONSTANTS.WORKING_DAYS_PER_MONTH);
  const hourlyRate = dailyRate.div(hoursPerDay);
  return Number(hourlyRate.mul(APP_CONSTANTS.OVERTIME_MULTIPLIER).mul(hours).toFixed(2));
}