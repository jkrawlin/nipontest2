import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginSchema } from '../../lib/validators';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { siteConfig } from '../../config/site';

export const LoginPage: React.FC = () => {
  const { login, isLoading, session } = useAuth();
  const navigate = useNavigate();
  const form = useForm<LoginSchema>({ resolver: zodResolver(loginSchema), defaultValues: { email: '', password: '', remember: false } });

  useEffect(() => { if (session) navigate('/dashboard'); }, [session, navigate]);

  const onSubmit = async (data: LoginSchema) => {
    try { await login(data); } catch { /* errors surfaced via store */ }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8A1538] via-red-600 to-amber-500 flex items-center justify-center p-6">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-2">
          <div className="flex items-center justify-center mb-2">
            <div className="w-16 h-16 bg-gradient-to-br from-[#8A1538] to-red-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">NP</div>
          </div>
          <CardTitle className="text-2xl text-center tracking-tight">Welcome Back</CardTitle>
          <CardDescription className="text-center text-sm">Sign in to continue to {siteConfig.name}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-wide text-gray-600">Email</label>
              <Input type="email" placeholder="admin@niponpayroll.qa" {...form.register('email')} />
              {form.formState.errors.email && <p className="text-xs text-red-600">{form.formState.errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-wide text-gray-600">Password</label>
              <Input type="password" placeholder="••••••" {...form.register('password')} />
              {form.formState.errors.password && <p className="text-xs text-red-600">{form.formState.errors.password.message}</p>}
            </div>
            <Button type="submit" disabled={isLoading} className="w-full bg-[#8A1538] hover:bg-[#6A0F2B]">{isLoading ? 'Signing in...' : 'Sign In'}</Button>
            <div className="text-center text-[11px] text-gray-500 space-y-1">
              <p>Demo Credentials</p>
              <p className="font-mono">admin@niponpayroll.qa / admin123</p>
            </div>
          </form>
        </CardContent>
        <CardFooter className="text-[11px] text-gray-500 flex justify-between">
          <span>© {new Date().getFullYear()} Nipon</span>
          <span>v{siteConfig.version}</span>
        </CardFooter>
      </Card>
    </div>
  );
};