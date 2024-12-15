import React from 'react';
import { Users, BookOpen, UserPlus, Settings } from 'lucide-react';

const AdminDashboard = () => {
  const mockApplications = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'pending' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'approved' },
  ];

  const mockCourses = [
    { id: 1, title: 'Entrepreneurship Basics', students: 150, completion: 75 },
    { id: 2, title: 'Business Strategy', students: 120, completion: 60 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Total Students</h3>
            <Users className="h-6 w-6 text-indigo-600" />
          </div>
          <p className="text-3xl font-bold text-indigo-600">324</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Active Courses</h3>
            <BookOpen className="h-6 w-6 text-green-600" />
          </div>
          <p className="text-3xl font-bold text-indigo-600">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">New Applications</h3>
            <UserPlus className="h-6 w-6 text-yellow-600" />
          </div>
          <p className="text-3xl font-bold text-indigo-600">28</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Completion Rate</h3>
            <Settings className="h-6 w-6 text-purple-600" />
          </div>
          <p className="text-3xl font-bold text-indigo-600">78%</p>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Recent Applications</h2>
          <button className="text-indigo-600 hover:text-indigo-700">View All</button>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockApplications.map((application) => (
                <tr key={application.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{application.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{application.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        application.status === 'approved'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {application.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Course Management */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Course Management</h2>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Add New Course
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockCourses.map((course) => (
            <div key={course.id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <button className="text-gray-600 hover:text-gray-900">
                  <Settings className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Enrolled Students</span>
                  <span className="font-semibold">{course.students}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Average Completion</span>
                  <span className="font-semibold">{course.completion}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;