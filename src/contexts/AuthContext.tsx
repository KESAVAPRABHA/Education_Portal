import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthState, User, Student, College } from '../types';

// Create auth context with default values
const AuthContext = createContext<{
  user: Student | College | null;
  isAuthenticated: boolean;
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
}>({
  user: null,
  isAuthenticated: false,
  token: null,
  loading: false,
  error: null,
  login: async () => {},
  register: async () => {},
  logout: () => {},
});

// Hook to use auth context
export const useAuth = () => useContext(AuthContext);

// Auth provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    token: localStorage.getItem('token'),
    loading: false,
    error: null,
  });

  // Check if user is logged in on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      setAuthState(prev => ({ ...prev, loading: true }));
      
      try {
        // Mock API call - replace with actual API
        const response = await fetch('/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        if (response.ok) {
          const user = await response.json();
          setAuthState({
            user,
            isAuthenticated: true,
            token,
            loading: false,
            error: null
          });
        } else {
          // Token invalid, clear it
          localStorage.removeItem('token');
          setAuthState({
            user: null,
            isAuthenticated: false,
            token: null,
            loading: false,
            error: 'Session expired. Please log in again.'
          });
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        setAuthState(prev => ({ 
          ...prev, 
          loading: false,
          error: 'Authentication check failed'
        }));
      }
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      // Mock login - replace with actual API
      const mockUser: Student = {
        id: '1',
        name: 'John Doe',
        email: email,
        userType: 'student',
        createdAt: new Date().toISOString(),
        interests: [],
        savedCourses: [],
        savedColleges: [],
        savedExams: [],
        preferences: {
          country: [],
          courseLevel: [],
          discipline: [],
        }
      };
      
      const token = 'mock-jwt-token';
      
      // Save token to localStorage
      localStorage.setItem('token', token);
      
      // Update auth state
      setAuthState({
        user: mockUser,
        isAuthenticated: true,
        token,
        loading: false,
        error: null
      });
    } catch (error) {
      console.error('Login failed:', error);
      setAuthState(prev => ({ 
        ...prev, 
        loading: false,
        error: 'Invalid email or password'
      }));
    }
  };

  // Register function
  const register = async (userData: any) => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      // Mock registration - replace with actual API
      const token = 'mock-jwt-token';
      
      // Save token to localStorage
      localStorage.setItem('token', token);
      
      // Create user based on type
      const user = userData.userType === 'student' 
        ? {
            id: '1',
            name: userData.name,
            email: userData.email,
            userType: 'student' as const,
            createdAt: new Date().toISOString(),
            interests: [],
            savedCourses: [],
            savedColleges: [],
            savedExams: [],
            preferences: {
              country: [],
              courseLevel: [],
              discipline: [],
            }
          }
        : {
            id: '1',
            name: userData.name,
            email: userData.email,
            userType: 'college' as const,
            createdAt: new Date().toISOString(),
            collegeName: userData.collegeName,
            location: {
              city: userData.city || '',
              state: userData.state || '',
              country: userData.country || '',
            },
            contactEmail: userData.email,
          };
      
      // Update auth state
      setAuthState({
        user: user as Student | College,
        isAuthenticated: true,
        token,
        loading: false,
        error: null
      });
    } catch (error) {
      console.error('Registration failed:', error);
      setAuthState(prev => ({ 
        ...prev, 
        loading: false,
        error: 'Registration failed. Please try again.'
      }));
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setAuthState({
      user: null,
      isAuthenticated: false,
      token: null,
      loading: false,
      error: null
    });
  };

  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      register,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};