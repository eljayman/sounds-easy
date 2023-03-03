import React from 'react';
import Sound from '../Sound';

function Library(props) {
  return (
    <div className="library">
      {props.selectedSounds.map((sound) => (
        <Sound
          key={sound.id}
          image={sound.image}
          file={sound.file}
          title={sound.title}
        />
      ))}
    </div>
  );
}

export default Library;
