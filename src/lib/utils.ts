/**
 * Generic utility helpers. Keep pure & side-effect free.
 */
export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const assertNever = (value: never): never => {
  throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`);
};

export const safeJsonParse = <T>(raw: string | null): T | null => {
  if (!raw) return null;
  try { return JSON.parse(raw) as T; } catch { return null; }
};

export const formatPercent = (value: number, fractionDigits = 2) =>
  `${value.toFixed(fractionDigits)}%`;