import React from 'react';
import { Link } from 'react-router-dom';
import { House, ChatDots, Person, Gear, Search } from 'react-bootstrap-icons';
import '../styles/header.css';
import logo from '../assets/logo_light.png';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="search-bar">
        <div className="input-group">
          <span className="input-group-text"><Search size={18} /></span>
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/home"><House size={24} /></Link>
          </li>
          <li>
            <Link to="/messages"><ChatDots size={24} /></Link>
          </li>
          <li>
            <Link to="/profile"><Person size={24} /></Link>
          </li>
          <li>
            <Link to="/settings"><Gear size={24} /></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
