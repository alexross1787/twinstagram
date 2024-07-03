import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import logoDark from '../assets/logo_dark.png';
import logoLight from '../assets/logo_light.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [theme, setTheme] = useState('light'); // Initial theme state (by default)

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://backend-url/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
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
    document.body.classList.toggle('dark-theme');
  };

  return (
    <div className={`login-container ${theme}`}>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="logo">
          <img src={theme === 'dark' ? logoDark : logoLight} alt="Logo" />
        </div>
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
        <button type="submit">Login</button>
      </form>
      {error && <div className="error-message">{error}</div>}
      <div className="signup-link">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Login;
