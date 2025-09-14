import React, { useState, useEffect } from 'react';
import { navLinks } from '../data/content.ts';
import useActiveSection from '../hooks/useActiveSection.ts';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const sectionIds = navLinks.map(link => link.href.substring(1));
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleLinkClick = () => {
    setIsOpen(false);
  }

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#home" className="text-xl font-bold font-sans text-brand-blue-800 hover:text-brand-orange-600 transition-all duration-200 active:scale-95 inline-block">
              Shah Jahan Baloch
            </a>
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className={`font-sans font-semibold transition-all duration-200 active:scale-95 inline-block
                      ${isActive ? 'text-brand-orange-500' : 'text-gray-700 hover:text-brand-orange-500'}`
                    }
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="z-50 text-gray-700 focus:outline-none transition-transform active:scale-90" aria-label="Toggle menu" aria-expanded={isOpen}>
                <div className="w-6 h-6 relative flex flex-col justify-around">
                    <span className={`block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
                    <span className={`block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div 
          className="fixed inset-0 bg-black/50" 
          onClick={toggleMenu}
        ></div>
        <div 
          className={`absolute top-0 right-0 h-full w-2/3 max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
            {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={handleLinkClick}
                    className={`text-2xl font-sans font-semibold transition-all duration-200
                      ${isActive ? 'text-brand-orange-500' : 'text-gray-700 hover:text-brand-orange-500'}`
                    }
                  >
                    {link.name}
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;