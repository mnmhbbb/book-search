import React from 'react';

const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: '#e5e5e5', width: '100%', height: '100vh' }}>{children}</div>
  );
};

export default Layout;
