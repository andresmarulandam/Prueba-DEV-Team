import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../../services/api';

import './styles.css';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    getPosts();
  }, []);
  return (
    <div className="post-list-container">
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <img src={post.image} alt="Post" className="post-image" />
          <p className="post-tags">
            <strong>Tags:</strong> {post.tags.join(', ')}
          </p>
          <p className="post-user">
            <strong>Usuario:</strong> {post.owner.firstName}{' '}
            {post.owner.lastName}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
