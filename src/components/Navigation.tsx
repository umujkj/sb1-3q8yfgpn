import React from 'react';
import { Menu, LogOut, Home, BookOpen, Users, Award, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <nav className="bg-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8" />
              <span className="font-bold text-xl">AI University</span>
            </Link>
          </div>
          
          {!isAdmin && (
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link 
                  to="/dashboard" 
                  className={`px-3 py-2 rounded-md hover:bg-indigo-600 ${
                    location.pathname === '/dashboard' ? 'bg-indigo-800' : ''
                  }`}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/courses" 
                  className={`px-3 py-2 rounded-md hover:bg-indigo-600 ${
                    location.pathname === '/courses' ? 'bg-indigo-800' : ''
                  }`}
                >
                  Courses
                </Link>
                <Link 
                  to="/achievements" 
                  className={`px-3 py-2 rounded-md hover:bg-indigo-600 ${
                    location.pathname === '/achievements' ? 'bg-indigo-800' : ''
                  }`}
                >
                  Achievements
                </Link>
                <Link 
                  to="/club" 
                  className={`px-3 py-2 rounded-md hover:bg-indigo-600 ${
                    location.pathname === '/club' ? 'bg-indigo-800' : ''
                  }`}
                >
                  Student Club
                </Link>
              </div>
            </div>
          )}

          {isAdmin && (
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link 
                  to="/admin/dashboard" 
                  className={`px-3 py-2 rounded-md hover:bg-indigo-600 ${
                    location.pathname === '/admin/dashboard' ? 'bg-indigo-800' : ''
                  }`}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/admin/applications" 
                  className={`px-3 py-2 rounded-md hover:bg-indigo-600 ${
                    location.pathname === '/admin/applications' ? 'bg-indigo-800' : ''
                  }`}
                >
                  Applications
                </Link>
                <Link 
                  to="/admin/courses" 
                  className={`px-3 py-2 rounded-md hover:bg-indigo-600 ${
                    location.pathname === '/admin/courses' ? 'bg-indigo-800' : ''
                  }`}
                >
                  Manage Courses
                </Link>
                <Link 
                  to="/admin/students" 
                  className={`px-3 py-2 rounded-md hover:bg-indigo-600 ${
                    location.pathname === '/admin/students' ? 'bg-indigo-800' : ''
                  }`}
                >
                  Students
                </Link>
              </div>
            </div>
          )}

          <div className="flex items-center space-x-4">
            <Link to="/profile" className="p-2 rounded-md hover:bg-indigo-600">
              <Settings className="h-6 w-6" />
            </Link>
            <button className="p-2 rounded-md hover:bg-indigo-600">
              <LogOut className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;