import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Icon component for collapsed view
export const HomeCollapsedIcon = () => (
  <div className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer" title="Home">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  </div>
);

const HomeSidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path ? 
    "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white" : 
    "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700";
  
  return (
    <>
      <h2 className="text-lg font-semibold mb-4 dark:text-white">Dashboard</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/" className={`block p-2 rounded transition-colors ${isActive('/')}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Overview
            </div>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/analytics" className={`block p-2 rounded transition-colors ${isActive('/dashboard/analytics')}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Analytics
            </div>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/stats" className={`block p-2 rounded transition-colors ${isActive('/dashboard/stats')}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
              Statistics
            </div>
          </Link>
        </li>
      </ul>
      
      <h2 className="text-lg font-semibold mt-6 mb-4 dark:text-white">Quick Access</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/meeting-prep" className={`block p-2 rounded transition-colors ${isActive('/meeting-prep')}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Meeting Prep
            </div>
          </Link>
        </li>
        <li>
          <Link to="/call-assistant" className={`block p-2 rounded transition-colors ${isActive('/call-assistant')}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Assistant
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
};

// Add the collapsedIcon property
HomeSidebar.collapsedIcon = <HomeCollapsedIcon />;

export default HomeSidebar; 