import React, { useState } from 'react';
import Sound from '../Sound';

function Soundboard(soundProps) {
  const [selectedSounds, setSelectedSounds] = useState([]);

  const handleSoundClick = (sound) => {
    setSelectedSounds([...selectedSounds, sound]);
  };

  return (
    <div className="soundboard grid grid-cols-5">
      <div className="col-start-2 col-span-3 items-center p-4">
        <h1 className="text-center text-4xl">Soundboard</h1>
      </div>
      <div className="col-start-2 col-span-3 items-center p-2">
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
    </div>
  );
}

export default Soundboard;
