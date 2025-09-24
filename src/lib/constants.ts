export const APP_CONSTANTS = {
  WORKING_DAYS_PER_MONTH: Number(import.meta.env.VITE_WORKING_DAYS_PER_MONTH || 30),
  OVERTIME_MULTIPLIER: Number(import.meta.env.VITE_OVERTIME_MULTIPLIER || 1.5),
  SESSION_TIMEOUT_MINUTES: Number(import.meta.env.VITE_SESSION_TIMEOUT_MINUTES || 60)
};

export const STORAGE_KEYS = {
  SESSION: 'npp_session',
  DRAFT_EMPLOYEE: 'npp_draft_employee'
};