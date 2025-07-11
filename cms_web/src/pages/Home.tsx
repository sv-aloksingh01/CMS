import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, TrendingUp, Users, Award } from 'lucide-react';
import PublicLayout from '../components/layout/PublicLayout';

function Home() {
  return (
    <PublicLayout>
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="text-center py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-blue-600">DecodeGk</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover expertly curated articles covering technology, science, history, and more. 
              Stay informed with quality content that matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/articles"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/articles/trending"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Trending Now
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        
        <section className="py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose DecodeGk?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Content</h3>
                <p className="text-gray-600">
                  Expertly written and researched articles across multiple categories to keep you informed and engaged.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Authors</h3>
                <p className="text-gray-600">
                  Content created by industry professionals and subject matter experts you can trust.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Regular Updates</h3>
                <p className="text-gray-600">
                  Fresh content added regularly to keep you up-to-date with the latest trends and insights.
                </p>
              </div>
            </div>
          </div>
        </section>
        

        {/* Categories Preview */}
        {/*
        <section className="py-12 bg-gray-50 rounded-2xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Explore Our Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Job Prep', path: '/articles/category/job-preparations', color: 'bg-emerald-500' },
                { name: 'Technology', path: '/articles/category/technology', color: 'bg-blue-500' },
                { name: 'Science', path: '/articles/category/data-science', color: 'bg-green-500' },
                { name: 'History', path: '/articles/category/history', color: 'bg-amber-500' },
                { name: 'Geography', path: '/articles/category/geography', color: 'bg-emerald-500' },
                { name: 'AI & ML', path: '/articles/category/artificial-intelligence', color: 'bg-purple-500' },
                { name: 'Data Engineering', path: '/articles/category/data-engineering', color: 'bg-indigo-500' },
                { name: 'General Knowledge', path: '/articles/category/general-knowledge', color: 'bg-pink-500' },
              ].map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  className="group p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200"
                >
                  <div className={`w-8 h-8 ${category.color} rounded-lg mb-3 group-hover:scale-110 transition-transform`}></div>
                  <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
            */}

        {/* CTA Section */}
        {/*
        <section className="text-center py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Reading?
            </h2>
            <p className="text-gray-600 mb-8">
              Join thousands of readers who trust CMS Articles for quality content and insights.
            </p>
            <Link
              to="/articles"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              Browse All Articles
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
            */}
      </div>
    </PublicLayout>
  );
}

export default Home;