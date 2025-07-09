import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import ArticlesList from './pages/ArticlesList';
import ArticleDetail from './pages/ArticleDetail';
import AdminDashboard from './pages/AdminDashboard';
import CreateArticle from './pages/CreateArticle';
import EditArticle from './pages/EditArticle';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        {/* Public Routes - No auth required */}
        <Route path="/" element={<Navigate to="/articles" replace />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/trending" element={<ArticlesList />} />
        <Route path="/articles/category/:category" element={<ArticlesList />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        
        {/* Auth Routes */}
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/admin" replace /> : <Login />
          }
        />
        
        {/* Protected Admin Routes - Auth required */}
        <Route
          path="/admin"
          element={
            isAuthenticated ? <AdminDashboard /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/admin/create"
          element={
            isAuthenticated ? <CreateArticle /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/admin/edit/:id"
          element={
            isAuthenticated ? <EditArticle /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;