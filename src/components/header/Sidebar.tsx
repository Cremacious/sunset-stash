'use client';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../ui/button';
import Logo from '../../../public/sunset-stash-logo.png';
import Image from 'next/image';
import { useSession } from '@/lib/auth-client';

interface Routes {
  name: string;
  href: string;
}

const Sidebar = ({ routes }: { routes: Routes[] }) => {
  const session = useSession();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (path: string) => {
    setIsOpen(!isOpen);
    router.push(path);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden p-2 text-white bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-200"
        >
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-80 p-0 border-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-800 to-blue-700 opacity-80 z-0"></div>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md z-10"></div>
        <div className="relative z-20 p-4 h-full">
          <SheetHeader className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                className="rounded-full"
                src={Logo}
                alt="Logo"
                height={50}
                width={50}
              />
              <div>
                <SheetTitle className="text-2xl font-bold text-white drop-shadow-md">
                  Sunset Stash
                </SheetTitle>
              </div>
            </div>
          </SheetHeader>

          <div className="space-y-4">
            {session ? (
              <div className="space-y-3">
                {routes.map((route) => (
                  <Button
                    key={route.name}
                    variant="ghost"
                    onClick={() => handleButtonClick(route.href)}
                    className="text-xl font-bold w-full text-center px-4 py-6 text-white hover:text-white relative overflow-hidden rounded-lg transition-all duration-300 group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                    <div className="absolute inset-0 backdrop-blur-sm border border-white/20 group-hover:border-white/40 rounded-lg transition-all duration-300"></div>

                    <span className="relative z-10">{route.name}</span>
                  </Button>
                ))}
                <div className="pt-6 border-t border-white/20 space-y-3">
                  <Button className="w-full text-xl p-6">
                    <span className="relative z-10 text-white">Sign Out</span>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="pt-6 border-t border-white/20 space-y-3">
                <Button
                  onClick={() => handleButtonClick('/sign-in')}
                  className="text-xl font-bold w-full px-4 py-6 rounded-lg relative overflow-hidden transition-all duration-300 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-600/30 opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                  <div className="absolute inset-0 backdrop-blur-sm border border-white/20 group-hover:border-white/40 rounded-lg transition-all duration-300"></div>

                  <span className="relative z-10 text-white">Sign In</span>
                </Button>
                <Button
                  onClick={() => handleButtonClick('/sign-up')}
                  className="text-xl font-bold w-full px-4 py-6 rounded-lg relative overflow-hidden transition-all duration-300 group shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-95 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute inset-0 backdrop-blur-sm border border-white/50 group-hover:border-white/70 rounded-lg transition-all duration-300"></div>

                  <span className="relative z-10 text-purple-600 font-bold">
                    Get Started
                  </span>
                </Button>
              </div>
            )}
          </div>
        </div>{' '}
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
