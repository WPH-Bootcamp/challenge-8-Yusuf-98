/**
 * Button Component
 */
import React from 'react';
import type { ButtonProps, ButtonSize } from '../../types';

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
  size,
  children,
  onClick,
  className = '',
  type,
  disabled = false,
}) => {
  const baseStyles =
    'flex items-center justify-center p-2 gap-1 font-medium rounded-full shadow-inner bg-primary-200 text-white hover:text-neutral-800 hover:scale-102 focus:outline-none focus:ring focus:ring-offset-2 active:shadow-inner active:bg-primary-300 transition-all duration-300 ease-in-out cursor-pointer';

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'h-11 text-size-sm',
    md: 'h-11 text-size-sm tracking-1',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  const buttonClasses = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${disabled ? disabledStyles : ''} 
    ${className}`.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${buttonClasses}`}
    >
      {children}
    </button>
  );
};

export default Button;
