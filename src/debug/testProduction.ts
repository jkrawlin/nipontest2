export async function testProductionAuth() {
  const domain = window.location.hostname;
  console.log(`Testing Firebase on domain: ${domain}`);
  try {
    const { auth, db } = await import('@/lib/firebase/config');
    console.log('✅ Firebase loaded');
    const { signInWithEmailAndPassword } = await import('firebase/auth');
    const userCredential = await signInWithEmailAndPassword(auth, 'admin@niponpayroll.qa', 'Admin@2024');
    console.log('✅ Authentication successful:', userCredential.user.email);
    const { collection, getDocs, addDoc } = await import('firebase/firestore');
    const snapshot = await getDocs(collection(db, 'permanent_employees'));
    console.log(`✅ Firestore read successful: ${snapshot.size} documents`);
    const docRef = await addDoc(collection(db, 'test'), { domain, timestamp: new Date().toISOString(), test: true });
    console.log('✅ Firestore write successful:', docRef.id);
    console.log('🎉 All production tests passed!');
  } catch (error: any) {
    console.error('❌ Production test failed:', error);
    if (error?.code === 'auth/unauthorized-domain') {
      console.error(`\n🔴 SOLUTION:\n1. Go to: https://console.firebase.google.com/project/payroll-cae74/authentication/settings\n2. Click "Add domain"\n3. Add: ${domain}\n4. Save and try again\n`);
    }
  }
}

if (typeof window !== 'undefined') {
  (window as any).testProductionAuth = testProductionAuth;
}
