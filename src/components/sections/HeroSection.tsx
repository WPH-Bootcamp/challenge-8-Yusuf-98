import { useTheme } from '../../context/useTheme';
import Hero from '../ui/Hero';
import { hero } from '../../data/hero';
import HeroImageDark from '../../assets/images/hero-image-dark.png';
import HeroImageLight from '../../assets/images/hero-image-light.png';

function HeroSection() {
  const { theme } = useTheme();
  const heroImage = theme === 'dark' ? HeroImageDark : HeroImageLight;
  return (
    <div
      className='w-full flex flex-col mt-21 pt-12.5 px-4 
      md:flex-row md:pt-20 md:px-16 h-192.5 md:h-120
      lg:h-165.75 lg:pt-36.5 lg:px-11xl
  relative overflow-hidden'
    >
      <div className='w-full md:w-[48%] lg:w-[53%] z-10'>
        <Hero
          title={hero.title}
          titleSpan={hero.titleSpan}
          description={hero.description}
        />
      </div>
      <img
        src={heroImage}
        alt='3D smartphone with floating glassmorphism UI layers.'
        className='w-[99%] mx-auto absolute md:w-[58dvw] lg:w-[51.5dvw] h-auto right-0 top-71.5 lg:-top-50 mt-12 mb-12 md:-top-25 lg:mt-29'
      />
    </div>
  );
}

export default HeroSection;
