import { collection, getDocs, addDoc, serverTimestamp, Timestamp } from 'firebase/firestore';
import { firebaseDb } from '../../config/firebase';
import type { PermanentEmployee, TemporaryEmployee, Employee } from '../../types/employee';

function genEmployeeCode(prefix: 'PRM'|'TMP') {
  const year = new Date().getFullYear();
  const rand = Math.floor(Math.random()*10000).toString().padStart(4,'0');
  return `${prefix}-${year}-${rand}`;
}

function toDateString(val?: string | Date | Timestamp): string | undefined {
  if (!val) return undefined;
  if (typeof val === 'string') return val;
  if (val instanceof Date) return val.toISOString();
  try { return (val as Timestamp).toDate().toISOString(); } catch { return undefined; }
}

export async function getAllPermanentEmployeesFS(): Promise<PermanentEmployee[]> {
  const snap = await getDocs(collection(firebaseDb, 'permanent_employees'));
  return snap.docs.map(d => ({ id: d.id, ...(d.data() as any) })) as PermanentEmployee[];
}

export async function getAllTemporaryEmployeesFS(): Promise<TemporaryEmployee[]> {
  const snap = await getDocs(collection(firebaseDb, 'temporary_employees'));
  return snap.docs.map(d => ({ id: d.id, ...(d.data() as any) })) as TemporaryEmployee[];
}

export async function createPermanentEmployeeFS(data: Omit<PermanentEmployee,'id'|'employeeCode'|'createdAt'|'updatedAt'|'employeeType'>): Promise<PermanentEmployee> {
  const docData: any = {
    ...data,
    employeeCode: genEmployeeCode('PRM'),
    employeeType: 'Permanent',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  };
  // compute totals similar to local service
  const c = docData.compensation;
  c.totalMonthlySalary = (c.basicSalary||0) + (c.housingAllowance||0) + (c.transportAllowance||0) + (c.foodAllowance||0) + (c.phoneAllowance||0) + (c.otherAllowances||0);
  const ref = await addDoc(collection(firebaseDb, 'permanent_employees'), docData);
  return { ...docData, id: ref.id, createdAt: toDateString(docData.createdAt)!, updatedAt: toDateString(docData.updatedAt)! } as PermanentEmployee;
}

export async function createTemporaryEmployeeFS(data: Omit<TemporaryEmployee,'id'|'employeeCode'|'createdAt'|'updatedAt'|'employeeType'>): Promise<TemporaryEmployee> {
  const docData: any = {
    ...data,
    employeeCode: genEmployeeCode('TMP'),
    employeeType: 'Temporary',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  };
  const ref = await addDoc(collection(firebaseDb, 'temporary_employees'), docData);
  return { ...docData, id: ref.id, createdAt: toDateString(docData.createdAt)!, updatedAt: toDateString(docData.updatedAt)! } as TemporaryEmployee;
}
