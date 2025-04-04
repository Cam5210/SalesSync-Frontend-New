import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Collapsed icon component for the sidebar
const MeetingPrepCollapsedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const MeetingPrepSidebar = () => {
  const location = useLocation();
  
  // Helper function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path ? 
      "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white" : 
      "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300";
  };
  
  return (
    <>
      <h2 className="text-lg font-semibold mb-4 dark:text-white">Meeting Prep</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/meeting-prep/upcoming" className={`block p-2 rounded transition-colors ${isActive('/meeting-prep/upcoming')}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Upcoming Meetings
            </div>
          </Link>
        </li>
        <li>
          <Link to="/meeting-prep/past" className={`block p-2 rounded transition-colors ${isActive('/meeting-prep/past')}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Past Meetings
            </div>
          </Link>
        </li>
        <li>
          <Link to="/meeting-prep/templates" className={`block p-2 rounded transition-colors ${isActive('/meeting-prep/templates')}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
              Meeting Templates
            </div>
          </Link>
        </li>
        <li>
          <Link to="/meeting-prep/notes" className={`block p-2 rounded transition-colors ${isActive('/meeting-prep/notes')}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Meeting Notes
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
};

// Add the collapsedIcon property
MeetingPrepSidebar.collapsedIcon = <MeetingPrepCollapsedIcon />;

export default MeetingPrepSidebar; 