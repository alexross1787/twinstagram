import React from 'react';
import { Link } from 'react-router-dom';
import { House, ChatDots, Person, Gear } from 'react-bootstrap-icons';
import '../styles/navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/home" className="nav-link">
        <House size={20} /> {/* Replace text with House icon */}
      </Link>
      <Link to="/messages" className="nav-link">
        <ChatDots size={20} /> {/* Replace text with ChatDots icon */}
      </Link>
      <Link to="/profile" className="nav-link">
        <Person size={20} /> {/* Replace text with Person icon */}
      </Link>
      <Link to="/more" className="nav-link">
        <Gear size={20} /> {/* Replace text with Gear icon */}
      </Link>
    </nav>
  );
};

export default Navigation;
