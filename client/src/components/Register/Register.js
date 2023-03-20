import React, { useRef } from 'react';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { validateEmail } from '../../utils/helpers';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

export function RegisterForm() {
  const [addUser] = useMutation(ADD_USER);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const password = useRef({});
  password.current = watch('password', '');

  const handleRegisterSubmit = async (e) => {
    try {
      const { data } = await addUser({
        variables: {
          username: e.username,
          email: e.email,
          password: e.password,
        },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
      alert(e);
    }
    setValue({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegisterSubmit)}
      className="space-y-8 min-w-300"
    >
      <h2 className="mb-4 text-3xl tracking-tight text-center text-white">
        Signup
      </h2>
      <div className="items-center">
        <label className="block mb-2 text-m font-medium text-gray-300">
          Username:
          <input
            placeholder="New user name"
            type="text"
            {...register('username', {
              required: 'User name is required.',
              minLength: 2,
              maxLength: 36,
            })}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          />
          <p className="block mb-2 text-m font-medium text-blue-300">
            {errors.username?.message}
          </p>
        </label>
        <br />
        <label className="block mb-2 text-m font-medium text-gray-300">
          Email:
          <input
            placeholder="New user email address"
            type="email"
            {...register('email', {
              required: 'Email address is required.',
              validateEmail,
            })}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          />
          <p className="block mb-2 text-m font-medium text-blue-300">
            {errors.email?.message}
          </p>
        </label>
        <br />
        <label className="block mb-2 text-m font-medium text-gray-300">
          Password:
          <input
            placeholder="Password 8 to 16 characters"
            type="password"
            {...register('password', {
              required: 'Password must be 8 to 16 characters.',
              minLength: 8,
              maxLength: 16,
            })}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          />
          <p className="block mb-2 text-m font-medium text-blue-300">
            {errors.password?.message}
          </p>
        </label>
        <br />
        <br />
        <label className="block mb-2 text-m font-medium text-gray-300">
          Password:
          <input
            placeholder="Confirm your password"
            type="password"
            {...register('confirmPassword', {
              validate: (value) =>
                value === password.current || 'The passwords must match',
            })}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          />
          <p className="block mb-2 text-m font-medium text-blue-300">
            {errors.confirmPassword?.message}
          </p>
        </label>
        <button
          type="submit"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Signup
        </button>
      </div>
    </form>
  );
}
