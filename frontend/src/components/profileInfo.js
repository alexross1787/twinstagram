import React, { useState, useEffect } from 'react';
import '../styles/profileInfo.css';

const ProfileInfo = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/profile/');
        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }
        const data = await response.json();
        setUser(data.user);
        setPosts(data.posts);
        setFollowerCount(data.follower_count);
        setFollowingCount(data.following_count);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProfileData();
  }, []);

  if (error) {
    return <div className="profile-info">Error: {error}</div>;
  }

  if (!user) {
    return <div className="profile-info">Loading...</div>;
  }

  return (
    <div className="profile-info">
      <div className="avatar">
        <img src="https://via.placeholder.com/120" alt="Profile Avatar" />
      </div>
      <div className="user-details">
        <h2>{user.username}</h2>
        <button className="edit-profile-btn">Edit Profile</button>
        <ul className="stats">
          <li><strong>{posts.length}</strong> posts</li>
          <li><strong>{followerCount}</strong> followers</li>
          <li><strong>{followingCount}</strong> following</li>
        </ul>
        <p>{user.bio}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
