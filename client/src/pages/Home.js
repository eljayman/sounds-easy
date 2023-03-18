import React from 'react';
import { Link } from 'react-router-dom';
export function Home() {
  return (
    <div>
      <div className="grid grid-cols-5">
        <div className="col-start-2 col-span-3 items-center p-4">
          <h1 className="text-center text-4xl">Welcome to Sounds-Easy!</h1>
        </div>
        <div className="col-start-2 col-span-3 items-center p-2">
          <p>
            Sounds Easy is where you can listen to our library of sounds, and
            add sounds to your own personal soundboard.{' '}
            <Link to="/login" className="text-gray-100">
              Create a profile{' '}
            </Link>
            to get started, or view our{' '}
            <Link to="/library" className="text-gray-100">
              sound library.
            </Link>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center h-[70vh]">
        <img
          src="https://user-images.githubusercontent.com/113566829/223682909-8ad1e1b6-5109-4b8a-abd6-23030c72fdf8.png"
          alt="sound waves.png"
          className="h-[40vh] w-[70vw]"
        />
      </div>
    </div>
  );
}
