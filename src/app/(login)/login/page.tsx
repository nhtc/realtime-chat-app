'use client';
import GoogleIcon from '@/assets/Icons/googleIcon';
import Button from '@/components/ui/Button';
import React, { useEffect, useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await signIn('google');
      console.log('15');
    } catch (error) {
      toast.error('Some thing went wrong with your login');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col items-center max-w-md space-y-8">
        <div className="flex flex-col items-center gap-8">
          logo
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">Sign in to your account</h2>
        </div>
        <Button type="button" isLoading={isLoading} className="max-w-sm mx-auto w-full" onClick={handleGoogleLogin}>
          {isLoading ? null : <GoogleIcon className="gg-icon" style={{ height: '30px' }} />}
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
