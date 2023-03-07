import React, { useState, useEffect } from 'react';

const Dashboard = ({ username }) => {
  const [library, setLibrary] = useState([]);

  // Use the useEffect hook to fetch the user's library
  useEffect(() => {
    const fetchLibrary = async () => {
      try {
      } catch (error) {
        console.error(error);
      }
    };

    fetchLibrary();
  }, [username]); // Re-run when the username changes

  // Delete sound from library and update state
  const handleDelete = async (id) => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid grid-cols-5">
      <div className="col-start-2 col-span-3 items-center p-4">
        <h1 className="text-center text-4xl">Welcome {username}!</h1>
      </div>
      <div className="col-start-2 col-span-3 items-center p-4">
        <h2 className="text-center text-3xl">Your Sounds:</h2>
      </div>
      <div className="col-start-2 col-span-3 items-center p-2">
        <ul>
          {library.map((sound) => (
            <li key={sound.id}>
              {sound.name}
              <button onClick={() => handleDelete(sound.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
