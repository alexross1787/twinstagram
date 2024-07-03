// src/components/signUp.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signUp.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://backend-url/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      if (response.ok) {
        // Assuming the backend returns a token upon successful sign-up
        const data = await response.json();
        localStorage.setItem('token', data.token);
        navigate('/home');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Sign-up failed');
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      setError('Failed to connect to the server');
    }
  };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default SignUp;
