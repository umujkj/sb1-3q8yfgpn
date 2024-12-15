import React from 'react';
import CourseCard from '../../components/shared/CourseCard';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();
  
  const courses = [
    {
      title: 'Marketing Fundamentals',
      progress: 25,
      duration: '2 hours',
      level: 'Beginner',
    },
    {
      title: 'Business Strategy',
      progress: 0,
      duration: '3 hours',
      level: 'Intermediate',
    },
    {
      title: 'Financial Management',
      progress: 0,
      duration: '4 hours',
      level: 'Advanced',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            {...course}
            onContinue={() => navigate('/lesson/marketing')}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;