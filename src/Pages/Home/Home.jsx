import MobileNav from '../Shared/Navbar/MobileNav/MobileNav';
import CartBag from '../Shared/Navbar/CartBag/CartBag';
import Banner from './Banner/Banner';
import HotList from './HotList/HotList';
import StartIng from './StartIng/StartIng';
import Services from './Services/Services';
import Galleray from './Gallery/Galleray';
import Offer from './Offer/Offer';

const Home = () => {
  return (
    <div>
      {/* slider */}
      <Banner></Banner>
      {/* hot list */}
      <HotList></HotList>
      {/* offer */}
      <Offer></Offer>
      {/* starting section */}
      <StartIng></StartIng>
      {/* galleray */}
      <Galleray></Galleray>
      {/* services */}
      <Services></Services>
      {/* Mobile Nav */}
      <MobileNav></MobileNav>
      {/* Cart Bag */}
      <CartBag></CartBag>
    </div>
  );
};

export default Home;
