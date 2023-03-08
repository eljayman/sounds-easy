import React, { useState } from 'react';

function Sound({ _id, soundName, url }) {
  const [audio] = useState(new Audio(url));

  const handleClick = () => {
    audio.play();
  };

  return (
    <li  className="sound inline-block p-4" onClick={handleClick}>
      {/* <img src={sounds.image} alt={sounds.soundName} width={'160px'} /> */}
      <p>{soundName}</p>
    </li>
  );
}

export default Sound;
