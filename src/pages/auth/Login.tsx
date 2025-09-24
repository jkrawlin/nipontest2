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

  useEffect(() => {
    if (session) {
      navigate('/');
    }
  }, [session, navigate]);
  const form = useForm<LoginSchema>({ resolver: zodResolver(loginSchema), defaultValues: { email: '', password: '', remember: false } });

  const onSubmit = async (data: LoginSchema) => {
    try {
      await login(data);
    } catch (e) {
      // surface handled by store
    }
  };

  return (
    <div className="min-h-full flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">{siteConfig.name}</CardTitle>
          <CardDescription className="text-center">Secure Access</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="admin@niponpayroll.qa" {...form.register('email')} />
              {form.formState.errors.email && (
                <p className="text-xs text-red-600">{form.formState.errors.email.message}</p>
              )}
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Password</label>
              <Input type="password" placeholder="••••••" {...form.register('password')} />
              {form.formState.errors.password && (
                <p className="text-xs text-red-600">{form.formState.errors.password.message}</p>
              )}
            </div>
            <Button type="submit" disabled={isLoading} className="w-full">{isLoading ? 'Signing in...' : 'Sign In'}</Button>
          </form>
        </CardContent>
        <CardFooter className="text-xs text-gray-500 flex justify-between">
          <span>© {new Date().getFullYear()} Nipon</span>
          <span>v{siteConfig.version}</span>
        </CardFooter>
      </Card>
    </div>
  );
};