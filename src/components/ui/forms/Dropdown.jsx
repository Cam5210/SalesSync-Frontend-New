import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({
  id,
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  required = false,
  error = '',
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Find the selected option label
  const selectedOption = options.find(option => option.value === value);
  const selectedLabel = selectedOption ? selectedOption.label : '';
  
  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);
  
  // Handle option selection
  const handleOptionSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };
  
  // Base styles for all dropdowns
  const baseStyles = "block w-full transition-all duration-200 ease-in-out";
  
  // Size styles
  const sizeStyles = {
    'sm': 'py-1 px-2 text-sm',
    'md': 'py-2 px-3 text-base',
    'lg': 'py-3 px-4 text-lg',
  };
  
  // Variant-specific styles with light/dark mode support
  const variantStyles = {
    'default': `
      bg-white border border-gray-300 rounded-md 
      dark:bg-gray-700 dark:border-gray-600 dark:text-white
      ${disabled ? 'bg-gray-100 cursor-not-allowed dark:bg-gray-800' : ''}
      ${error ? 'border-red-500 dark:border-red-500' : ''}
    `,
    'filled': `
      bg-gray-100 border border-transparent rounded-md
      dark:bg-gray-600 dark:text-white
      ${disabled ? 'bg-gray-200 cursor-not-allowed dark:bg-gray-800' : ''}
      ${error ? 'border-red-500 dark:border-red-500' : ''}
    `,
    'outlined': `
      bg-transparent border-2 border-gray-300 rounded-md
      dark:border-gray-600 dark:text-white
      ${disabled ? 'bg-gray-100 cursor-not-allowed dark:bg-gray-800' : ''}
      ${error ? 'border-red-500 dark:border-red-500' : ''}
    `,
  };

  // Dropdown option styles
  const optionStyles = `
    px-4 py-2 hover:bg-gray-100 cursor-pointer
    dark:hover:bg-gray-600 dark:text-white
  `;

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
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          id={id}
          disabled={disabled}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          className={`
            ${baseStyles}
            ${sizeStyles[size]}
            ${variantStyles[variant]}
            flex justify-between items-center w-full
            ${className}
          `}
          {...props}
        >
          <span className={!selectedLabel ? 'text-gray-400 dark:text-gray-500' : ''}>
            {selectedLabel || placeholder}
          </span>
          <svg 
            className={`ml-2 h-5 w-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''} ${disabled ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </button>
        
        {isOpen && (
          <div className="absolute z-10 mt-1 w-full rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 max-h-60 overflow-auto">
            <div className="py-1">
              {options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleOptionSelect(option.value)}
                  className={`${optionStyles} ${value === option.value ? 'bg-blue-50 dark:bg-blue-900' : ''}`}
                >
                  {option.label}
                </div>
              ))}
              {options.length === 0 && (
                <div className="px-4 py-2 text-gray-500 dark:text-gray-400">No options available</div>
              )}
            </div>
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

// Export named variants for easier imports
export const DefaultDropdown = (props) => <Dropdown variant="default" {...props} />;
export const FilledDropdown = (props) => <Dropdown variant="filled" {...props} />;
export const OutlinedDropdown = (props) => <Dropdown variant="outlined" {...props} />;

export default Dropdown; 