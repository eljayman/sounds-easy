import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_SOUND_TO_BOARD } from '../../utils/mutations';
import { QUERY_MY_SOUNDS } from '../../utils/queries';
import Auth from '../../utils/auth';
import plusIcon from '../../assets/images/plus-icon.png';
import minusIcon from '../../assets/images/minus-icon.png';

export function Sound({ _id, soundName, url, removeSound }) {
  const [audio] = useState(new Audio(url));
  const [addSound] = useMutation(ADD_SOUND_TO_BOARD, {
    refetchQueries: [{ query: QUERY_MY_SOUNDS }],
  });
  const { loading, data } = useQuery(QUERY_MY_SOUNDS);
  const location = useLocation();
  const handleClick = () => {
    audio.play();
  };
  const mySounds = data?.mySounds || [];
  const checkUserSounds = () => {
    for (let i = 0; i < mySounds.length; i++) {
      if (mySounds[i]._id === _id) {
        return true;
      }
    }
    return false;
  };

  return (
    <>
      {loading ? (
        <h3 className="col-start-2 col-span-3 items-center p-4 items-center justify-center">
          Loading...
        </h3>
      ) : (
        <li className="m-2 w-36 h-36 p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg cursor-pointer ">
          <button className="flex flex-col justify-between items-center p-1 w-28 h-28 text-sm font-medium rounded-lg bg-gray-900  group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-cyan-800">
            <span
              onClick={handleClick}
              className="w-full h-16 hover:text-cyan-400 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0"
            >
              {soundName}
            </span>
            {Auth.loggedIn() ? (
              <img
                onClick={async () =>
                  location.pathname === '/library'
                    ? await addSound({ variables: { soundId: _id } })
                    : await removeSound({ variables: { soundId: _id } })
                }
                src={location.pathname === '/library' ? plusIcon : minusIcon}
                alt={
                  location.pathname === '/library'
                    ? 'Add sound to your soundboard'
                    : 'Remove sound from your soundboard.'
                }
                className={
                  location.pathname === '/library' && checkUserSounds()
                    ? 'hidden'
                    : 'rounded-full w-6 border-2 hover:border-cyan-500 transition-all ease-in-out duration-75 active:ring-4 active:ring-cyan-800'
                }
              />
            ) : null}
          </button>
        </li>
      )}
    </>
  );
}
