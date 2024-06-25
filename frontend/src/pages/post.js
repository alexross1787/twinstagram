import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('http://your-backend-url/posts', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      const data = await response.json();
      if (response.ok) {
        setPosts(data.posts);
      } else {
        console.error(data.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <img src={post.imageUrl} alt={post.caption} />
          <p>{post.caption}</p>
          <p>Likes: {post.likes}</p>
          <button onClick={() => handleLike(post.id)}>Like</button>
        </div>
      ))}
    </div>
  );
};

const handleLike = async (postId) => {
  const response = await fetch(`http://backend-url/posts/${postId}/like`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });

  if (response.ok) {
    console.log('Post liked');
  } else {
    const data = await response.json();
    console.error(data.message);
  }
};

export default Posts;
