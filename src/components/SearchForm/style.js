import { Input } from 'antd';
import styled from 'styled-components';

export const FormStyle = styled.form`
  margin: 0 auto;
  text-align: center;
  height: 40px;
  margin: 0 auto;

  ul,
  li {
    list-style-type: none;
    padding-left: 0;
    margin-left: 0;
    margin: 1rem;
  }
`;

export const InputStyle = styled(Input)`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  input {
    font-size: 20px;
    margin: 5px;
    padding: 5px;
  }
`;
