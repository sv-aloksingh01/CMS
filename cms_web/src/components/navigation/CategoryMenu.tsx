import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  TrendingUp, 
  Clock, 
  Globe, 
  Cpu, 
  Brain, 
  BookOpen, 
  Database, 
  BarChart3,
  Zap
} from 'lucide-react';

const categories = [
  { name: 'Trending', path: '/articles/trending', icon: TrendingUp, color: 'text-red-500' },
  { name: 'History', path: '/articles/category/history', icon: Clock, color: 'text-amber-500' },
  { name: 'Geography', path: '/articles/category/geography', icon: Globe, color: 'text-green-500' },
  { name: 'Technology', path: '/articles/category/technology', icon: Cpu, color: 'text-blue-500' },
  { name: 'General Knowledge', path: '/articles/category/general-knowledge', icon: BookOpen, color: 'text-purple-500' },
  { name: 'Data Engineering', path: '/articles/category/data-engineering', icon: Database, color: 'text-indigo-500' },
  { name: 'Data Science', path: '/articles/category/data-science', icon: BarChart3, color: 'text-cyan-500' },
  { name: 'Machine Learning', path: '/articles/category/machine-learning', icon: Brain, color: 'text-pink-500' },
  { name: 'Artificial Intelligence', path: '/articles/category/artificial-intelligence', icon: Zap, color: 'text-orange-500' },
];

interface CategoryMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function CategoryMenu({ isOpen, onClose }: CategoryMenuProps) {
  const location = useLocation();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:shadow-none lg:border-r lg:border-gray-200
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Categories</h2>
            <p className="text-sm text-gray-600 mt-1">Explore articles by topic</p>
          </div>

          {/* Categories List */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-4">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = location.pathname === category.path;
                
                return (
                  <li key={category.name}>
                    <Link
                      to={category.path}
                      onClick={onClose}
                      className={`
                        flex items-center px-4 py-3 rounded-lg transition-all duration-200 group
                        ${isActive 
                          ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-500' 
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                        }
                      `}
                    >
                      <Icon className={`
                        w-5 h-5 mr-3 transition-colors
                        ${isActive ? 'text-blue-600' : category.color}
                      `} />
                      <span className="font-medium">{category.name}</span>
                      {category.name === 'Trending' && (
                        <div className="ml-auto">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            Hot
                          </span>
                        </div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="text-xs text-gray-500 text-center">
              <b><p className="mt-1">More exciting content coming soon!</p></b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryMenu;