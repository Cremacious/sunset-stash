import Link from 'next/link';
import logo from '../../../public/sunset-stash-logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative z-10 px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20">
          <div className="flex flex-col space-y-4 md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src={logo}
                alt="Sunset Stash Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h1 className="text-xl fugaz-font text-white drop-shadow-md">
                  Sunset Stash
                </h1>
                <p className="text-xs text-white/80">
                  Florida Cannabis Community
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center md:pt-2 space-x-2">
              <div className="text-xs text-white/80">
                Enjoying Sunset Stash?
              </div>
              <Link
                href={'https://buymeacoffee.com/codemackcrh'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-300 transition-colors duration-200 text-center text-xs"
              >
                Buy me a coffee ☕️
              </Link>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/80 text-sm mb-2">
                © {new Date().getFullYear()} Sunset Stash
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
