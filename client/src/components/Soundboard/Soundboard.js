import React from 'react';
import Sound from '../Sound/Sound';

const Soundboard = () => {
  const sounds = [
    { id: 1, soundFile: '/sounds/sound1.mp3' },
    { id: 2, soundFile: '/sounds/sound2.mp3' },
    { id: 3, soundFile: '/sounds/sound3.mp3' },
    // add more sounds as needed
  ];

  return (
    <div>
      {sounds.map((sound) => (
        <Sound key={sound.id} soundId={sound.id} audioFile={sound.soundFile} />
      ))}
    </div>
  );
};

export default Soundboard;
