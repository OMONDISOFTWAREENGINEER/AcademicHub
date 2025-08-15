import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Dashboard from './components/Dashboard';
import LiveChat from './components/LiveChat';
import AdminPanel from './components/AdminPanel';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsAuthOpen(false);
    if (userData.role === 'admin') {
      setCurrentPage('admin');
    } else {
      setCurrentPage('dashboard');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return user ? (
          <Dashboard user={user} onLogout={handleLogout} />
        ) : (
          <div className="min-h-screen bg-gray-50">
            <Header 
              onAuthClick={() => setIsAuthOpen(true)} 
              user={user}
              onLogout={handleLogout}
              onNavigate={setCurrentPage}
              currentPage={currentPage}
            />
            <div className="flex items-center justify-center min-h-[60vh]">
              <p className="text-gray-600">Please login to access your dashboard.</p>
            </div>
          </div>
        );
      case 'admin':
        return user && user.role === 'admin' ? (
          <AdminPanel 
            user={user} 
            onLogout={handleLogout}
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
          />
        ) : (
          <div className="min-h-screen bg-gray-50">
            <Header 
              onAuthClick={() => setIsAuthOpen(true)} 
              user={user}
              onLogout={handleLogout}
              onNavigate={setCurrentPage}
              currentPage={currentPage}
            />
            <div className="flex items-center justify-center min-h-[60vh]">
              <p className="text-gray-600">Access denied. Admin privileges required.</p>
            </div>
          </div>
        );
      case 'faq':
        return (
          <div className="min-h-screen bg-gray-50">
            <Header 
              onAuthClick={() => setIsAuthOpen(true)} 
              user={user}
              onLogout={handleLogout}
              onNavigate={setCurrentPage}
              currentPage={currentPage}
            />
            <FAQ />
            <Footer />
          </div>
        );
      default:
        return (
          <div className="min-h-screen bg-gray-50">
            <Header 
              onAuthClick={() => setIsAuthOpen(true)} 
              user={user}
              onLogout={handleLogout}
              onNavigate={setCurrentPage}
              currentPage={currentPage}
            />
            <Hero onGetStarted={() => user ? setCurrentPage('dashboard') : setIsAuthOpen(true)} />
            <Services />
            <Stats />
            <FAQ />
            <Footer />
          </div>
        );
    }
  };

  return (
    <>
      {renderPage()}
      
      {isAuthOpen && (
        <AuthModal 
          onClose={() => setIsAuthOpen(false)} 
          onLogin={handleLogin}
        />
      )}
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <LiveChat 
        isOpen={isChatOpen} 
        onToggle={() => setIsChatOpen(!isChatOpen)}
        user={user}
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </>
  );
}

export default App;