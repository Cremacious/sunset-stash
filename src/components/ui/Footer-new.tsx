const Footer = () => {
  return (
    <footer className="relative mt-16 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Brand Section */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🌅</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white drop-shadow-md">
                  Sunset Stash
                </h3>
                <p className="text-xs text-white/80">
                  Florida Cannabis Community
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-white/80 text-sm mb-1">
                © 2025 Sunset Stash. Designed for Florida medical patients.
              </p>
              <p className="text-white/60 text-xs">
                🌴 Your tropical cannabis paradise 🌺
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3">
              <a className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <svg
                  fill="currentColor"
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <svg
                  fill="currentColor"
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
