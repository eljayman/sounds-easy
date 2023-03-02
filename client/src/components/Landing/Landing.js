import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h1>Welcome to Sounds Easy!</h1>
      <p>
        Sounds Easy is a platform where you can listen to and add sounds to your
        own personal soundboard library. Create a profile to get started.
      </p>
      <div>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
