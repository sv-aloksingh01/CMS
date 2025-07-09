import axios from 'axios';
import { mockApi } from '../services/mockApi';

// Check environment variable or default to mock API
const USE_MOCK_API = import.meta.env.VITE_USE_MOCK_API !== 'false';

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL || 'https://localhost:7001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

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
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Mock API wrapper that mimics axios response structure
const createMockApiWrapper = () => ({
  get: async (url: string) => {
    if (url === '/Articles' || url.startsWith('/Articles?category=')) {
      const category = url.includes('?category=') ? url.split('?category=')[1] : undefined;
      const data = await mockApi.getArticles(category);
      return { data };
    }
    if (url.startsWith('/Articles/')) {
      const id = parseInt(url.split('/')[2]);
      const data = await mockApi.getArticle(id);
      return { data };
    }
    throw new Error(`Mock API: Unsupported GET endpoint: ${url}`);
  },
  
  post: async (url: string, data: any) => {
    if (url === '/auth/login') {
      const result = await mockApi.login(data.username, data.password);
      return { data: result };
    }
    if (url === '/Articles') {
      const result = await mockApi.createArticle(data);
      return { data: result };
    }
    throw new Error(`Mock API: Unsupported POST endpoint: ${url}`);
  },
  
  put: async (url: string, data: any) => {
    if (url.startsWith('/Articles/')) {
      const id = parseInt(url.split('/')[2]);
      const result = await mockApi.updateArticle(id, data);
      return { data: result };
    }
    throw new Error(`Mock API: Unsupported PUT endpoint: ${url}`);
  },
  
  delete: async (url: string) => {
    if (url.startsWith('/Articles/')) {
      const id = parseInt(url.split('/')[2]);
      await mockApi.deleteArticle(id);
      return { data: null };
    }
    throw new Error(`Mock API: Unsupported DELETE endpoint: ${url}`);
  }
});

// Export either real API or mock API based on configuration
export default USE_MOCK_API ? createMockApiWrapper() : api;