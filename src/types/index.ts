import React from 'react';
/**
 * Type Definitions
 *
 * File ini berisi semua TypeScript interfaces dan types yang digunakan
 * di berbagai tempat dalam aplikasi.
 *
 * Best Practices:
 * - Gunakan PascalCase untuk interface names
 * - Export semua interfaces agar bisa digunakan di file lain
 * - Group related interfaces bersama
 * - Add comments untuk explain complex types
 */

// ==========================================
// UI Component Types
// ==========================================

/**
 * Hero Props
 */
export interface HeroProps {
  title: string;
  titleSpan: string;
  description: string;
  image?: string;
}
/**
 * Button variant types
 * Gunakan ini untuk Button component
 */

/**
 * Example: Button Props
 * Uncomment dan sesuaikan dengan kebutuhan
 */
// export interface ButtonProps {
//   variant?: ButtonVariant;
//   children: React.ReactNode;
//   onClick?: () => void;
//   className?: string;
//   disabled?: boolean;
// }

export type ButtonSize = 'sm' | 'md';
export type ButtonBg = 'orange' | 'white';

export interface ButtonProps {
  size: ButtonSize;
  background: ButtonBg;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type: 'button' | 'submit' | 'reset';
}

/**
 * Logo types
 */
export interface LogoProps {
  title: string;
  description?: string;
  logo?: string;
  onClick?: () => void;
}

/**
 * Service Card types
 */
export interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceCardData {
  title: string;
  description: string;
  list: ServiceCardProps[];
}

/**
 * Testimonial Card types
 */
export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  message: string;
  avatar?: string;
  rating: number;
}

export interface TestimonialData {
  title: string;
  description: string;
  list: Testimonial[];
}

/**
 * Stat Item
 */
export interface StatProps {
  id: number;
  value: string;
  label: string;
}

export interface StatData {
  title: string;
  description: string;
  list: StatProps[];
}

export interface PortfolioProps {
  id: number;
  category: string;
  label: string;
  image: string;
  alt: string;
}

export interface PortfolioData {
  title: string;
  subtitle: string;
  portfolioList: PortfolioProps[];
}

export interface ConsultationProps {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FAQRowProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

export interface FAQHeader {
  title: string;
  subtitle: string;
}

// ─── Contact Form ────────────────────────────────────────────────────────────

export interface ServiceOption {
  id: string;
  label: string;
}

export interface ContactFormData {
  title: string;
  subtitle: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  servicesLabel: string;
  services: ServiceOption[];
  submitLabel: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  message: string;
  selectedServices: string[];
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
  services?: string;
}

// ─── Success Popup ───────────────────────────────────────────────────────────

// ─── Success Popup ───────────────────────────────────────────────────────────
export interface SuccessPopupProps {
  data: SuccessPopupData;
  isOpen: boolean;
  onClose: () => void;
}

export interface SuccessPopupData {
  title: string;
  description: string;
  buttonLabel: string;
}

// ─── Failed Popup ─────────────────────────────────────────────────────────────
export interface FailedPopupProps {
  data: FailedPopupData;
  isOpen: boolean;
  onRetry: () => void;
}

export interface FailedPopupData {
  title: string;
  description: string;
  buttonLabel: string;
}

// ─── Footer ── //

export interface FooterNavItem {
  label: string;
  href: string;
}

export interface FooterSocialItem {
  name: string;
  href: string;
  icon: {
    dark: string;
    light: string;
  };
}

export interface FooterData {
  headline: string;
  logoSrc: string;
  logoAlt: string;
  navItems: FooterNavItem[];
  socialItems: FooterSocialItem[];
}
// ==========================================
// Section Data Types
// ==========================================

/**
 * TODO: Define interfaces untuk data yang digunakan di sections
 *
 * Contoh:
 * - ServiceItem untuk services section
 * - TeamMember untuk team section
 * - Testimonial untuk testimonials section
 * - dll.
 */

/**
 * Example: Service/Product Item
 */
/**
 * Example: Team Member
 */
// export interface TeamMember {
//   id: number;
//   name: string;
//   position: string;
//   bio?: string;
//   image: string;
//   socialLinks?: {
//     linkedin?: string;
//     twitter?: string;
//     github?: string;
//   };
// }

/**
 * Process Step
 * Digunakan di ProcessSection
 */

export interface ProcessHeader {
  title: string;
  description: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  subtitle: string;
  side: 'left' | 'right';
}

export interface StepCardProps {
  step: ProcessStep;
  active: boolean;
  isMobile: boolean;
}
/**
 * Industry Item
 * Digunakan di IndustrySection
 */

export interface IndustryProps {
  id: number;
  label?: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface IndustryData {
  title: string;
  description: string;
  industries: IndustryProps[];
}

/**
 * Portfolio / Project Item
 * Digunakan di PortfolioSection
 */

/**
 * FAQ Item
 * Digunakan di FAQSection
 */
// ==========================================
// Navigation Types
// ==========================================

/**
 * Navigation menu item
 */
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

/**
 * Partner List
 */
export interface PartnerItem {
  id: number;
  label: string;
  logo: string;
}

export interface Partners {
  title: string;
  partners: PartnerItem[];
  className?: '';
}

// ==========================================
// Form Types (if needed)
// ==========================================

/**
 * Contact form data
 */

// ==========================================
// Theme Types
// ==========================================

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
// ==========================================
// TODO: Add more types as needed!
// ==========================================

/**
 * Pagination Type
 */

export interface PaginationProps {
  total: number;
  activeIndex: number;
  onClick: (index: number) => void;
  className: string;
}

/**
 * Tips:
 * 1. Define types berdasarkan data yang kamu perlukan
 * 2. Lihat design Figma untuk understand data structure
 * 3. Make types reusable across components
 * 4. Use optional properties (?) untuk data yang tidak selalu ada
 * 5. Consider creating separate files jika types terlalu banyak
 *    Example: types/components.ts, types/data.ts, etc.
 */
