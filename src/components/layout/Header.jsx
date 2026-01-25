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
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/images/logo.png" 
              alt="Candle of Hope International" 
              className="h-12 w-auto"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-secondary">Candle of Hope</h1>
              <p className="text-sm text-secondary-light">International</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-secondary hover:text-primary transition font-medium">About Us</a>
            <a href="#vision" className="text-secondary hover:text-primary transition font-medium">Vision</a>
            <a href="#projects" className="text-secondary hover:text-primary transition font-medium">Projects</a>
            <a href="#contact" className="text-secondary hover:text-primary transition font-medium">Contact</a>
          </nav>

          {/* Donate Button */}
          <div className="hidden md:block">
            <a 
              href="#donate" 
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition shadow-lg hover:shadow-xl"
            >
              Donate Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-secondary focus:outline-none"
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
          <div className="md:hidden pb-4 bg-cream-light rounded-lg mt-2 px-4">
            <nav className="flex flex-col space-y-3 py-3">
              <a href="#about" className="text-secondary hover:text-primary transition font-medium">About Us</a>
              <a href="#vision" className="text-secondary hover:text-primary transition font-medium">Vision</a>
              <a href="#projects" className="text-secondary hover:text-primary transition font-medium">Projects</a>
              <a href="#contact" className="text-secondary hover:text-primary transition font-medium">Contact</a>
              <a 
                href="#donate" 
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition text-center shadow-lg"
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