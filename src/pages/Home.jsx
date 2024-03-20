import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import PostList from '../components/PostList/PostList';
import TagFilter from '../components/TagFilter/TagFilter';

function Home() {
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState('');

  const handleTagFilterChange = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <div>
      <h1>Inicio</h1>
      <div>
        <TagFilter onFilterChange={handleTagFilterChange} />
      </div>
      <div>
        <PostList selectedTag={selectedTag} />
      </div>
    </div>
  );
}

export default Home;
