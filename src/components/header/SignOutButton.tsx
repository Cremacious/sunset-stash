'use client';
import { signOut } from '@/lib/auth-client';
import { Button } from '../ui/button';

const SignOutButton = () => {
  const handleSignOut = async () => {
    await signOut();
    window.location.href = '/';
  };

  return <Button onClick={handleSignOut}>Sign Out</Button>;
};

export default SignOutButton;
