import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import './styles.css';

function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <button className="login-button" onClick={() => loginWithRedirect()}>
      Login
    </button>
  );
}

export default LoginButton;
