import React from 'react';
import { Users, Target, Award, BookOpen } from 'lucide-react';
import PublicLayout from '../components/layout/PublicLayout';

function About() {
  return (
    <PublicLayout>
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About CMS Articles</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're passionate about delivering high-quality, informative content that educates, 
            inspires, and keeps you informed about the world around you.
          </p>
        </div>

        {/* Mission Section */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            At CMS Articles, our mission is to democratize access to quality information across diverse fields 
            of knowledge. We believe that everyone deserves access to well-researched, expertly written content 
            that can help them learn, grow, and make informed decisions. Whether you're a student, professional, 
            or simply curious about the world, we're here to provide you with reliable, engaging content.
          </p>
        </section>

        {/* Values Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                Every article is thoroughly researched, fact-checked, and written by experts in their respective fields.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Educational Focus</h3>
              <p className="text-gray-600">
                We prioritize educational value, ensuring our content helps readers learn and understand complex topics.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Community Driven</h3>
              <p className="text-gray-600">
                We listen to our readers and continuously improve our content based on feedback and emerging trends.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              CMS Articles was founded with a simple yet powerful vision: to create a platform where 
              knowledge meets accessibility. In an age of information overload, we recognized the need 
              for a trusted source that could cut through the noise and deliver content that truly matters.
            </p>
            <p className="mb-4">
              Our journey began when a group of educators, researchers, and content creators came together 
              with a shared passion for learning and teaching. We noticed that while there was an abundance 
              of information available online, much of it lacked depth, accuracy, or was simply difficult 
              to understand for the average reader.
            </p>
            <p>
              Today, CMS Articles serves thousands of readers worldwide, covering topics from cutting-edge 
              technology and scientific discoveries to historical insights and geographical wonders. We're 
              proud to be a trusted resource for students, professionals, and lifelong learners who value 
              quality content and reliable information.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Behind CMS Articles is a diverse team of writers, editors, researchers, and subject matter experts 
            who are passionate about sharing knowledge and making complex topics accessible to everyone.
          </p>
        </section>
      </div>
    </PublicLayout>
  );
}

export default About;