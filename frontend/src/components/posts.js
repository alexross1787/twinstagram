
import React from 'react';
import '../styles/posts.css';

const Posts = ({ posts, handleLike }) => {
  return (
    <div className="feed">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-header">
              <img src={post.user.avatar} alt={post.user.username} className="avatar" />
              <span className="username">{post.user.username}</span>
            </div>
            <div className="post-images">
              {post.images.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Post ${index}`} className="post-image" />
              ))}
            </div>
            <div className="post-description">
              {post.description}
            </div>
            <div className="post-details">
              <span className="likes">{post.likes} likes</span>
              <span className="timestamp">{post.timestamp}</span>
            </div>
            <div className="post-comments">
              {post.comments.map((comment) => (
                <div key={comment.id} className="comment">
                  <span className="commenter">{comment.user}</span>: {comment.text}
                </div>
              ))}
            </div>
            <button onClick={() => handleLike(post.id)} className={`like ${post.liked ? 'liked' : ''}`}>
              <img src="like-icon.png" alt="Like" />
            </button>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default Posts;


