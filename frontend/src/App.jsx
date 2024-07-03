// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/login';
import SignUp from './components/signUp';
import NewPost from './pages/newPost';
import Feed from './components/feed';
import Profile from './pages/profile';
import Messages from './pages/messages';
import Settings from './pages/settings';
import './styles/app.css';
import './icons';

// Add the icons to the Font Awesome library
library.add(faHeart, faComment, faShare);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/home" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/newpost" element={<NewPost />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
