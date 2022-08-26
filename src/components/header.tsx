import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { AppConfig } from '@/utils/AppConfig';
import { FaFacebook, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Header = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex items-top">
          <Image
            src="/assets/images/fnb-logo.png"
            width={150}
            height={150}
          />
          <div className="w-full mt-5">
            <div className="flex flex-wrap justify-between items-center w-full border-b border-gray-600">
              <div className="flex items-center">
                <span className="font-semibold text-xl tracking-tight  font-timeburner_bold">
                  <Link href="/">
                    <a className="border-none text-black hover:text-gray-900 text-3xl">{AppConfig.title}</a>
                  </Link>
                </span>
              </div>
              <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 flex items-center mr-20">
                <ul className="flex flex-col mt-4 font-timeburner lg:flex-row lg:space-x-8 lg:mt-0 text-xl">
                  <li>
                    <Link href="/about">
                      <a className="border-none text-black hover:text-green-100">About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/volunteer">
                      <a className="border-none text-black hover:text-green-100">Volunteer</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/donate">
                      <a className="border-none text-black hover:text-green-100">Donate</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <button type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={handleClick}>
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                  <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </div>
            </div>
            <div className="flex flex-wrap justify-between items-center w-full font-manrope_light text-xl">
              <div className="ml-3">
                {AppConfig.description}
              </div>
              <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 flex items-center mr-10">
                <ul className="flex flex-col items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                    <Link href="https://www.facebook.com/groups/145979125439185">
                      <a target="_blank"><FaFacebook /></a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a target="_blank"><FaEnvelope /></a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/sanjosefoodnotbombs/?hl=en">
                      <a target="_blank"><FaInstagram /></a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div 
        className={`${
          active ? "" : "hidden"
        }   w-full flex justify-center border border-gray-700`}
        >
          <ul className="flex flex-col font-timeburner text-xl text-center">
            <li>
              <Link href="/about">
                <a className="border-none text-black hover:text-green-100">About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/volunteer">
                <a className="border-none text-black hover:text-green-100">Volunteer</a>
              </Link>
            </li>
            <li>
              <Link href="/donate">
                <a className="border-none text-black hover:text-green-100">Donate</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
