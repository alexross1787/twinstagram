import React from 'react';
import '../styles/messages.css'; // Import your CSS file

const Messages = () => {
  return (
    <div className="messages-container">
      <h2>Messages</h2>
      <div className="message-list">
        <div className="message">
          <div className="message-sender">Sender Name</div>
          <div className="message-content">Message content goes here.</div>
        </div>
        <div className="message">
          <div className="message-sender">Another Sender</div>
          <div className="message-content">Another message here.</div>
        </div>
        {/* Add more messages as needed */}
      </div>
    </div>
  );
};

export default Messages;
