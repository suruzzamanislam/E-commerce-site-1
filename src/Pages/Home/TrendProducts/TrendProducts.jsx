import { useState } from 'react';
import All from './All';
import NewArrivals from './NewArrivals';
import BestSeller from './BestSeller';
import './TrendProducts.css';
const TrendProducts = () => {
  const [all, setAll] = useState(true);
  const [newArrivals, setNewArrivals] = useState(false);
  const [bestSeller, setBestSeller] = useState(false);
  const [topRated, setTopRated] = useState(false);
  const showAll = () => {
    setAll(true);
    setNewArrivals(false);
    setBestSeller(false);
    setTopRated(false);
  };
  const showNewArrivals = () => {
    setAll(false);
    setNewArrivals(true);
    setBestSeller(false);
    setTopRated(false);
  };
  const showBestSeller = () => {
    setAll(false);
    setNewArrivals(false);
    setBestSeller(true);
    setTopRated(false);
  };
  const showTopRated = () => {
    setAll(false);
    setNewArrivals(false);
    setBestSeller(false);
    setTopRated(true);
  };
  return (
    <div className="px-3 md:px-10 lg:px-16 my-10 md:my-20">
      <h1 className="text-3xl md:text-4xl text-center font-medium mb-10">
        OUR TRENDY <span className="font-bold">PRODUCTS</span>
      </h1>
      {/* tabs */}
      <div className="space-x-10 flex flex-wrap justify-center mb-10">
        <button
          onClick={showAll}
          className={`text-xl ${all ? 'btn-active' : 't-btn'} relative`}
        >
          {' '}
          ALL
        </button>
        <button
          onClick={showNewArrivals}
          className={`text-xl ${newArrivals ? 'btn-active' : 't-btn'} relative`}
        >
          {' '}
          NEW ARRIVALS
        </button>
        <button
          onClick={showBestSeller}
          className={`text-xl ${bestSeller ? 'btn-active' : 't-btn'} relative`}
        >
          {' '}
          BEST SELLER
        </button>
        <button
          onClick={showTopRated}
          className={`text-xl ${topRated ? 'btn-active' : 't-btn'} relative`}
        >
          {' '}
          TOP RATED
        </button>
      </div>
      {/* all card */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-4">
        {/* all */}
        {all && <All></All>}
        {newArrivals && <NewArrivals></NewArrivals>}
        {bestSeller && <BestSeller></BestSeller>}
        {topRated && <All></All>}
      </div>

      <div className="text-center mt-3">
        <button className="btn">DISCOVER MORE</button>
      </div>
    </div>
  );
};

export default TrendProducts;
