import React from 'react';
import '../styles/profileInfo.css';

const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <div className="avatar">
        <img src="https://via.placeholder.com/120" alt="Profile Avatar" />
      </div>
      <div className="user-details">
        <h2>Username</h2>
        <button className="edit-profile-btn">Edit Profile</button>
        <ul className="stats">
          <li><strong>100</strong> posts</li>
          <li><strong>500</strong> followers</li>
          <li><strong>300</strong> following</li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
