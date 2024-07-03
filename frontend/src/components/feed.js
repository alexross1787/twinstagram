import React, { useEffect, useState } from 'react';
import Posts from './posts'; 
import NewPostModal from './newPostModal';
import '../styles/feed.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    const fetchPosts = async () => {
      // Replace with actual data fetching logic
      const data = [
        {
          id: 1,
          username: "user1",
          profilePic: "https://via.placeholder.com/45",
          image: "https://via.placeholder.com/600",
          likes: 34,
          caption: "This is a sample caption for post 1",
        },
        {
          id: 2,
          username: "user2",
          profilePic: "https://via.placeholder.com/45",
          image: "https://via.placeholder.com/600",
          likes: 50,
          caption: "This is a sample caption for post 2",
        },
      ];
      setPosts(data); // Update posts state with fetched data
    };

    fetchPosts();
  }, []);

  return (
    <div className="feed">
      {showModal && <NewPostModal />} {/* Render NewPostModal if showModal is true */}
      <Posts posts={posts} /> {/* Pass posts data as a prop to Posts component */}
    </div>
  );
};

export default Feed;
