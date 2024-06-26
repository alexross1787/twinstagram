import React, { useState } from 'react';
import '../styles/login.css'; // Import your CSS file
import logoDark from '../assets/logo_dark.png';
import logoLight from '../assets/logo_light.png';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [theme, setTheme] = useState('dark'); // Initial theme state (dark mode by default)

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://backend-url/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        // Redirect to the home page after login
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
      <button onClick={toggleTheme}>Toggle Theme</button> {/* Example toggle button */}
    </div>
  );
};

export default Login;


