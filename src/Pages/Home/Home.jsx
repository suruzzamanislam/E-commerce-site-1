import Banner from './Banner/Banner';
import HotList from './HotList/HotList';
import StartIng from './StartIng/StartIng';
import Services from './Services/Services';
import Galleray from './Gallery/Galleray';
import Offer from './Offer/Offer';
import TrendProducts from './TrendProducts/TrendProducts';
import LimitedEdition from './LimitedEdition/LimitedEdition';

const Home = () => {
  return (
    <div className="">
      {/* slider */}
      <Banner></Banner>
      {/* hot list */}
      <HotList></HotList>
      {/* trend prodects */}
      <TrendProducts></TrendProducts>
      {/* offer */}
      <Offer></Offer>
      {/* starting section */}
      <StartIng></StartIng>
      {/* limited edition */}
      <LimitedEdition></LimitedEdition>
      {/* galleray */}
      <Galleray></Galleray>
      {/* services */}
      <Services></Services>
    </div>
  );
};

export default Home;
