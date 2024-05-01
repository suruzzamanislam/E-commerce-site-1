import { useContext } from 'react';
import { BsXCircle } from 'react-icons/bs';

import { AllContext } from '../../../../AllProviders/AllProvider';

const UserBag = () => {
  const { openRegisterBag, setOpenRegisterBag, setOpenUserBag } =
    useContext(AllContext);
  const openUser = () => {
    setOpenUserBag(false);
    setOpenRegisterBag(true);
  };
  return (
    <div
      className={`bg-gray-300 z-50 fixed top-0   w-3/4 md:w-2/4 lg:w-2/6 h-full transition-all duration-500 ${
        openRegisterBag ? '-right-full' : 'right-0'
      }`}
    >
      <div className="">
        <p className="bg-white text-xl px-4 py-5 md:py-5 font-medium">
          CREATE AN ACCOUNT
        </p>
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
            placeholder="Email address *"
            type="email"
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
          <p>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
        </div>
        <div className="w-4/5 mx-auto mt-3">
          <button className="w-full  text-center py-3 bg-gray-700 mt-2 hover:bg-gray-800 transition-all duration-200 cursor-pointer text-white">
            REGISTER
          </button>
        </div>

        <p className="text-center mt-5 text-gray-700">
          All ready have an account?{' '}
          <span
            onClick={openUser}
            className="underline cursor-pointer text-black"
          >
            login
          </span>
        </p>
      </div>

      <div
        onClick={() => setOpenRegisterBag(!openRegisterBag)}
        id="bag_move_btn"
        className="bg-gray-400 absolute -left-12 top-16 lg:top-9 text-2xl flex w-12 h-9 pr-1 items-center text-white justify-end cursor-pointer transition-all duration-100  "
      >
        <BsXCircle className="hover:animate-spin"></BsXCircle>
      </div>
    </div>
  );
};

export default UserBag;
