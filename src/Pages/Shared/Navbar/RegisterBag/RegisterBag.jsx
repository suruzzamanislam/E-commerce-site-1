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
      <div className="border-b border-gray-500 flex justify-between items-center px-4 py-5">
        <p className="bg-gray-300  text-xl  md:py-5 font-medium">
          CREATE AN ACCOUNT
        </p>
        <div onClick={() => setOpenRegisterBag(!openRegisterBag)}>
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
    </div>
  );
};

export default UserBag;
