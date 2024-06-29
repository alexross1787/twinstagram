import React, { useState } from 'react';
import Modal from '../components/modal'; // Ensure Modal component is correctly imported
import '../styles/newPostModal.css'; // Import your modal CSS file

const NewPostModal = ({ onClose }) => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null); // State for image file

  const handleImageChange = (e) => {
    // Handle image upload
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (upload image and caption)
    // Example: You can use FormData to send the image file and caption to your backend
    onClose(); 
  };

  return (
    <Modal onClose={onClose}>
      <form className="new-post-form" onSubmit={handleSubmit}>
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
    </Modal>
  );
};

export default NewPostModal;


