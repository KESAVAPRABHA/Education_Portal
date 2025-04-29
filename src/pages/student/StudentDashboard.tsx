import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Bell, BookOpen, Building2, Calendar, Clock, Filter, Search } from 'lucide-react';

const StudentDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock notifications data
  const notifications = [
    {
      id: '1',
      title: 'Application Deadline Approaching',
      message: 'M.Tech Computer Science at IIT Delhi application closes in 3 days',
      type: 'course',
      createdAt: '2025-06-15T10:00:00Z',
      isRead: false
    },
    {
      id: '2',
      title: 'New Course Added',
      message: 'MIT has added a new program: Master of Science in Data Science',
      type: 'course',
      createdAt: '2025-06-14T10:00:00Z',
      isRead: true
    },
    {
      id: '3',
      title: 'IELTS Registration Open',
      message: 'IELTS exam registration for July dates is now open',
      type: 'exam',
      createdAt: '2025-06-13T10:00:00Z',
      isRead: false
    }
  ];
  
  // Mock saved items data
  const savedColleges = [
    {
      id: '1',
      name: 'Massachusetts Institute of Technology',
      location: 'Cambridge, USA',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: '2',
      name: 'Indian Institute of Technology, Delhi',
      location: 'New Delhi, India',
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: '3',
      name: 'Stanford University',
      location: 'California, USA',
      image: 'https://images.pexels.com/photos/159698/university-of-sydney-159698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];
  
  const savedCourses = [
    {
      id: '1',
      name: 'Master of Computer Science',
      collegeName: 'Massachusetts Institute of Technology',
      applicationEndDate: '2025-07-15'
    },
    {
      id: '2',
      name: 'MSc Data Science',
      collegeName: 'Stanford University',
      applicationEndDate: '2025-08-10'
    },
    {
      id: '3',
      name: 'BTech Computer Science',
      collegeName: 'Indian Institute of Technology, Delhi',
      applicationEndDate: '2025-06-30'
    }
  ];
  
  const upcomingExams = [
    {
      id: '1',
      name: 'GRE',
      date: '2025-07-20',
      registrationEndDate: '2025-07-01'
    },
    {
      id: '2',
      name: 'GATE 2026',
      date: '2026-02-10',
      registrationEndDate: '2025-10-15'
    },
    {
      id: '3',
      name: 'IELTS',
      date: '2025-07-15',
      registrationEndDate: '2025-06-30'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-heading">Student Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.name}!</p>
        </div>
        
        <div className="mt-4 md:mt-0 relative">
          <div className="flex">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-l-md py-2 pl-10 pr-3 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <button className="bg-gray-100 p-2 rounded-r-md border border-l-0 border-gray-300 text-gray-700 hover:bg-gray-200">
              <Filter className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Dashboard Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <div className="flex overflow-x-auto">
          <button
            className={`py-4 px-6 font-medium text-sm border-b-2 ${
              activeTab === 'overview'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`py-4 px-6 font-medium text-sm border-b-2 ${
              activeTab === 'saved'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('saved')}
          >
            Saved Items
          </button>
          <button
            className={`py-4 px-6 font-medium text-sm border-b-2 ${
              activeTab === 'notifications'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('notifications')}
          >
            Notifications
            <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-primary-500 rounded-full">
              {notifications.filter(n => !n.isRead).length}
            </span>
          </button>
          <button
            className={`py-4 px-6 font-medium text-sm border-b-2 ${
              activeTab === 'preferences'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('preferences')}
          >
            Preferences
          </button>
        </div>
      </div>
      
      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="animate-fade-in">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
              <div className="flex items-center">
                <div className="bg-primary-100 rounded-full p-3 mr-4">
                  <Building2 className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Saved Colleges</p>
                  <p className="text-2xl font-semibold">{savedColleges.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
              <div className="flex items-center">
                <div className="bg-secondary-100 rounded-full p-3 mr-4">
                  <BookOpen className="h-6 w-6 text-secondary-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Saved Courses</p>
                  <p className="text-2xl font-semibold">{savedCourses.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
              <div className="flex items-center">
                <div className="bg-accent-100 rounded-full p-3 mr-4">
                  <Calendar className="h-6 w-6 text-accent-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Upcoming Exams</p>
                  <p className="text-2xl font-semibold">{upcomingExams.length}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Upcoming Deadlines */}
          <div className="bg-white rounded-lg shadow-md border border-gray-100 mb-8">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Upcoming Deadlines</h2>
              <Link to="/exams" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                View all
              </Link>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {upcomingExams.map(exam => (
                  <div key={exam.id} className="flex items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                    <div className="flex-shrink-0 bg-accent-100 rounded-full p-3 mr-4">
                      <Clock className="h-5 w-5 text-accent-600" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium text-gray-900">{exam.name}</p>
                      <p className="text-sm text-gray-500">Exam date: {new Date(exam.date).toLocaleDateString()}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="bg-warning-100 text-warning-800 px-3 py-1 rounded-full text-xs font-medium">
                        Registration ends {new Date(exam.registrationEndDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Recent Notifications */}
          <div className="bg-white rounded-lg shadow-md border border-gray-100">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Recent Notifications</h2>
              <button 
                onClick={() => setActiveTab('notifications')}
                className="text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                View all
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {notifications.slice(0, 3).map(notification => (
                  <div 
                    key={notification.id} 
                    className={`flex items-start p-4 border ${notification.isRead ? 'border-gray-100' : 'border-primary-100 bg-primary-50'} rounded-lg`}
                  >
                    <div className="flex-shrink-0 bg-primary-100 rounded-full p-2 mt-1 mr-4">
                      <Bell className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium text-gray-900">{notification.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-2">
                        {new Date(notification.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    {!notification.isRead && (
                      <div className="flex-shrink-0">
                        <span className="bg-primary-100 h-2 w-2 rounded-full block"></span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Saved Items Tab */}
      {activeTab === 'saved' && (
        <div className="animate-fade-in">
          {/* Saved Colleges */}
          <div className="bg-white rounded-lg shadow-md border border-gray-100 mb-8">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Saved Colleges</h2>
              <Link to="/colleges" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                Browse more
              </Link>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedColleges.map(college => (
                  <Link to={`/colleges/${college.id}`} key={college.id}>
                    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="h-36 bg-gray-300 overflow-hidden">
                        <img
                          src={college.image}
                          alt={college.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-gray-900">{college.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{college.location}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Saved Courses */}
          <div className="bg-white rounded-lg shadow-md border border-gray-100 mb-8">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Saved Courses</h2>
              <Link to="/courses" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                Browse more
              </Link>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Course Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        College
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Application Deadline
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {savedCourses.map(course => (
                      <tr key={course.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Link to={`/courses/${course.id}`} className="font-medium text-primary-600 hover:text-primary-900">
                            {course.name}
                          </Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {course.collegeName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(course.applicationEndDate).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {new Date(course.applicationEndDate) > new Date() ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Open
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              Closed
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Notifications Tab */}
      {activeTab === 'notifications' && (
        <div className="animate-fade-in">
          <div className="bg-white rounded-lg shadow-md border border-gray-100">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">All Notifications</h2>
              <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                Mark all as read
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {notifications.length > 0 ? (
                  notifications.map(notification => (
                    <div 
                      key={notification.id} 
                      className={`flex items-start p-4 border ${notification.isRead ? 'border-gray-100' : 'border-primary-100 bg-primary-50'} rounded-lg`}
                    >
                      <div className="flex-shrink-0 bg-primary-100 rounded-full p-2 mt-1 mr-4">
                        <Bell className="h-5 w-5 text-primary-600" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-medium text-gray-900">{notification.title}</p>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-2">
                          {new Date(notification.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      {!notification.isRead && (
                        <div className="flex-shrink-0">
                          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                            Mark as read
                          </button>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <Bell className="h-12 w-12 text-gray-300 mx-auto" />
                    <p className="mt-2 text-gray-500">No notifications yet</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Preferences Tab */}
      {activeTab === 'preferences' && (
        <div className="animate-fade-in">
          <div className="bg-white rounded-lg shadow-md border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Notification Preferences</h2>
              <p className="text-sm text-gray-500 mt-1">
                Choose what type of notifications you want to receive
              </p>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="application-deadlines"
                      name="application-deadlines"
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="application-deadlines" className="font-medium text-gray-700">
                      Application Deadlines
                    </label>
                    <p className="text-gray-500">Get notified when application deadlines are approaching for saved courses</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="exam-dates"
                      name="exam-dates"
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="exam-dates" className="font-medium text-gray-700">
                      Exam Dates
                    </label>
                    <p className="text-gray-500">Get notified about important exam dates and registration deadlines</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="new-courses"
                      name="new-courses"
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="new-courses" className="font-medium text-gray-700">
                      New Courses
                    </label>
                    <p className="text-gray-500">Get notified when new courses are added that match your interests</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="email-notifications"
                      name="email-notifications"
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="email-notifications" className="font-medium text-gray-700">
                      Email Notifications
                    </label>
                    <p className="text-gray-500">Receive notifications via email</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-md font-medium text-gray-900 mb-4">Your Interests</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="course-level" className="block text-sm font-medium text-gray-700">
                      Course Level
                    </label>
                    <select
                      id="course-level"
                      name="course-level"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                    >
                      <option value="">All Levels</option>
                      <option value="bachelor">Bachelor's</option>
                      <option value="master">Master's</option>
                      <option value="phd">PhD</option>
                      <option value="diploma">Diploma</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="discipline" className="block text-sm font-medium text-gray-700">
                      Field of Study
                    </label>
                    <select
                      id="discipline"
                      name="discipline"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                    >
                      <option value="">All Fields</option>
                      <option value="computer-science">Computer Science</option>
                      <option value="engineering">Engineering</option>
                      <option value="business">Business</option>
                      <option value="arts">Arts & Humanities</option>
                      <option value="science">Science</option>
                      <option value="medicine">Medicine</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Preferred Countries
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                    >
                      <option value="">All Countries</option>
                      <option value="india">India</option>
                      <option value="usa">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="canada">Canada</option>
                      <option value="australia">Australia</option>
                      <option value="germany">Germany</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 mr-3"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;