// src/components/ArticlesList.jsx
import React from 'react';

function ArticlesList({ articles, onLogout }) {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: 20 }}>
      <h2>Articles</h2>
      <button onClick={onLogout} style={{ marginBottom: 20 }}>
        Logout
      </button>
      <ul>
        {articles.length === 0 ? (
          <p>No articles found.</p>
        ) : (
          articles.map((article) => (
            <li key={article.id} style={{ marginBottom: 10 }}>
              <strong>{article.title}</strong>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ArticlesList;
