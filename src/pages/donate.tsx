import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { FaPaypal } from 'react-icons/fa';

const About = () => (
  <Main meta={<Meta title="Donate" description="" />}>
    <div className="bg-white text-green-100 text-4xl px-10 font-timeburner">
      Donate!
    </div>
    <div className="relative">
      <div className="text-black my-20 p-3 font-manrope_extra_light md:mx-20 mx-5 border-l-8 border-orange-200">
        For the past 37 years Food Not Bombs has been feeding people in hundreds of communities all over the
        world absolutely free of charge and without restriction. Food Not Bombs has no paid staff and is an
        all volunteer movement. Your contribution goes directly towards ending hunger, poverty, and war. Food
        Not Bombs is offering you the opportunity to support this important movement by sending in just ONE DOLLAR!
        Imagine if everyone donated even more. It is a great time to stop underestimating the power of one. Give
        it a try and pass on the word. For just one dollar you can help build a world based on peace and justice.
        And of course feel free to contribute more if you can.
      </div>
      <div className="flex bg-blue-1100 text-white my-20 p-3 lg:rounded-r-3xl lg:w-1/2 w-full font-manrope_extra_light md:text-right md:text-3xl">
        <div className="flex px-5 lg:ml-auto my-5">
          <div className="flex items-center px-5">
            <FaPaypal />
          </div>
          <div>
            Contact : sanjosefnb@protonmail.com
          </div>
        </div>
      </div>
    </div>
  </Main>
);

export default About;
