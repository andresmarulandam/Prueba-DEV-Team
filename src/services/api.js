import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'app-id': apiKey,
  },
});

export const fetchUsers = async (page) => {
  try {
    const response = await api.get('user', {
      params: {
        page: page,
        limit: 12,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const fetchPosts = async () => {
  try {
    const response = await api.get('post');

    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const fetchPostById = (postId) => {
  return axios.get(`${apiUrl}/post/${postId}`, {
    headers: {
      'app-id': apiKey,
    },
  });
};

export const fetchTags = async () => {
  try {
    const response = await api.get('tag');

    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const fetchCommentsByPostId = async (postId) => {
  try {
    const response = await api.get(`post/${postId}/comment`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
