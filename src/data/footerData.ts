import type { FooterData } from '../types';
import logoSrc from '../assets/icons/logo-large.png';
import facebookDarkIcon from '../assets/social-media/Facebook-dark.png';
import instagramDarkIcon from '../assets/social-media/Instagram-dark.png';
import linkedinDarkIcon from '../assets/social-media/Linkedin-dark.png';
import tiktokDarkIcon from '../assets/social-media/Tik Tok-dark.png';
import facebookLightIcon from '../assets/social-media/Facebook-light.png';
import instagramLightIcon from '../assets/social-media/Instagram-light.png';
import linkedinLightIcon from '../assets/social-media/Linkedin-light.png';
import tiktokLightIcon from '../assets/social-media/Tik Tok-light.png';

export const footerData: FooterData = {
  headline: "LET'S DISCUSS YOUR IDEAS",
  logoSrc,
  logoAlt: 'Your Logo',
  navItems: [
    { label: 'About', href: '#about' },
    { label: 'Service', href: '#service' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ],
  socialItems: [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: { dark: facebookDarkIcon, light: facebookLightIcon },
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: { dark: instagramDarkIcon, light: instagramLightIcon },
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: { dark: linkedinDarkIcon, light: linkedinLightIcon },
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com',
      icon: { dark: tiktokDarkIcon, light: tiktokLightIcon },
    },
  ],
};
