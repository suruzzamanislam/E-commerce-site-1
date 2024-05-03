import './StartIng.css';
const StartIng = () => {
  return (
    <div className="px-3 md:px-10 lg:px-16 mb-10">
      <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 md:gap-x-5">
        <div
          data-aos="flip-left"
          className="md:w-1/2 h-[40vh] lg:h-[50vh] relative bg-gradient-to-r bg-red-600 text-white"
          id="div1"
        >
          <div className="absolute bottom-9 left-7">
            <p className="text-xl font-medium">STARTING AT $19</p>
            <p className="text-2xl font-bold my-2">Womens T-Shirts</p>
            <button className="btn">SHOP NOW</button>
          </div>
        </div>
        <div
          data-aos="flip-right"
          className="md:w-1/2 h-[40vh] lg:h-[50vh] relative"
          id="div2"
        >
          <div className="absolute bottom-9 left-7">
            <p className="text-xl font-medium">STARTING AT $39</p>
            <p className="text-2xl font-bold my-2">Mens Sportswear</p>
            <button className="btn">SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartIng;
