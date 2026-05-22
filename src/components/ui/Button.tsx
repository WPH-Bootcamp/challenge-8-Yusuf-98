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
    'flex items-center justify-center font-bold rounded-full shadow-inner transition-all duration-200 cursor-pointer';

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      `bg-primary-200 text-white hover:text-neutral-800 hover:shadow-inner hover:scale-102 active:translate-y-0 active:shadow-inner active:bg-primary-300 transition-all duration-300 ease-in-out
  `,
    secondary:
      'bg-primary-200 h-11 text-white hover:bg-primary-200 hover:shadow-inner focus:ring-primary-300 active:bg-primary-300',
    outline:
      'border-2 border-primary-200 text-primary-200 hover:bg-primary-300 hover:text-white',
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'p-2 gap-1 text-size-sm',
    md: 'p-2 gap-1 text-size-md',
    lg: 'p-4 gap-2 text-lg gap-2',
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
