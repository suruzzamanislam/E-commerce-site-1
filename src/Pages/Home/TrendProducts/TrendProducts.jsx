import img1 from '../../../assets/img/product_1.jpg';
import img2 from '../../../assets/img/product_1-1.jpg';
import img3 from '../../../assets/img/product_2.jpg';
import img4 from '../../../assets/img/product_2-1.jpg';
import img5 from '../../../assets/img/product_3.jpg';
import img6 from '../../../assets/img/product_3-1.jpg';
import img7 from '../../../assets/img/product_4.jpg';
import img8 from '../../../assets/img/product_4-1.jpg';
import img9 from '../../../assets/img/product_5.jpg';
import img10 from '../../../assets/img/product_5-1.jpg';
import img11 from '../../../assets/img/product_6.jpg';
import img12 from '../../../assets/img/product_6-1.jpg';
import img13 from '../../../assets/img/product_7.jpg';
import img14 from '../../../assets/img/product_7-1.jpg';
import img15 from '../../../assets/img/product_8.jpg';
import img16 from '../../../assets/img/product_8-1.jpg';
import { FaRegHeart } from 'react-icons/fa';

import './TrendProducts.css';
const TrendProducts = () => {
  return (
    <div className="px-3 md:px-10 lg:px-16 my-10 md:my-20">
      <h1 className="text-3xl md:text-4xl text-center font-medium mb-10">
        OUR TRENDY <span className="font-bold">PRODUCTS</span>
      </h1>
      {/* tabs */}
      <div className="space-x-10 flex flex-wrap justify-center mb-10">
        <button className=" text-xl btn-active relative"> ALL</button>
        <button className="t-btn  text-xl"> NEW ARRIVALS</button>
        <button className="t-btn  text-xl"> BEST SELLER</button>
        <button className="t-btn  text-xl"> TOP RATED</button>
      </div>
      {/* all card */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-4">
        {/* card One */}
        <div className=" box cursor-pointer">
          <div className="relative h-[40vh] md:h-[45vh] lg:h-[55vh]">
            <img className="img1 w-full h-full" src={img1} alt="" />
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
      </div>

      <div className="text-center mt-3">
        <button className="btn">DISCOVER MORE</button>
      </div>
    </div>
  );
};

export default TrendProducts;
