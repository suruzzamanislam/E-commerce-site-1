import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AllContext = createContext(null);
const AllProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [openBag, setOpenBag] = useState(true);
  const [openUserBag, setOpenUserBag] = useState(true);
  const [openRegisterBag, setOpenRegisterBag] = useState(true);
  const [openFilterBag, setOpenFilterBag] = useState(true);
  const [cartHidden, setCartHidden] = useState(false);
  const [cartTwoHidden, setCartTwoHidden] = useState(false);
  const [cartThreeHidden, setCartThreeHidden] = useState(false);
  const [cartFourHidden, setCartFourHidden] = useState(false);
  const [search, setSearch] = useState(true);

  const providerInfo = {
    isOpen,
    setOpen,
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
    search,
    setSearch,
    openUserBag,
    setOpenUserBag,
    openRegisterBag,
    setOpenRegisterBag,
    openFilterBag,
    setOpenFilterBag,
  };
  return (
    <AllContext.Provider value={providerInfo}>{children}</AllContext.Provider>
  );
};

export default AllProvider;
AllProvider.propTypes = {
  children: PropTypes.node,
};
