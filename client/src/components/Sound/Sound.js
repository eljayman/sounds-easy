import React from 'react';
import { Link } from 'react-router-dom';

const Sound = ({ sound }) => {
  return (
    <li>
      {/*Link to this sound?*/}
      <Link to={`/sound/${sound.id}`}>
        {' '}
        {/* ADD IN SOUND API ROUTE */}
        {/*Display the sound's name and description */}
        {sound.name} - {sound.description}
      </Link>
    </li>
  );
};

export default Sound;
