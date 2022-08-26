import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Volunteer = () => (
  <Main meta={<Meta title="Volunteer" description="" />}>
    <div className="bg-white text-green-100 text-center text-4xl font-timeburner">
      Volunteer!
    </div>
    <div className="my-20 font-timeburner">
      <div className="text-left text-5xl px-5">
        Resources
      </div>
      <div className="bg-red-100 text-white p-3 md:rounded-r-3xl md:w-3/4 w-full">
        <div className="px-10">
          <ul className="list-disc list-outside">
            <li>
              Contribute
              <ul className="list-inside">
                <li>
                  We need supplies in donations of cases of water, disposable utensils, disposable plates,
                  to-go boxes, cans of food, masks, etc! Any items you're unsure about, feel free to contact us!
                  Additionally, check out our log on our spreadsheet for what you're preparing and bringing
                  <a href="https://www.facebook.com/groups/145979125439185" target="_blank"> here!</a>
                </li>
              </ul>
            </li>
            <li>
              Cook
              <ul className="list-inside">
                <li>
                  We prepare all of our provided food and would love your help in offering vegan food or baked treats!
                  If you'd like to contribute, please prepare vegan food and bring them to the meet site.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="my-20 font-timeburner">
      <div className="text-right text-5xl px-5">
        Time
      </div>
      <div className="bg-blue-1100 text-white ml-auto p-3 md:rounded-l-3xl md:w-3/4 w-full">
        <div className="px-10">
          <ul className="list-disc list-outside">
            <li>
              Service
              <ul className="list-inside">
                <li>
                  Our services are currently held in St. James Park next to the fountain.
                  We don't have a dedicated facilty to distribute supplies and may need assistance setting up,
                  distributing food, and packing up at the end of our distribution. Please consider joining us
                  as it is on a drop-in volunteering.
                </li>
              </ul>
            </li>
            <li>
              Drive
              <ul className="list-inside">
                <li>
                  We are in need of drivers or automobiles that you are willing to donate.
                  We will be using them to transport our setup and supplies to and from the location.
                  Please contact us in our contact form or email if you're interested!
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="text-black my-20 p-3 font-manrope_extra_light mx-20 text-center">
      Additional ideas could be found on our global site <a href="http://foodnotbombs.net/new_site/volunteer.php" target="_blank">here!</a>
    </div>
  </Main>
);

export default Volunteer;
