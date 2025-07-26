import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 md:px-24 lg:px-32 py-6 max-w-8xl mx-auto">      
    <div className="font-bold text-lg md:text-xl">#TheDesignerInMe</div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-10 text-sm">
        <a href="#work" className="hover:text-gray-600 transition-colors">Work</a>
        <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
        <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-sm"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        Menu
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute top-16 right-6 bg-white shadow-lg rounded-lg p-4 md:hidden">
          <div className="flex flex-col space-y-3 text-sm">
            <a 
              href="#work" 
              className="hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </a>
            <a 
              href="#about" 
              className="hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

