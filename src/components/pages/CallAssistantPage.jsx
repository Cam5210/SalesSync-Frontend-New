import React from 'react';

const CallAssistantPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Call Assistant</h1>
      <p className="mb-4 dark:text-gray-300">Get real-time assistance during your sales calls.</p>
      
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <h2 className="text-lg font-semibold mb-2 dark:text-white">Call Assistant Features</h2>
        <p className="mb-4 dark:text-gray-300">Use our AI-powered call assistant to improve your sales calls.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-5">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white">Real-time Suggestions</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Get contextual suggestions and talking points during your call based on the conversation.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Try Now</button>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-5">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white">Call Recording & Analysis</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Record your calls and get AI-powered insights and suggestions for improvement.</p>
            <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">View Recordings</button>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-5">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white">Call Scripts & Templates</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Access a library of proven call scripts and templates for different scenarios.</p>
            <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Browse Library</button>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-5">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-red-100 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white">Objection Handling</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Get instant responses to common sales objections during your calls.</p>
            <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">View Strategies</button>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Ready to make better sales calls?</h2>
            <p className="mt-2 opacity-90">Start using our AI-powered Call Assistant today.</p>
          </div>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-lg shadow-md transition-colors">
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallAssistantPage; 