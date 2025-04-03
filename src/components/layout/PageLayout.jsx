import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const PageLayout = ({ children, sidebarContent }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="layout-content flex flex-1 overflow-hidden">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar}>
        {sidebarContent}
      </Sidebar>
      <MainContent sidebarOpen={sidebarOpen}>
        {children}
      </MainContent>
    </div>
  );
};

export default PageLayout; 