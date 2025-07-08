import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

// Example accounts (hardcoded for demo/testing)
const exampleAccounts = [
  {
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin',
    name: 'Lei Anysson Marquez'
  },
  {
    email: 'dispatcher@example.com',
    password: 'dispatcher123',
    role: 'dispatcher',
    name: 'Grace Bayonito'
  }
];

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = exampleAccounts.find(
      acc => acc.email === email && acc.password === password
    );
    if (user) {
      // Redirect based on role
      if (user.role === 'admin') {
        navigate('/admin');
      } else if (user.role === 'dispatcher') {
        navigate('/dispatcher');
      }
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-root">
      {/* Left Section */}
      <div className="login-left">
        <img src="/bocaue-logo.png" alt="Bocaue Rescue Logo" className="login-logo" />
        <div className="login-org-name">BOCAUE RESCUE EMS</div>
        <div className="login-org-desc">
          MUNICIPAL EMERGENCY ASSISTANCE AND<br />INCIDENT RESPONSE
        </div>
      </div>
      {/* Right Section */}
      <div className="login-right">
        <div className="login-form-container">
          <h2 className="login-title">Welcome</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="login-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="login-input"
            />
            {error && <div style={{ color: 'red', marginBottom: '1em' }}>{error}</div>}
            <div className="login-forgot">Forgot password?</div>
            <button className="login-btn" type="submit">Login</button>
          </form>
          <div className="login-signup-row">
            <span>Don't have an account yet?</span>
            <a href="/signin" className="login-signin-link">Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

