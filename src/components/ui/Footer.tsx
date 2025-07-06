const Footer = () => {
  return (
    <footer className="relative z-10 px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🌅</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-white drop-shadow-md">
                  Sunset Stash
                </h1>
                <p className="text-xs text-white/80">
                  Florida Cannabis Community
                </p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-white/80 text-sm mb-2">
                © 2025 Sunset Stash. Designed for Florida medical patients.
              </p>
              <p className="text-white/60 text-xs">
                🌴 Your tropical cannabis paradise 🌺
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
