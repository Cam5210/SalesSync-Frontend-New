import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Collapsed icon component for the sidebar
const SDRAutomationCollapsedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const SDRAutomationSidebar = () => {
  const location = useLocation();
  
  // Helper function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path ? 
      "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white" : 
      "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300";
  };
  
  return (
    <>
      <h2 className="text-lg font-semibold mb-4 dark:text-white">SDR Automation</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/sdr-automation/campaigns" className={`block p-2 rounded transition-colors ${isActive('/sdr-automation/campaigns')}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
              Campaigns
            </div>
          </Link>
        </li>
        <li>
          <Link to="/sdr-automation/prospects" className={`block p-2 rounded transition-colors ${isActive('/sdr-automation/prospects')}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Prospects
            </div>
          </Link>
        </li>
        <li>
          <Link to="/sdr-automation/sequences" className={`block p-2 rounded transition-colors ${isActive('/sdr-automation/sequences')}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Sequences
            </div>
          </Link>
        </li>
        <li>
          <Link to="/sdr-automation/analytics" className={`block p-2 rounded transition-colors ${isActive('/sdr-automation/analytics')}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Analytics
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
};

// Add the collapsedIcon property
SDRAutomationSidebar.collapsedIcon = <SDRAutomationCollapsedIcon />;

export default SDRAutomationSidebar; 