'use client';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu
          size={40}
          className="text-white bg-white/20 backdrop-blur-sm rounded-2xl p-2 border border-white/30 hover:bg-white/30 transition-all duration-200"
        />
      </SheetTrigger>
      <SheetContent className="bg-gradient-to-br from-orange-400/95 via-pink-500/95 to-blue-600/95 backdrop-blur-md border-l border-white/20 px-2">
        <SheetHeader className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-3xl">🌅</span>
            </div>
            <div>
              <SheetTitle className="text-2xl font-bold text-white drop-shadow-md">
                Sunset Stash
              </SheetTitle>
              <SheetDescription className="text-white/80 text-sm">
                Florida Cannabis Community
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        <div className="space-y-4">
          {/* Navigation Links */}
          <div className="space-y-3">
            <button
              onClick={() => router.push('/dashboard')}
              className="w-full text-center px-4 py-3 text-white/90 hover:text-white hover:bg-white/20 rounded-lg transition-all duration-200 font-medium backdrop-blur-sm border border-white/10 hover:border-white/30"
            >
              Dashboard
            </button>
            <button
              onClick={() => router.push('/purchases')}
              className="w-full text-center px-4 py-3 text-white/90 hover:text-white hover:bg-white/20 rounded-lg transition-all duration-200 font-medium backdrop-blur-sm border border-white/10 hover:border-white/30"
            >
              Purchases
            </button>
            <button
              onClick={() => router.push('/stash')}
              className="w-full text-center px-4 py-3 text-white/90 hover:text-white hover:bg-white/20 rounded-lg transition-all duration-200 font-medium backdrop-blur-sm border border-white/10 hover:border-white/30"
            >
              Stash
            </button>
            <button
              onClick={() => router.push('/social')}
              className="w-full text-center px-4 py-3 text-white/90 hover:text-white hover:bg-white/20 rounded-lg transition-all duration-200 font-medium backdrop-blur-sm border border-white/10 hover:border-white/30"
            >
              Social
            </button>
            <button
              onClick={() => router.push('/friends')}
              className="w-full text-center px-4 py-3 text-white/90 hover:text-white hover:bg-white/20 rounded-lg transition-all duration-200 font-medium backdrop-blur-sm border border-white/10 hover:border-white/30"
            >
              Friends
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="pt-6 border-t border-white/20 space-y-3">
            <button
              onClick={() => router.push('/sign-in')}
              className="w-full px-4 py-3 text-white border border-white/40 rounded-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm font-medium"
            >
              Sign In
            </button>
            <button
              onClick={() => router.push('/sign-up')}
              className="w-full px-4 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
