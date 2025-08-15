import React from 'react';
import { GraduationCap, User, LogOut, MessageCircle } from 'lucide-react';

const Header = ({ onAuthClick, user, onLogout, onNavigate, currentPage }) => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 font-poppins">AcademicPro Hub</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                currentPage === 'home' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : ''
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('faq')}
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                currentPage === 'faq' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : ''
              }`}
            >
              FAQ
            </button>
            {user && (
              <button 
                onClick={() => onNavigate('dashboard')}
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                  currentPage === 'dashboard' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : ''
                }`}
              >
                Dashboard
              </button>
            )}
            {user && user.role === 'admin' && (
              <button 
                onClick={() => onNavigate('admin')}
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                  currentPage === 'admin' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : ''
                }`}
              >
                Admin Panel
              </button>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{user.name}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors px-3 py-2 rounded-lg hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={onAuthClick}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;