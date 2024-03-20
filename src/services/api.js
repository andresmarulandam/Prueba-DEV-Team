import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'app-id': apiKey,
  },
});

export const fetchUsers = async (page = 0, limit = 10) => {
  try {
    const response = await api.get('user', {
      params: {
        page,
        limit,
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const fetchPosts = async () => {
  try {
    const response = await api.get('post');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const fetchPostById = async (postId) => {
  try {
    const response = await api.get(`post/${postId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching post by ID:', error);
    throw error;
  }
};

export const fetchCommentsByPostId = async (postId) => {
  try {
    const response = await api.get(`post/${postId}/comment`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching comments by post ID:', error);
    throw error;
  }
};
