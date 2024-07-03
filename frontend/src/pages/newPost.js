// pages/newPost.js
import React, { useState } from 'react';
import NewPostModal from '../components/newPostModal';
import '../styles/newPost.css';

const NewPost = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <div className="new-post-page">
            <button onClick={openModal}>Create New Post</button>
            <NewPostModal showModal={showModal} closeModal={closeModal} />
        </div>
    );
};

export default NewPost;
