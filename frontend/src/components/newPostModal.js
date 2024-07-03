import React, { useState } from 'react';
import Modal from '../components/modal'; 
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


