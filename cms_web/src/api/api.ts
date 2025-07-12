import axios from 'axios';

// Use environment variable to determine API URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://localhost:7001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://localhost:7001/api';

// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });


// Request interceptor to add auth token (only for protected routes)
api.interceptors.request.use(
  (config) => {
    // Only add token for protected routes (POST, PUT, DELETE)
    const isProtectedRoute = ['post', 'put', 'delete'].includes(config.method?.toLowerCase() || '');
    
    if (isProtectedRoute) {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && window.location.pathname.startsWith('/admin')) {
      localStorage.removeItem('token');
      window.location.href = '/login?expired=true';
    }
    return Promise.reject(error);
  }
);

export default api;