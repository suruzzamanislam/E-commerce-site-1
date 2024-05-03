import { TbLockOpen } from 'react-icons/tb';
import about1 from '../../assets/img/about-1.jpg';
import aboutBanner from '../../assets/img/about-2 (1).jpg';
import { FaHeadset } from 'react-icons/fa6';
import { LuShieldCheck } from 'react-icons/lu';
const About = () => {
  return (
    <div>
      <h1 className="px-5 mt-6 md:px-22 lg:px-60 text-3xl font-medium mb-9">
        ABOUT UOMO
      </h1>
      <div className="mb-4 w-full">
        <img className="w-full" src={aboutBanner} alt="" />
      </div>
      <div className="px-5 md:px-22 lg:px-60 ">
        <p className="text-xl font-medium">OUR STORY</p>
        <p className="my-4 leading-7">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p className="text-sm my-4 leading-6 text-gray-700">
          Saw wherein fruitful good days image them, midst, waters upon, saw.
          Seas lights seasons. Fourth hath rule Evening Creepeth own lesser
          years itself so seed fifth for grass evening fourth shall you are unto
          that. Had. Female replenish for yielding so saw all one to yielding
          grass you all air sea it, open waters subdue, hath. Brought second
          Made. Be. Under male male, firmament, beast had light after fifth
          forth darkness thing hath sixth rule night multiply him life give they
          are great.
        </p>
        <div className="flex flex-col md:flex-row gap-y-4 justify-between items-center gap-x-20 mt-10">
          <div>
            <p>Our Mission</p>
            <p>
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
          <div>
            <p>Our Vision</p>
            <p>
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-y-2 items-center gap-x-4 mt-10">
          <div className="md:w-1/2">
            <img data-aos="fade-right" className="w-full" src={about1} alt="" />
          </div>
          <div className="md:w-1/2">
            <p className="text-xl font-medium mb-3">The Company</p>
            <p className="leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              sapien dignissim a elementum. Sociis metus, hendrerit mauris id
              in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis
              sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla
              massa est viverra interdum. Praesent auctor nulla morbi non
              posuere mattis. Arcu eu id maecenas cras.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-8 justify-between items-center my-16">
          <div className="flex flex-col justify-center items-center">
            <TbLockOpen className="text-7xl"></TbLockOpen>
            <p className="font-medium py-2">FAST AND FREE DELIVERY</p>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <FaHeadset className="text-7xl"></FaHeadset>
            <p className="font-medium py-2">24/7 CUSTOMER SUPPORT</p>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <LuShieldCheck className="text-7xl"></LuShieldCheck>
            <p className="font-medium py-2">MONEY BACK GUARANTEE</p>
            <p>We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
