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
import CartBag from './CartBag/CartBag';
import UserBag from './UserBag/UserBag';
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {
  const {
    isOpen,
    setOpen,
    openBag,
    setOpenBag,
    search,
    setSearch,
    openUserBag,
    setOpenUserBag,
  } = useContext(AllContext);

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
      className={`py-2 sticky z-40 top-0 w-full md:static bg-white md:py-5 px-3 md:px-10 lg:px-16 `}
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
            <div className="cursor-pointer text-2xl relative">
              <IoSearch
                onClick={() => setSearch(!search)}
                className="relative  search"
              ></IoSearch>
              <input
                className={`absolute duration-300 transition-all origin-right border border-black focus:outline-none -top-1 right-7  rounded-lg pl-2 text-sm py-2 placeholder:text-sm ${
                  search ? 'scale-x-0' : 'scale-x-100'
                }`}
                placeholder="Search Products"
                type="text"
                name=""
                id="search_input"
              />
            </div>
            <div className="cursor-pointer">
              <FaRegUser
                onClick={() => setOpenUserBag(!openUserBag)}
              ></FaRegUser>
            </div>
          </div>
          <NavLink to="/wishlist">
            <div className="cursor-pointer">
              <FaRegHeart className="text-xl"></FaRegHeart>
            </div>
          </NavLink>
          <div onClick={cartBtn} className="relative cursor-pointer">
            <HiOutlineShoppingBag></HiOutlineShoppingBag>
            <div className="text-xs bg-yellow-500 absolute w-4 h-4 rounded-full flex justify-center items-center -bottom-1 -right-1 ">
              4
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Nav */}
      <MobileNav></MobileNav>
      {/* Cart Bag */}
      <CartBag></CartBag>
      {/* UserBag */}
      <UserBag></UserBag>
    </nav>
  );
};

export default Navbar;
