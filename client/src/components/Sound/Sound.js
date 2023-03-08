import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_SOUND_TO_BOARD } from '../../utils/mutations';
import { QUERY_MY_SOUNDS } from '../../utils/queries';
import Auth from '../../utils/auth';

function Sound({ _id, soundName, url, removeSound }) {
  const [soundAdded, setSoundAdded] = useState(false);
  const [audio] = useState(new Audio(url));
  const [addSound] = useMutation(ADD_SOUND_TO_BOARD, {
    refetchQueries: [{ query: QUERY_MY_SOUNDS }],
  });
  const [mySounds] = useQuery(QUERY_MY_SOUNDS);

  const location = useLocation();

  const handleClick = () => {
    audio.play();
  };

  return (
    <li className="sound inline-block p-4">
      {/* <img src={sounds.image} alt={sounds.soundName} width={'160px'} /> */}
      <button
        onClick={handleClick}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-cyan-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {soundName}
        </span>
      </button>
      <div>
        <>
          {Auth.loggedIn() ? (
            <div>
              {location.pathname === '/soundboard' ? (
                <div>
                  <button
                    type="button"
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
                    onClick={async () => {
                      await addSound({
                        variables: { soundId: _id },
                      });
                      setSoundAdded(true);
                    }}
                  >
                    {soundAdded || mySounds.some(sound => sound._id === _id) ? 'Sound added to Dashboard!' : '+ Add Sound'}
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    type="button"
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
                    onClick={async () =>
                      await removeSound({
                        variables: { soundId: _id },
                      })
                    }
                  >
                    - Remove Sound
                  </button>
                </div>
              )}
            </div>
          ) : (
            <></>
          )}
        </>
      </div>
    </li>
  );
}

export default Sound;
