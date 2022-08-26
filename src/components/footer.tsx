import Link from 'next/link';
import Image from 'next/image';

import { AppConfig } from '@/utils/AppConfig';
import { FaAppleAlt, FaCarrot } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="py-8 border-t border-gray-300">
      <div className="flex items-center mx-auto max-w-screen-m justify-center">
        <div className="px-5">
          {/* <Image
            src="/assets/images/fnb-logo.png"
            width={100}
            height={100}
          /> */}
          <FaAppleAlt size={25}/>
        </div>
        <ul>
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
        </ul>
        <div className="px-5">
          <Image
            src="/assets/images/fnb-logo.png"
            width={100}
            height={100}
          />
        </div>
        <ul>
          <li>
            <Link href="/donate">
              <a className="border-none text-black hover:text-green-100">Donate</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="border-none text-black hover:text-green-100">Home</a>
            </Link>
          </li>
        </ul>
        <div className="px-5">
          {/* <Image
            src="/assets/images/fnb-logo.png"
            width={100}
            height={100}
          /> */}
          <FaCarrot size={25}/>
        </div>
      </div>
      <div className="py-4 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
        <span role="img" aria-label="Love">♥</span>{' '}
        by <a href="https://creativedesignsguru.com">SJ Food Not Bombs</a>
      </div>
    </div>
  );
};

export default Footer;
