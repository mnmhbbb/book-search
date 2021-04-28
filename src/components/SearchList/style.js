import styled from 'styled-components';

export const Style = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  li {
    width: 250px;
    height: 350px;
    // background: #e5e5e5;
    border: 1px solid #000;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  img {
    width: 100px;
    height: 150px;
    margin-bottom: 10px;
  }
  h3 {
    margin-bottom: 10px;
  }
  ,
  h4 {
    margin-bottom: 10px;
  }
`;
