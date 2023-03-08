import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import {
  ADD_SOUND_TO_BOARD,
  REMOVE_SOUND_FROM_BOARD,
} from '../../utils/mutations';
import Auth from '../../utils/auth';

function Sound({ _id, soundName, url }) {
  const [audio] = useState(new Audio(url));
  const [addSound] = useMutation(ADD_SOUND_TO_BOARD);
  const [removeSound] = useMutation(REMOVE_SOUND_FROM_BOARD);
  const location = useLocation();
  console.log(_id);
  const handleClick = () => {
    audio.play();
  };

  return (
    <li className="sound inline-block p-4" onClick={handleClick}>
      {/* <img src={sounds.image} alt={sounds.soundName} width={'160px'} /> */}
      <p>{soundName}</p>
      <div>
        {Auth.loggedIn() ? (
          <>
            <div>
              {location.pathname === '/soundboard' ? (
                <div>
                  <button
                    onClick={() =>
                      addSound({
                        variables: { soundId: _id },
                      })
                    }
                  >
                    Add Sound to library
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    onClick={() =>
                      removeSound({
                        variables: { soundId: _id },
                      })
                    }
                  >
                    Add Sound to library
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </li>
  );
}

export default Sound;
