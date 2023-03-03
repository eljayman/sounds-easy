import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Login from '../Login';
import Landing from '../Landing';
import Dashboard from '../Dashboard';
import Library from '../Library';
import Soundboard from '../Soundboard';

// Audio files storage
import testAudio from '../Sound/test-sound.wav';
import testAudio2 from '../Sound/testAudio2.wav';

import './App.css'; // Import App.css stylesheet

function App() {
  // Declare state variables for user and error messages
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [selectedSounds, setSelectedSounds] = useState([]);
  // Set a state variable array for sounds
  const [sounds] = useState([
    {
      id: 1,
      image:
        'https://www.freepnglogos.com/uploads/play-button-png/circular-play-button-svg-png-icon-download-onlinewebfontsm-30.png',
      file: testAudio,
      title: 'Sound 1',
    },
    {
      id: 2,
      image:
        'https://www.freepnglogos.com/uploads/play-button-png/circular-play-button-svg-png-icon-download-onlinewebfontsm-30.png',
      file: testAudio2,
      title: 'Sound 2',
    },
  ]);

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

  // Define handler function for adding a sound to the library
  const handleAddToLibrary = (sound) => {
    setSelectedSounds([...selectedSounds, sound]);
  };

  return (
    // <div className="App">
    //   <Soundboard sounds={sounds} onSoundClick={handleAddToLibrary} />
    //   <Library selectedSounds={selectedSounds} />
    // </div>

    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Landing />}
          user={user}
          handleLogout={handleLogout}
        />
        <Route
          path="/login"
          element={<Login />}
          formType="login"
          handleSubmit={handleLogin}
          error={error}
        />
        <Route
          path="/signup"
          element={<Login />}
          formType="signup"
          handleSubmit={handleSignup}
          error={error}
        />
        <Route
          path="/dashboard"
          element={<Dashboard />}
          user={user}
          handleLogout={handleLogout}
          handleAddToLibrary={handleAddToLibrary}
        />
        <Route
          path="/library"
          element={<Library />}
          user={user}
          selectedSounds={selectedSounds}
        />
        <Route
          path="/soundboard"
          element={<Soundboard />}
          sound={sounds}
          onSoundClick={handleAddToLibrary}
        />
      </Routes>
    </Router>
  );
}

export default App;
