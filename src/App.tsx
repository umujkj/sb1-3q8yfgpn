import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
import StudentDashboard from './pages/student/Dashboard';
import AdminDashboard from './pages/admin/Dashboard';
import MarketingLesson from './pages/lesson/MarketingLesson';
import Courses from './pages/courses/Courses';
import Achievements from './pages/achievements/Achievements';
import StudentClub from './pages/club/StudentClub';
import AdminApplications from './pages/admin/Applications';
import AdminCourses from './pages/admin/Courses';
import AdminStudents from './pages/admin/Students';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/club" element={<StudentClub />} />
          <Route path="/lesson/marketing" element={<MarketingLesson />} />
          <Route path="/profile" element={<Profile />} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/applications" element={<AdminApplications />} />
          <Route path="/admin/courses" element={<AdminCourses />} />
          <Route path="/admin/students" element={<AdminStudents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;