import { useContext, useState } from 'react';
import { BsXCircle } from 'react-icons/bs';
import { HiMiniXMark } from 'react-icons/hi2';

import { AllContext } from '../../../../AllProviders/AllProvider';
import cart1 from '../../../../assets/img/cart-item-1.jpg';
import cart2 from '../../../../assets/img/cart-item-2.jpg';
import cart3 from '../../../../assets/img/cart-item-3.jpg';

const CartBag = () => {
  const {
    openBag,
    setOpenBag,
    cartHidden,
    setCartHidden,
    cartTwoHidden,
    setCartTwoHidden,
    cartThreeHidden,
    setCartThreeHidden,
    cartFourHidden,
    setCartFourHidden,
  } = useContext(AllContext);
  const [cartOneCount, setCartOneCount] = useState(1);
  const [cartTwoCount, setCartTwoCount] = useState(3);
  const [cartThreeCount, setCartThreeCount] = useState(2);
  return (
    <div
      className={`bg-gray-300 z-10 fixed top-0   w-3/4 md:w-2/4 lg:w-2/6 h-full transition-all duration-500 ${
        openBag ? '-right-full' : 'right-0'
      }`}
    >
      <div className="">
        <p className="bg-white px-4 py-5 md:py-6 font-medium">
          SHOPPING BAG ( 1 )
        </p>
      </div>

      {/* cart */}
      <div id="scroll-cart" className="ml-4  my-14 h-[390px] overflow-auto">
        <div
          className={`flex justify-between border-b-2 pb-3 ${
            cartHidden && 'hidden_cart'
          }`}
        >
          <div className="flex gap-x-3 items-center">
            <div>
              <img src={cart1} alt="" />
            </div>
            <div>
              <p className="font-medium">Zessi Dresses</p>
              <p>Color: Gray</p>
              <p>Size: L</p>
              {/* count */}
              <div className="flex items-center gap-x-4">
                <button
                  onClick={() => setCartOneCount(cartOneCount - 1)}
                  className="text-3xl mb-1"
                >
                  -
                </button>
                <p>{cartOneCount}</p>
                <button onClick={() => setCartOneCount(cartOneCount + 1)}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-medium justify-between pr-3">
            <HiMiniXMark
              onClick={() => setCartHidden(true)}
              className="cursor-pointer"
            ></HiMiniXMark>
            <p className="">$86</p>
          </div>
        </div>
        <div
          className={`flex justify-between border-b-2 py-3 ${
            cartTwoHidden && 'hidden_cart'
          }`}
        >
          <div className="flex gap-x-3 items-center">
            <div>
              <img src={cart2} alt="" />
            </div>
            <div>
              <p className="font-medium">Kirby T-Shirt</p>
              <p>Color: Black</p>
              <p>Size: XS</p>
              {/* count */}
              <div className="flex items-center gap-x-4">
                <button
                  onClick={() => setCartTwoCount(cartTwoCount - 1)}
                  className="text-3xl mb-1"
                >
                  -
                </button>
                <p>{cartTwoCount}</p>
                <button onClick={() => setCartTwoCount(cartTwoCount + 1)}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-medium justify-between pr-3">
            <HiMiniXMark
              onClick={() => setCartTwoHidden(true)}
              className="cursor-pointer"
            ></HiMiniXMark>
            <p className="">$102</p>
          </div>
        </div>
        <div
          className={`flex justify-between border-b-2 py-3 ${
            cartThreeHidden && 'hidden_cart'
          }`}
        >
          <div className="flex gap-x-3 items-center">
            <div>
              <img src={cart3} alt="" />
            </div>
            <div>
              <p className="font-medium">Cableknit Shawl</p>
              <p>Color: Lightblue</p>
              <p>Size: M</p>
              {/* count */}
              <div className="flex items-center gap-x-4">
                <button
                  onClick={() => setCartThreeCount(cartThreeCount - 1)}
                  className="text-3xl mb-1"
                >
                  -
                </button>
                <p>{cartThreeCount}</p>
                <button onClick={() => setCartThreeCount(cartThreeCount + 1)}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-medium justify-between pr-3">
            <HiMiniXMark
              onClick={() => setCartThreeHidden(true)}
              className="cursor-pointer"
            ></HiMiniXMark>
            <p className="">$99</p>
          </div>
        </div>
        <div
          className={`flex justify-between  pt-3 ${
            cartFourHidden && 'hidden_cart'
          }`}
        >
          <div className="flex gap-x-3 items-center">
            <div>
              <img src={cart1} alt="" />
            </div>
            <div>
              <p className="font-medium">Zessi Dresses</p>
              <p>Color: Gray</p>
              <p>Size: L</p>
              {/* count */}
              <div className="flex items-center gap-x-4">
                <button
                  onClick={() => setCartOneCount(cartOneCount - 1)}
                  className="text-3xl mb-1"
                >
                  -
                </button>
                <p>{cartOneCount}</p>
                <button onClick={() => setCartOneCount(cartOneCount + 1)}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-medium justify-between pr-3">
            <HiMiniXMark
              onClick={() => setCartFourHidden(true)}
              className="cursor-pointer"
            ></HiMiniXMark>
            <p className="">$70</p>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-gray-700 py-4 absolute w-full bottom-0 left-0 px-4">
        <div className="flex font-medium justify-between items-center">
          <p>SUBTOTAL:</p>
          <p>$357.00</p>
        </div>
        <button className="w-full text-center py-3 bg-gray-400 mt-2 hover:bg-gray-500 transition-all duration-200 cursor-pointer">
          View Cart
        </button>
        <button className="w-full text-center py-3 bg-gray-600 mt-2 hover:bg-gray-700 transition-all duration-200 cursor-pointer text-white">
          Checkout
        </button>
      </div>

      <div
        onClick={() => setOpenBag(!openBag)}
        id="bag_move_btn"
        className="bg-gray-400 absolute -left-12 top-16 lg:top-6 text-2xl flex w-12 h-9 pr-1 items-center text-white justify-end cursor-pointer transition-all duration-100  "
      >
        <BsXCircle className="hover:animate-spin"></BsXCircle>
      </div>
    </div>
  );
};

export default CartBag;
