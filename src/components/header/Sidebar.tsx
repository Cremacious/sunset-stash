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
      <SheetTrigger>
        <Menu
          size={40}
          className="text-white bg-white/20 backdrop-blur-sm rounded-2xl p-2 border border-white/30 hover:bg-white/30 transition-all duration-200"
        />
      </SheetTrigger>
      <SheetContent className="bg-white/10 backdrop-blur-md p-4 border border-white/20 px-2">
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
                  className="text-xl font-bold w-full text-center px-4 py-6 text-white hover:text-white hover:bg-white/20 rounded-lg transition-all duration-200  backdrop-blur-sm border border-white/10 hover:border-white/30"
                >
                  {route.name}
                </Button>
              ))}
              <div className="pt-6 border-t border-white/20 space-y-3">
                <Button className="text-xl font-bold  w-full px-4 py-6  rounded-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm">
                  Sign Out
                </Button>
              </div>
            </div>
          ) : (
            <div className="pt-6 border-t border-white/20 space-y-3">
              <Button
                onClick={() => handleButtonClick('/sign-in')}
                className="text-xl font-bold  w-full px-4 py-6  rounded-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                Sign In
              </Button>
              <Button
                onClick={() => handleButtonClick('/sign-up')}
                className="text-xl font-bold  w-full px-4 py-6 bg-white text-purple-600 rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg"
              >
                Get Started
              </Button>
            </div>
          )}
          {/* 
          <div className="space-y-3">
            {routes.map((route) => (
              <Button
                key={route.name}
                variant="ghost"
                onClick={() => handleButtonClick(route.href)}
                className="text-xl font-bold w-full text-center px-4 py-6 text-white hover:text-white hover:bg-white/20 rounded-lg transition-all duration-200  backdrop-blur-sm border border-white/10 hover:border-white/30"
              >
                {route.name}
              </Button>
            ))}
          </div>

          <div className="pt-6 border-t border-white/20 space-y-3">
            <Button
              onClick={() => handleButtonClick('/sign-in')}
              className="text-xl font-bold  w-full px-4 py-6  rounded-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
            >
              Sign In
            </Button>
            <Button
              onClick={() => handleButtonClick('/sign-up')}
              className="text-xl font-bold  w-full px-4 py-6 bg-white text-purple-600 rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg"
            >
              Get Started
            </Button>
          </div> */}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
