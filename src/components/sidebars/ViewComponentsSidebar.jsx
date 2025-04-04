import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Collapsed icon component for the sidebar
const ViewComponentsCollapsedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const ViewComponentsSidebar = () => {
  const location = useLocation();
  
  // Helper function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path ? 
      "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white" : 
      "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300";
  };
  
  return (
    <>
      <h2 className="text-lg font-semibold mb-4 dark:text-white">Component Library</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/view-components/buttons" className={`block p-2 rounded transition-colors ${isActive('/view-components/buttons')}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              Buttons
            </div>
          </Link>
        </li>
        <li>
          <Link to="/view-components/forms" className={`block p-2 rounded transition-colors ${isActive('/view-components/forms')}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Forms
            </div>
          </Link>
        </li>
        <li>
          <Link to="/view-components/cards" className={`block p-2 rounded transition-colors ${isActive('/view-components/cards')}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
              </svg>
              Cards
            </div>
          </Link>
        </li>
        <li>
          <Link to="/view-components/modals" className={`block p-2 rounded transition-colors ${isActive('/view-components/modals')}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Modals
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
};

// Add the collapsedIcon property
ViewComponentsSidebar.collapsedIcon = <ViewComponentsCollapsedIcon />;

export default ViewComponentsSidebar; 