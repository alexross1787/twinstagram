import React from 'react';

const Navigation = () => {
    return (
      <nav className="navigation">
        {/* Navigation Links */}
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/messages">Messages</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/more">More</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navigation;
  