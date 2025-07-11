import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Login from './pages/Login';
import ArticlesList from './pages/ArticlesList';
import ArticleDetail from './pages/ArticleDetail';
import AdminDashboard from './pages/AdminDashboard';
import CreateArticle from './pages/CreateArticle';
import EditArticle from './pages/EditArticle';

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(!!localStorage.getItem('token'));

  // Listen for storage changes to update authentication state
  React.useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem('token'));
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also check on mount in case token was set in same tab
    const checkAuth = () => {
      setIsAuthenticated(!!localStorage.getItem('token'));
    };
    
    checkAuth();
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public Routes - No auth required */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
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