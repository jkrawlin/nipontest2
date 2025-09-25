import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  query,
  orderBy,
  Timestamp
} from 'firebase/firestore';
import { db, COLLECTIONS } from '@/lib/firebase/config';
import type { Employee } from '@/types/employee';

export class EmployeeFirebaseService {
  static async create(data: Omit<Employee, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    const docRef = await addDoc(collection(db, COLLECTIONS.EMPLOYEES), {
      ...data,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    return docRef.id;
  }

  static async getAll(): Promise<Employee[]> {
    const q = query(collection(db, COLLECTIONS.EMPLOYEES), orderBy('createdAt', 'desc'));
    const snap = await getDocs(q);
    const out: Employee[] = [];
    snap.forEach((d) => {
      const data: any = d.data();
      out.push({ id: d.id, ...data, createdAt: data.createdAt?.toDate?.() || new Date(), updatedAt: data.updatedAt?.toDate?.() || new Date() } as Employee);
    });
    return out;
  }

  static async getById(id: string): Promise<Employee | null> {
    const ds = await getDoc(doc(db, COLLECTIONS.EMPLOYEES, id));
    if (!ds.exists()) return null;
    const data: any = ds.data();
    return { id: ds.id, ...data, createdAt: data.createdAt?.toDate?.() || new Date(), updatedAt: data.updatedAt?.toDate?.() || new Date() } as Employee;
  }

  static async update(id: string, data: Partial<Employee>): Promise<void> {
    const ref = doc(db, COLLECTIONS.EMPLOYEES, id);
    await updateDoc(ref, { ...data, updatedAt: Timestamp.now() });
  }

  static async delete(id: string): Promise<void> {
    await deleteDoc(doc(db, COLLECTIONS.EMPLOYEES, id));
  }
}
