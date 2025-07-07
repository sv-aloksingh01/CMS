import { useEffect, useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  const fetchArticles = async () => {
    const res = await api.get('/articles');
    setArticles(res.data);
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      <h2>Articles</h2>
      <button onClick={logout}>Logout</button>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <strong>{article.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
