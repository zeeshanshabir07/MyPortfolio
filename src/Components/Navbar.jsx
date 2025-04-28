import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-12 transition-all duration-300 bg-transparent dark:bg-background-dark/80 shadow-md backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center py-4">

        {/* Logo */}
        <a href="#home" className="text-2xl font-extrabold flex items-center gap-2">
          <div className="flex items-center">
            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">ZEESHAN ShABIR</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-colors duration-300 ${
                item === 'Home' ? 'text-primary dark:text-primary-light' : 'text-gray-300 dark:text-gray-300'
              } hover:text-primary relative`}
            >
              {item}
              {item === 'Home' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary dark:bg-primary-light"></span>
              )}
            </a>
          ))}

          {/* Light/Dark Mode Button */}
          <button
            aria-label="Switch to light mode"
            className="p-2 rounded-full bg-surface-light dark:bg-surface-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            {/* Sun Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center space-x-4 lg:hidden">
          {/* Light/Dark Button */}
          <button
            aria-label="Switch to light mode"
            className="p-2 rounded-full bg-surface-light dark:bg-surface-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            {/* Sun Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          </button>

          {/* Menu Button */}
          <button className="p-2 text-white rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
