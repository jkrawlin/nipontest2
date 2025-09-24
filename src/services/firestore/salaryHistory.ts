import { collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import { firebaseDb } from '../../config/firebase';
import type { SalaryHistory } from '../../types/history';

export const SalaryHistoryFS = {
  async getAll(): Promise<SalaryHistory[]> {
    const snap = await getDocs(collection(firebaseDb, 'salary_history'));
    return snap.docs.map(d => ({ id: d.id, ...(d.data() as any) })) as SalaryHistory[];
  },
  async getByEmployee(employeeId: string): Promise<SalaryHistory[]> {
    const all = await this.getAll();
    return all.filter(h => h.employeeId === employeeId);
  },
  async add(record: Omit<SalaryHistory, 'id'>): Promise<SalaryHistory> {
    const docData = { ...record, createdAt: serverTimestamp() } as any;
    const ref = await addDoc(collection(firebaseDb, 'salary_history'), docData);
    return { ...record, id: ref.id } as SalaryHistory;
  }
};
