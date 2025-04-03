import React from 'react';

// Variant options: 'default', 'elevated', 'outlined', 'filled'
// Shadow options: 'none', 'sm', 'md', 'lg', 'xl'
// Rounded options: 'none', 'sm', 'md', 'lg', 'full'
// Width options: 'auto', 'full', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'
// Padding options: 'none', 'sm', 'md', 'lg', 'xl'
const Card = ({
  children,
  variant = 'default',
  shadow = 'md',
  rounded = 'md',
  width = 'auto',
  padding = 'md',
  active = true,
  hover = true,
  onClick,
  className = '',
  ...props
}) => {
  // Base styles for all cards
  const baseStyles = "relative overflow-hidden transition-all duration-200 ease-in-out";
  
  // Width styles
  const widthStyles = {
    'auto': '',
    'full': 'w-full',
    'xs': 'w-64',
    'sm': 'w-72',
    'md': 'w-80',
    'lg': 'w-96',
    'xl': 'w-[30rem]',
    '2xl': 'w-[36rem]',
  };
  
  // Padding styles
  const paddingStyles = {
    'none': 'p-0',
    'sm': 'p-3',
    'md': 'p-4',
    'lg': 'p-6',
    'xl': 'p-8',
  };
  
  // Rounded styles
  const roundedStyles = {
    'none': 'rounded-none',
    'sm': 'rounded-sm',
    'md': 'rounded-md',
    'lg': 'rounded-lg',
    'full': 'rounded-3xl',
  };
  
  // Shadow styles
  const shadowStyles = {
    'none': '',
    'sm': 'shadow-sm',
    'md': 'shadow',
    'lg': 'shadow-md',
    'xl': 'shadow-lg',
  };
  
  // Hover styles
  const hoverStyles = hover ? 
    'hover:shadow-lg hover:translate-y-[-2px] cursor-pointer' :
    '';
  
  // Variant-specific styles with light/dark mode support
  const variantStyles = {
    'default': `
      bg-white border border-gray-200 
      dark:bg-gray-800 dark:border-gray-700
      ${!active ? 'opacity-60 grayscale' : ''}
    `,
    'elevated': `
      bg-white shadow-lg border-0
      dark:bg-gray-800 dark:border-0
      ${!active ? 'opacity-60 grayscale' : ''}
    `,
    'outlined': `
      bg-white border-2 border-gray-200
      dark:bg-transparent dark:border-gray-700
      ${!active ? 'opacity-60 grayscale' : ''}
    `,
    'filled': `
      bg-gray-100 border-0
      dark:bg-gray-700 dark:border-0
      ${!active ? 'opacity-60 grayscale' : ''}
    `,
  };

  return (
    <div
      className={`
        ${baseStyles}
        ${widthStyles[width]}
        ${paddingStyles[padding]}
        ${roundedStyles[rounded]}
        ${shadowStyles[shadow]}
        ${variantStyles[variant]}
        ${active && hover ? hoverStyles : ''}
        ${className}
      `}
      onClick={active && onClick ? onClick : undefined}
      {...props}
    >
      {children}
    </div>
  );
};

// Export named variants for easier imports
export const DefaultCard = (props) => <Card variant="default" {...props} />;
export const ElevatedCard = (props) => <Card variant="elevated" {...props} />;
export const OutlinedCard = (props) => <Card variant="outlined" {...props} />;
export const FilledCard = (props) => <Card variant="filled" {...props} />;

export default Card; 