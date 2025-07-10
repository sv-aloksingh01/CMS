// API Response Types
export interface ArticleResponseDto {
  id: number;
  title: string;
  content: string;
  categoryName: string;
  tags: string[];
  createdAt?: string;
}

export interface CreateArticleRequestDto {
  title: string;
  content: string;
  categoryName: string;
  tagNames: string[];
}

export interface UpdateArticleRequestDto {
  title: string;
  content: string;
  categoryName: string;
  tagNames: string[];
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user?: {
    id: number;
    username: string;
    email?: string;
  };
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  statusCode?: number;
}

// API Endpoints
export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/Auth/login',
  LOGOUT: '/Auth/logout',
  
  // Articles
  ARTICLES: '/Articles',
  ARTICLE_BY_ID: (id: number) => `/Articles/${id}`,
  ARTICLES_BY_CATEGORY: (category: string) => `/Articles?category=${category}`,
  
  // Categories (if you have a separate endpoint)
  CATEGORIES: '/Categories',
  
  // Tags (if you have a separate endpoint)
  TAGS: '/Tags',
} as const;