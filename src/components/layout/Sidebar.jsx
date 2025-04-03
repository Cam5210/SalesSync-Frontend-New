import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar bg-gray-100 dark:bg-gray-800 shadow-md transition-all duration-300 ${
      isOpen ? 'w-64' : 'w-0 md:w-16'
    }`}>
      <div className={`h-full flex flex-col ${isOpen ? 'p-4' : 'p-0 md:py-4 md:px-2'}`}>
        {/* Toggle button at top of sidebar */}
        <button 
          onClick={toggleSidebar}
          className={`self-${isOpen ? 'end' : 'center'} p-2 mb-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none flex-shrink-0`}
          aria-label="Toggle sidebar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
              isOpen 
                ? "M15 19l-7-7 7-7" // Left arrow when open
                : "M9 5l7 7-7 7" // Right arrow when closed
            } />
          </svg>
        </button>
        
        {isOpen ? (
          <div className="flex-1 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4 dark:text-white">Navigation</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200 transition-colors">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200 transition-colors">
                  Reports
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200 transition-colors">
                  Users
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200 transition-colors">
                  Products
                </a>
              </li>
            </ul>
          </div>
        ) : (
          // Icon-only sidebar when collapsed
          <div className="hidden md:flex md:flex-col md:items-center md:space-y-4 flex-1 overflow-y-auto">
            <div className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer" title="Home">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer" title="Analytics">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer" title="Reports">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer" title="Users">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer" title="Products">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar; 