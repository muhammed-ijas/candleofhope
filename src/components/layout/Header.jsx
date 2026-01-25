import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Left Side - Logo and Navigation */}
          <div className="flex items-center space-x-8 lg:space-x-12">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="Candle of Hope International" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation - Left Side with smaller text */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              <a 
                href="#about" 
                className="text-secondary hover:text-primary transition-all duration-300 font-medium relative group py-1 text-sm"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#vision" 
                className="text-secondary hover:text-primary transition-all duration-300 font-medium relative group py-1 text-sm"
              >
                Vision
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#projects" 
                className="text-secondary hover:text-primary transition-all duration-300 font-medium relative group py-1 text-sm"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#contact" 
                className="text-secondary hover:text-primary transition-all duration-300 font-medium relative group py-1 text-sm"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>
          </div>

          {/* Right Side - Donate Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="#donate" 
              className="group relative bg-primary text-white px-6 py-2 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Donate Now
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-secondary focus:outline-none hover:text-primary transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 bg-cream-light rounded-lg mt-2 px-4 shadow-lg">
            <nav className="flex flex-col space-y-3 py-3">
              <a 
                href="#about" 
                className="text-secondary hover:text-primary transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-cream text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#vision" 
                className="text-secondary hover:text-primary transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-cream text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Vision
              </a>
              <a 
                href="#projects" 
                className="text-secondary hover:text-primary transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-cream text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-secondary hover:text-primary transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-cream text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="#donate" 
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-all duration-300 text-center shadow-lg font-medium text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;