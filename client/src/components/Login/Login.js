import React, { useState } from 'react';
import axios from 'axios';

const Auth = ({ onLogin, onSignUp }) => {
  // Create state variables for the login and signup forms
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const [signupForm, setSignupForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleLoginChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupChange = (e) => {
    setSignupForm({
      ...signupForm,
      [e.target.name]: e.target.value,
    });
  };

  // Handle login form submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('', loginForm); // ***ADD LOGIN API ROUTE
      onLogin(response.data.username);
    } catch (error) {
      console.error(error);
    }
  };

  // Handle signup form submission
  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('', signupForm); // ***ADD SIGNUP API ROUTE
      onSignUp(response.data.username);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* Login form */}
      <form onSubmit={handleLoginSubmit}>
        <h2>Login</h2>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={loginForm.email}
            onChange={handleLoginChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleLoginChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>

      {/* Signup form */}
      <form onSubmit={handleSignupSubmit}>
        <h2>Signup</h2>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={signupForm.username}
            onChange={handleSignupChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={signupForm.email}
            onChange={handleSignupChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={signupForm.password}
            onChange={handleSignupChange}
          />
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Auth;
