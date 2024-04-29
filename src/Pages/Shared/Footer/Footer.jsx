import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import logo from '../../../assets/img/logo.png';
import payment from '../../../assets/img/payment-options.png';
const Footer = () => {
  return (
    <div className="px-3 md:px-10 lg:px-16 py-10 bg-[#e4e4e4]">
      <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 md:gap-x-3 ">
        <div>
          <img className="mb-10" src={logo} alt="" />
          <address className="mb-3">
            1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
          </address>
          <p>
            {' '}
            sajukaligonj21@gmail.com <br /> +1 246-345-0695
          </p>
          <div className="flex mt-4 gap-x-7 cursor-pointer">
            <FaFacebookF></FaFacebookF>
            <FaInstagram></FaInstagram>
            <FaPinterestP></FaPinterestP>
            <FaTwitter></FaTwitter>
            <FaYoutube></FaYoutube>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-8 md:gap-y-0 md:grid-cols-4">
          <div>
            <h1 className="text-xl font-medium">COMPANY</h1>
            <ul className="space-y-3 mt-3">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#"></a>Affiliates
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-medium">SHOP</h1>
            <ul className="space-y-3 mt-3">
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
              <li>
                <a href="#"></a>Men
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Shop All</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-medium">HELP</h1>
            <ul className="space-y-3 mt-3">
              <li>
                <a href="#">Customer Service</a>
              </li>
              <li>
                <a href="#">My Accoutn</a>
              </li>
              <li>
                <a href="#"></a>Find a Store
              </li>
              <li>
                <a href="#">Legal & Privacy</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Gift Card</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-medium">SUBCRIBE</h1>
            <p className="mt-3">
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <div className="mt-3 rounded-2xl bg-white flex py-1 px-3 mb-6">
              <input
                className="w-full border-none focus:outline-none rounded-2xl"
                type="text"
              />
              <button className="rounded-2xl bg-gray-300 px-4 py-1 font-medium hover:bg-gray-400 transition-all duration-200 cursor-pointer hover:text-white">
                JOIN
              </button>
            </div>
            <div>
              <p>Secure payments</p>
              <img src={payment} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
