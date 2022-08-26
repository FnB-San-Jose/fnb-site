import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import Image from 'next/image';

const About = () => (
  <Main meta={<Meta title="About Us" description="" />}>
    <div className="bg-white text-green-100 text-4xl px-10 font-timeburner">
      About Us
    </div>
    <div className="relative">
      <div>
        <div className="flex flex-row">
          <div className="text-black my-20 p-3 md:w-1/2 sm:w-full font-manrope_extra_light md:mx-20 mx-5 border-l-8 border-orange-200">
            San Jose Food Not Bombs is a volunteer organization in San Jose serving free vegetarian meals
            or fresh produce to the hungry and at various political demonstrations and events. We believe
            that food should be a right not a privilege. The U.S. produces enough food to feed the starving
            countries in the world, but people still go hungry even within the U.S.
          </div>
        </div>
        <div className="md:hidden md:block flex justify-center items-center">
          <Image
            src="/assets/images/fnb-logo.png"
            width={150}
            height={150}
          />
        </div>
        <div className="flex justify-between">
          <div className="hidden md:flex justify-center items-center w-1/2">
            <Image
              src="/assets/images/fnb-logo.png"
              width={150}
              height={150}
            />
          </div>
          <div className="text-black my-20 p-3 md:w-1/2 sm:w-full font-manrope_extra_light md:mx-20 mx-5 border-r-8 border-orange-200">
            So many markets and restaurants throw away food everyday that could have gone to people that really need it.
            Anywhere from 10 to 50 thousand people die per day due to starvation alone, yet we still spend billions of
            dollars on weapons of mass destruction to kill people in poor countries around the world. As a protest we
            use mostly organic vegan food that might have been otherwise wasted or thrown away and prepare it for the
            hungry. We encourage you to join our group to feed hungry people and fight injustice.
          </div>
        </div>
        <div className="text-black my-20 p-3 font-manrope_extra_light mx-20 text-center">
          Our serves are currently every Sunday at the St. James Park succulent fountain along N. 2nd St., 2pm. Please join us!
        </div>
      </div>
      <div className="hidden lg:block transform origin-top-left -rotate-90 text-5xl text-green-100 absolute w-screen top-3/4" style={{ left: "95%" }}>Vegan • Leaderless • Justice</div>
    </div>
  </Main>
);

export default About;
