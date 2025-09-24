import { create } from 'zustand';

export interface NotificationItem {
  id: string;
  title: string;
  message?: string;
  type: 'info' | 'warning' | 'error' | 'success';
  createdAt: number;
}

interface NotificationState {
  items: NotificationItem[];
  push: (n: Omit<NotificationItem, 'id' | 'createdAt'>) => void;
  remove: (id: string) => void;
  clear: () => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  items: [],
  push: (n) => set((s) => ({ items: [...s.items, { ...n, id: crypto.randomUUID(), createdAt: Date.now() }] })),
  remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
  clear: () => set({ items: [] })
}));