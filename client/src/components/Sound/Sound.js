import React, { useState } from 'react';

function Sound(sounds) {
  const [audio] = useState(new Audio(sounds.file));

  const handleClick = () => {
    audio.play();
  };

  return (
    <li className="sound" onClick={handleClick}>
      <img src={sounds.image} alt={sounds.title} width={'160px'} />
    </li>
  );
}

export default Sound;
