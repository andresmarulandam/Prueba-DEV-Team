import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../../services/api';
import './postList.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPostsData = async () => {
      try {
        const postsData = await fetchPosts();
        setPosts(postsData.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPostsData();
  }, []);

  return (
    <div className="post-list">
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
