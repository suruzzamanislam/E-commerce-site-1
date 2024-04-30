import './Offer.css';
import Timer from './Timer';
const Offer = () => {
  return (
    <div className="px-3 md:px-10 lg:px-16 py-6 mb-10">
      <div id="t-box" className="w-full h-[40vh] lg:h-[80vh] relative">
        <div className="text-start absolute top-20 lg:top-48 left-5">
          <p className="text-red-600 summer pl-14 relative">DEAL OF THE WEEK</p>
          <p className="text-3xl lg:text-7xl my-1 md:my-3  font-bold">
            SPRING COLLECTION
          </p>

          <button className="btn md:mt-5">SHOP NOW</button>
          <div>
            <Timer duration={10 * 24 * 60 * 60 * 1000}></Timer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
