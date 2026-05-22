import React from 'react';
import logoSymbolLarge from '../../assets/icons/logo-large.png';
import logoSymbolSmall from '../../assets/icons/logo-small.png';
import type { LogoProps } from '../../types';

const LogoIcon = ({size = 'large', icon}: {size: 'large' | 'small'; icon?: string}) => {
  const src = icon ?? (size === 'large' ? logoSymbolLarge : logoSymbolSmall);

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`block object-contain ${size === 'small' ? 'w-6.575 h-7.2125' : 'w-7.3975 h-8.115'}`}
    />
  )
}

const Logo = ({ size = 'large', title, description, icon, onClick = () => window.scrollTo({ top: 0, behavior: 'smooth' }), className = '' }: LogoProps) => {
  const isSmall = size === 'small';

  return (
    <div
      role='image'
      aria-label={description ?? title}
      className={`inline-flex items-center select-none bg-black ${isSmall ? 'gap-2 py-0.5' : 'gap-2.5 py-0.5'} ${className}`}
    >
      <LogoIcon size={size} icon={icon}/>
      <a
        href="#"
        onClick={onClick}
        className={`font-bold tracking-wide leading-none whitespace-nowrap no-underline text-white ${isSmall ? 'text-size-xl' : 'text-size-display-xs'}`}
      >{title}</a>
    </div>
  )
}

export default Logo
