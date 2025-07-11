import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Tag, ChevronRight, TrendingUp } from 'lucide-react';
import PublicLayout from '../components/layout/PublicLayout';
import { getCleanPreview } from '../utils/textUtils';
import api from '../api/api';

interface Article {
  id: number;
  title: string;
  content: string;
  categoryName: string;
  tags: string[];
}

function ArticlesList() {
  const { category } = useParams<{ category?: string }>();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchArticles(category);
  }, [category]);

  const fetchArticles = async (categoryFilter?: string) => {
    try {
      let endpoint = '/Articles';
      
      if (categoryFilter === 'trending') {
        // For trending, you might want a specific endpoint or parameter
        endpoint = '/Articles?trending=true';
      } else if (categoryFilter) {
        // For category filtering, use the category name from your constants
        endpoint = `/Articles?category=${categoryFilter}`;
      }
      
      const response = await api.get(endpoint);
      setArticles(response.data);
    } catch (err) {
      setError('Failed to load articles');
    } finally {
      setLoading(false);
    }
  };

  const getCategoryTitle = () => {
    if (!category) return 'Latest Articles';
    if (category === 'trending') return 'Trending Articles';
    
    // Convert category slug to title case
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ') + ' Articles';
  };

  const getCategoryDescription = () => {
    if (!category) return 'Discover our collection of articles covering various topics and insights.';
    if (category === 'trending') return 'The most popular and engaging articles right now.';
    
    const categoryDescriptions: { [key: string]: string } = {
  'career-start': 'Kickstart your professional journey with career planning tips and guidance.',
  'job-preparation': 'Prepare for your dream job with interview tips, resume guides, and career advice.',
  'skill-development': 'Sharpen your skills with practical tutorials, soft skills, and technical know-how.',
  'business-ideas': 'Explore innovative business ideas, startup strategies, and side hustle opportunities.',
  'history': 'Explore fascinating stories and events from the past.',
  'geography': 'Discover the world through physical and human geography.',
  'technology': 'Stay updated with the latest technological innovations and trends.',
  'general-knowledge': 'Expand your knowledge with diverse topics and interesting facts.',
  'data-engineering': 'Learn about building robust data infrastructure and pipelines.',
  'data-science': 'Dive into statistical analysis, machine learning, and data insights.',
  'machine-learning': 'Understand algorithms, models, and AI applications.',
  'artificial-intelligence': 'Explore the future of AI and its impact on society.',
  'generative-ai': 'Learn how AI generates content, code, images, and more using advanced models.'
};

    
    return categoryDescriptions[category] || 'Explore articles in this category.';
  };

  if (loading) {
    return (
      <PublicLayout>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </PublicLayout>
    );
  }

  if (error) {
    return (
      <PublicLayout>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600">{error}</p>
        </div>
      </PublicLayout>
    );
  }

  return (
    <PublicLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            {category === 'trending' && (
              <TrendingUp className="w-8 h-8 text-red-500 mr-3" />
            )}
            <h1 className="text-3xl font-bold text-gray-900">{getCategoryTitle()}</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {getCategoryDescription()}
          </p>
          {category === 'trending' && (
            <div className="mt-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                <TrendingUp className="w-4 h-4 mr-1" />
                Hot Topics
              </span>
            </div>
          )}
        </div>

        {/* Articles Grid - Single Column Layout */}
        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {category ? `No articles found in ${getCategoryTitle().toLowerCase()}.` : 'No articles available yet.'}
            </p>
            {category && (
              <Link
                to="/articles"
                className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700 transition-colors"
              >
                View all articles
              </Link>
            )}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/articles/${article.id}`}
                className="block bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      <Calendar className="w-3 h-3 mr-1" />
                      {article.categoryName || 'General'}
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {getCleanPreview(article.content, 200)}
                  </p>
                  
                  {article.tags && article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {article.tags.slice(0, 4).map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                      {article.tags.length > 4 && (
                        <span className="text-sm text-gray-500 px-3 py-1">
                          +{article.tags.length - 4} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </PublicLayout>
  );
}

export default ArticlesList;