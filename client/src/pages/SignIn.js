import React from 'react';
import { LoginForm } from '../components/Login/Login';
import { RegisterForm } from '../components/Register/Register';

export function SignIn() {
  return (
    <div className="grid grid-cols-8">
      <div className="col-start-2 items-center p-4 col-span-2">
        <LoginForm />
      </div>
      <div className="col-start-5 items-center p-4 col-span-2">
        <RegisterForm />
      </div>
    </div>
  );
}
