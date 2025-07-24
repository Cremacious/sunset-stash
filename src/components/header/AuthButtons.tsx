'use client';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useSession, signOut } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const AuthButtons = () => {
  const session = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  if (session.data?.user) {
    return <Button onClick={handleSignOut}>Sign Out</Button>;
  }

  return (
    <>
      <Link href="/sign-in">
        <button className="px-3 py-2 md:px-4 md:py-2 text-sm text-white border border-white/40 rounded-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm font-medium hover:cursor-pointer">
          Sign In
        </button>
      </Link>
      <Link href="/sign-up">
        <button className="px-3 py-2 md:px-4 md:py-2 text-sm bg-white text-purple-600 font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg hover:cursor-pointer">
          Get Started
        </button>
      </Link>
    </>
  );
};

export default AuthButtons;
