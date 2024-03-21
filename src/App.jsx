import { Routes, Route } from 'react-router-dom';

import Comments from './pages/Comments/Comments';
import LoginPage from './pages/LoginPage/LoginPage';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/comments/:postId" element={<Comments />} />
    </Routes>
  );
}

export default App;
