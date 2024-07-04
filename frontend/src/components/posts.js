import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/posts.css"; 
import postsData from "../mockData"; 
import sunsetImage from "../assets/sunset-lukas-rodriguez.jpg"; 
import beachImage from "../assets/beach-valeriiamiller.jpg"; 
const Posts = () => {
  const [posts, setPosts] = useState(postsData);
  const [comments, setComments] = useState({});
  const [commentInput, setCommentInput] = useState("");

  // Function to handle liking a post
  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, liked: !post.liked } : post
      )
    );
  };

  // Function to handle adding a comment
  const handleComment = (postId) => {
    if (commentInput.trim() !== "") {
      const updatedComments = {
        ...comments,
        [postId]: [...(comments[postId] || []), commentInput.trim()],
      };
      setComments(updatedComments);
      setCommentInput(""); // Clear input field after submitting comment
    }
  };

  // Function to handle input change in comment input field
  const handleInputChange = (event) => {
    setCommentInput(event.target.value);
  };

  return (
    <div className="container">
      {posts.length !== 0 ? (
        posts.map((post) => (
          <div key={post.id} className="card mb-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img
                  src={post.profilePic}
                  alt="profile"
                  className="rounded-circle"
                  style={{ width: "45px", height: "45px" }}
                />
                <div className="ml-3">
                  <p className="m-0">{post.username}</p>
                </div>
              </div>
              <i className="bi bi-three-dots"></i>
            </div>
            <img
              src={
                post.image === "sunset-lukas-rodriguez.jpg"
                  ? sunsetImage
                  : post.image === "beach-valeriiamiller.jpg"
                  ? beachImage
                  : post.image
              }
              className="card-img-top"
              alt="post"
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <i
                    className={`bi bi-heart${post.liked ? "-fill" : ""} me-2`}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleLike(post.id)}
                  ></i>
                  <i
                    className="bi bi-chat me-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleComment(post.id)}
                  ></i>
                  <i className="bi bi-send"></i>
                </div>
                <i className="bi bi-bookmark"></i>
              </div>
              <p className="mt-2 mb-0">{post.likes} likes</p>
              <p className="text-muted">
                <span className="fw-bold">{post.username}</span> {post.caption}
              </p>
              {/* Input field for entering comments */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a comment..."
                  value={commentInput}
                  onChange={handleInputChange}
                />
                <button
                  className="btn btn-primary mt-2"
                  onClick={() => handleComment(post.id)}
                >
                  Post Comment
                </button>
              </div>
              {/* Render comments if available */}
              {comments[post.id] && comments[post.id].length > 0 && (
                <div className="comments-section">
                  {comments[post.id].map((comment, index) => (
                    <p key={index} className="text-muted">
                      <span className="fw-bold">{post.username}</span> {comment}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1>No Posts Yet!</h1>
      )}
    </div>
  );
};

export default Posts;
