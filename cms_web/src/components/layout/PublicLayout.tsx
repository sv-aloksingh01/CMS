import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { FileText, LogIn, Menu, X } from 'lucide-react';
import CategoryMenu from '../navigation/CategoryMenu';
import TopNavigation from '../navigation/TopNavigation';
import Footer from './Footer';

interface PublicLayoutProps {
  children: ReactNode;
}

function PublicLayout({ children }: PublicLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Category Menu */}
      <CategoryMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors mr-3"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>

                <Link to="/articles" className="flex items-center">
                  <FileText className="h-8 w-8 text-blue-600 mr-3" />
                  <h1 className="text-xl font-semibold text-gray-900">CMS Articles</h1>
                </Link>
              </div>
              
              <div className="flex items-center space-x-4">
                {isAuthenticated ? (
                  <Link
                    to="/admin"
                    className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Admin Dashboard
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Admin Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Top Navigation */}
        <TopNavigation />

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default PublicLayout;