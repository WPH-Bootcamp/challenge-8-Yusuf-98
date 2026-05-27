import { useState, useEffect } from 'react';
import { useTheme } from '../../context/useTheme';
import { navItems } from '../../data/navigation';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import darkIcon from '../../assets/icons/dark-mode.png';
import lightIcon from '../../assets/icons/light-mode.png';
import closeIcon from '../../assets/icons/x-close.png';
import hamburgerIcon from '../../assets/icons/hamburger-icon.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
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
    <nav
      className={`fixed w-full h-21 border-b top-0 z-40 transition-all duration-300 backdrop-blur-2xl ${
        isScrolled
          ? isDark
            ? 'bg-neutral-950/90 border-neutral-800'
            : 'bg-white/90 border-neutral-200'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className='flex h-21 items-center justify-between px-4 py-6 md:px-16 lg:px-11xl'>
        <Logo title='Your Logo' />

        <div className='hidden md:flex items-center justify-between md:gap-3'>
          {navItems.map((item) => (
            <div className='md:py-1 md:px4 lg:py-2 lg:px-4 rounded-full'>
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className='md:text-size-sm lg:text-size-md font-semibold hover:text-primary-200 dark:text-neutral-25'
              >
                {item.label}
              </a>
            </div>
          ))}
        </div>

        <div className='flex items-center gap-4'>
          <button onClick={toggleTheme} className='p-2 rounded-full'>
            <img
              src={isDark ? lightIcon : darkIcon}
              alt='Toggle Theme'
              className={`inline-flex min-w-5 h-5 ${isDark ? 'invert' : ''}`}
            />
          </button>
          <div className='hidden md:block'>
            <Button
              type='button'
              size='md'
              onClick={() => handleNavClick('#contact')}
              className='md:w-40 lg:w-50'
            >
              Let's Talk
            </Button>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden p-2'
          >
            <img
              src={isMenuOpen ? closeIcon : hamburgerIcon}
              alt='Menu'
              className={`w-6 h-6 ${isDark ? 'bg-base-black' : 'invert'}`}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
