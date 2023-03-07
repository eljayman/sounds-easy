import React from 'react';
import Sound from '../Sound';

function Library(props) {
  return (
    <div className="library grid grid-cols-5">
      <div className="cols-start-2 col-span-3">
        {props.selectedSounds.map((sound) => (
          <Sound
            key={sound.id}
            image={sound.image}
            file={sound.file}
            title={sound.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
