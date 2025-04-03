import React from 'react';
import Layout from './components/layout/Layout';
import AccountLayout from './components/layout/AccountLayout';

// Layout configuration and management
export const LAYOUT_TYPES = {
  DEFAULT: 'default',
  ACCOUNT: 'account',
  MINIMAL: 'minimal',
  NONE: 'none'
};

// Layout renderer that decides which layout to use based on the layout type
export const LayoutRenderer = ({ children, layoutType = LAYOUT_TYPES.DEFAULT }) => {
  switch (layoutType) {
    case LAYOUT_TYPES.ACCOUNT:
      return <AccountLayout>{children}</AccountLayout>;
    
    case LAYOUT_TYPES.MINIMAL:
      return (
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      );
      
    case LAYOUT_TYPES.NONE:
      return <>{children}</>;
      
    case LAYOUT_TYPES.DEFAULT:
    default:
      return <Layout>{children}</Layout>;
  }
};

// HOC to wrap components with a specific layout
export const withLayout = (Component, layoutType = LAYOUT_TYPES.DEFAULT) => {
  return (props) => (
    <LayoutRenderer layoutType={layoutType}>
      <Component {...props} />
    </LayoutRenderer>
  );
};

export default LayoutRenderer; 