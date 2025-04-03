import React from 'react';

const MeetingPrepPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Meeting Preparation</h1>
      <p className="mb-4 dark:text-gray-300">Prepare for your upcoming meetings with comprehensive tools and resources.</p>
      
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <h2 className="text-lg font-semibold mb-2 dark:text-white">Upcoming Meetings</h2>
        <p className="mb-4 dark:text-gray-300">Review and prepare for your scheduled meetings.</p>
        
        <div className="space-y-4 mt-6">
          {[
            { client: "Acme Corporation", time: "Today, 2:00 PM", status: "Upcoming" },
            { client: "Global Innovations", time: "Tomorrow, 10:30 AM", status: "Pending" },
            { client: "Tech Solutions Inc.", time: "Mar 25, 1:15 PM", status: "Confirmed" },
            { client: "Strategic Partners", time: "Mar 26, 9:00 AM", status: "Tentative" }
          ].map((meeting, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow p-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">{meeting.client}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{meeting.time}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    meeting.status === "Upcoming" ? "bg-yellow-100 text-yellow-800" :
                    meeting.status === "Confirmed" ? "bg-green-100 text-green-800" :
                    meeting.status === "Tentative" ? "bg-purple-100 text-purple-800" :
                    "bg-blue-100 text-blue-800"
                  }`}>{meeting.status}</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">Prepare Notes</button>
                <button className="bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-800 dark:text-white px-3 py-1 rounded text-sm">Research Client</button>
                <button className="bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-800 dark:text-white px-3 py-1 rounded text-sm">View Agenda</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <h2 className="text-lg font-semibold mb-2 dark:text-white">Quick Preparation Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-4">
            <h3 className="font-medium text-gray-800 dark:text-white mb-2">Client Research</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Get instant insights on your client's business, industry, and recent news.</p>
            <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">Start Research</button>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-4">
            <h3 className="font-medium text-gray-800 dark:text-white mb-2">Talking Points Generator</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Generate relevant talking points based on client history and interests.</p>
            <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">Generate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingPrepPage; 