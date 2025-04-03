import React from 'react';

const MainContent = ({ children, sidebarOpen }) => {
  return (
    <main className={`main-content bg-white dark:bg-gray-900 flex-1 overflow-auto transition-all duration-300 ${
      !sidebarOpen ? 'ml-0 pl-4' : ''
    }`}>
      {children}
    </main>
  );
};

export default MainContent; 