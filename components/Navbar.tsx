
import React, { useState, useEffect } from 'react';
import { NavLink as NavLinkType } from '../types'; // Renamed to avoid conflict with React Router's NavLink if ever used
import { MenuIcon, XIcon } from './icons/MenuIcons'; // Simple menu icons

interface NavbarProps {
  navLinks: NavLinkType[];
}

const Navbar: React.FC<NavbarProps> = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const genericHamburgerLine = `h-0.5 w-6 my-1 rounded-full bg-cyan-400 transition ease transform duration-300`;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-slate-800/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-2xl font-bold text-cyan-400" style={{fontFamily: "'Poppins', sans-serif"}}>
            Portfolio
          </a>
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-cyan-500 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-200 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
              aria-label="Open menu"
            >
             {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)} // Close menu on click
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-cyan-600 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;