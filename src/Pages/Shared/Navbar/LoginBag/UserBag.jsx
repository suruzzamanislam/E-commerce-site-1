import { useContext } from 'react';
import { BsXCircle } from 'react-icons/bs';

import { AllContext } from '../../../../AllProviders/AllProvider';

const UserBag = () => {
  const { openUserBag, setOpenUserBag, setOpenRegisterBag, openRegisterBag } =
    useContext(AllContext);
  const openRegister = () => {
    setOpenRegisterBag(!openRegisterBag);
    setOpenUserBag(false);
    setOpenUserBag(true);
  };
  return (
    <div
      className={`bg-gray-300 z-50 fixed top-0   w-3/4 md:w-2/4 lg:w-2/6 h-full transition-all duration-500 ${
        openUserBag ? '-right-full' : 'right-0'
      }`}
    >
      <div className="border-b border-gray-500 flex justify-between items-center px-4 py-5">
        <p className="bg-gray-300  text-xl  md:py-5 font-medium">LOG IN</p>
        <div onClick={() => setOpenUserBag(!openUserBag)}>
          <BsXCircle className="hover:animate-spin text-2xl cursor-pointer"></BsXCircle>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center gap-y-5 justify-center mt-12">
          <input
            className="w-4/5 py-3 px-2 placeholder:italic placeholder:text-black bg-transparent border border-gray-600"
            placeholder="Username or email address *"
            type="text"
            name=""
            id=""
          />
          <input
            className="w-4/5 py-3 px-2 placeholder:italic placeholder:text-black bg-transparent border border-gray-600"
            placeholder="Password *"
            type="password"
            name=""
            id=""
          />
        </div>
        <div className="flex w-4/5 mx-auto mt-4 justify-between">
          <div className="flex items-center gap-x-2">
            <input type="checkbox" name="" id="tik" />
            <label htmlFor="tik">Remember me</label>
          </div>
          <p className="underline cursor-pointer">Last password?</p>
        </div>
        <div className="w-4/5 mx-auto mt-3">
          <button className="w-full  text-center py-3 bg-gray-700 mt-2 hover:bg-gray-800 transition-all duration-200 cursor-pointer text-white">
            LOG IN
          </button>
        </div>

        <p className="text-center mt-5 text-gray-700">
          No account yet?{' '}
          <span
            onClick={openRegister}
            className="underline cursor-pointer text-black"
          >
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserBag;
