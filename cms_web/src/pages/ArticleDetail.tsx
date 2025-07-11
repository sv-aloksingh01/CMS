import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Edit } from 'lucide-react';
import PublicLayout from '../components/layout/PublicLayout';
import api from '../api/api';

interface Article {
  id: number;
  title: string;
  content: string;
  categoryName: string;
  tags: string[];
}

function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const isAuthenticated = !!localStorage.getItem('token');

  useEffect(() => {
    if (id) {
      fetchArticle(parseInt(id));
    }
  }, [id]);

  const fetchArticle = async (articleId: number) => {
    try {
      const response = await api.get(`/Articles/${articleId}`);
      setArticle(response.data);
    } catch (err) {
      setError('Article not found');
    } finally {
      setLoading(false);
    }
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

  if (error || !article) {
    return (
      <PublicLayout>
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-600 text-lg">{error}</p>
            <Link
              to="/articles"
              className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Link>
          </div>
        </div>
      </PublicLayout>
    );
  }

  return (
    <PublicLayout>
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/articles"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>
          
          {isAuthenticated && (
            <Link
              to={`/admin/edit/${article.id}`}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit Article
            </Link>
          )}
        </div>

        {/* Article Content */}
        <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8">
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  <Calendar className="w-4 h-4 mr-1" />
                  {article.categoryName || 'General'}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {article.title}
              </h1>
              
              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-gray-700 leading-relaxed article-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </div>
        </article>
        
        <style jsx>{`
          .article-content h1,
          .article-content h2,
          .article-content h3,
          .article-content h4,
          .article-content h5,
          .article-content h6 {
            margin-top: 1.5em;
            margin-bottom: 0.5em;
            font-weight: 600;
            line-height: 1.25;
          }
          
          .article-content h1 { font-size: 2em; }
          .article-content h2 { font-size: 1.5em; }
          .article-content h3 { font-size: 1.25em; }
          
          .article-content p {
            margin-bottom: 1em;
            line-height: 1.6;
          }
          
          .article-content ul,
          .article-content ol {
            margin-bottom: 1em;
            padding-left: 1.5em;
          }
          
          .article-content li {
            margin-bottom: 0.5em;
          }
          
          .article-content blockquote {
            border-left: 4px solid #e5e7eb;
            padding-left: 1em;
            margin: 1em 0;
            font-style: italic;
            color: #6b7280;
          }
          
          .article-content code {
            background-color: #f3f4f6;
            padding: 0.125em 0.25em;
            border-radius: 0.25em;
            font-size: 0.875em;
          }
          
          .article-content pre {
            background-color: #f3f4f6;
            padding: 1em;
            border-radius: 0.5em;
            overflow-x: auto;
            margin: 1em 0;
          }
          
          .article-content img {
            max-width: 100%;
            height: auto;
            border-radius: 0.5em;
            margin: 1em 0;
          }
          
          .article-content a {
            color: #2563eb;
            text-decoration: underline;
          }
          
          .article-content a:hover {
            color: #1d4ed8;
          }
        `}</style>
      </div>
    </PublicLayout>
  );
}

export default ArticleDetail;