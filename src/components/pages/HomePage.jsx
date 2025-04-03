import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Home</h1>
      <p className="mb-4 dark:text-gray-300">Welcome to the home page of the application.</p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <h2 className="text-lg font-semibold mb-2 dark:text-white">Dashboard Overview</h2>
        <p className="mb-4 dark:text-gray-300">Here you can display a summary of all features and quick access to most used tools.</p>
      </div>
    </div>
  );
};

export default HomePage; 