import logoIconLarge from '../../assets/icons/logo-large.png';
import logoIconSmall from '../../assets/icons/logo-small.png';
import type { LogoProps } from '../../types';

const LogoIcon = () => {

  return (
    <picture>
      {/* Jika layar md ke atas (>= 768px), gunakan logoIconLarge */}
      <source media="(min-width: 768px)" srcSet={logoIconLarge} />
      
      {/* Gambar default untuk layar mobile */}
      <img
        src={logoIconSmall}
        alt="Logo image"
        aria-hidden="true"
        className="block object-contain"
      />
    </picture>
  );
};

const Logo = ({
  title,
  description,
  onClick = () => window.scrollTo({ top: 0, behavior: 'smooth' }),
  className = '',
}: LogoProps) => {

  return (
    <div
      role='img'
      aria-label={description ?? title}
      className={`inline-flex items-center w-35.25 h-8 gap-2 md:w-40 md:h-9 md:gap-2.5'} ${className}`}
    >
      <LogoIcon />
      <a
        href='#'
        onClick={onClick}
        className={'font-bold no-underline text-black dark:text-white text-size-xl md:text-size-display-xs'}
      >
        {title}
      </a>
    </div>
  );
};

export default Logo;
