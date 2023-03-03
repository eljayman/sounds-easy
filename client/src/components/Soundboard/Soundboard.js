import React, { useState } from 'react';
import Sound from '../Sound';

function Soundboard(soundProps) {
  const [selectedSounds, setSelectedSounds] = useState([]);

  const handleSoundClick = (sound) => {
    setSelectedSounds([...selectedSounds, sound]);
  };

  return (
    <div className="soundboard">
      <h2>Soundboard</h2>
      <ul style={{ listStyleType: 'none' }}>
        {soundProps.sounds.map((sound) => (
          <Sound
            key={sound.id}
            image={sound.image}
            file={sound.file}
            title={sound.title}
            onClick={() => handleSoundClick(sound)} //NEEDS CHANGE
          />
        ))}
      </ul>
    </div>
  );
}

export default Soundboard;
