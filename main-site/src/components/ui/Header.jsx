import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Track active section and scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'design', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      // Check if page is scrolled
      setIsScrolled(window.scrollY > 0);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const handleMySpaceClick = () => {
    // You can customize this to open a modal, navigate to a different page, etc.
    window.open('https://my-space-one-gamma.vercel.app/', '_blank');
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'design', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-300 ${
      isScrolled ? 'border-b border-gray-100 shadow-sm' : ''
    }`}>
      <div className="flex justify-between items-center px-6 md:px-24 lg:px-32 py-6 max-w-8xl mx-auto">
        
        {/* Logo/Brand */}
        <div 
          className="font-bold text-lg md:text-xl cursor-pointer hover:text-gray-600 transition-colors"
          onClick={() => scrollToSection('hero')}
        >
          #TheDesignerInMe
        </div>
       
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8 text-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`hover:text-gray-600 transition-all duration-300 relative ${
                  activeSection === item.id ? 'text-black font-medium' : 'text-gray-700'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black"></span>
                )}
              </button>
            ))}
          </div>
          
          {/* #MySpace Button */}
          <div className="ml-6 pl-6 border-l border-gray-200">
            <button 
              onClick={handleMySpaceClick}
              className="bg-black text-white px-4 py-2 text-xs font-medium rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              #mySpace
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={handleMySpaceClick}
            className="bg-black text-white px-3 py-1.5 text-xs font-medium rounded-full"
          >
            #MySpace
          </button>
          <button
            className="text-sm font-medium"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white border-t border-gray-100`}>
        <nav className="px-6 py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-sm hover:text-gray-600 transition-colors py-1 ${
                  activeSection === item.id ? 'text-black font-medium' : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;