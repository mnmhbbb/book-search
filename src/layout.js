import React from 'react';
import styled from 'styled-components';

const Global = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 12rem 0 2rem;

  a {
    text-decoration: none;
    color: inherit;
    h1 {
      width: 300px;
      margin: 0 auto;
      text-align: center;
      padding: 10px 5px;
      border: solid 4px #000;
      transition: all ease 200ms;
    }

    h1:hover {
      box-shadow: 0 3px 10px 1px #dddddd;
    }
  }
`;

const Layout = ({ children }) => {
  return <Global>{children}</Global>;
};

export default Layout;
