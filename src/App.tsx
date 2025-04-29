import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import StudentDashboard from './pages/student/StudentDashboard';
import CollegesList from './pages/student/CollegesList';
import CoursesList from './pages/student/CoursesList';
import ExamsList from './pages/student/ExamsList';
import CourseDetails from './pages/student/CourseDetails';
import CollegeDetails from './pages/student/CollegeDetails';
import ExamDetails from './pages/student/ExamDetails';
// import ProfilePage from './pages/student/ProfilePage';
import CollegeDashboard from './pages/college/CollegeDashboard';
import CourseManagement from './pages/college/CourseManagement';
import ExamManagement from './pages/college/ExamManagement';
import CollegeProfilePage from './pages/college/CollegeProfilePage';
import NotFoundPage from './pages/NotFoundPage';

// Protected route component
const ProtectedRoute = ({ 
  children, 
  userType, 
  redirectPath = '/login' 
}: { 
  children: React.ReactNode; 
  userType: 'student' | 'college' | null;
  redirectPath?: string;
}) => {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated || user?.userType !== userType) {
    return <Navigate to={redirectPath} replace />;
  }
  
  return <>{children}</>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        
        {/* Auth Routes */}
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        
        {/* Student Routes */}
        <Route path="student" element={
          <ProtectedRoute userType="student">
            <StudentDashboard />
          </ProtectedRoute>
        } />
        <Route path="colleges" element={<CollegesList />} />
        <Route path="colleges/:id" element={<CollegeDetails />} />
        <Route path="courses" element={<CoursesList />} />
        <Route path="courses/:id" element={<CourseDetails />} />
        <Route path="exams" element={<ExamsList />} />
        <Route path="exams/:id" element={<ExamDetails />} />
        <Route path="profile" element={
          <ProtectedRoute userType="student">
            {/* <ProfilePage /> */}
            <div>Profile Page</div>
          </ProtectedRoute>
        } />
        
        {/* College Admin Routes */}
        <Route path="college-dashboard" element={
          <ProtectedRoute userType="college">
            <CollegeDashboard />
          </ProtectedRoute>
        } />
        <Route path="college/courses" element={
          <ProtectedRoute userType="college">
            <CourseManagement />
          </ProtectedRoute>
        } />
        <Route path="college/exams" element={
          <ProtectedRoute userType="college">
            <ExamManagement />
          </ProtectedRoute>
        } />
        <Route path="college/profile" element={
          <ProtectedRoute userType="college">
            <CollegeProfilePage />
          </ProtectedRoute>
        } />
        
        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;