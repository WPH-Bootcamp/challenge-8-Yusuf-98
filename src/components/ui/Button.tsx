/**
 * Button Component
 */

import React from 'react';
import type { ButtonProps } from '../../types';

/**
 * Reusable Button Component
 *
 * @param variant - Style variant: 'primary' | 'secondary' | 'outline'
 * @param size - Button size: 'sm' | 'md' | 'lg'
 * @param children - Button content
 * @param onClick - Click handler
 * @param className - Additional CSS classes
 * @param disabled - Disabled state
 * @param type - Button type attribute
 */
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  // Base styles yang selalu applied
  const baseStyles = 'inline-flex items-center justify-center transition-all duration-300 rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-300';

  // Variant styles
  const variantStyles = {
    primary: `
      bg-primary-200 text-neutral-25 hover:bg-primary-300 shadow-inset 
      focus-visible:ring-primary-400
    `,
    secondary: `
      bg-neutral-800 text-neutral-25 hover:bg-neutral-900 
      focus-visible:ring-neutral-600
    `,
    outline: `
      border-2 border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-neutral-25 
      focus-visible:ring-primary-300
    `,
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  // Disabled styles
  const disabledStyles = 'opacity-50 cursor-not-allowed';

  // Combine all styles
  const buttonClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabled ? disabledStyles : ''}
    ${className}
  `.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

export default Button;
