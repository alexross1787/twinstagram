// src/components/profileInfo.js
import React from 'react';
import '../styles/profileInfo.css';

const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <div className="avatar">
        <img src="https://via.placeholder.com/150" alt="Profile Avatar" />
      </div>
      <div className="user-details">
        <h2>Jane_Foe</h2>
        <button className="edit-profile-btn">Edit Profile</button>
        <div className="stats">
          <span><strong>3</strong> Posts</span>
          <span><strong>723</strong> Followers</span>
          <span><strong>281</strong> Following</span>
        </div>
        <p>Jane Doe</p>
        <p>Free spirit</p>
        <p>Just a girl who loves things</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
