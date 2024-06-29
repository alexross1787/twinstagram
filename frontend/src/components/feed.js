// src/components/feed.js
import React, { useEffect, useState } from 'react';
import Posts from './posts'; // Correctly import the Posts component
import '../styles/feed.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // Example data, replace with actual data fetching
      const data = [
        {
          id: 1,
          user: { avatar: 'avatar1.png', username: 'user1' },
          images: ['image1.jpg'],
          description: 'Description for post 1',
          likes: 10,
          timestamp: '2 hours ago',
          comments: [{ id: 1, user: 'commenter1', text: 'Nice post!' }],
          liked: false,
        },
        {
          id: 2,
          user: { avatar: 'avatar2.png', username: 'user2' },
          images: ['image2.jpg'],
          description: 'Description for post 2',
          likes: 20,
          timestamp: '1 hour ago',
          comments: [{ id: 2, user: 'commenter2', text: 'Great post!' }],
          liked: false,
        },
      ];
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 } : post
      )
    );
  };

  return <Posts posts={posts} handleLike={handleLike} />;
};

export default Feed;

