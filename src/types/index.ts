// User types
export type UserType = 'student' | 'college';

export interface User {
  id: string;
  name: string;
  email: string;
  userType: UserType;
  createdAt: string;
}

export interface Student extends User {
  userType: 'student';
  interests: string[];
  savedCourses: string[];
  savedColleges: string[];
  savedExams: string[];
  preferences: {
    country: string[];
    courseLevel: string[];
    discipline: string[];
  };
}

export interface College extends User {
  userType: 'college';
  collegeName: string;
  description?: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  website?: string;
  establishedYear?: number;
  accreditation?: string[];
  ranking?: number;
  contactEmail?: string;
  contactPhone?: string;
}

// Course types
export interface Course {
  id: string;
  name: string;
  collegeId: string;
  collegeName: string;
  level: string; // Bachelor's, Master's, PhD, etc.
  discipline: string; // Engineering, Arts, Science, etc.
  duration: string;
  description: string;
  prerequisites: string[];
  applicationStart: string;
  applicationEnd: string;
  tuitionFees: string;
  scholarshipsAvailable: boolean;
  studyMode: 'Full-time' | 'Part-time' | 'Online' | 'Hybrid';
  courseWebsite?: string;
  intakeMonths: string[]; // January, September, etc.
  createdAt: string;
  updatedAt: string;
}

// Exam types
export interface Exam {
  id: string;
  name: string;
  description: string;
  registrationStart: string;
  registrationEnd: string;
  examDate: string;
  eligibility: string;
  examWebsite?: string;
  resultDate?: string;
  requiredFor: string[];
  offeredBy: string;
  examType: 'National' | 'International' | 'State' | 'University';
  examMode: 'Online' | 'Offline' | 'Both';
  createdAt: string;
  updatedAt: string;
}

// Notification types
export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'course' | 'exam' | 'college' | 'system';
  relatedId?: string;
  isRead: boolean;
  createdAt: string;
}

export interface AuthState {
  user: Student | College | null;
  isAuthenticated: boolean;
  token: string | null;
  loading: boolean;
  error: string | null;
}