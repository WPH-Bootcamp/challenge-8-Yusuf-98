import { useState, useEffect } from 'react';
import Button from './components/ui/Button';
import Logo from './components/ui/Logo';
import CardService from './components/ui/ServiceCard';
import TestimonialCard from './components/ui/TestimonialCard';
import webDevIcon from './assets/icons/Web-Development.png';
import QuoteSign from './assets/icons/quote-icon.png';
import RatingStar from './assets/icons/star-icon.png';
import type { Theme } from './types';
import Navbar from './components/layout/Navbar';
import Hero from './components/ui/Hero';
import PartnerList from './components/ui/PartnerList';
import TestimonialsSection from './components/sections/TestimonialsSection';
import StatSection from './components/sections/StatSection';
import ServicesSection from './components/sections/ServicesSection';

function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const isDark = theme === 'dark';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <Hero
        title='Your Tech Partner for '
        titleSpan='Smarter Growth'
        description='We deliver tailored IT solutions to help you scale with speed and confidence.'
      />

      <PartnerList />
      <StatSection />

      <ServicesSection />

      <TestimonialsSection />

      {/* <div className={`min-h-screen flex flex-col items-center justify-center gap-5 transition-colors duration-300 ${isDark ? 'bg-base-black' : 'bg-base-white'}`}>
        <Logo title='Your Logo'/>
      
      <Button type='button' onClick={() => alert('aku nih')} size='md' className='w-50'>
          Let's Talk
        </Button>
        <TestimonialCard 
          icon={QuoteSign} 
          rating={RatingStar} 
          description='"The team delivered exactly what we needed — on time and with outstanding quality."' 
          name='Sarah Tan' 
          role='Product Manager at Finovate' 
          image={SarahTanImage}
        />
      </div> */}
    </>
  );
}

export default App;
