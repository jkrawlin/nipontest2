import { useAuthStore } from '../stores/authStore';
import { LoginSchema } from '../lib/validators';

export function useAuth() {
  const { session, loading, error, login, logout } = useAuthStore();
  return {
    session,
    isLoading: loading,
    error,
    login: (data: LoginSchema) => login(data),
    logout
  };
}