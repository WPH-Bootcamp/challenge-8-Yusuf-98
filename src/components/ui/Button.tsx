/**
 * Button Component
 */
import React from 'react';
import type { ButtonProps, ButtonSize, ButtonVariant } from '../../types';

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
  variant,
  size,
  children,
  onClick,
  className = '',
  type,
  disabled = false,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-full shadow-inner transition-all duration-200 cursor-pointer';

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-primary-200 text-white hover:bg-primary-300 active:bg-primary-300 shadow-md hover:shadow-lg',
    secondary:
      'bg-primary-200 text-white hover:bg-primary-300',
    outline:
      'border-2 border-primary-200 text-primary-200 hover:bg-primary-300 hover:text-white',
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  const buttonClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabled? disabledStyles : ''} 
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
