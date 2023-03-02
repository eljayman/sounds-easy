import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = ({ username }) => {
  const [library, setLibrary] = useState([]);

  // Use the useEffect hook to fetch the user's library
  useEffect(() => {
    const fetchLibrary = async () => {
      try {
        // Use axios to make a GET request to the server, passing in the username in the URL
        const response = await axios.get(`/api/library/${username}`); // ***ADD LIBRARY API ROUTE
        // Set the library state variable to the data returned by the server
        setLibrary(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLibrary();
  }, [username]); // Re-run when the username changes

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <h2>Your Sound Library:</h2>
      <ul>
        {library.map((sound) => (
          <li key={sound.id}>{sound.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
