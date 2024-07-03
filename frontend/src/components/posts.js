// src/components/posts.js

import React from "react";
import posts from "../mockData"; // Import the mock data
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/posts.css"; // Import the CSS file

const Posts = () => {
  return (
    <div className="container">
      {posts.length !== 0 ? (
        posts.map((post) => (
          <div key={post.id} className="card mb-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src={post.profilePic} alt="profile" className="rounded-circle" style={{ width: '45px', height: '45px' }} />
                <div className="ml-3">
                  <p className="m-0">{post.username}</p>
                </div>
              </div>
              <i className="bi bi-three-dots"></i>
            </div>
            <img src={post.image} className="card-img-top" alt="post" />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <i className="bi bi-heart me-2"></i>
                  <i className="bi bi-chat me-2"></i>
                  <i className="bi bi-send"></i>
                </div>
                <i className="bi bi-bookmark"></i>
              </div>
              <p className="mt-2 mb-0">{post.likes} likes</p>
              <p className="text-muted">
                <span className="fw-bold">{post.username}</span> {post.caption}
              </p>
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
