// src/pages/profile.js
import React from 'react';
import ProfileInfo from '../components/profileInfo';
import '../styles/profile.css';

const Profile = () => {
  const posts = [
    { id: 1, image: 'https://via.placeholder.com/150' },
    { id: 2, image: 'https://via.placeholder.com/150' },
    { id: 3, image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="profile">
      <ProfileInfo />
      <div className="profile-content">
        <div className="posts-grid">
          {posts.map(post => (
            <div className="post" key={post.id}>
              {post.image && <img src={post.image} alt="Post" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
