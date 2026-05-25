import React, { useState, useEffect } from 'react';
import { navItems } from '../../data/navigation';
import type { Theme } from '../../types';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import darkIcon from '../../assets/icons/dark-mode.png'; 
import lightIcon from '../../assets/icons/light-mode.png';
import closeIcon from '../../assets/icons/x-close.png';
import hamburgerIcon from '../../assets/icons/hamburger-icon.png';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full h-21 border-b border-b-neutral-800 top-0 z-40 transition-all duration-300 bg-[rgba(10,13,18,0.06)] backdrop-blur-2xl`}>
      <div className="flex h-21 items-center justify-between px-4 py-6 md:px-40">
          <Logo title='Your Logo'  />
          
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }} className={`text-sm font-medium hover:text-primary-200 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={onToggleTheme} className="p-2 rounded-full">
              {/* Tambahkan 'invert' agar ikon hitam berubah putih saat dark mode jika perlu */}
              <img src={isDark ? lightIcon : darkIcon} alt="Toggle Theme" className={`w-5 h-5 ${isDark ? 'invert' : ''}`} />
            </button>
            <div className="hidden lg:block">
              <Button type='button' size='md' onClick={() => handleNavClick('#contact')} className='w-50'>Let's Talk</Button>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2">
              <img src={isMenuOpen ? closeIcon : hamburgerIcon} alt="Menu" className={`w-6 h-6 ${isDark ? 'bg-base-black' : 'invert'}`} />
            </button>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;