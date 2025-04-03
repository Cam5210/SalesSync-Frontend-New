import React from 'react';

const TrainingPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Training</h1>
      <p className="mb-4 dark:text-gray-300">Access training materials and courses.</p>
      
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <h2 className="text-lg font-semibold mb-2 dark:text-white">Available Courses</h2>
        <p className="mb-4 dark:text-gray-300">Browse and access your training courses below.</p>
        
        <div className="space-y-4 mt-6">
          {[
            "Sales Fundamentals",
            "Advanced Communication Strategies",
            "Deal Negotiation Tactics",
            "Customer Relationship Management",
            "Product Knowledge Mastery"
          ].map((course, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow p-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-800 dark:text-white">{course}</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Available</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">Learn essential skills and techniques to improve your sales performance.</p>
              <div className="mt-4 flex justify-end space-x-2">
                <button className="bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-800 dark:text-white px-3 py-1 rounded text-sm">View Syllabus</button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">Start Course</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingPage; 