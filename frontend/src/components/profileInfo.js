// components/ProfileInfo.js
import React from 'react';
import '../styles/profileInfo.css';

const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <div className="avatar">
        <img src="path_to_avatar_image" alt="Profile Avatar" />
      </div>
      <div className="user-details">
        <h2>Username</h2>
        <p>Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <ul>
          <li>Posts: 100</li>
          <li>Followers: 500</li>
          <li>Following: 300</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileInfo;
