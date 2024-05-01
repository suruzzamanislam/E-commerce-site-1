import { FaRegHeart } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import img3 from '../../assets/img/product_2.jpg';
import img4 from '../../assets/img/product_2-1.jpg';
import img5 from '../../assets/img/product_3.jpg';
import img6 from '../../assets/img/product_3-1.jpg';
import img7 from '../../assets/img/product_4.jpg';
import img8 from '../../assets/img/product_4-1.jpg';
import img9 from '../../assets/img/product_5.jpg';
import img10 from '../../assets/img/product_5-1.jpg';
import img11 from '../../assets/img/product_6.jpg';
import img12 from '../../assets/img/product_6-1.jpg';
import img13 from '../../assets/img/product_7.jpg';
import img14 from '../../assets/img/product_7-1.jpg';
import { HiMiniXMark } from 'react-icons/hi2';

const WishList = () => {
  return (
    <div className="px-3 md:px-10 lg:px-16 flex flex-col md:flex-row gap-x-4 mb-10">
      <div className="md:w-1/5 lg:sticky top-0  md:h-screen  md:pt-10">
        <h1 className="text-4xl font-semibold">WISHLIST</h1>
        <ul className="space-y-6 text-xl mt-3  md:mt-16">
          <li>DASHBOARD</li>
          <li>ORDERS</li>
          <li>ADDRESSS</li>
          <li>ACOUNT DETAILS</li>
          <li>
            <NavLink>WISHLIST</NavLink>
          </li>
          <li>LOG OUT</li>
        </ul>
      </div>
      <div className="md:w-4/5 grid grid-cols-2 lg:grid-cols-3 gap-5 mt-3 md:mt-10">
        {/* card Two */}
        <div className=" box cursor-pointer">
          <div className="relative h-[40vh] md:h-[45vh] lg:h-[55vh]">
            <img className="img1 w-full h-full" src={img3} alt="" />
            <img className="img2 w-full h-full" src={img4} alt="" />
            <button className="absolute  w-10 h-10 flex justify-center items-center text-xl top-0 z-30 bg-gray-400  hover:bg-gray-500 hover:text-white font-medium">
              {' '}
              <HiMiniXMark className="cursor-pointer"></HiMiniXMark>
            </button>
          </div>
          <div className="py-3">
            <div className="flex justify-between items-center">
              <p className="text-gray-500 font-medium">Dresses</p>
              <FaRegHeart className="text-red-500 cursor-pointer"></FaRegHeart>
            </div>
            <p>Calvin Shorts</p>
            <p>$69</p>
          </div>
        </div>
        {/* card Three */}
        <div className=" box cursor-pointer">
          <div className="relative h-[40vh] md:h-[45vh] lg:h-[55vh]">
            <img className="img1 w-full h-full" src={img5} alt="" />
            <img className="img2 w-full h-full" src={img6} alt="" />
            <button className="absolute  w-10 h-10 flex justify-center items-center text-xl top-0 z-30 bg-gray-400  hover:bg-gray-500 hover:text-white font-medium">
              {' '}
              <HiMiniXMark className="cursor-pointer"></HiMiniXMark>
            </button>
          </div>
          <div className="py-3">
            <div className="flex justify-between items-center">
              <p className="text-gray-500 font-medium">Dresses</p>
              <FaRegHeart className="text-red-500 cursor-pointer"></FaRegHeart>
            </div>
            <p>Kirby T-Shirt</p>
            <p>$17</p>
          </div>
        </div>
        {/* card Four */}
        <div className=" box cursor-pointer">
          <div className="relative h-[40vh] md:h-[45vh] lg:h-[55vh]">
            <img className="img1 w-full h-full" src={img7} alt="" />
            <img className="img2 w-full h-full" src={img8} alt="" />
            <button className="absolute  w-10 h-10 flex justify-center items-center text-xl top-0 z-30 bg-gray-400  hover:bg-gray-500 hover:text-white font-medium">
              {' '}
              <HiMiniXMark className="cursor-pointer"></HiMiniXMark>
            </button>
          </div>
          <div className="py-3">
            <div className="flex justify-between items-center">
              <p className="text-gray-500 font-medium">Dresses</p>
              <FaRegHeart className="text-red-500 cursor-pointer"></FaRegHeart>
            </div>
            <p>Cableknit Shawl</p>
            <p className="text-red-500">
              {' '}
              <span className="line-through mr-4 text-black">$129</span>$99
            </p>
          </div>
        </div>
        {/* card Five */}
        <div className=" box cursor-pointer">
          <div className="relative h-[40vh] md:h-[45vh] lg:h-[55vh]">
            <img className="img1 w-full h-full" src={img9} alt="" />
            <img className="img2 w-full h-full" src={img10} alt="" />
            <button className="absolute  w-10 h-10 flex justify-center items-center text-xl top-0 z-30 bg-gray-400  hover:bg-gray-500 hover:text-white font-medium">
              {' '}
              <HiMiniXMark className="cursor-pointer"></HiMiniXMark>
            </button>
          </div>
          <div className="py-3">
            <div className="flex justify-between items-center">
              <p className="text-gray-500 font-medium">Dresses</p>
              <FaRegHeart className="text-red-500 cursor-pointer"></FaRegHeart>
            </div>
            <p>Colorful Jacket</p>
            <p>$29</p>
          </div>
        </div>
        {/* card Six */}
        <div className=" box cursor-pointer">
          <div className="relative h-[40vh] md:h-[45vh] lg:h-[55vh]">
            <img className="img1 w-full h-full" src={img11} alt="" />
            <img className="img2 w-full h-full" src={img12} alt="" />
            <button className="absolute  w-10 h-10 flex justify-center items-center text-xl top-0 z-30 bg-gray-400  hover:bg-gray-500 hover:text-white font-medium">
              {' '}
              <HiMiniXMark className="cursor-pointer"></HiMiniXMark>
            </button>
          </div>
          <div className="py-3">
            <div className="flex justify-between items-center">
              <p className="text-gray-500 font-medium">Dresses</p>
              <FaRegHeart className="text-red-500 cursor-pointer"></FaRegHeart>
            </div>
            <p>Shirt In Botanical Cheetah Print</p>
            <p>$62</p>
          </div>
        </div>
        {/* card Seven */}
        <div className=" box cursor-pointer">
          <div className="relative h-[40vh] md:h-[45vh] lg:h-[55vh]">
            <img className="img1 w-full h-full" src={img13} alt="" />
            <img className="img2 w-full h-full" src={img14} alt="" />
            <button className="absolute  w-10 h-10 flex justify-center items-center text-xl top-0 z-30 bg-gray-400  hover:bg-gray-500 hover:text-white font-medium">
              {' '}
              <HiMiniXMark className="cursor-pointer"></HiMiniXMark>
            </button>
          </div>
          <div className="py-3">
            <div className="flex justify-between items-center">
              <p className="text-gray-500 font-medium">Dresses</p>
              <FaRegHeart className="text-red-500 cursor-pointer"></FaRegHeart>
            </div>
            <p>Cotton Jersey T-Shirt</p>
            <p>$22</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
