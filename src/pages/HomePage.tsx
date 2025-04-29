import { Link } from 'react-router-dom';
import { Search, GraduationCap, BookOpen, Calendar, Bell, Users, Globe, School } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl font-heading">
                Find your perfect <span className="text-accent-400">educational path</span>
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-100">
                Discover colleges, courses, and entrance exams to pursue your higher education in India and abroad.
                Stay updated with application deadlines and exam schedules.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-base shadow-md transition-colors"
                >
                  Sign Up as Student
                </Link>
                <Link
                  to="/register"
                  className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold text-base transition-colors"
                >
                  Register Your College
                </Link>
              </div>
            </div>
            <div className="mt-16 lg:mt-0 lg:col-span-6">
              <div className="bg-white p-6 rounded-xl shadow-xl">
                <h2 className="text-gray-900 font-semibold text-lg mb-4">Find Courses and Colleges</h2>
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search courses, colleges or exams"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <select className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                      <option value="">Course Level</option>
                      <option value="bachelor">Bachelor's</option>
                      <option value="master">Master's</option>
                      <option value="phd">PhD</option>
                      <option value="diploma">Diploma</option>
                    </select>
                    <select className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                      <option value="">Country</option>
                      <option value="india">India</option>
                      <option value="usa">USA</option>
                      <option value="uk">UK</option>
                      <option value="canada">Canada</option>
                      <option value="australia">Australia</option>
                    </select>
                  </div>
                  <button className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
              Everything you need for your higher education journey
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              EduConnect provides comprehensive resources and tools to help you make informed decisions about your academic future.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-5">
                <School className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Comprehensive College Directory
              </h3>
              <p className="text-gray-600">
                Browse through our extensive database of colleges and universities in India and abroad with detailed profiles and admission information.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-5">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Course Catalog
              </h3>
              <p className="text-gray-600">
                Explore various courses offered by different institutions, along with prerequisites, duration, fees, and career prospects.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-5">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Entrance Exam Calendar
              </h3>
              <p className="text-gray-600">
                Stay updated with upcoming entrance exams, registration dates, and application deadlines for various courses.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-5">
                <Bell className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Personalized Notifications
              </h3>
              <p className="text-gray-600">
                Receive timely alerts about application deadlines, exam dates, and other important updates based on your interests.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-5">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Study Abroad Resources
              </h3>
              <p className="text-gray-600">
                Discover opportunities for international education with country-specific guides, visa requirements, and scholarship information.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-5">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                College Representative Portal
              </h3>
              <p className="text-gray-600">
                Dedicated dashboard for colleges to manage their profiles, add new courses, and update important dates and information.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary-600">1000+</p>
              <p className="mt-2 text-lg font-medium text-gray-900">Colleges</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary-600">5000+</p>
              <p className="mt-2 text-lg font-medium text-gray-900">Courses</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary-600">200+</p>
              <p className="mt-2 text-lg font-medium text-gray-900">Entrance Exams</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary-600">50K+</p>
              <p className="mt-2 text-lg font-medium text-gray-900">Students</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white font-heading mb-4">
              Ready to start your educational journey?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Create an account today to explore educational opportunities and receive personalized notifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-base shadow-md transition-colors"
              >
                Sign Up Now
              </Link>
              <Link
                to="/colleges"
                className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold text-base transition-colors"
              >
                Browse Colleges
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;