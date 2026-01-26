import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-red-100">
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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
                 <Link 
                to="/" 
                className={`transition-all duration-300 font-medium relative group py-1 text-sm ${
                  isActive('/') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                }`}
              >
                Home
                <span className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                  isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              <Link 
                to="/vision" 
                className={`transition-all duration-300 font-medium relative group py-1 text-sm ${
                  isActive('/vision') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                }`}
              >
                Vision
                <span className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                  isActive('/vision') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              <Link 
                to="/projects" 
                className={`transition-all duration-300 font-medium relative group py-1 text-sm ${
                  isActive('/projects') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                }`}
              >
                Projects
                <span className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                  isActive('/projects') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              <Link 
                to="/contact" 
                className={`transition-all duration-300 font-medium relative group py-1 text-sm ${
                  isActive('/contact') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                }`}
              >
                Contact
                <span className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                  isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              <Link 
                to="/join-us" 
                className={`transition-all duration-300 font-medium relative group py-1 text-sm ${
                  isActive('/join-us') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                }`}
              >
                Join Us
                <span className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                  isActive('/join-us') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              <Link 
                to="/events" 
                className={`transition-all duration-300 font-medium relative group py-1 text-sm ${
                  isActive('/events') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                }`}
              >
                Events
                <span className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                  isActive('/events') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            </nav>
          </div>

          {/* Right Side - Donate Button */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/donate" 
              className="group relative bg-gradient-to-r from-red-600 to-orange-600 text-white px-5 py-2 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 text-sm font-semibold"
            >
              <span className="relative z-10 flex items-center gap-2">
                Donate
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none hover:text-red-600 transition-colors duration-300"
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
          <div className="md:hidden pb-4 bg-red-50 rounded-lg mt-2 px-4 shadow-lg">
            <nav className="flex flex-col space-y-3 py-3">
                  <Link 
                to="/" 
                className={`transition-all duration-300 font-medium py-2 px-3 rounded-lg text-sm ${
                  isActive('/') 
                    ? 'bg-red-100 text-red-700' 
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/vision" 
                className={`transition-all duration-300 font-medium py-2 px-3 rounded-lg text-sm ${
                  isActive('/vision') 
                    ? 'bg-red-100 text-red-700' 
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Vision
              </Link>
              <Link 
                to="/projects" 
                className={`transition-all duration-300 font-medium py-2 px-3 rounded-lg text-sm ${
                  isActive('/projects') 
                    ? 'bg-red-100 text-red-700' 
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                className={`transition-all duration-300 font-medium py-2 px-3 rounded-lg text-sm ${
                  isActive('/contact') 
                    ? 'bg-red-100 text-red-700' 
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/join-us" 
                className={`transition-all duration-300 font-medium py-2 px-3 rounded-lg text-sm ${
                  isActive('/join-us') 
                    ? 'bg-red-100 text-red-700' 
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Join Us
              </Link>
              <Link 
                to="/events" 
                className={`transition-all duration-300 font-medium py-2 px-3 rounded-lg text-sm ${
                  isActive('/events') 
                    ? 'bg-red-100 text-red-700' 
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                to="/donate" 
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 text-center shadow-lg font-semibold text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;