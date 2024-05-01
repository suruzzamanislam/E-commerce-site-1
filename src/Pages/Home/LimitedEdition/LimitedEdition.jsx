// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay } from 'swiper/modules';
import { FaRegHeart } from 'react-icons/fa';

import './LimitedEdditon.css';

import img1 from '../../../assets/img/product-0-1.jpg';
import img2 from '../../../assets/img/product-1-1.jpg';
import img3 from '../../../assets/img/product-2-1.jpg';
import img4 from '../../../assets/img/product-3-1.jpg';

const LimitedEdition = () => {
  return (
    <div className="px-3 md:px-10 lg:px-16 my-20">
      <h1 className="text-2xl lg:text-3xl text-center font-medium mb-11">
        LIMITED <span className="font-bold">EDITION</span>
      </h1>
      <Swiper
        slidesPerView={2}
        spaceBetween={5}
        loop={true}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          '@0.75': {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          '@1.00': {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* slide One */}
          <div className=" box cursor-pointer">
            <div className="relative ">
              <img className="img1 w-full h-full" src={img1} alt="" />
              <button className="add_cart absolute bg-white w-44 lg:w-2/3 left-6 lg:left-16 py-2 hover:bg-gray-500 hover:text-white font-medium">
                {' '}
                ADD TO CART
              </button>
            </div>
            <div className="py-3 text-start">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 font-medium">Dresses</p>
                <FaRegHeart className="hover:text-red-500 cursor-pointer"></FaRegHeart>
              </div>
              <p>Hub Accent Mirror</p>
              <p>$29</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* slide Two */}
          <div className=" box cursor-pointer">
            <div className="relative ">
              <img className="img1 w-full h-full" src={img2} alt="" />
              <button className="add_cart absolute bg-white w-44 lg:w-2/3 left-6 lg:left-16 py-2 hover:bg-gray-500 hover:text-white font-medium">
                {' '}
                ADD TO CART
              </button>
            </div>
            <div className="py-3 text-start">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 font-medium">Dresses</p>
                <FaRegHeart className="hover:text-red-500 cursor-pointer"></FaRegHeart>
              </div>
              <p>Black Hat</p>
              <p>$12</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* slide Three */}
          <div className=" box cursor-pointer">
            <div className="relative ">
              <img className="img1 w-full h-full" src={img3} alt="" />
              <button className="add_cart absolute bg-white w-44 lg:w-2/3 left-6 lg:left-16 py-2 hover:bg-gray-500 hover:text-white font-medium">
                {' '}
                ADD TO CART
              </button>
            </div>
            <div className="py-3 text-start">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 font-medium">Dresses</p>
                <FaRegHeart className="hover:text-red-500 cursor-pointer"></FaRegHeart>
              </div>
              <p>Hub Bug</p>
              <p>$15</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* card One */}
          <div className=" box cursor-pointer">
            <div className="relative ">
              <img className="img1 w-full h-full" src={img4} alt="" />
              <button className="add_cart absolute bg-white w-44 lg:w-2/3 left-6 lg:left-16 py-2 hover:bg-gray-500 hover:text-white font-medium">
                {' '}
                ADD TO CART
              </button>
            </div>
            <div className="py-3 text-start">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 font-medium">Dresses</p>
                <FaRegHeart className="hover:text-red-500 cursor-pointer"></FaRegHeart>
              </div>
              <p>Balt</p>
              <p>$17</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* slide One */}
          <div className=" box cursor-pointer">
            <div className="relative ">
              <img className="img1 w-full h-full" src={img1} alt="" />
              <button className="add_cart absolute bg-white w-44 lg:w-2/3 left-6 lg:left-16 py-2 hover:bg-gray-500 hover:text-white font-medium">
                {' '}
                ADD TO CART
              </button>
            </div>
            <div className="py-3 text-start">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 font-medium">Dresses</p>
                <FaRegHeart className="hover:text-red-500 cursor-pointer"></FaRegHeart>
              </div>
              <p>Hub Accent Mirror</p>
              <p>$29</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* slide Three */}
          <div className=" box cursor-pointer">
            <div className="relative ">
              <img className="img1 w-full h-full" src={img3} alt="" />
              <button className="add_cart absolute bg-white w-44 lg:w-2/3 left-6 lg:left-16 py-2 hover:bg-gray-500 hover:text-white font-medium">
                {' '}
                ADD TO CART
              </button>
            </div>
            <div className="py-3 text-start">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 font-medium">Dresses</p>
                <FaRegHeart className="hover:text-red-500 cursor-pointer"></FaRegHeart>
              </div>
              <p>Bag</p>
              <p>$17</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LimitedEdition;
