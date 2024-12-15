import React from 'react';
import { Trophy, BookOpen, Share2, Users } from 'lucide-react';

const StudentDashboard = () => {
  const mockCourses = [
    { id: 1, title: 'Entrepreneurship Basics', progress: 75 },
    { id: 2, title: 'Business Strategy', progress: 45 },
    { id: 3, title: 'Marketing Fundamentals', progress: 90 },
  ];

  const mockAchievements = [
    { id: 1, title: 'Fast Learner', description: 'Completed 5 lessons in one day' },
    { id: 2, title: 'Perfect Score', description: 'Achieved 100% in Business Quiz' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Progress Overview */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Current Level</h3>
              <Trophy className="h-6 w-6 text-yellow-500" />
            </div>
            <p className="text-3xl font-bold text-indigo-600">Level 5</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Courses</h3>
              <BookOpen className="h-6 w-6 text-indigo-500" />
            </div>
            <p className="text-3xl font-bold text-indigo-600">3/12</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Achievements</h3>
              <Trophy className="h-6 w-6 text-purple-500" />
            </div>
            <p className="text-3xl font-bold text-indigo-600">8</p>
          </div>
        </div>
      </div>

      {/* Current Courses */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Current Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCourses.map((course) => (
            <div key={course.id} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">{course.title}</h3>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                  <div
                    style={{ width: `${course.progress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                  ></div>
                </div>
                <p className="text-right text-sm text-gray-600">{course.progress}% Complete</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Recent Achievements</h2>
          <button className="flex items-center text-indigo-600 hover:text-indigo-700">
            <Share2 className="h-5 w-5 mr-1" /> Share on LinkedIn
          </button>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {mockAchievements.map((achievement) => (
            <div
              key={achievement.id}
              className="p-4 border-b last:border-b-0 flex items-center"
            >
              <Trophy className="h-8 w-8 text-yellow-500 mr-4" />
              <div>
                <h3 className="font-semibold">{achievement.title}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Club */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Student Club</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Users className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-lg font-semibold">Entrepreneurship Club</h3>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Join Discussion
            </button>
          </div>
          <p className="text-gray-600">
            Connect with fellow entrepreneurs, share experiences, and participate in
            discussions about the latest business trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;