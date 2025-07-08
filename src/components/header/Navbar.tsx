'use client';

import { useRouter } from 'next/navigation';
import { signOut, useSession } from '@/lib/auth-client';
import Sidebar from './Sidebar';
import { Button } from '../ui/button';
import Logo from '../../../public/sunset-stash-logo.png';
import Image from 'next/image';

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
    <nav className="relative z-20 px-4 md:px-8 mb-10 bg-white/10 backdrop-blur-md p-4 border border-white/20">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          {/* <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-2xl">🌅</span>
          </div> */}
          <Image
            className="rounded-full"
            src={Logo}
            alt="Logo"
            height={50}
            width={50}
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white drop-shadow-md">
              Sunset Stash
            </h1>
          </div>
        </div>
        <div className="flex md:hidden">
          <Sidebar routes={routes} />
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          {routes.map((route) => (
            <button
              key={route.href}
              onClick={() => router.push(route.href)}
              className="text-white hover:text-purple-600 text-lg font-bold transition-colors duration-200 hover:drop-shadow-md"
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
                className="px-3 py-2 md:px-4 md:py-2 text-sm text-white border border-white/40 rounded-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm font-medium"
              >
                Sign In
              </button>
              <button
                onClick={() => router.push('/sign-up')}
                className="px-3 py-2 md:px-4 md:py-2 text-sm bg-white text-purple-600 font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg"
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
