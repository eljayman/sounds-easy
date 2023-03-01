import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import './App.css'; // Import App.css stylesheet

function App() {
  // Declare state variables for user and error messages
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // Use useEffect to fetch user data from server on mount
  useEffect(() => {
    axios
      .get('') // ***ADD USER API ROUTE
      .then((res) => setUser(res.data))
      .catch((err) => setError(err.response.data.message));
  }, []);

  // Define handler function for login form submission
  const handleLogin = (userData) => {
    axios
      .post('', userData) // ***ADD LOGIN API ROUTE
      .then((res) => setUser(res.data))
      .catch((err) => setError(err.response.data.message));
  };

  // Define handler function for signup form submission
  const handleSignup = (userData) => {
    axios
      .post('', userData) // ***ADD SIGNUP API ROUTE
      .then((res) => setUser(res.data))
      .catch((err) => setError(err.response.data.message));
  };

  // Define handler function for logout button click
  const handleLogout = () => {
    axios
      .post('') // ***ADD LOGOUT API ROUTE
      .then((res) => setUser(null))
      .catch((err) => console.log(err));
  };

  return (
    <Router>
      <Routes>
        {/* Route for landing page */}

        {/* Route for login form */}

        {/* Route for signup form */}

        {/* Route for user dashboard */}

        {/* Route for sound library */}
      </Routes>
    </Router>
  );
}

export default App;
