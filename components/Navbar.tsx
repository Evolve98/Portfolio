
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavLink as NavLinkType } from '../types';
import { MenuIcon, XIcon } from './icons/MenuIcons';

interface NavbarProps {
  navLinks: NavLinkType[];
}

const Navbar: React.FC<NavbarProps> = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const NavItem: React.FC<{ link: NavLinkType; onClick?: () => void; className?: string }> = ({ link, onClick, className }) => {
     // For external links or direct hash links on the same page (HomePage)
    if (link.isExternal || (location.pathname === '/' && link.href.startsWith('/#'))) {
      return (
        <a
          href={link.href.startsWith('/') ? link.href.substring(1) : link.href} // Use relative hash for same page
          onClick={onClick}
          className={className || "px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-cyan-500 hover:text-white transition-colors"}
          target={link.isExternal ? "_blank" : "_self"}
          rel={link.isExternal ? "noopener noreferrer" : ""}
        >
          {link.label}
        </a>
      );
    }
    // For navigating to a hash on the HomePage from another page
    return (
      <Link
        to={link.href}
        onClick={onClick}
        className={className || "px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-cyan-500 hover:text-white transition-colors"}
      >
        {link.label}
      </Link>
    );
  };


  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-slate-800/95 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/#home" className="text-2xl font-bold text-cyan-400" style={{fontFamily: "'Poppins', sans-serif"}}>
            Portfolio {/* Or Your Name */}
          </Link>
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <NavItem key={link.href} link={link} />
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-200 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
             {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800/95" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
               <NavItem 
                key={link.href} 
                link={link} 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-cyan-600 hover:text-white transition-colors"
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;