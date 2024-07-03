import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { House, ChatDots, Person, Gear, Search, PlusSquare } from 'react-bootstrap-icons';
import '../styles/header.css';
import logo from '../assets/logo_light.png';
import NewPostModal from './newPostModal';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

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
          <li>
            <button onClick={handleShowModal} className="btn btn-link"><PlusSquare size={24} /></button>
          </li>
        </ul>
      </nav>
      {showModal && <NewPostModal onClose={handleCloseModal} />}
    </header>
  );
}

export default Header;
