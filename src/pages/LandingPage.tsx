import React from 'react';
import { ArrowRight, BookOpen, Trophy, Users, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learn Faster with AI-Powered Education
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Master entrepreneurship through gamified learning and skip classes with proven expertise
            </p>
            <Link
              to="/lesson/marketing"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:text-lg"
            >
              Start Learning <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Trophy className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gamified Learning</h3>
              <p className="text-gray-600">
                Learn through interactive challenges and earn achievements
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Brain className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Courses</h3>
              <p className="text-gray-600">
                Adaptive learning paths customized to your pace
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Student Community</h3>
              <p className="text-gray-600">
                Connect with peers and share achievements
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:py-20 md:px-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-8">
                Ready to Transform Your Learning Journey?
              </h2>
              <Link
                to="/lesson/marketing"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:text-lg"
              >
                Start Now <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;