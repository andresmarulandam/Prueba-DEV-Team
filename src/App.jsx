import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostList from './components/Post/PostList';
import UserListPage from './pages/UserListPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/users" element={<UserListPage />} />
    </Routes>
  );
}

export default App;
