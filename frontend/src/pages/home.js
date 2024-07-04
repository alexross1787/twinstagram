import React, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Feed from '../components/feed'; 
import NewPostModal from '../components/newPostModal';
import ProfileInfo from '../components/profileInfo';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Example data for feed posts
  const posts = [
    { id: 1, imageUrl: '...', caption: '...', likes: 10 },
    { id: 2, imageUrl: '...', caption: '...', likes: 20 },
    
  ];

  // Handler function for submitting a new post
  const handlePostSubmit = (postData) => {
   
    console.log('New post submitted:', postData);
    closeModal(); 
  };

  return (
    <>
      <Header />
      <div className="main-content">
        <div className="posts-container">
          <Feed posts={posts} /> {/* Render the Feed component with posts */}
        </div>
        <button onClick={openModal}>New Post</button> {/* Button to open the modal */}
        {isModalOpen && <NewPostModal onClose={closeModal} onSubmit={handlePostSubmit} />} {/* Render modal if isModalOpen is true */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
