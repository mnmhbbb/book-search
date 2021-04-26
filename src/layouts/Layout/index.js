import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: '#e5e5e5', width: '100%', height: '100vh' }}>
      <Link to="/post">글</Link>
      {children}
    </div>
  );
};

export default Layout;
