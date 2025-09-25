import { db, auth, collections } from '@/config/firebase';
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy
} from 'firebase/firestore';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export class FirebaseService {
  // Auth methods
  static async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error: any) {
      console.error('Login error:', error);
      throw new Error(error.message);
    }
  }

  static async logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  // Employee methods
  static async saveEmployee(employeeData: any) {
    try {
      const isPermanent = employeeData.type === 'Permanent' || employeeData.employeeType === 'Permanent';
      const isTemporary = employeeData.type === 'Temporary' || employeeData.employeeType === 'Temporary';
      const collName = isPermanent ? 'permanent_employees' : (isTemporary ? 'temporary_employees' : collections.employees);

      if (employeeData.id) {
        const docRef = doc(db, collName, employeeData.id);
        await updateDoc(docRef, {
          ...employeeData,
          updatedAt: new Date().toISOString()
        });
        return employeeData.id;
      } else {
        const docRef = await addDoc(collection(db, collName), {
          ...employeeData,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
        return docRef.id;
      }
    } catch (error) {
      console.error('Error saving employee:', error);
      throw error;
    }
  }

  static async getEmployees() {
    try {
      const employees: any[] = [];
      // Permanent employees
      try {
        const qPerm = query(collection(db, 'permanent_employees'), orderBy('employeeCode'));
        const permSnap = await getDocs(qPerm);
        permSnap.forEach((docSnap) => employees.push({ id: docSnap.id, employeeType: 'Permanent', ...docSnap.data() }));
      } catch {}
      // Temporary employees
      try {
        const qTemp = query(collection(db, 'temporary_employees'), orderBy('employeeCode'));
        const tempSnap = await getDocs(qTemp);
        tempSnap.forEach((docSnap) => employees.push({ id: docSnap.id, employeeType: 'Temporary', ...docSnap.data() }));
      } catch {}
      // Optional: generic employees collection if present
      try {
        const qGen = query(collection(db, collections.employees), orderBy('employeeCode'));
        const genSnap = await getDocs(qGen);
        genSnap.forEach((docSnap) => employees.push({ id: docSnap.id, ...docSnap.data() }));
      } catch {}
      return employees;
    } catch (error) {
      console.error('Error getting employees:', error);
      const stored = localStorage.getItem('employees');
      return stored ? JSON.parse(stored) : [];
    }
  }

  static async deleteEmployee(id: string, type?: 'Permanent'|'Temporary') {
    try {
      const collName = type === 'Permanent' ? 'permanent_employees' : type === 'Temporary' ? 'temporary_employees' : collections.employees;
      await deleteDoc(doc(db, collName, id));
    } catch (error) {
      console.error('Error deleting employee:', error);
      throw error;
    }
  }

  // Customer methods
  static async saveCustomer(customerData: any) {
    try {
      if (customerData.id) {
        const docRef = doc(db, collections.customers, customerData.id);
        await updateDoc(docRef, {
          ...customerData,
          updatedAt: new Date().toISOString()
        });
        return customerData.id;
      } else {
        const docRef = await addDoc(collection(db, collections.customers), {
          ...customerData,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
        return docRef.id;
      }
    } catch (error) {
      console.error('Error saving customer:', error);
      throw error;
    }
  }

  static async getCustomers() {
    try {
      const querySnapshot = await getDocs(collection(db, collections.customers));
      const customers: any[] = [];
      querySnapshot.forEach((docSnap) => {
        customers.push({ id: docSnap.id, ...docSnap.data() });
      });
      return customers;
    } catch (error) {
      console.error('Error getting customers:', error);
      const stored = localStorage.getItem('customers');
      return stored ? JSON.parse(stored) : [];
    }
  }
}

export default FirebaseService;