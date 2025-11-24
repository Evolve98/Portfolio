
import React, { useState, useEffect } from 'react';
import { NavLink as NavLinkType } from '../types';
import { ActiveView } from '../App'; // Import ActiveView
import { MenuIcon, XIcon } from './icons/MenuIcons';

interface NavbarProps {
  navLinks: NavLinkType[];
  activeView: ActiveView;
  onNavigate: (view: ActiveView, targetId?: string | null) => void;
}

const Navbar: React.FC<NavbarProps> = ({ navLinks, activeView, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home-intro');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (activeView === 'home') {
        const sections = navLinks.map(link => link.targetId).filter(id => id && id !== 'about-page');
        let currentSection = 'home-intro';
        
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId!);
          if (element && window.scrollY >= element.offsetTop - 150) {
            currentSection = sectionId!;
          }
        }
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeView, navLinks]);

  const handleNavLinkClick = (link: NavLinkType) => {
    setIsMobileMenuOpen(false); 

    if (link.targetId === 'about-page') {
      onNavigate('about');
    } else {
      onNavigate('home', link.targetId || null);
    }
  };
  
  const getIsLinkActive = (link: NavLinkType): boolean => {
    if (activeView === 'about' && link.targetId === 'about-page') return true;
    if (activeView === 'projectDetail' && link.targetId === 'projects') return true;
    if (activeView === 'home' && link.targetId === activeSection) return true;
    return false;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-neutral-800/80 shadow-lg backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
             onClick={() => onNavigate('home', 'home-intro')}
             className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors" style={{fontFamily: "'Poppins', sans-serif"}}
             aria-label="Back to home page"
          >
            Portfolio
          </button>
          <div className="hidden md:flex space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavLinkClick(link)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${getIsLinkActive(link)
                    ? 'bg-cyan-600 text-white shadow-sm' 
                    : 'text-neutral-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-600 hover:text-white'
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
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
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