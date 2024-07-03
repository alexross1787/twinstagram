// components/NewPostModal.js

import React, { useState } from 'react';
import Modal from './modal'; // Assuming your Modal component is defined here
import '../styles/newPostModal.css';

const NewPostModal = ({ onClose }) => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle post submission logic here
    onClose(); // Close the modal after submission
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>New Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Write a caption..."
            required
          />
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
};

export default NewPostModal;
