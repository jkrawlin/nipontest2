import { FirebaseService } from './services/firebase/firebaseService';

// Test function to run in browser console
export async function testFirebase() {
  try {
    // 1. Test login
    console.log('Testing login...');
    const user = await FirebaseService.login('admin@niponpayroll.qa', 'Admin@2024');
    console.log('✅ Login successful:', user.email);

    // 2. Test save employee
    console.log('Testing save employee...');
    const employeeId = await FirebaseService.saveEmployee({
      employeeCode: 'EMP-TEST-001',
      firstName: 'Test',
      lastName: 'Employee',
      type: 'Permanent',
      position: 'Test Position',
      department: 'IT',
      status: 'Active'
    });
    console.log('✅ Employee saved with ID:', employeeId);

    // 3. Test get employees
    console.log('Testing get employees...');
    const employees = await FirebaseService.getEmployees();
    console.log('✅ Retrieved employees:', employees.length);

    // 4. Test logout
    console.log('Testing logout...');
    await FirebaseService.logout();
    console.log('✅ Logout successful');

    console.log('🎉 All tests passed!');
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

// Make it available globally for testing
(window as any).testFirebase = testFirebase;
