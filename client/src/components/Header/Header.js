import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import './Header.css';

function Header() {
  const [user, loggedIn] = useState(); //Use this to determine if a user is logged in. If logged in, hide Login and Signup buttons and replace with Logout button
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <ul className="">
          <li className="ml-3 text-4xl title-font font-mono font-medium text-white mb-4 md:mb-0">
            <Link to="/">Sounds-Easy</Link>
          </li>
        </ul>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 text-white flex flex-wrap items-center text-base justify-center">
          <ul>
            <li className="mr-5">
              <NavLink
                exact="true"
                to="/dashboard"
                className={(navData) =>
                  navData.isActive ? 'font-bold text-white' : 'none'
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li className="mr-5">
              <NavLink
                to="/soundboard"
                className={(navData) =>
                  navData.isActive ? 'font-bold text-white' : 'none'
                }
              >
                Sound Library
              </NavLink>
            </li>
          </ul>
        </nav>
        <ul className="text-white">
          {Auth.loggedIn() ? (
            <li className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              <NavLink
                exact="true"
                to="/"
                className={(navData) =>
                  navData.isActive ? 'font-bold text-white' : 'none'
                }
              >
                Logout
              </NavLink>
            </li>
          ) : (
            <li className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              <NavLink
                to="/login"
                className={(navData) =>
                  navData.isActive ? 'font-bold text-white' : 'none'
                }
              >
                Login or Signup
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
