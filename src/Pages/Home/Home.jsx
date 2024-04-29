import MobileNav from '../Shared/Navbar/MobileNav/MobileNav';
import CartBag from '../Shared/Navbar/CartBag/CartBag';
import Banner from './Banner/Banner';
import Banner2 from './Banner2/Banner2';

const Home = () => {
  return (
    <div>
      {/* slider */}
      <Banner></Banner>
      {/* slider down */}
      <Banner2></Banner2>
      {/* Mobile Nav */}
      <MobileNav></MobileNav>
      {/* Cart Bag */}
      <CartBag></CartBag>
    </div>
  );
};

export default Home;
