import { NavLink } from 'react-router-dom';
import logo from '../../../assets/img/logo.png';
import { IoSearch } from 'react-icons/io5';

import { FaRegUser } from 'react-icons/fa6';

import { FaRegHeart } from 'react-icons/fa';

import { HiOutlineShoppingBag } from 'react-icons/hi2';
import Hamburger from 'hamburger-react';
import './styleNav.css';
import { useContext } from 'react';
import { AllContext } from '../../../AllProviders/AllProvider';

const Navbar = () => {
  const { isOpen, setOpen, openBag, setOpenBag } = useContext(AllContext);

  const cartBtn = () => {
    setOpenBag(!openBag);
    setOpen(false);
  };

  const links = (
    <>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/shop">SHOP</NavLink>
      </li>
      <li>
        <NavLink to="/blog">BLOG</NavLink>
      </li>
      <li>
        <NavLink to="/about">ABOUT</NavLink>
      </li>
      <li>
        <NavLink to="/contact">CONTACT</NavLink>
      </li>
    </>
  );

  return (
    <nav
      className={`py-2 sticky z-10 top-0 w-full md:static bg-white md:py-5 px-3 md:px-10 lg:px-16 `}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-x-24 md:gap-x-14">
          {/* mobile menu icon */}
          <div onClick={() => setOpenBag(true)} className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen}></Hamburger>
          </div>
          <div>
            <img className="cursor-pointer" src={logo} alt="" />
          </div>
          <ul className="hidden md:flex items-center text-lg gap-x-5 ">
            {links}
          </ul>
        </div>
        <div className="flex items-center justify-center text-3xl gap-x-4 lg:gap-x-9">
          <div className="hidden md:flex text-xl items-center gap-x-6 ">
            <div className="cursor-pointer text-2xl">
              <IoSearch></IoSearch>
            </div>
            <div className="cursor-pointer">
              <FaRegUser></FaRegUser>
            </div>
            <div className="cursor-pointer">
              <FaRegHeart></FaRegHeart>
            </div>
          </div>
          <div onClick={cartBtn} className="relative cursor-pointer">
            <HiOutlineShoppingBag></HiOutlineShoppingBag>
            <div className="text-xs bg-yellow-500 absolute w-4 h-4 rounded-full flex justify-center items-center -bottom-1 -right-1 ">
              4
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
