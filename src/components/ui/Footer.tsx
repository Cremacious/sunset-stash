import logo from '../../../public/sunset-stash-logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative z-10 px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
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

            <div className="text-center md:text-right">
              <p className="text-white/80 text-sm mb-2">
                © 2025 Sunset Stash. Created by Code://Mack
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
