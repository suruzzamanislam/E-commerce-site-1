import MobileNav from '../Shared/Navbar/MobileNav/MobileNav';
import CartBag from '../Shared/Navbar/CartBag/CartBag';
import Banner from './Banner/Banner';

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      {/* Mobile Nav */}
      <MobileNav></MobileNav>
      {/* Cart Bag */}
      <CartBag></CartBag>
    </div>
  );
};

export default Home;
