import { TbLockOpen } from 'react-icons/tb';
import { FaHeadset } from 'react-icons/fa6';
import { LuShieldCheck } from 'react-icons/lu';

const Services = () => {
  return (
    <div className="py-14 px-3 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row gap-y-8 justify-between items-center">
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
  );
};

export default Services;
