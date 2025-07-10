import api from '../api/api';
import { ArticleResponseDto, CreateArticleRequestDto, UpdateArticleRequestDto, API_ENDPOINTS } from '../types/api';

export class ArticleService {
  // Get all articles
  static async getArticles(): Promise<ArticleResponseDto[]> {
    try {
      const response = await api.get(API_ENDPOINTS.ARTICLES);
      return response.data;
    } catch (error) {
      console.error('Error fetching articles:', error);
      throw error;
    }
  }

  // Get articles by category
  static async getArticlesByCategory(category: string): Promise<ArticleResponseDto[]> {
    try {
      const response = await api.get(API_ENDPOINTS.ARTICLES_BY_CATEGORY(category));
      return response.data;
    } catch (error) {
      console.error(`Error fetching articles for category ${category}:`, error);
      throw error;
    }
  }

  // Get trending articles (you might need to adjust this based on your backend)
  static async getTrendingArticles(): Promise<ArticleResponseDto[]> {
    try {
      // Assuming your backend has a trending endpoint, adjust as needed
      const response = await api.get(`${API_ENDPOINTS.ARTICLES}?trending=true`);
      return response.data;
    } catch (error) {
      console.error('Error fetching trending articles:', error);
      // Fallback to regular articles if trending endpoint doesn't exist
      const articles = await this.getArticles();
      return articles.slice(0, 5); // Return first 5 as trending
    }
  }

  // Get single article
  static async getArticle(id: number): Promise<ArticleResponseDto> {
    try {
      const response = await api.get(API_ENDPOINTS.ARTICLE_BY_ID(id));
      return response.data;
    } catch (error) {
      console.error(`Error fetching article ${id}:`, error);
      throw error;
    }
  }

  // Create article
  static async createArticle(articleData: CreateArticleRequestDto): Promise<ArticleResponseDto> {
    try {
      const response = await api.post(API_ENDPOINTS.ARTICLES, articleData);
      return response.data;
    } catch (error) {
      console.error('Error creating article:', error);
      throw error;
    }
  }

  // Update article
  static async updateArticle(id: number, articleData: UpdateArticleRequestDto): Promise<ArticleResponseDto> {
    try {
      const response = await api.put(API_ENDPOINTS.ARTICLE_BY_ID(id), articleData);
      return response.data;
    } catch (error) {
      console.error(`Error updating article ${id}:`, error);
      throw error;
    }
  }

  // Delete article
  static async deleteArticle(id: number): Promise<void> {
    try {
      await api.delete(API_ENDPOINTS.ARTICLE_BY_ID(id));
    } catch (error) {
      console.error(`Error deleting article ${id}:`, error);
      throw error;
    }
  }
}