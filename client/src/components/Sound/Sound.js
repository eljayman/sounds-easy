import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_SOUND_TO_BOARD } from '../../utils/mutations';
import { QUERY_MY_SOUNDS } from '../../utils/queries';
import Auth from '../../utils/auth';

function Sound({ _id, soundName, url, removeSound }) {
  const [audio] = useState(new Audio(url));
  const [addSound] = useMutation(ADD_SOUND_TO_BOARD, {
    refetchQueries: [{ query: QUERY_MY_SOUNDS }],
  });

  const location = useLocation();

  const handleClick = () => {
    audio.play();
  };

  return (
    <li className="sound inline-block p-4">
      {/* <img src={sounds.image} alt={sounds.soundName} width={'160px'} /> */}
      <p onClick={handleClick}>{soundName}</p>
      <div>
        {Auth.loggedIn() ? (
          <>
            <div>
              {location.pathname === '/soundboard' ? (
                <div>
                  <button
                    onClick={async () =>
                      await addSound({
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
                    onClick={async () =>
                      await removeSound({
                        variables: { soundId: _id },
                      })
                    }
                  >
                    Remove Sound from library
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
