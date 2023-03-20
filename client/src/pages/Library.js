import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_SOUNDS } from '../utils/queries';
import { Sound } from '../components/Sound/Sound';

export function Library() {
  const { loading, data } = useQuery(QUERY_ALL_SOUNDS);
  const allSounds = data?.sounds || [];
  const soundComponents = allSounds.map((data) => (
    <Sound
      key={data._id}
      _id={data._id}
      url={data.url}
      soundName={data.soundName}
    />
  ));
  return (
    <div className="grid grid-cols-5 pb-16">
      <div className="col-start-2 col-span-3 items-center p-4">
        <h1 className="text-center text-4xl">Sound Library</h1>
      </div>
      {loading ? (
        <h3 className="col-start-2 col-span-3 items-center p-4">Loading...</h3>
      ) : (
        <ul className="col-start-2 col-span-3 w-full flex items-center flex-row  flex-wrap  justify-center">
          {soundComponents}
        </ul>
      )}
    </div>
  );
}
