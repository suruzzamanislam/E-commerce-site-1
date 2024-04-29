import bannerImg1 from '../../../assets/img/slideshow-character1.png';
import bannerImg2 from '../../../assets/img/slideshow-character2.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './Banner.css';

// import required modules
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

const Banner = () => {
  return (
    <div>
      <Swiper
        effect="fade"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper_item h-[50vh] md:h-[92vh] flex items-center justify-between px-5 md:px-20 w-full">
            <div className="text-start z-10 absolute lg:static">
              <p className="text-red-600 summer pl-14 relative">MEW TREND</p>
              <p className="text-5xl md:text-7xl my-3  font-bold">
                SUMMER SALE STYLISH <br /> WOMENS
              </p>

              <button className="btn mt-5">DISCOVER MORE</button>
            </div>
            <div className=" w-52 md:w-[345px] right-0 absolute  place-self-end">
              <img className="w-full" src={bannerImg1} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_item w-full h-[50vh] md:h-[92vh] flex items-center justify-between px-5 md:px-20">
            <div className="text-start z-10 absolute lg:static">
              <p className="text-red-600 summer pl-14 relative">SUMMER 2024</p>
              <p className="text-5xl md:text-7xl my-3  font-bold">
                HELLO NEW SEASON
              </p>
              <p className="text-xl md:text-2xl">
                LIMITED TIME OFFER - UP TO 60% OFF & FREE SHIPING
              </p>
              <button className="btn mt-5">DISCOVER MORE</button>
            </div>
            <div className=" w-52 md:w-[345px] right-0 absolute mr-8  place-self-end">
              <img className="w-full" src={bannerImg2} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
