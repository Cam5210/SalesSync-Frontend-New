import React from 'react';

const ProductsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Products</h1>
      <p className="mb-4 dark:text-gray-300">View and manage your products here.</p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <h2 className="text-lg font-semibold mb-2 dark:text-white">Product Catalog</h2>
        <p className="mb-4 dark:text-gray-300">Browse your available products and manage product details.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white dark:bg-gray-700 rounded-lg shadow p-4">
              <h3 className="font-medium text-gray-800 dark:text-white mb-2">Product {item}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Product description goes here.</p>
              <div className="mt-4 flex justify-end">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage; 