import React, { useEffect, useState } from 'react';
import Posts from './Posts'; // Adjust the import based on your file structure
import NewPostModal from './newPostModal'; // Adjust the import based on your file structure
import '../styles/feed.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  useEffect(() => {
    const fetchPosts = async () => {
      // Replace with actual data fetching logic
      const data = [
        // Example posts data
      ];
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="feed">
      {showModal && <NewPostModal />} {/* Render NewPostModal if showModal is true */}
      <Posts posts={posts} />
    </div>
  );
};

export default Feed;
