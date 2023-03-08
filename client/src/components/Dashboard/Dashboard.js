import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_MY_SOUNDS } from '../../utils/queries';
import Sound from '../Sound';

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_MY_SOUNDS);
  const mySounds = data?.sounds || [];
  console.log(mySounds);

  return (
    <div className="soundboard grid grid-cols-5">
      <div className="col-start-2 col-span-3 items-center p-4">
        <h1 className="text-center text-4xl">Soundboard</h1>
      </div>
      <div className="col-start-2 col-span-3 items-center p-2">
        <ul style={{ listStyleType: 'none' }}>
          {mySounds.map((data) => (
            <Sound
              key={data._id}
              // image={image}
              url={data.url}
              soundName={data.soundName}
              //onClick={() => handleSoundClick} NEEDS CHANGE
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
