import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Icon component for collapsed view
export const ProductsCollapsedIcon = () => (
  <div className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer" title="Products">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  </div>
);

const ProductsSidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path ? 
    "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white" : 
    "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700";
  
  return (
    <>
      <h2 className="text-lg font-semibold mb-4 dark:text-white">Products</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/products" className={`block p-2 rounded transition-colors ${isActive('/products')}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              All Products
            </div>
          </Link>
        </li>
        <li>
          <Link to="/products/categories" className={`block p-2 rounded transition-colors ${isActive('/products/categories')}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              Categories
            </div>
          </Link>
        </li>
        <li>
          <Link to="/products/inventory" className={`block p-2 rounded transition-colors ${isActive('/products/inventory')}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Inventory
            </div>
          </Link>
        </li>
        <li>
          <Link to="/products/pricing" className={`block p-2 rounded transition-colors ${isActive('/products/pricing')}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Pricing
            </div>
          </Link>
        </li>
      </ul>
      
      <h2 className="text-lg font-semibold mt-6 mb-4 dark:text-white">Management</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/products/add" className={`block p-2 rounded transition-colors ${isActive('/products/add')}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Product
            </div>
          </Link>
        </li>
        <li>
          <Link to="/products/import" className={`block p-2 rounded transition-colors ${isActive('/products/import')}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Import
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
};

// Add the collapsedIcon property
ProductsSidebar.collapsedIcon = <ProductsCollapsedIcon />;

export default ProductsSidebar; 