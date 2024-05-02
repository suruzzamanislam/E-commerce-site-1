import { useState } from 'react';
import './Shop.css';
import { FaChevronUp } from 'react-icons/fa6';
import { FaChevronDown } from 'react-icons/fa6';

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
  return (
    <div className="px-3 md:px-10 lg:px-16 my-20">
      <div className="">
        {/* fillter */}
        <div className="w-1/4 relative">
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
                  <label htmlFor="adidas">
                    <input
                      className="mr-2"
                      type="checkbox"
                      name=""
                      id="adidas"
                    />
                    Balmain
                  </label>
                </div>
                <p>7</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="mt-3">
                  <label htmlFor="adidas">
                    <input
                      className="mr-2"
                      type="checkbox"
                      name=""
                      id="adidas"
                    />
                    Kenzo
                  </label>
                </div>
                <p>10</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="mt-3">
                  <label htmlFor="adidas">
                    <input
                      className="mr-2"
                      type="checkbox"
                      name=""
                      id="adidas"
                    />
                    Zara
                  </label>
                </div>
                <p>48</p>
              </div>
            </div>
          </div>
        </div>
        {/* products */}
        <div className="w-3/4"></div>
      </div>
    </div>
  );
};

export default Shop;
