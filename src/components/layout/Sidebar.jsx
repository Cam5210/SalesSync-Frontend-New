import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar, children }) => {
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
            {children}
          </div>
        ) : (
          // Icon-only sidebar when collapsed
          <div className="hidden md:flex md:flex-col md:items-center md:space-y-4 flex-1 overflow-y-auto">
            {children && children.type && children.type.collapsedIcon && (
              <div className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
                {children.type.collapsedIcon}
              </div>
            )}
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar; 