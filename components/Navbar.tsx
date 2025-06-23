
import React, { useState, useEffect } from 'react';
import { NavLink as NavLinkType } from '../types';
import { ActiveView } from '../App'; // Import ActiveView
import { MenuIcon, XIcon } from './icons/MenuIcons';

interface NavbarProps {
  navLinks: NavLinkType[];
  activeView: ActiveView;
  setActiveView: (view: ActiveView, targetId?: string | null) => void;
  setTargetScrollId: (id: string | null) => void; // Keep for direct scroll on home
}

const Navbar: React.FC<NavbarProps> = ({ navLinks, activeView, setActiveView, setTargetScrollId }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState(typeof window !== 'undefined' ? window.location.hash : '');


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial hash
    if (typeof window !== 'undefined') {
        setCurrentHash(window.location.hash);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleNavLinkClick = (link: NavLinkType) => {
    setIsMobileMenuOpen(false); 

    if (link.targetId === 'about-page') {
      setActiveView('about');
    } else if (link.targetId === 'home-intro') {
      setActiveView('home', 'home-intro');
    } else { // For other sections like Projects, Resume, Contact
      if (activeView !== 'home') {
        setActiveView('home', link.targetId || null);
      } else {
        // If already on home, just scroll
        const element = document.getElementById(link.targetId || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          if (link.href) window.location.hash = link.href; // Update hash for active state
        }
        setTargetScrollId(null); // Reset internal target scroll ID from App
      }
    }
  };
  
  const getIsLinkActive = (link: NavLinkType): boolean => {
    if (activeView === 'about' && link.targetId === 'about-page') return true;
    if (activeView === 'projectDetail' && link.targetId === 'projects') return true;
    if (activeView === 'home') {
        // For home, compare targetId with the targetScrollId or current hash
        // This logic can be tricky if targetScrollId is transient.
        // Relying on hash is more stable for sections.
        return link.href === currentHash && link.targetId !== 'about-page';
    }
    return false;
  };


  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-neutral-800/80 shadow-lg backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
             onClick={() => setActiveView('home', 'home-intro')}
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
                  ${getIsLinkActive(link)
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
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors
                ${getIsLinkActive(link)
                  ? 'bg-cyan-600 text-white' 
                  : 'text-neutral-200 hover:bg-cyan-600 hover:text-white'
                }`}
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
