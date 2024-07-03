// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/login';
import SignUp from './components/signUp';
import NewPostModal from './components/newPostModal';
import Feed from './components/feed';
import Profile from './pages/profile';
import Messages from './pages/messages';
import Settings from './pages/settings';
import './styles/app.css';
import './icons';

// Add the icons to the Font Awesome library
library.add(faHeart, faComment, faShare);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Simulate authentication state
  const isAuthenticated = () => {
    return !!localStorage.getItem('token'); // Adjust based on your auth logic
  };

  return (
    <Router>
      <div className="App">
        <Header openModal={openModal} />
        <div className="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {/* Public routes */}
            <Route path="/" element={<Feed />} />
            <Route path="/home" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            {/* Protected routes */}
            {isAuthenticated() ? (
              <>
                <Route path="/messages" element={<Messages />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/newpost" element={<NewPostModal onClose={closeModal} />} />
              </>
            ) : (
              // Redirect to login if not authenticated
              <Route path="*" element={<Login />} />
            )}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
