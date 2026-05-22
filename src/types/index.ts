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
 * Button variant types
 * Gunakan ini untuk Button component
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

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
export interface ButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
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
  size?: 'large' | 'small';
  title: string;
  description?: string;
  icon?: string;
  onClick?: () => void;
  className?: string;
}

/**
 * Service Card types
 */
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  onClick?: () => void;
  className?: string;
}

/**
 * Service Card types
 */
export interface TestimonialCardProps {
  icon: string;
  rating: string;
  description: string;
  name: string;
  role: string;
  image?: string;
  className?: string;
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
export interface ServiceItem {
  id: number;
  title: string;
  icon?: string;
  image?: string;
}
/**
 * Example: Team Member
 */
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio?: string;
  image: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

/**
 * Example: Testimonial
 */
export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  message: string;
  avatar?: string;
  rating?: number;
}

/**
 * Process Step
 * Digunakan di ProcessSection
 */
export interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description?: string;
}

/**
 * Stat Item
 * Digunakan di AboutSection
 */
export interface StatItem {
  id: number;
  value: string;
  label: string;
}

/**
 * Industry Item
 * Digunakan di IndustrySection
 */
export interface IndustryItem {
  id: string;
  label: string;
  title: string;
  description: string;
  image?: string;
}

/**
 * Portfolio / Project Item
 * Digunakan di PortfolioSection
 */
export interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  image?: string;
  link?: string;
}

/**
 * FAQ Item
 * Digunakan di FAQSection
 */
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

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

// ==========================================
// Form Types (if needed)
// ==========================================

/**
 * Contact form data
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  services: string[];
}

// ==========================================
// Theme Types
// ==========================================

export type Theme = 'light' | 'dark';

// ==========================================
// TODO: Add more types as needed!
// ==========================================

/**
 * Tips:
 * 1. Define types berdasarkan data yang kamu perlukan
 * 2. Lihat design Figma untuk understand data structure
 * 3. Make types reusable across components
 * 4. Use optional properties (?) untuk data yang tidak selalu ada
 * 5. Consider creating separate files jika types terlalu banyak
 *    Example: types/components.ts, types/data.ts, etc.
 */
