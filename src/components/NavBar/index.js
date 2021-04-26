import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ backgroundColor: '#1e90ff', display: 'flex' }}>
      <h1>
        <Link to="/">홈</Link>
      </h1>
      <h1>회원가입</h1>
      <h1>로그인</h1>
      <h1>내 책장</h1>
    </div>
  );
};

export default NavBar;
