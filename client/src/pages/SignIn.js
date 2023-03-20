import React from 'react';
import { LoginForm } from '../components/Login/Login';
import { RegisterForm } from '../components/Register/Register';

export function SignIn() {
  return (
    <div className="flex basis-4 flex-col items-center lg:grid lg:grid-cols-8 border-t-8 border-gray-900">
      <div className="max-w-xs md:w-3/4 lg: col-start-2  items-center p-4 col-span-2">
        <LoginForm />
      </div>
      <div className="max-w-xs md:w-3/4 col-start-5 items-center p-4 col-span-2">
        <RegisterForm />
      </div>
    </div>
  );
}
