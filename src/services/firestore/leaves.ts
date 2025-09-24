import { collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import { firebaseDb } from '../../config/firebase';
import type { LeaveRecord } from '../../types/history';

export const LeaveFS = {
  async getAll(): Promise<LeaveRecord[]> {
    const snap = await getDocs(collection(firebaseDb, 'leave_records'));
    return snap.docs.map(d => ({ id: d.id, ...(d.data() as any) })) as LeaveRecord[];
  },
  async getEmployeeLeaves(employeeId: string): Promise<LeaveRecord[]> {
    const all = await this.getAll();
    return all.filter(r => r.employeeId === employeeId);
  },
  async add(record: Omit<LeaveRecord, 'id'>): Promise<LeaveRecord> {
    const docData = { ...record, createdAt: serverTimestamp() } as any;
    const ref = await addDoc(collection(firebaseDb, 'leave_records'), docData);
    return { ...record, id: ref.id } as LeaveRecord;
  }
};
