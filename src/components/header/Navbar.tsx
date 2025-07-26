'use client';
import Link from 'next/link';
import Sidebar from './Sidebar';
import { useSession, signOut } from '@/lib/auth-client';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const routes = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Purchases', href: '/purchases' },
  { name: 'Stash', href: '/stash' },
  { name: 'Social', href: '/social' },
];

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  // Only render session-dependent UI after session is loaded
  if (isPending) {
    return (
      <nav className="relative z-20 mb-4 px-4 md:px-8 bg-white/10 backdrop-blur-md p-4 border border-white/20">
        <div className="flex w-full items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <h1 className="text-xl md:text-2xl ml-4 mt-1 fugaz-font text-white drop-shadow-md">
                Sunset Stash <span className="text-purple-600"> Beta</span>
              </h1>
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="relative z-20 mb-4 px-4 md:px-8 bg-white/10 backdrop-blur-md p-4 border border-white/20">
      <div className="flex w-full items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <Link href="/">
            <h1 className="text-xl md:text-2xl ml-4 mt-1 fugaz-font text-white drop-shadow-md">
              Sunset Stash <span className="text-purple-600"> Beta</span>
            </h1>
          </Link>
        </div>

        {session ? (
          <>
            <div className="flex-1 hidden md:flex justify-center">
              <div className="flex items-center space-x-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="text-white hover:text-purple-600 text-lg font-bold transition-colors duration-200 hover:drop-shadow-md hover:cursor-pointer"
                  >
                    {route.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:flex justify-end items-center ml-4">
              <Button onClick={handleSignOut}>Sign Out</Button>
            </div>
          </>
        ) : (
          <div className="flex-1 hidden md:flex" />
        )}

        {!session && (
          <div className="hidden md:flex justify-end items-center ml-4">
            <Link href="/sign-up">
              <Button>Get Started</Button>
            </Link>
            <Button asChild variant={'outline'} className="ml-2">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </div>
        )}

        <div className="flex md:hidden ml-auto">
          <Sidebar routes={routes} />
        </div>
      </div>
    </nav>
  );
}
