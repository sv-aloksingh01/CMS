// src/pages/Articles.jsx
import React, { useEffect, useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import ArticlesList from '../components/ArticlesList';

function Articles() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  const fetchArticles = async () => {
    try {
      const res = await api.get('/articles');
      setArticles(res.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return <ArticlesList articles={articles} onLogout={logout} />;
}

export default Articles;
