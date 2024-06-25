import React from 'react';
import '../styles/sidebar.css';

const Sidebar = () => {
  const user = {
    // ToDO: Replace with actual user data
    username: 'user123',
    fullName: 'John Doe',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    profilePic: 'https://placeimg.com/100/100/people',
  };

  return (
    <aside className="sidebar"> {}
      <div className="profile">
        <img src={user.profilePic} alt={`Profile of ${user.username}`} />
        <div>
          <h3>{user.fullName}</h3>
          <p>@{user.username}</p>
        </div>
      </div>
      <p>{user.bio}</p>
    </aside>
  );
};

export default Sidebar;

