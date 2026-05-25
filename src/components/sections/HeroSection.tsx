import { useTheme } from '../../context/useTheme';
import Hero from '../ui/Hero';
import { hero } from '../../data/hero';
import HeroImageDark from '../../assets/images/hero-image-dark.png';
import HeroImageLight from '../../assets/images/hero-image-light.png';

function HeroSection() {
  const { theme } = useTheme();
  const heroImage = theme === 'dark' ? HeroImageDark : HeroImageLight;
  return (
    <div className='flex h-165.75 mt-21 pt-36.5 px-11xl relative'>
      <Hero
        title={hero.title}
        titleSpan={hero.titleSpan}
        description={hero.description}
      />
      <img
        src={heroImage}
        alt='3D smartphone with floating glassmorphism UI layers.'
        className='absolute w-186.75 h-186.75 right-5 -top-21'
      />
    </div>
  );
}

export default HeroSection;
