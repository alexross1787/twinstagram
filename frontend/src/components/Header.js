// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'; // Adjust the path based on your project structure

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Twinstagram</Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
};

export default Header;
