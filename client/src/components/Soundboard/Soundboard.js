import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_SOUNDS } from '../../utils/queries';
import Sound from '../Sound';

function Soundboard() {
  // const [selectedSounds, setSelectedSounds] = useState([]);
  const { loading, data } = useQuery(QUERY_ALL_SOUNDS);
  const allSounds = data?.sounds || [];
  console.log(allSounds);
  // const handleSoundClick = (sound) => {
  //   setSelectedSounds([...selectedSounds, sound]);
  // };

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
              //onClick={() => handleSoundClick} NEEDS CHANGE
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Soundboard;

// {loading ? (
//   <div>Loading...</div>
// ) : (
//   <ProfileList
//     profiles={profiles}
//     title="Here's the current roster of friends..."
//   />
// )}
