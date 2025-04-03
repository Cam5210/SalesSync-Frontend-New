import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggleButton from '../ui/ThemeToggleButton';

const Navbar = ({ showAddNewButton = false, onAddNewClick }) => {
  const location = useLocation();
  
  // Helper function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path ? 
      "px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors" : 
      "px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors";
  };
  
  return (
    <nav className="navbar bg-white dark:bg-gray-900 text-gray-800 dark:text-white h-16 w-full flex items-center justify-between px-4 shadow-md border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold">My App</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/products" className={isActive('/products')}>
          Products
        </Link>
        <Link to="/training" className={isActive('/training')}>
          Training
        </Link>
        <Link to="/meeting-prep" className={isActive('/meeting-prep')}>
          Meeting Prep
        </Link>
        <Link to="/call-assistant" className={isActive('/call-assistant')}>
          Call Assistant
        </Link>
        <Link to="/sdr-automation" className={isActive('/sdr-automation')}>
          SDR Automation
        </Link>
        <Link to="/view-components" className={isActive('/view-components')}>
          View Components
        </Link>
        <ThemeToggleButton />
        {showAddNewButton && (
          <button
            onClick={onAddNewClick}
            className="flex items-center justify-center px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm font-medium transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Add New
          </button>
        )}
        <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
          <span className="text-sm">👤</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 