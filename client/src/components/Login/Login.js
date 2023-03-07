import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER, USER_LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth.js';

const Login = () => {
  const [userLogin] = useMutation(USER_LOGIN);
  const [addUser] = useMutation(ADD_USER);
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
      const { data } = await userLogin({
        variables: { ...loginForm },
      });
      console.log(data.login.token);
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  // Handle signup form submission
  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...signupForm },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
    setSignupForm({
      email: '',
      password: '',
    });
  };

  return (
    <div>
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

      <h2>or</h2>
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

export default Login;
