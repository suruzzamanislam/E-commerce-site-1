import img1 from '../../assets/img/product_1.jpg';
import img2 from '../../assets/img/product_1-1.jpg';
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
import img15 from '../../assets/img/product_8.jpg';
import img16 from '../../assets/img/product_8-1.jpg';
import { IoFilter } from 'react-icons/io5';

import { useContext, useState } from 'react';
import './Shop.css';
import Sbanner from '../../assets/img/blog-1.jpg';
import {
  FaChevronUp,
  FaGreaterThan,
  FaLessThan,
  FaRegHeart,
} from 'react-icons/fa6';
import { FaChevronDown } from 'react-icons/fa6';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import required modules
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
import { AllContext } from '../../AllProviders/AllProvider';
import { BsXCircle } from 'react-icons/bs';

const Shop = () => {
  const [pShow, setPShow] = useState(false);
  const [cShow, setCShow] = useState(false);
  const [sShow, setSShow] = useState(false);
  const [bShow, setBShow] = useState(false);
  const [isRedOutline, setRedOutline] = useState(false);
  const [isYellowOutline, setYellowOutline] = useState(false);
  const [isPerpleOutline, setPerpleOutline] = useState(true);
  const [isBlueOutline, setBlueOutline] = useState(false);
  const [isOrangeOutline, setOrangeOutline] = useState(false);
  const [isBlackOutline, setBlackOutline] = useState(false);
  const [isGrayOutline, setGrayOutline] = useState(false);

  const { openFilterBag, setOpenFilterBag } = useContext(AllContext);

  return (
    <div className="px-3 md:px-10 lg:px-16 my-5 md:my-20">
      <div className=" flex justify-between gap-x-7">
        {/* fillter */}
        <div className="md:w-1/4 hidden md:block relative">
          {/* product categories */}
          <div>
            <div
              onClick={() => setPShow(!pShow)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="font-medium text-lg">PRODUCTS CATEGORIES</p>
              {pShow ? (
                <FaChevronDown></FaChevronDown>
              ) : (
                <FaChevronUp></FaChevronUp>
              )}
            </div>
            <div
              className={`text-sm mt-3 space-y-1 ${pShow ? 'f-up' : 'f-down'}`}
            >
              <p className="cursor-pointer">Dresses</p>
              <p className="cursor-pointer">Shorts</p>
              <p className="cursor-pointer">Sweatshirts</p>
              <p className="cursor-pointer">Swimwear</p>
              <p className="cursor-pointer">Jackets</p>
              <p className="cursor-pointer">T-Shirts & Tops</p>
              <p className="cursor-pointer">Jeans</p>
              <p className="cursor-pointer">Trousers</p>
              <p className="cursor-pointer">Men</p>
              <p className="cursor-pointer">Jumpers & Cardigans</p>
            </div>
          </div>
          {/* color categories */}
          <div className={`mt-5 transition-all duration-200  w-full  bg-white`}>
            <div
              onClick={() => setCShow(!cShow)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="font-medium text-lg">COLOR</p>
              {cShow ? (
                <FaChevronDown></FaChevronDown>
              ) : (
                <FaChevronUp></FaChevronUp>
              )}
            </div>
            <div
              className={`text-sm space-y-1 flex mt-3  items-center gap-x-5 gap-y-2 flex-wrap ${
                cShow ? 'f-up' : 'f-down'
              }`}
            >
              <div
                onClick={() => setRedOutline(!isRedOutline)}
                className={`w-5 h-5 bg-red-600 rounded-full mt-1 cursor-pointer ${
                  isRedOutline ? 'c-outline' : 'c-not-outline'
                }`}
              ></div>
              <div
                onClick={() => setYellowOutline(!isYellowOutline)}
                className={`w-5 h-5 bg-yellow-600 rounded-full mt-1 cursor-pointer ${
                  isYellowOutline ? 'c-outline' : 'c-not-outline'
                }`}
              ></div>
              <div
                onClick={() => setPerpleOutline(!isPerpleOutline)}
                className={`w-5 h-5 bg-purple-600 rounded-full mt-1 cursor-pointer ${
                  isPerpleOutline ? 'c-outline' : 'c-not-outline'
                }`}
              ></div>
              <div
                onClick={() => setBlueOutline(!isBlueOutline)}
                className={`w-5 h-5 bg-blue-600 rounded-full mt-1 cursor-pointer ${
                  isBlueOutline ? 'c-outline' : 'c-not-outline'
                }`}
              ></div>
              <div
                onClick={() => setOrangeOutline(!isOrangeOutline)}
                className={`w-5 h-5 bg-orange-600 rounded-full mt-1 cursor-pointer ${
                  isOrangeOutline ? 'c-outline' : 'c-not-outline'
                }`}
              ></div>
              <div
                onClick={() => setBlackOutline(!isBlackOutline)}
                className={`w-5 h-5 bg-black rounded-full mt-1 cursor-pointer ${
                  isBlackOutline ? 'c-outline' : 'c-not-outline'
                }`}
              ></div>
              <div
                onClick={() => setGrayOutline(!isGrayOutline)}
                className={`w-5 h-5 bg-gray-600 rounded-full mt-1 cursor-pointer ${
                  isGrayOutline ? 'c-outline' : 'c-not-outline'
                }`}
              ></div>
            </div>
          </div>
          {/* sizes categories */}
          <div className={`mt-5`}>
            <div
              onClick={() => setSShow(!sShow)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="font-medium text-lg">SIZES</p>
              {sShow ? (
                <FaChevronDown></FaChevronDown>
              ) : (
                <FaChevronUp></FaChevronUp>
              )}
            </div>
            <div
              className={`text-xl  flex  items-center gap-x-7 gap-y-3  flex-wrap mt-3 ${
                sShow ? 'f-up' : 'f-down'
              }`}
            >
              <p className="border-2 px-4 py-1 cursor-pointer hover:bg-gray-300 transition-all duration-200">
                XS
              </p>
              <p className="border-2 px-4 py-1 cursor-pointer hover:bg-gray-300 transition-all duration-200">
                S
              </p>
              <p className="border-2 px-4 py-1 cursor-pointer hover:bg-gray-300 transition-all duration-200">
                M
              </p>
              <p className="border-2 px-4 py-1 cursor-pointer hover:bg-gray-300 transition-all duration-200">
                L
              </p>
              <p className="border-2 px-4 py-1 cursor-pointer hover:bg-gray-300 transition-all duration-200">
                XL
              </p>
              <p className="border-2 px-4 py-1 cursor-pointer hover:bg-gray-300 transition-all duration-200">
                XXL
              </p>
            </div>
          </div>
          {/* brand categories */}
          <div className={`mt-5`}>
            <div
              onClick={() => setBShow(!bShow)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="font-medium text-lg">BRANDS</p>
              {bShow ? (
                <FaChevronDown></FaChevronDown>
              ) : (
                <FaChevronUp></FaChevronUp>
              )}
            </div>
            <div
              className={`text-xl  flex-wrap mt-3 ${bShow ? 'f-up' : 'f-down'}`}
            >
              <input
                type="text"
                className="border text-base border-gray-600 w-full px-3 py-2 focus:outline-none"
                placeholder="SEARCH"
                name=""
                id=""
              />
              <div className="flex justify-between items-center">
                <div className="mt-3">
                  <label htmlFor="adidas">
                    <input
                      className="mr-2"
                      type="checkbox"
                      name=""
                      id="adidas"
                    />
                    Adidas
                  </label>
                </div>
                <p>2</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="mt-3">
                  <label htmlFor="Balmain">
                    <input
                      className="mr-2"
                      type="checkbox"
                      name=""
                      id="Balmain"
                    />
                    Balmain
                  </label>
                </div>
                <p>7</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="mt-3">
                  <label htmlFor="Kenzo">
                    <input
                      className="mr-2"
                      type="checkbox"
                      name=""
                      id="Kenzo"
                    />
                    Kenzo
                  </label>
                </div>
                <p>10</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="mt-3">
                  <label htmlFor="Zara">
                    <input className="mr-2" type="checkbox" name="" id="Zara" />
                    Zara
                  </label>
                </div>
                <p>48</p>
              </div>
            </div>
          </div>
        </div>
        {/* products */}
        <div className="md:w-3/4 w-full">
          {/* shop banner */}
          <div className="flex w-full">
            <div className="w-4/12">
              <Swiper
                effect="fade"
                loop={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay, EffectFade]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="swiper_item h-[40vh] md:h-[50vh] flex md:items-center px-2  md:px-5 ">
                    <div className="text-start">
                      <p className="md:text-3xl   md:my-3">
                        WOMENS <span className="font-medium">ACCESSORIES</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        Accessories are the best way to update your look. Add
                        atitle edge with new styles and new colors, or go for
                        timeless pieces.
                      </p>

                      <button className="btn mt-2">DISCOVER MORE</button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper_item h-[40vh] md:h-[50vh] flex md:items-center px-2  md:px-5 ">
                    <div className="text-start">
                      <p className="md:text-3xl md:my-3">
                        CHOOSE{' '}
                        <span className="font-medium">YOUR BEST SUITS</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        Add atitle edge with new styles and new colors, or go
                        for timeless pieces.Accessories are the best way to
                        update your look.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="w-8/12 h-[40vh] md:h-[50vh]">
              <img
                className="w-full h-full object-cover object-top"
                src={Sbanner}
                alt=""
              />
            </div>
          </div>
          <div className="my-6 flex justify-between items-center">
            <ul className="md:flex hidden items-center gap-x-3">
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>
              <span>/</span>
              <li>
                <NavLink to="/shop">THE SHOP</NavLink>
              </li>
            </ul>
            <button
              onClick={() => setOpenFilterBag(!openFilterBag)}
              className=" md:hidden btn flex items-center gap-x-2"
            >
              <IoFilter></IoFilter> FILTER
            </button>
            <div>
              <select className="cursor-pointer" name="" id="">
                <option value="DEFAULT SORTING">DEFAULT SORTING</option>
                <option value="FEATURED">FEATURED</option>
                <option value="BEST SELLING">BEST SELLING</option>
                <option value="PRICE TO HIGH">PRICE TO HIGH</option>
                <option value="PRICE TO LOW">PRICE TO LOW</option>
              </select>
            </div>
          </div>
          {/* card */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6">
            {/* card Four */}
            <div className=" box cursor-pointer">
              <div className="relative h-[40vh] md:h-[45vh] lg:h-[55vh]">
                <img className="img1 w-full h-full" src={img7} alt="" />
                <img className="img2 w-full h-full" src={img8} alt="" />
                <button className="add_cart absolute bg-white w-44 lg:w-2/3 left-6 lg:left-16 py-2 hover:bg-gray-500 hover:text-white font-medium">
                  {' '}
                  ADD TO CART
                </button>
              </div>
              <div className="py-3">
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 font-medium">Dresses</p>
                  <FaRegHeart className="hover:text-red-500 cursor-pointer"></FaRegHeart>
                </div>
                <p>Cableknit Shawl</p>
                <p className="text-red-500">
                  {' '}
                  <span className="line-through mr-4 text-black">$129</span>$99
                </p>
              </div>
            </div>
            {/* card Eight */}
            <div className=" box cursor-pointer">
              <div className="relative h-[40vh] md:h-[45vh] lg:h-[55vh]">
                <img className="img1 w-full h-full" src={img15} alt="" />
                <img className="img2 w-full h-full" src={img16} alt="" />
                <button className="add_cart absolute bg-white w-44 lg:w-2/3 left-6 lg:left-16 py-2 hover:bg-gray-500 hover:text-white font-medium">
                  {' '}
                  ADD TO CART
                </button>
              </div>
              <div className="py-3">
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 font-medium">Dresses</p>
                  <FaRegHeart className="hover:text-red-500 cursor-pointer"></FaRegHeart>
                </div>
                <p>Zessi Dresses</p>
                <p>$33</p>
              </div>
            </div>
            {/* card Three */}
            <div className=" box cursor-pointer">
              <div className="relative h-[40vh] md:h-[45vh] lg:h-[55vh]">
                <img className="img1 w-full h-full" src={img5} alt="" />
                <img className="img2 w-full h-full" src={img6} alt="" />
                <button className="add_cart absolute bg-white w-44 lg:w-2/3 left-6 lg:left-16 py-2 hover:bg-gray-500 hover:text-white font-medium">
                  {' '}
                  ADD TO CART
                </button>
              </div>
              <div className="py-3">
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 font-medium">Dresses</p>
                  <FaRegHeart className="hover:text-red-500 cursor-pointer"></FaRegHeart>
                </div>
                <p>Kirby T-Shirt</p>
                <p>$17</p>
              </div>
            </div>
            {/* card Six */}
            <div className=" box cursor-pointer">
              <div className="relative h-[40vh] md:h-[45vh] lg:h-[55vh]">
                <img className="img1 w-full h-full" src={img11} alt="" />
                <img className="img2 w-full h-full" src={img12} alt="" />
                <button className="add_cart absolute bg-white w-44 lg:w-2/3 left-6 lg:left-16 py-2 hover:bg-gray-500 hover:text-white font-medium">
                  {' '}
                  ADD TO CART
                </button>
              </div>
              <div className="py-3">
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 font-medium">Dresses</p>
                  <FaRegHeart className="hover:text-red-500 cursor-pointer"></FaRegHeart>
                </div>
                <p>Shirt In Botanical Cheetah Print</p>
                <p>$62</p>
              </div>
            </div>

            {/* card One */}
            <div className=" box cursor-pointer">
              <div className="relative h-[40vh] md:h-[45vh] lg:h-[55vh]">
                <img
                  className="img1 object-cover w-full h-full"
                  src={img1}
                  alt=""
                />
                <img className="img2 w-full h-full" src={img2} alt="" />
                <button className="add_cart absolute bg-white w-44 lg:w-2/3 left-6 lg:left-16 py-2 hover:bg-gray-500 hover:text-white font-medium">
                  {' '}
                  ADD TO CART
                </button>
              </div>
              <div className="py-3">
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 font-medium">Dresses</p>
                  <FaRegHeart className="hover:text-red-500 cursor-pointer"></FaRegHeart>
                </div>
                <p>Cropped Faux Leather Jacket</p>
                <p>$29</p>
                <p>8k+ reviews</p>
              </div>
            </div>
            {/* card Two */}
            <div className=" box cursor-pointer">
              <div className="relative h-[40vh] md:h-[45vh] lg:h-[55vh]">
                <img className="img1 w-full h-full" src={img3} alt="" />
                <img className="img2 w-full h-full" src={img4} alt="" />
                <button className="add_cart absolute bg-white w-44 lg:w-2/3 left-6 lg:left-16 py-2 hover:bg-gray-500 hover:text-white font-medium">
                  {' '}
                  ADD TO CART
                </button>
              </div>
              <div className="py-3">
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 font-medium">Dresses</p>
                  <FaRegHeart className="hover:text-red-500 cursor-pointer"></FaRegHeart>
                </div>
                <p>Calvin Shorts</p>
                <p>$69</p>
              </div>
            </div>
            {/* card Seven */}
            <div className=" box cursor-pointer">
              <div className="relative h-[40vh] md:h-[45vh] lg:h-[55vh]">
                <img className="img1 w-full h-full" src={img13} alt="" />
                <img className="img2 w-full h-full" src={img14} alt="" />
                <button className="add_cart absolute bg-white w-44 lg:w-2/3 left-6 lg:left-16 py-2 hover:bg-gray-500 hover:text-white font-medium">
                  {' '}
                  ADD TO CART
                </button>
              </div>
              <div className="py-3">
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 font-medium">Dresses</p>
                  <FaRegHeart className="hover:text-red-500 cursor-pointer"></FaRegHeart>
                </div>
                <p>Cotton Jersey T-Shirt</p>
                <p>$22</p>
              </div>
            </div>
            {/* card Five */}
            <div className=" box cursor-pointer">
              <div className="relative h-[40vh] md:h-[45vh] lg:h-[55vh]">
                <img className="img1 w-full h-full" src={img9} alt="" />
                <img className="img2 w-full h-full" src={img10} alt="" />
                <button className="add_cart absolute bg-white w-44 lg:w-2/3 left-6 lg:left-16 py-2 hover:bg-gray-500 hover:text-white font-medium">
                  {' '}
                  ADD TO CART
                </button>
              </div>
              <div className="py-3">
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 font-medium">Dresses</p>
                  <FaRegHeart className="hover:text-red-500 cursor-pointer"></FaRegHeart>
                </div>
                <p>Colorful Jacket</p>
                <p>$29</p>
              </div>
            </div>
          </div>
          {/* tabs */}
          <div className="flex justify-between items-center mt-5">
            <p className="flex cursor-pointer items-center gap-x-2">
              <FaLessThan className="text-sm"></FaLessThan> PREV
            </p>
            <div className="flex items-center gap-x-8 text-gray-600">
              <p className="cursor-pointer">1</p>
              <p className="cursor-pointer">2</p>
              <p className="cursor-pointer">3</p>
              <p className="cursor-pointer">4</p>
            </div>
            <p className="flex cursor-pointer items-center gap-x-2">
              NEXT <FaGreaterThan className="text-sm"></FaGreaterThan>
            </p>
          </div>
        </div>
      </div>
      {/* filter bag */}
      <div
        className={`scroll-cart bg-gray-300 z-50 fixed top-0   w-3/4 md:w-2/4 lg:w-2/6 h-full overflow-y-auto  transition-all duration-500 ${
          openFilterBag ? '-right-full' : 'right-0'
        }`}
      >
        <div className="relative">
          <div className="border-b border-gray-500 flex justify-between items-center px-4 py-5">
            <p className="bg-gray-300  text-xl  md:py-5 font-medium">
              FILTER YOUR CHOICE
            </p>
            <div onClick={() => setOpenFilterBag(!openFilterBag)}>
              <BsXCircle className="hover:animate-spin text-2xl cursor-pointer"></BsXCircle>
            </div>
          </div>

          <div className="px-2 relative">
            {/* product categories */}
            <div>
              <div
                onClick={() => setPShow(!pShow)}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="font-medium text-lg">PRODUCTS CATEGORIES</p>
                {pShow ? (
                  <FaChevronDown></FaChevronDown>
                ) : (
                  <FaChevronUp></FaChevronUp>
                )}
              </div>
              <div
                className={`text-sm mt-3 space-y-1 ${
                  pShow ? 'f-up' : 'f-down'
                }`}
              >
                <p className="cursor-pointer">Dresses</p>
                <p className="cursor-pointer">Shorts</p>
                <p className="cursor-pointer">Sweatshirts</p>
                <p className="cursor-pointer">Swimwear</p>
                <p className="cursor-pointer">Jackets</p>
                <p className="cursor-pointer">T-Shirts & Tops</p>
                <p className="cursor-pointer">Jeans</p>
                <p className="cursor-pointer">Trousers</p>
                <p className="cursor-pointer">Men</p>
                <p className="cursor-pointer">Jumpers & Cardigans</p>
              </div>
            </div>
            {/* color categories */}
            <div className={`mt-5 transition-all duration-200  w-full  `}>
              <div
                onClick={() => setCShow(!cShow)}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="font-medium text-lg">COLOR</p>
                {cShow ? (
                  <FaChevronDown></FaChevronDown>
                ) : (
                  <FaChevronUp></FaChevronUp>
                )}
              </div>
              <div
                className={`text-sm space-y-1 flex mt-3  items-center gap-x-5 gap-y-2 flex-wrap ${
                  cShow ? 'f-up' : 'f-down'
                }`}
              >
                <div
                  onClick={() => setRedOutline(!isRedOutline)}
                  className={`w-5 h-5 bg-red-600 rounded-full mt-1 cursor-pointer ${
                    isRedOutline ? 'c-outline' : 'c-not-outline'
                  }`}
                ></div>
                <div
                  onClick={() => setYellowOutline(!isYellowOutline)}
                  className={`w-5 h-5 bg-yellow-600 rounded-full mt-1 cursor-pointer ${
                    isYellowOutline ? 'c-outline' : 'c-not-outline'
                  }`}
                ></div>
                <div
                  onClick={() => setPerpleOutline(!isPerpleOutline)}
                  className={`w-5 h-5 bg-purple-600 rounded-full mt-1 cursor-pointer ${
                    isPerpleOutline ? 'c-outline' : 'c-not-outline'
                  }`}
                ></div>
                <div
                  onClick={() => setBlueOutline(!isBlueOutline)}
                  className={`w-5 h-5 bg-blue-600 rounded-full mt-1 cursor-pointer ${
                    isBlueOutline ? 'c-outline' : 'c-not-outline'
                  }`}
                ></div>
                <div
                  onClick={() => setOrangeOutline(!isOrangeOutline)}
                  className={`w-5 h-5 bg-orange-600 rounded-full mt-1 cursor-pointer ${
                    isOrangeOutline ? 'c-outline' : 'c-not-outline'
                  }`}
                ></div>
                <div
                  onClick={() => setBlackOutline(!isBlackOutline)}
                  className={`w-5 h-5 bg-black rounded-full mt-1 cursor-pointer ${
                    isBlackOutline ? 'c-outline' : 'c-not-outline'
                  }`}
                ></div>
                <div
                  onClick={() => setGrayOutline(!isGrayOutline)}
                  className={`w-5 h-5 bg-gray-600 rounded-full mt-1 cursor-pointer ${
                    isGrayOutline ? 'c-outline' : 'c-not-outline'
                  }`}
                ></div>
              </div>
            </div>
            {/* sizes categories */}
            <div className={`mt-5`}>
              <div
                onClick={() => setSShow(!sShow)}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="font-medium text-lg">SIZES</p>
                {sShow ? (
                  <FaChevronDown></FaChevronDown>
                ) : (
                  <FaChevronUp></FaChevronUp>
                )}
              </div>
              <div
                className={`text-xl  flex  items-center gap-x-7 gap-y-3  flex-wrap mt-3 ${
                  sShow ? 'f-up' : 'f-down'
                }`}
              >
                <p className="border-2 px-4 py-1 cursor-pointer hover:bg-gray-300 transition-all duration-200">
                  XS
                </p>
                <p className="border-2 px-4 py-1 cursor-pointer hover:bg-gray-300 transition-all duration-200">
                  S
                </p>
                <p className="border-2 px-4 py-1 cursor-pointer hover:bg-gray-300 transition-all duration-200">
                  M
                </p>
                <p className="border-2 px-4 py-1 cursor-pointer hover:bg-gray-300 transition-all duration-200">
                  L
                </p>
                <p className="border-2 px-4 py-1 cursor-pointer hover:bg-gray-300 transition-all duration-200">
                  XL
                </p>
                <p className="border-2 px-4 py-1 cursor-pointer hover:bg-gray-300 transition-all duration-200">
                  XXL
                </p>
              </div>
            </div>
            {/* brand categories */}
            <div className={`mt-5`}>
              <div
                onClick={() => setBShow(!bShow)}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="font-medium text-lg">BRANDS</p>
                {bShow ? (
                  <FaChevronDown></FaChevronDown>
                ) : (
                  <FaChevronUp></FaChevronUp>
                )}
              </div>
              <div
                className={`text-xl  flex-wrap mt-3 ${
                  bShow ? 'f-up' : 'f-down'
                }`}
              >
                <input
                  type="text"
                  className="border bg-gray-300 text-base border-gray-600 w-full px-3 py-2 focus:outline-none placeholder:text-black"
                  placeholder="SEARCH"
                  name=""
                  id=""
                />
                <div className="flex justify-between items-center">
                  <div className="mt-3">
                    <label htmlFor="adidas">
                      <input
                        className="mr-2"
                        type="checkbox"
                        name=""
                        id="adidas"
                      />
                      Adidas
                    </label>
                  </div>
                  <p>2</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="mt-3">
                    <label htmlFor="Balmain">
                      <input
                        className="mr-2"
                        type="checkbox"
                        name=""
                        id="Balmain"
                      />
                      Balmain
                    </label>
                  </div>
                  <p>7</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="mt-3">
                    <label htmlFor="Kenzo">
                      <input
                        className="mr-2"
                        type="checkbox"
                        name=""
                        id="Kenzo"
                      />
                      Kenzo
                    </label>
                  </div>
                  <p>10</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="mt-3">
                    <label htmlFor="Zara">
                      <input
                        className="mr-2"
                        type="checkbox"
                        name=""
                        id="Zara"
                      />
                      Zara
                    </label>
                  </div>
                  <p>48</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
