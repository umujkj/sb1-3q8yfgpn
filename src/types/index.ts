export interface Course {
  id: string;
  title: string;
  description: string;
  progress: number;
  level: number;
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  enrolledCourses: Course[];
  achievements: Achievement[];
  level: number;
  experience: number;
}

export interface Application {
  id: string;
  studentName: string;
  email: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: Date;
}