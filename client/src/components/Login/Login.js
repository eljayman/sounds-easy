import React from 'react';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { validateEmail } from '../../utils/helpers';
import { USER_LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

export function LoginForm() {
  const [userLogin] = useMutation(USER_LOGIN);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // Handle login form submission
  const handleLoginSubmit = async (e) => {
    try {
      const { data } = await userLogin({
        variables: { email: e.email, password: e.password },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
      alert(e);
    }
    setValue({
      email: '',
      password: '',
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleLoginSubmit)}
      className="space-y-8 min-w-300"
    >
      <h2 className="mb-4 text-3xl tracking-tight text-center text-white">
        Login
      </h2>
      <label className="block mb-2 text-m font-medium text-gray-300">
        Email:
        <input
          {...register('email', {
            required: 'Email address is required.',
            validateEmail,
          })}
          placeholder="Your email address"
          type="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
        />
        <p className="block mb-2 text-m font-medium text-blue-300">
          {errors.email?.message}
        </p>
      </label>
      <br />
      <label className="block mb-2 text-m font-medium text-gray-300">
        Password:
        <input
          placeholder="Your password"
          type="password"
          {...register('password', {
            required: 'Password must be 8 to 16 characters.',
            minLength: 8,
            maxLength: 16,
          })}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
        />
        <p className="block mb-2 text-m font-medium text-blue-300">
          {errors.password?.message}
        </p>
      </label>
      <br />
      <button
        type="submit"
        className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
      >
        Login
      </button>
    </form>
  );
}
