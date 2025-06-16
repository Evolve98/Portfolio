
import React, { useState, useEffect } from 'react';
import { NavLink as NavLinkType } from '../types';
import { MenuIcon, XIcon } from './icons/MenuIcons';

type ActivePage = 'home' | 'about';

interface NavbarProps {
  navLinks: NavLinkType[];
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  setTargetScrollId: (id: string | null) => void;
}

const Navbar: React.FC<NavbarProps> = ({ navLinks, activePage, setActivePage, setTargetScrollId }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (link: NavLinkType) => {
    setIsMobileMenuOpen(false); // Close mobile menu on any link click

    if (link.targetId === 'about-page') {
      setActivePage('about');
      setTargetScrollId(null);
    } else if (link.targetId === 'home-intro') {
      setActivePage('home');
      setTargetScrollId('home-intro'); // Or null to scroll to top of home
    } else { // For other sections like Projects, Resume, Contact
      if (activePage !== 'home') {
        setActivePage('home');
        setTargetScrollId(link.targetId || null);
      } else {
        const element = document.getElementById(link.targetId || '');
        element?.scrollIntoView({ behavior: 'smooth' });
        setTargetScrollId(null);
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-neutral-800/80 shadow-lg backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
             onClick={() => handleNavLinkClick({ href: '#home-intro', label: 'Home', targetId: 'home-intro' })}
             className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors" style={{fontFamily: "'Poppins', sans-serif"}}
          >
            Portfolio
          </button>
          <div className="hidden md:flex space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavLinkClick(link)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                  ${(activePage === 'about' && link.targetId === 'about-page') || (activePage === 'home' && link.targetId !== 'about-page' && window.location.hash === link.href) // Basic active state for home sections
                    ? 'bg-cyan-600 text-white' 
                    : 'text-neutral-200 hover:bg-cyan-500 hover:text-white'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-neutral-200 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
              aria-label="Open menu"
            >
             {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-800/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavLinkClick(link)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:bg-cyan-600 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
