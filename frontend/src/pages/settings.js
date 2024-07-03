import React from 'react';
import '../styles/settings.css';

const Settings = () => {
  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Settings</h1>
      </div>
      <div className="settings-options">
        <div className="setting-section">
          <h2>Account</h2>
          <div className="setting-option">
            <span>Change Password</span>
          </div>
          <div className="setting-option">
            <span>Manage Email</span>
          </div>
          <div className="setting-option">
            <span>Manage Phone Number</span>
          </div>
        </div>
        <div className="setting-section">
          <h2>Notifications</h2>
          <div className="setting-option">
            <span>Push Notifications</span>
          </div>
          <div className="setting-option">
            <span>Email Notifications</span>
          </div>
        </div>
        <div className="setting-section">
          <h2>Privacy</h2>
          <div className="setting-option">
            <span>Account Privacy</span>
          </div>
          <div className="setting-option">
            <span>Post Privacy</span>
          </div>
        </div>
        <div className="setting-section">
          <h2>Appearance</h2>
          <div className="setting-option">
            <span>Theme</span>
          </div>
          <div className="setting-option">
            <span>Language</span>
          </div>
        </div>
        <div className="setting-section">
          <h2>Help & Support</h2>
          <div className="setting-option">
            <span>FAQs</span>
          </div>
          <div className="setting-option">
            <span>Contact Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
