import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_MY_SOUNDS } from '../../utils/queries';
import Sound from '../Sound';
import { REMOVE_SOUND_FROM_BOARD } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

const Dashboard = () => {
  const [removeSound] = useMutation(REMOVE_SOUND_FROM_BOARD, {
    refetchQueries: [{ query: QUERY_MY_SOUNDS }],
  });
  const { loading, data } = useQuery(QUERY_MY_SOUNDS);
  const mySounds = data?.mySounds || [];

  return (
    <div className="soundboard grid grid-cols-5">
      <div className="col-start-2 col-span-3 items-center p-4">
        <h1 className="text-center text-4xl">User Dashboard</h1>
      </div>
      <div className="col-start-2 col-span-3 items-center p-4">
        <h2 className="text-center text-3xl">My Sounds:</h2>
      </div>
      <div className="col-start-2 col-span-3 items-center p-2">
        <ul style={{ listStyleType: 'none' }}>
          {mySounds.map((data) => (
            <Sound
              key={data._id}
              _id={data._id}
              url={data.url}
              soundName={data.soundName}
              removeSound={removeSound}
              //onClick={() => handleSoundClick} NEEDS CHANGE
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
