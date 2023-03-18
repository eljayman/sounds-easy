import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_SOUNDS } from '../utils/queries';
import { Sound } from '../components/Sound/Sound';

export function Library() {
  const { loading, data } = useQuery(QUERY_ALL_SOUNDS);
  const allSounds = data?.sounds || [];

  return (
    <div className="soundboard grid grid-cols-5">
      <div className="col-start-2 col-span-3 items-center p-4">
        <h1 className="text-center text-4xl">Soundboard</h1>
      </div>
      <div className="col-start-2 col-span-3 items-center p-2">
        <ul style={{ listStyleType: 'none' }}>
          {allSounds.map((data) => (
            <Sound
              key={data._id}
              _id={data._id}
              url={data.url}
              soundName={data.soundName}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
