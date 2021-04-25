import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <Link to="/">책책책! 책을 읽읍시다</Link>
      <Link to="/post">글</Link>
      {children}
    </div>
  );
};

export default Layout;
