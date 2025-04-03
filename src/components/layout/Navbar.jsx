import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  // Helper function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path ? 
      "px-3 py-2 rounded bg-gray-700 dark:bg-gray-800 text-white transition-colors" : 
      "px-3 py-2 rounded hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors";
  };
  
  return (
    <nav className="navbar bg-gray-800 dark:bg-gray-900 text-white h-16 w-full flex items-center justify-between px-4 shadow-md">
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
        <div className="w-8 h-8 rounded-full bg-gray-500 dark:bg-gray-600 flex items-center justify-center">
          <span className="text-sm">👤</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 