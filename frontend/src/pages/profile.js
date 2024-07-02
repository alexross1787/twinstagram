import React from 'react';
import ProfileInfo from '../components/profileInfo';
import '../styles/profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <ProfileInfo />
      <div className="profile-content">
        <div className="posts-grid">
          <div className="post">
            <img src="path_to_post_image" alt="Post" />
          </div>
          <div className="post">
            <img src="path_to_post_image" alt="Post" />
          </div>
          <div className="post">
            <img src="path_to_post_image" alt="Post" />
          </div>
          <div className="post">
            <img src="path_to_post_image" alt="Post" />
          </div>
          <div className="post">
            <img src="path_to_post_image" alt="Post" />
          </div>
          <div className="post">
            <img src="path_to_post_image" alt="Post" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
