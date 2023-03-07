import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-start-2 col-span-3 items-center p-4">
      <h1 className="text-center text-4xl">Welcome to Sounds Easy!</h1>
      </div>
      <div className="col-start-2 col-span-3 items-center p-2">
      <p>
        Sounds Easy is a platform where you can listen to and add sounds to your
        own personal soundboard library. View and listen to different sounds on our soundboard, and create an easy-to-access personal library for on-demand sounds! Create a profile to get started, or
        view our sound library.
      </p>
      </div>
    </div>
  );
};

export default Landing;
