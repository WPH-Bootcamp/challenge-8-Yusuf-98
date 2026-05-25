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
  className?: string;
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

export interface ButtonProps {
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
  title: string;
  description?: string;
  logo?: string;
  onClick?: () => void;
  className?: string;
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
export interface Stat {
  id: number;
  value: string;
  label: string;
}

export interface StatData {
  title: string;
  description: string;
  list: Stat[];
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

/**
 * Industry Item
 * Digunakan di IndustrySection
 */

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
