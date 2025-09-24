import { format } from 'date-fns';
import { siteConfig } from '../config/site';

export const formatCurrency = (amount: number, currency = siteConfig.currency) =>
  new Intl.NumberFormat('en-QA', { style: 'currency', currency }).format(amount);

export const formatDate = (date: Date | string | number, fmt = 'yyyy-MM-dd') =>
  format(typeof date === 'string' || typeof date === 'number' ? new Date(date) : date, fmt);