import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggleButton from '../ui/ThemeToggleButton';

const Navbar = ({ showAddNewButton, onAddNewClick }) => {
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
        {showAddNewButton && (
          <button 
            onClick={onAddNewClick}
            className="px-3 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white transition-colors"
          >
            Add New
          </button>
        )}
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
        <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
          <span className="text-sm">👤</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 