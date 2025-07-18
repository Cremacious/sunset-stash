'use client';

import { useRouter } from 'next/navigation';
import { signOut, useSession } from '@/lib/auth-client';
import Sidebar from './Sidebar';
import { Button } from '../ui/button';

const Navbar = () => {
  const router = useRouter();
  const session = useSession();

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  const routes = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Purchases', href: '/purchases' },
    { name: 'Stash', href: '/stash' },
    { name: 'Social', href: '/social' },
  ];

  return (
    <nav className="relative z-20 px-4 md:px-8 bg-white/10 backdrop-blur-md p-4 border border-white/20">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
    

          <button onClick={() => router.push('/')}>
            <h1 className="text-xl md:text-2xl mt-1 fugaz-font text-white drop-shadow-md">
              Sunset Stash
            </h1>
          </button>
        </div>
        <div className="flex md:hidden">
          <Sidebar routes={routes} />
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          {routes.map((route) => (
            <button
              key={route.href}
              onClick={() => router.push(route.href)}
              className="text-white hover:text-purple-600 text-lg font-bold transition-colors duration-200 hover:drop-shadow-md hover:cursor-pointer"
            >
              {route.name}
            </button>
          ))}
        </div>

        <div className="hidden md:flex gap-2 md:gap-3">
          {session.data?.user ? (
            <Button onClick={handleSignOut}>Sign Out</Button>
          ) : (
            <>
              <button
                onClick={() => router.push('/sign-in')}
                className="px-3 py-2 md:px-4 md:py-2 text-sm text-white border border-white/40 rounded-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm font-medium hover:cursor-pointer"
              >
                Sign In
              </button>
              <button
                onClick={() => router.push('/sign-up')}
                className="px-3 py-2 md:px-4 md:py-2 text-sm bg-white text-purple-600 font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg hover:cursor-pointer"
              >
                Get Started
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
