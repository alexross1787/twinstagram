import React, { useState } from 'react';

const NewPost = () => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('caption', caption);
    formData.append('image', image);

    const response = await fetch('http://backend-url/posts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: formData
    });

    if (response.ok) {
      console.log('Post created successfully');
    } else {
      const data = await response.json();
      console.error(data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Caption:</label>
        <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} required />
      </div>
      <div>
        <label>Image:</label>
        <input type="file" onChange={handleImageUpload} required />
      </div>
      <button type="submit">Post</button>
    </form>
  );
};

export default NewPost;
