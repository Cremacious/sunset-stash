import { signOut } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOutButton;
