import React, { useEffect, useState } from 'react';
import { fetchPosts, fetchTags } from '../../services/api';

import './styles.css';
import LoginButton from '../LoginButton/LoginButton';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    const getPostsandTags = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts.data);

        const postTags = fetchedPosts.data.reduce((acc, post) => {
          return [...acc, ...post.tags];
        }, []);
        const uniqueTags = [...new Set(postTags)];
        setTags(uniqueTags);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    getPostsandTags();
  }, []);

  const handleTagSelection = (tag) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((t) => t !== tag)
        : [...prevSelectedTags, tag],
    );
  };

  const filteredPosts =
    selectedTags.length === 0
      ? posts
      : posts.filter((post) =>
          post.tags.some((tag) => selectedTags.includes(tag)),
        );

  return (
    <div>
      <div className="button-container">
        <LoginButton />
      </div>

      <div className="post-list-container">
        <h1>Posts</h1>

        <div>
          <h2>Tags Disponibles</h2>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagSelection(tag)}
              className={`tag-button ${
                selectedTags.includes(tag) ? 'selected' : ''
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div>
          {filteredPosts.map((post) => (
            <div key={post.id} className="post-card">
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
      </div>
    </div>
  );
}

export default PostList;
