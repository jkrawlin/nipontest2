export const handleFirebaseError = (error: any) => {
  console.error('Firebase Error:', error);

  if (error?.code?.includes?.('auth/')) {
    switch (error.code) {
      case 'auth/unauthorized-domain':
        console.error('🔴 DOMAIN NOT AUTHORIZED IN FIREBASE!');
        console.error('Add this domain to Firebase Console > Authentication > Settings > Authorized domains');
        console.error('Current domain:', window.location.hostname);
        return 'This domain is not authorized. Please contact support.';
      case 'auth/network-request-failed':
        return 'Network error. Please check your connection.';
      case 'auth/invalid-credential':
        return 'Invalid email or password.';
      case 'auth/invalid-email':
        return 'Invalid email address.';
      case 'auth/too-many-requests':
        return 'Too many attempts. Please try again later.';
      case 'auth/user-not-found':
        return 'User not found. Please check credentials.';
      default:
        return error.message;
    }
  }

  if (typeof error?.code === 'string' && error.code.includes('permission-denied')) {
    console.error('🔴 FIRESTORE PERMISSION DENIED!');
    console.error('User may not be authenticated or rules are blocking access');
    return 'Access denied. Please log in again.';
  }

  return error?.message || 'An unexpected error occurred';
};
