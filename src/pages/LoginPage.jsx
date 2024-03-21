import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../components/LoginButton/LoginButton';
import LogoutButton from '../components/LogoutButton/LogoutButton';
import UserList from '../components/UserList/UserList';
import PostList from '../components/Post/PostList';

import './styles.css';

function LoginPage() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) return <h1>Is Loading...</h1>;
  return (
    <div>
      {isAuthenticated ? (
        <div>
          {' '}
          <LogoutButton /> <UserList />{' '}
        </div>
      ) : (
        <div>
          <PostList />
        </div>
      )}
    </div>
  );
}

export default LoginPage;
