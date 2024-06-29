import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Login from './pages/login';
import NewPost from './pages/newPost';
import Feed from './components/feed';
import Profile from './pages/profile';
import Messages from './pages/messages';
import More from './pages/more';
import NewPostModal from './components/newPostModal';
import './styles/app.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/newpost" element={<NewPost />} />
            <Route path="/" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/more" element={<More />} />
          </Routes>
        </div>
        <Footer />
        {/* Only render the modal when needed */}
        {/* {isModalOpen && <NewPostModal onClose={closeModal} />} */}
      </div>
    </Router>
  );
}

export default App;

