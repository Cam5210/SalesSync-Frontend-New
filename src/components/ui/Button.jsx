import React from 'react';

// Variant options: 'primary', 'secondary'
// Rounded options: 'none', 'sm', 'md', 'lg', 'full'
// Shadow options: 'none', 'sm', 'md', 'lg', 'xl'
const Button = ({ 
  children, 
  variant = 'primary', 
  rounded = 'md',
  shadow = 'md',
  disabled = false, 
  className = '', 
  onClick,
  type = 'button',
  ...props 
}) => {
  // Base styles for all buttons
  const baseStyles = "relative inline-flex items-center justify-center px-4 py-2 font-medium text-sm focus:outline-none transition-all duration-200 ease-in-out";
  
  // Rounded styles
  const roundedStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };
  
  // Shadow styles
  const shadowStyles = {
    none: '',
    sm: 'shadow-sm hover:shadow',
    md: 'shadow hover:shadow-md',
    lg: 'shadow-md hover:shadow-lg',
    xl: 'shadow-lg hover:shadow-xl'
  };
  
  // Variant-specific styles with light/dark mode support
  const variantStyles = {
    primary: `
      bg-gradient-to-bl from-sky-400 to-blue-800 text-white
      dark:bg-gradient-to-bl dark:from-blue-500 dark:to-indigo-900 dark:text-gray-100
      ${!disabled ? 'hover:brightness-110 active:brightness-90 dark:hover:brightness-125 dark:active:brightness-90' : 
        'opacity-60 cursor-not-allowed dark:opacity-50'}
    `,
    
    secondary: `
      bg-white border border-gray-300 text-gray-700 
      dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200
      ${!disabled ? 'hover:bg-gray-50 active:bg-gray-100 dark:hover:bg-gray-700 dark:active:bg-gray-600' : 
        'opacity-60 cursor-not-allowed dark:opacity-50'}
    `,
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${roundedStyles[rounded]} ${shadowStyles[shadow]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      {...props}
    >
      {children}
    </button>
  );
};

// Export named variants for easier imports
export const PrimaryButton = (props) => <Button variant="primary" {...props} />;
export const SecondaryButton = (props) => <Button variant="secondary" {...props} />;

export default Button; 