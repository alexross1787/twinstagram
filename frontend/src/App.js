import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import Login from './pages/login';
import Register from './pages/register';
import NewPost from './pages/newPost';
import Posts from './pages/posts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Sidebar /> {/* Render Sidebar component */}
          <Routes>
            {}
            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/newpost" element={<NewPost />} />
            <Route path="/" element={<Posts />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
