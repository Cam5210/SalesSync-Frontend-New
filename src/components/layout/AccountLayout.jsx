import React, { useState } from 'react';
import Navbar from './Navbar';

const AccountLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="layout-container flex flex-col min-h-screen">
      <Navbar />
      <div className="layout-content flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex flex-col md:flex-row">
                {/* Account navigation sidebar */}
                <div className={`sidebar transition-all duration-300 ${
                  sidebarOpen ? 'w-full md:w-64' : 'w-16'
                } mb-6 md:mb-0 md:mr-8`}>
                  {/* Toggle button */}
                  <button 
                    onClick={toggleSidebar}
                    className={`self-${sidebarOpen ? 'end' : 'center'} p-2 mb-4 rounded hover:bg-gray-200 transition-colors focus:outline-none`}
                    aria-label="Toggle sidebar"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                        sidebarOpen 
                          ? "M15 19l-7-7 7-7" // Left arrow when open
                          : "M9 5l7 7-7 7" // Right arrow when closed
                      } />
                    </svg>
                  </button>
                
                  {sidebarOpen ? (
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Account</h3>
                      <nav className="space-y-1">
                        <a
                          href="#"
                          className="bg-gray-100 text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                        >
                          Profile
                        </a>
                        <a
                          href="#"
                          className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                        >
                          Preferences
                        </a>
                        <a
                          href="#"
                          className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                        >
                          Security
                        </a>
                        <a
                          href="#"
                          className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                        >
                          Notifications
                        </a>
                        <a
                          href="#"
                          className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                        >
                          Billing
                        </a>
                      </nav>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center pt-4 space-y-4">
                      <div className="p-2 rounded hover:bg-gray-200 cursor-pointer" title="Profile">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div className="p-2 rounded hover:bg-gray-200 cursor-pointer" title="Preferences">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Account content area */}
                <div className={`main-content flex-1 transition-all duration-300 ${
                  !sidebarOpen ? 'expanded' : ''
                }`}>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountLayout; 