import React from 'react';

const SDRAutomationPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 dark:text-white">SDR Automation</h1>
      <p className="mb-4 dark:text-gray-300">Automate repetitive sales tasks and focus on meaningful conversations.</p>
      
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <h2 className="text-lg font-semibold mb-2 dark:text-white">Automation Dashboard</h2>
        <p className="mb-4 dark:text-gray-300">Monitor and control your active automation workflows.</p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <tr>
                <th className="py-3 px-4 text-left">Workflow Name</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Performance</th>
                <th className="py-3 px-4 text-left">Last Run</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="py-3 px-4 font-medium text-gray-800 dark:text-white">Email Sequence Automation</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span></td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 rounded-full h-2.5 mr-2">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">85%</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300">Today, 10:23 AM</td>
                <td className="py-3 px-4 flex space-x-2">
                  <button className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600">View</button>
                  <button className="px-2 py-1 text-xs bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-white rounded hover:bg-gray-400 dark:hover:bg-gray-500">Pause</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="py-3 px-4 font-medium text-gray-800 dark:text-white">LinkedIn Outreach</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Paused</span></td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 rounded-full h-2.5 mr-2">
                      <div className="bg-yellow-400 h-2.5 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">60%</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300">Yesterday, 2:45 PM</td>
                <td className="py-3 px-4 flex space-x-2">
                  <button className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600">View</button>
                  <button className="px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600">Resume</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="py-3 px-4 font-medium text-gray-800 dark:text-white">Lead Qualification</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span></td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 rounded-full h-2.5 mr-2">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{width: '92%'}}></div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">92%</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300">Today, 9:10 AM</td>
                <td className="py-3 px-4 flex space-x-2">
                  <button className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600">View</button>
                  <button className="px-2 py-1 text-xs bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-white rounded hover:bg-gray-400 dark:hover:bg-gray-500">Pause</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Create New Automation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="text-center">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-full inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-3 font-medium text-gray-800 dark:text-white">Email Sequence</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Automated email campaigns with personalized follow-ups</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full">Create</button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="text-center">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-full inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-3 font-medium text-gray-800 dark:text-white">LinkedIn Outreach</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Automated connection requests and follow-up messages</p>
              <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded w-full">Create</button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="text-center">
              <div className="p-3 bg-green-100 text-green-600 rounded-full inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="mt-3 font-medium text-gray-800 dark:text-white">Lead Qualification</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Automatically score and qualify leads based on criteria</p>
              <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full">Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SDRAutomationPage; 