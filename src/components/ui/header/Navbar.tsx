'use client';

import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="relative z-20 px-4 py-6 md:px-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-2xl">🌅</span>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white drop-shadow-md">
              Sunset Stash
            </h1>
            <p className="text-xs text-white/80 hidden sm:block">
              Florida Cannabis Community
            </p>
          </div>
        </div>

        <div className="flex gap-2 md:gap-3">
          <button
            onClick={() => router.push('/sign-in')}
            className="px-3 py-2 md:px-4 md:py-2 text-sm text-white border border-white/40 rounded-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm font-medium"
          >
            Sign In
          </button>
          <button
            onClick={() => router.push('/sign-up')}
            className="px-3 py-2 md:px-4 md:py-2 text-sm bg-white text-orange-600 font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
