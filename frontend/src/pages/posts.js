import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://backend-url/posts', {
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
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleLike = async (postId) => {
    try {
      const response = await fetch(`http://backend-url/posts/${postId}/like`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (response.ok) {
        console.log('Post liked');
        // TODO: update likes count in the UI after successful like
      } else {
        const data = await response.json();
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  return (
    <div>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <img src={post.imageUrl} alt={post.caption} />
            <p>{post.caption}</p>
            <p>Likes: {post.likes}</p>
            <button onClick={() => handleLike(post.id)}>Like</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
