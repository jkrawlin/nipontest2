export const checkDomain = () => {
  if (typeof window === 'undefined') return;
  const currentDomain = window.location.hostname;
  const allowedDomains = [
    'localhost',
    'payroll-cae74.firebaseapp.com',
    'payroll-cae74.web.app',
    'elegant-faloodeh-8cbe0d.netlify.app'
  ];
  if (!allowedDomains.includes(currentDomain)) {
    console.warn(`\n⚠️ FIREBASE DOMAIN WARNING\nCurrent domain: ${currentDomain}\nThis domain may not be authorized in Firebase.\n\nTo fix:\n1. Go to Firebase Console\n2. Authentication > Settings\n3. Add domain: ${currentDomain}\n`);
  }
};
