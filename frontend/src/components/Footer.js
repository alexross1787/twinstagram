// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-links">
        <Link to="/">About</Link>
        <Link to="/">Help</Link>
        <Link to="/">Terms</Link>
        <Link to="/">Privacy Policy</Link>
        <Link to="/">Cookies</Link>
        <Link to="/">Ads Info</Link>
        <Link to="/">More</Link>
      </nav>
      <div className="copyright">
        <span>&copy; 2024 Twinstagram</span>
      </div>
    </footer>
  );
};

export default Footer;
