import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Menu, X, User, LogOut, ChevronDown, 
  GraduationCap, BookOpen, Building2, Calendar
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Main Navigation */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <GraduationCap className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-heading font-bold text-gray-900">EduConnect</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/colleges" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 hover:text-primary-600 hover:border-b-2 hover:border-primary-500 transition-colors">
                <Building2 className="h-4 w-4 mr-1" />
                Colleges
              </Link>
              <Link to="/courses" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 hover:text-primary-600 hover:border-b-2 hover:border-primary-500 transition-colors">
                <BookOpen className="h-4 w-4 mr-1" />
                Courses
              </Link>
              <Link to="/exams" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 hover:text-primary-600 hover:border-b-2 hover:border-primary-500 transition-colors">
                <Calendar className="h-4 w-4 mr-1" />
                Exams
              </Link>
            </nav>
          </div>
          
          {/* User Profile & Mobile Menu Button */}
          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="ml-3 relative">
                <div>
                  <button 
                    onClick={toggleProfileMenu}
                    className="flex items-center gap-2 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <span className="hidden sm:block text-sm font-medium text-gray-700">
                      {user?.name}
                    </span>
                    <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700">
                      <User className="h-5 w-5" />
                    </div>
                    <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${isProfileMenuOpen ? 'transform rotate-180' : ''}`} />
                  </button>
                </div>
                
                {/* Profile Dropdown */}
                {isProfileMenuOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Link 
                      to={user?.userType === 'student' ? '/profile' : '/college/profile'} 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      Your Profile
                    </Link>
                    <Link 
                      to={user?.userType === 'student' ? '/student' : '/college-dashboard'} 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <div className="flex items-center">
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign out
                      </div>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-4">
                <Link 
                  to="/login" 
                  className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Log in
                </Link>
                <Link 
                  to="/register" 
                  className="bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Sign up
                </Link>
              </div>
            )}
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 ml-4"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-slide-down">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/colleges"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-primary-500 hover:text-primary-700"
              onClick={toggleMenu}
            >
              <div className="flex items-center">
                <Building2 className="h-5 w-5 mr-2" />
                Colleges
              </div>
            </Link>
            <Link
              to="/courses"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-primary-500 hover:text-primary-700"
              onClick={toggleMenu}
            >
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Courses
              </div>
            </Link>
            <Link
              to="/exams"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-primary-500 hover:text-primary-700"
              onClick={toggleMenu}
            >
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Exams
              </div>
            </Link>
            
            {!isAuthenticated && (
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <Link 
                      to="/login" 
                      className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
                      onClick={toggleMenu}
                    >
                      Log in
                    </Link>
                  </div>
                  <div className="ml-3">
                    <Link 
                      to="/register" 
                      className="bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                      onClick={toggleMenu}
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;