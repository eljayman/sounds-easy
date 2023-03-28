import React from 'react';
import linkedInIcon from '../../assets/images/linkedinicon.png';
export function Footer() {
  return (
    <footer className="bg-gray-800 md:fixed bottom-0 z-10 w-full">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center ">
        <p>©Sounds-Easy Team 2023</p>
        <div className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a className="px-4" href="https://github.com/eljayman/sounds-easy">
            <img
              src="https://user-images.githubusercontent.com/113566829/223079664-ccaca5b6-af72-4371-a1e3-59f2f7f2b08d.png"
              alt="github logo"
              width="40"
            />
          </a>
          <a
            className="px-4"
            href="https://www.linkedin.com/in/leland-c-johnson/"
          >
            <img src={linkedInIcon} alt="LinkedIn Icon" width="35" />
          </a>
        </div>
      </div>
    </footer>
  );
}
