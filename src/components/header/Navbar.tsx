import Link from 'next/link';
import Sidebar from './Sidebar';

import NavLinks from './NavLinks';

const routes = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Purchases', href: '/purchases' },
  { name: 'Stash', href: '/stash' },
  { name: 'Social', href: '/social' },
];

export default async function Navbar() {
  return (
    <nav className="relative z-20 mb-4 px-4 md:px-8 bg-white/10 backdrop-blur-md p-4 border border-white/20">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <Link href="/">
            <h1 className="text-xl md:text-2xl ml-4 mt-1 fugaz-font text-white drop-shadow-md">
              Sunset Stash <span className="text-purple-600"> Beta</span>
            </h1>
          </Link>
        </div>
        <div className="flex md:hidden">
          <Sidebar routes={routes} />
        </div>
        <div className="hidden md:flex">
          <NavLinks routes={routes} />
        </div>
      </div>
    </nav>
  );
}
