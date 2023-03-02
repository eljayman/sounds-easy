import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Library = ({ username }) => {
  const [library, setLibrary] = useState([]);

  // Fetch library data when the component mounts or when username changes
  useEffect(() => {
    const fetchLibrary = async () => {
      try {
        const response = await axios.get(`/api/library/${username}`); // ***ADD LIBRARY API ROUTE
        setLibrary(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLibrary();
  }, [username]);

  // Delete sound from library and update state
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/library/${id}`); // ***ADD LIBRARY API ROUTE
      setLibrary(library.filter((sound) => sound.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Sound Library</h1>
      <ul>
        {library.map((sound) => (
          <li key={sound.id}>
            {sound.name} ({sound.description})
            <button onClick={() => handleDelete(sound.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Library;
