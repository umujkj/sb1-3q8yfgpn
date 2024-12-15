import React from 'react';
import { Plus, BookOpen, Settings, Trash2 } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  students: number;
  progress: number;
  status: 'active' | 'draft';
}

interface CourseManagerProps {
  courses: Course[];
  onAdd: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const CourseManager: React.FC<CourseManagerProps> = ({
  courses,
  onAdd,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Course Management</h2>
        <button
          onClick={onAdd}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add New Course
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-indigo-600" />
                <h3 className="ml-2 text-lg font-semibold">{course.title}</h3>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold
                ${course.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
              >
                {course.status}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Enrolled Students</span>
                <span className="font-semibold">{course.students}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Average Progress</span>
                <span className="font-semibold">{course.progress}%</span>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => onEdit(course.id)}
                className="p-2 text-gray-600 hover:text-indigo-600"
              >
                <Settings className="h-5 w-5" />
              </button>
              <button
                onClick={() => onDelete(course.id)}
                className="p-2 text-gray-600 hover:text-red-600"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseManager;