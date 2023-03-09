import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
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
    confirmPassword: '',
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
      Auth.login(data.login.token);
      <Navigate to="/soundboard" replace={true} />;
    } catch (e) {
      console.error(e);
      alert(e);
    }
    setLoginForm({
      email: '',
      password: '',
    });
  };

  // Handle signup form submission
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (
      JSON.stringify(signupForm.password) ===
      JSON.stringify(signupForm.confirmPassword)
    ) {
      try {
        const { data } = await addUser({
          variables: { ...signupForm },
        });

        Auth.login(data.addUser.token);
        <Navigate to="/soundboard" replace={true} />;
      } catch (e) {
        console.error(e);
        alert(e);
      }
    } else {
      alert('Passwords must match');
      setSignupForm({
        password: '',
        confirmPassword: '',
      });
    }
  };

  return (
    <div className="grid grid-cols-8">
      <div className="col-start-2 items-center p-4 col-span-2">
        {/* Login form */}
        <form onSubmit={handleLoginSubmit} className="space-y-8 min-w-300">
          <h2 className="mb-4 text-3xl tracking-tight text-center text-white">
            Login
          </h2>
          <label className="block mb-2 text-m font-medium text-gray-300">
            Email:
            <input
              placeholder="Your email address"
              type="email"
              name="email"
              value={loginForm.email}
              onChange={handleLoginChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            />
          </label>
          <br />
          <label className="block mb-2 text-m font-medium text-gray-300">
            Password:
            <input
              placeholder="Your password"
              type="password"
              name="password"
              value={loginForm.password}
              onChange={handleLoginChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            />
          </label>
          <br />
          <button
            type="submit"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            Login
          </button>
        </form>
      </div>
      <div className="col-start-5 items-center p-4 col-span-2">
        {/* Signup form */}
        <form onSubmit={handleSignupSubmit} className="space-y-8 min-w-300">
          <h2 className="mb-4 text-3xl tracking-tight text-center text-white">
            Signup
          </h2>
          <div className="items-center">
            <label className="block mb-2 text-m font-medium text-gray-300">
              Username:
              <input
                placeholder="New user name"
                type="text"
                name="username"
                value={signupForm.username}
                onChange={handleSignupChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              />
            </label>
            <br />
            <label className="block mb-2 text-m font-medium text-gray-300">
              Email:
              <input
                placeholder="New user email address"
                type="email"
                name="email"
                value={signupForm.email}
                onChange={handleSignupChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              />
            </label>
            <br />
            <label className="block mb-2 text-m font-medium text-gray-300">
              Password:
              <input
                placeholder="Password from 8 to 16 characters"
                type="password"
                name="password"
                value={signupForm.password}
                onChange={handleSignupChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              />
            </label>
            <br />
            <br />
            <label className="block mb-2 text-m font-medium text-gray-300">
              Password:
              <input
                placeholder="Confirm your password"
                type="password"
                name="confirmPassword"
                value={signupForm.confirmPassword}
                onChange={handleSignupChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
