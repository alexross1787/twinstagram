import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './navigation'; // Adjust path as per your project structure
import '../styles/header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        {/* Your logo component or image */}
        <img src="frontend\src\assets\logo_dark.png" alt="Logo" />
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
