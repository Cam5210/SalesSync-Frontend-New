import React from 'react';

const Toggle = ({
  id,
  label,
  checked = false,
  onChange,
  disabled = false,
  required = false,
  error = '',
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  // Size styles
  const sizeStyles = {
    'sm': {
      toggle: 'w-8 h-4',
      knob: 'w-3 h-3',
      transform: 'translate-x-4',
      label: 'text-sm'
    },
    'md': {
      toggle: 'w-11 h-6',
      knob: 'w-5 h-5',
      transform: 'translate-x-5',
      label: 'text-base'
    },
    'lg': {
      toggle: 'w-14 h-7',
      knob: 'w-6 h-6',
      transform: 'translate-x-7',
      label: 'text-lg'
    }
  };
  
  // Variant-specific styles with light/dark mode support
  const variantStyles = {
    'default': {
      active: `
        bg-blue-600 dark:bg-blue-500
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `,
      inactive: `
        bg-gray-200 dark:bg-gray-700
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `,
      knob: `
        bg-white dark:bg-gray-100
        ${disabled ? 'opacity-90' : ''}
      `
    },
    'success': {
      active: `
        bg-green-600 dark:bg-green-500
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `,
      inactive: `
        bg-gray-200 dark:bg-gray-700
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `,
      knob: `
        bg-white dark:bg-gray-100
        ${disabled ? 'opacity-90' : ''}
      `
    },
    'danger': {
      active: `
        bg-red-600 dark:bg-red-500
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `,
      inactive: `
        bg-gray-200 dark:bg-gray-700
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `,
      knob: `
        bg-white dark:bg-gray-100
        ${disabled ? 'opacity-90' : ''}
      `
    }
  };

  return (
    <div className={`mb-4 ${className}`}>
      <div className="flex items-center">
        <div className="relative inline-block">
          <input
            id={id}
            type="checkbox"
            className="sr-only"
            checked={checked}
            onChange={!disabled ? onChange : undefined}
            disabled={disabled}
            {...props}
          />
          <div
            onClick={!disabled ? () => onChange(!checked) : undefined}
            className={`
              relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out
              ${sizeStyles[size].toggle}
              ${checked ? variantStyles[variant].active : variantStyles[variant].inactive}
              ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            <span
              className={`
                inline-block rounded-full transform transition-transform duration-200 ease-in-out
                ${sizeStyles[size].knob}
                ${variantStyles[variant].knob}
                ${checked ? sizeStyles[size].transform : 'translate-x-0'}
              `}
            />
          </div>
        </div>
        {label && (
          <label
            htmlFor={id}
            className={`ml-3 ${sizeStyles[size].label} ${
              disabled ? 'text-gray-500 dark:text-gray-400' : 'text-gray-700 dark:text-gray-200'
            }`}
            onClick={!disabled ? () => onChange(!checked) : undefined}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

// Export named variants for easier imports
export const DefaultToggle = (props) => <Toggle variant="default" {...props} />;
export const SuccessToggle = (props) => <Toggle variant="success" {...props} />;
export const DangerToggle = (props) => <Toggle variant="danger" {...props} />;

export default Toggle; 