import React from 'react';
import useSound from 'use-sound';
import TestAudio from './test-sound.wav';

const Sound = ({ soundID, soundFile }) => {
  // Use the 'useSound' hook to load audio file
  const [buttonClickAudio] = useSound(TestAudio);
  const sounds = [
    { id: 1, audioFile: '/sounds/sound1.mp3' },
    { id: 2, audioFile: '/sounds/sound2.mp3' },
    { id: 3, audioFile: '/sounds/sound3.mp3' },
    // add more sounds as needed
  ];

  // Define a handleClick function that calls the buttonClickAudio function to play the audio file
  const handleClick = () => {
    buttonClickAudio(); // Plays Audio
    // Add sound to user's library using ID?
  };
  return (
    {
      /*Render an img element that is clickable and triggers the handleClick function when clicked*/
    },
    (
      <li onClick={handleClick}>
        <img
          src={
            'https://www.freepnglogos.com/uploads/play-button-png/circular-play-button-svg-png-icon-download-onlinewebfontsm-30.png'
          }
          width="160px"
          alt={'Sound play button'}
        />
      </li>
    )
  );
};

export default Sound;
