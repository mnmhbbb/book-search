import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import { useInput } from 'hooks/useInput';

const SignIn = () => {
  const history = useHistory();
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onFinish = useCallback(
    async (e) => {
      console.log(email, password);
      e.preventDefault();
      history.push('/');
    },
    [history, email, password],
  );

  return (
    <>
      <form onSubmit={onFinish}>
        <input type="email" value={email} onChange={onChangeEmail} />
        <input type="password" value={password} onChange={onChangePassword} />
        <button>로그인</button>
      </form>
    </>
  );
};

export default SignIn;
