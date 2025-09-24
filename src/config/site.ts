export const siteConfig = {
  name: import.meta.env.VITE_APP_NAME || 'Nipon Payroll Pro',
  version: import.meta.env.VITE_APP_VERSION || '0.0.0',
  currency: import.meta.env.VITE_DEFAULT_CURRENCY || 'QAR',
  timezone: import.meta.env.VITE_DEFAULT_TIMEZONE || 'Asia/Qatar'
};