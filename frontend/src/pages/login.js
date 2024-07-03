import React, { useState } from 'react';
import '../styles/login.css'; // Import your CSS file
import logoDark from '../assets/logo_dark.png';
import logoLight from '../assets/logo_light.png';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [theme, setTheme] = useState('light'); // Initial theme state (by default)

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user, password })
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        window.location.href = '/home';
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Failed to connect to the server');
    }
  };

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    document.body.classList.toggle('dark-theme'); // Toggle class on body
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <div className="logo">
          <img src={theme === 'dark' ? logoDark : logoLight} alt="Logo" />
        </div>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <div className="error-message">{error}</div>}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Login;
