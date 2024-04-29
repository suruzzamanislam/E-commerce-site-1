import { IoSearch } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { useContext } from 'react';
import { AllContext } from '../../../../AllProviders/AllProvider';

const MobileNav = () => {
  const { isOpen, setOpen } = useContext(AllContext);
  const handleToggle = () => {
    setOpen(!isOpen);
  };

  const links = (
    <>
      <li className="mt-6">
        <NavLink onClick={handleToggle} to="/">
          HOME
        </NavLink>
      </li>
      <li className="">
        <NavLink onClick={handleToggle} to="/shop">
          SHOP
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleToggle} to="/blog">
          BLOG
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleToggle} to="/about">
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleToggle} to="/contact">
          CONTACT
        </NavLink>
      </li>
    </>
  );
  return (
    <div
      className={`py-2 md:hidden text-white md:py-5 px-3 md:px-10 lg:px-16  fixed left-0 top-16 bg-white border-t-2 z-10 w-full h-[92vh] ${
        isOpen ? 'mobile_menu_down' : 'mobile_menu_up'
      }`}
    >
      <div className="relative">
        <input
          className="w-full mt-3 py-2 px-3 rounded-md border border-gray-400 drop-shadow-md text-black placeholder:italic focus:outline-none"
          type="text"
          name=""
          id=""
          placeholder="Search Products"
        />
        <IoSearch className="absolute right-3 text-xl text-black bottom-3"></IoSearch>
      </div>
      <ul className="text-black space-y-4 text-xl font-medium">{links}</ul>
      <div className="text-black border-t-2 absolute bottom-0 left-0 w-full py-2 px-2">
        <div>
          <label htmlFor="lan" className="text-gray-700 font-medium">
            Language
          </label>
          <select
            className="border-4 border-gray-300 px-2 ml-2 text-gray-700 cursor-pointer focus:outline-none"
            name=""
            id="lan"
          >
            <option value="United Kingdom | English">
              United Kingdom | English
            </option>
            <option value="German">German</option>
            <option value="French">French</option>
            <option value="United States | English">
              United States | English
            </option>
          </select>
        </div>
        <div className="mt-3">
          <label htmlFor="lan" className="text-gray-700 font-medium">
            Currency
          </label>
          <select
            className="border-4 border-gray-300 px-2 ml-2 text-gray-700 cursor-pointer focus:outline-none"
            name=""
            id="lan"
          >
            <option value="$ USD">$ USD</option>
            <option value="$ GBP">$ GBP</option>
            <option value="$ EURO">$ EURO</option>
          </select>
        </div>
        <div className="flex mt-3 gap-x-7 cursor-pointer">
          <FaFacebookF></FaFacebookF>
          <FaInstagram></FaInstagram>
          <FaPinterestP></FaPinterestP>
          <FaTwitter></FaTwitter>
          <FaYoutube></FaYoutube>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
