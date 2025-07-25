'use client';
import { signOut, useSession } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const NavLinks = ({ routes }: { routes: { name: string; href: string }[] }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <>
      <div className="hidden lg:flex items-center space-x-8">
        {session &&
          routes.map((route: { name: string; href: string }) => (
            <>
              <Link
                key={route.href}
                href={route.href}
                className="text-white hover:text-purple-600 text-lg font-bold transition-colors duration-200 hover:drop-shadow-md hover:cursor-pointer"
              >
                {route.name}
              </Link>
            </>
          ))}
      </div>

      {session ? (
        <div className=" hidden md:flex items-center space-x-4">
          <Button onClick={handleSignOut} className="bg-purple-600 text-white">
            Sign Out
          </Button>
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <Link
            href="/sign-in"
            className="px-3 py-2 md:px-4 md:py-2 text-sm text-white border border-white/40 rounded-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm font-medium hover:cursor-pointer"
          >
            Sign In
          </Link>
          <Link href="/sign-up">
            <Button className="px-3 py-2 md:px-4 md:py-2 text-sm bg-white text-purple-600 font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg hover:cursor-pointer">
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default NavLinks;
