import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="layout-container flex flex-col h-screen">
      <Navbar />
      <div className="layout-content flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <MainContent sidebarOpen={sidebarOpen}>{children}</MainContent>
      </div>
    </div>
  );
};

export default Layout; 