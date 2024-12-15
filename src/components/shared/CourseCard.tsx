import React from 'react';
import { BookOpen, Clock } from 'lucide-react';

interface CourseCardProps {
  title: string;
  progress: number;
  duration: string;
  level: string;
  onContinue: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  progress,
  duration,
  level,
  onContinue,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <BookOpen className="h-5 w-5 text-indigo-600" />
          <h3 className="ml-2 text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
          {level}
        </span>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="h-4 w-4 mr-1" />
          {duration}
        </div>
        <button
          onClick={onContinue}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default CourseCard;