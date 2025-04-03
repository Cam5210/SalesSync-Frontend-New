// Create me the call assistant sidebar component base it on what is in the @/components/sidebars/CallAssistantSidebar.jsx file

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CallAssistantSidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 
    "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white" : 
    "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700";

  return (
    <>
      <h2 className="text-lg font-semibold mb-4 dark:text-white">Call Assistant</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/call-assistant" className={`block p-2 rounded transition-colors ${isActive('/call-assistant')}`}>
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Overview
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
};

