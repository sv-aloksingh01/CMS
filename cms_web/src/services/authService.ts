import api from '../api/api';
import { LoginRequest, LoginResponse, API_ENDPOINTS } from '../types/api';

export class AuthService {
  // Login
  static async login(credentials: LoginRequest): Promise<LoginResponse> {
    try {
      const response = await api.post(API_ENDPOINTS.LOGIN, credentials);
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  // Logout
  static async logout(): Promise<void> {
    try {
      await api.post(API_ENDPOINTS.LOGOUT);
    } catch (error) {
      console.error('Logout error:', error);
      // Continue with local logout even if server request fails
    } finally {
      localStorage.removeItem('token');
    }
  }

  // Check if user is authenticated
  static isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  // Get stored token
  static getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Store token
  static setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Remove token
  static removeToken(): void {
    localStorage.removeItem('token');
  }
}