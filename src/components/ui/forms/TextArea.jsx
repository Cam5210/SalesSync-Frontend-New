import React from 'react';

const TextArea = ({
  id,
  label,
  placeholder = '',
  value,
  onChange,
  rows = 4,
  disabled = false,
  required = false,
  error = '',
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  // Base styles for all textareas
  const baseStyles = "block w-full transition-all duration-200 ease-in-out focus:outline-none focus:ring-2";
  
  // Size styles
  const sizeStyles = {
    'sm': 'py-1 px-2 text-sm',
    'md': 'py-2 px-3 text-base',
    'lg': 'py-3 px-4 text-lg',
  };
  
  // Variant-specific styles with light/dark mode support
  const variantStyles = {
    'default': `
      bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500
      dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400
      dark:focus:ring-blue-500 dark:focus:border-blue-500
      ${disabled ? 'bg-gray-100 cursor-not-allowed dark:bg-gray-800' : ''}
      ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:focus:ring-red-500' : ''}
    `,
    'filled': `
      bg-gray-100 border border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500
      dark:bg-gray-600 dark:text-white dark:placeholder-gray-400
      dark:focus:ring-blue-500 dark:focus:border-blue-500
      ${disabled ? 'bg-gray-200 cursor-not-allowed dark:bg-gray-800' : ''}
      ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:focus:ring-red-500' : ''}
    `,
    'outlined': `
      bg-transparent border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500
      dark:border-gray-600 dark:text-white dark:placeholder-gray-400
      dark:focus:ring-blue-500 dark:focus:border-blue-500
      ${disabled ? 'bg-gray-100 cursor-not-allowed dark:bg-gray-800' : ''}
      ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:focus:ring-red-500' : ''}
    `,
  };

  return (
    <div className="mb-4">
      {label && (
        <label 
          htmlFor={id} 
          className={`block mb-2 text-sm font-medium ${
            disabled ? 'text-gray-500 dark:text-gray-400' : 'text-gray-700 dark:text-gray-200'
          } ${
            error ? 'text-red-500 dark:text-red-400' : ''
          }`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        rows={rows}
        disabled={disabled}
        placeholder={placeholder}
        className={`
          ${baseStyles}
          ${sizeStyles[size]}
          ${variantStyles[variant]}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

// Export named variants for easier imports
export const DefaultTextArea = (props) => <TextArea variant="default" {...props} />;
export const FilledTextArea = (props) => <TextArea variant="filled" {...props} />;
export const OutlinedTextArea = (props) => <TextArea variant="outlined" {...props} />;

export default TextArea; 