import Calendar from '@/components/calendar';
import { Main } from '@/templates/Main';

import Image from 'next/image';

const Index = () => {
  return (
    <Main meta={undefined}>
      <div className="bg-red-100 flex md:px-20 px-10">
        <div className="text-white md:w-3/4 sm:w-full font-timeburner py-10">
          <div className="lg:text-5xl text-3xl">
            TO RECOVER AND SHARE
          </div>
          <div className="md:px-10 px-5">
            Free Vegan or vegetarian food with the public without restriction to protest, war, poverty, and the destruction of the environment.
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center md:w-1/2">
          <div className="h-64 w-[30rem] relative">
            <Image
              src="/assets/images/main-image.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-right">
        <div className="bg-blue-1100 text-white my-20 ml-auto p-3 md:rounded-l-3xl md:w-1/2 w-full font-manrope_extra_light">
          <div>
            Find us every Sunday at 2 - 4pm
          </div>
          <div>
            St. James Park in downtown San Jose!
          </div>
        </div>
      </div>
      <Calendar />
    </Main>
  );
};

export default Index;
