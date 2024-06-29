
import React from 'react';
import ProfileInfo from '../components/profileInfo';
import '../styles/profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <ProfileInfo />
      <div className="profile-content">
        <h2>My Posts</h2>
        {/* Display user posts */}
        <div className="posts">
          {/* Example post */}
          <div className="post">
            <img src="path_to_post_image" alt="Post" />
            <p>Post caption goes here</p>
          </div>
          {/* Repeat for other posts */}
        </div>
        <div className="profile-stats">
          <ul>
            <li>Posts: 100</li>
            <li>Followers: 500</li>
            <li>Following: 300</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
