import React, { useState } from 'react';
import { PrimaryButton, SecondaryButton } from './Button';

const ButtonDemo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="p-6 space-y-8 max-w-md mx-auto">
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleDarkMode}
          className="flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
        >
          {isDarkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold dark:text-white">Primary Buttons</h2>
        <div className="flex flex-wrap gap-2">
          <PrimaryButton onClick={handleClick} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Primary Button'}
          </PrimaryButton>
          <PrimaryButton disabled>Disabled Primary</PrimaryButton>
        </div>
      </div>
      
      <div className="space-y-2">
        <h2 className="text-lg font-semibold dark:text-white">Secondary Buttons</h2>
        <div className="flex flex-wrap gap-2">
          <SecondaryButton onClick={handleClick} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Secondary Button'}
          </SecondaryButton>
          <SecondaryButton disabled>Disabled Secondary</SecondaryButton>
        </div>
      </div>
      
      <div className="space-y-2">
        <h2 className="text-lg font-semibold dark:text-white">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-2">
          <PrimaryButton className="text-xs px-2 py-1">
            Small
          </PrimaryButton>
          <PrimaryButton>
            Normal
          </PrimaryButton>
          <PrimaryButton className="text-lg px-6 py-3">
            Large
          </PrimaryButton>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold dark:text-white">Button Roundness</h2>
        <div className="flex flex-wrap items-center gap-2">
          <PrimaryButton rounded="none">
            Square
          </PrimaryButton>
          <PrimaryButton rounded="sm">
            Slightly Rounded
          </PrimaryButton>
          <PrimaryButton rounded="md">
            Medium Rounded
          </PrimaryButton>
          <PrimaryButton rounded="lg">
            More Rounded
          </PrimaryButton>
          <PrimaryButton rounded="full">
            Fully Rounded
          </PrimaryButton>
        </div>
        <div className="flex flex-wrap items-center gap-2 mt-2">
          <SecondaryButton rounded="none">
            Square
          </SecondaryButton>
          <SecondaryButton rounded="sm">
            Slightly Rounded
          </SecondaryButton>
          <SecondaryButton rounded="md">
            Medium Rounded
          </SecondaryButton>
          <SecondaryButton rounded="lg">
            More Rounded
          </SecondaryButton>
          <SecondaryButton rounded="full">
            Fully Rounded
          </SecondaryButton>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold dark:text-white">Button Shadows</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <PrimaryButton shadow="none">
              No Shadow
            </PrimaryButton>
          </div>
          <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <PrimaryButton shadow="sm">
              Small Shadow
            </PrimaryButton>
          </div>
          <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <PrimaryButton shadow="md">
              Medium Shadow
            </PrimaryButton>
          </div>
          <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <PrimaryButton shadow="lg">
              Large Shadow
            </PrimaryButton>
          </div>
          <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <PrimaryButton shadow="xl">
              Extra Large Shadow
            </PrimaryButton>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <SecondaryButton shadow="none">
              No Shadow
            </SecondaryButton>
          </div>
          <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <SecondaryButton shadow="sm">
              Small Shadow
            </SecondaryButton>
          </div>
          <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <SecondaryButton shadow="md">
              Medium Shadow
            </SecondaryButton>
          </div>
          <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <SecondaryButton shadow="lg">
              Large Shadow
            </SecondaryButton>
          </div>
          <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <SecondaryButton shadow="xl">
              Extra Large Shadow
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonDemo; 