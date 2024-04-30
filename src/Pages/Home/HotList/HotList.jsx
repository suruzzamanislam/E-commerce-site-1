import './HotList.css';
const HotList = () => {
  return (
    <div className="mt-10 md:mt-24 mb-5 md:mb-16 px-3 md:px-10 lg:px-16">
      <div className="flex flex-col lg:flex-row w-full gap-y-4 lg:gap-y-0 lg:gap-x-6">
        <div className="div1 lg:w-1/2 h-[40vh] lg:h-[80vh] relative">
          <div className="absolute bottom-9 left-8">
            <p className="text-xl">HOT LIST</p>
            <p className="text-3xl my-2 font-medium">
              <span className="font-bold">WOMEN</span> COLLECTIOON
            </p>
            <button className="btn text-lg">SHOP NOW</button>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col-reverse lg:flex-col gap-y-6">
          <div className="div2 relative w-full">
            <div className="absolute bottom-9 left-8">
              <p className="text-xl">HOT LIST</p>
              <p className="text-3xl my-2 font-medium">
                <span className="font-bold">MEN</span> COLLECTIOON
              </p>
              <button className="btn text-lg">SHOP NOW</button>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-y-6 md:gap-y-0 md:gap-x-6">
            <div className="div3 relative w-full h-[36vh] mt-1 bg-gradient-to-r from-purple-500 to-pink-500">
              <div className="absolute bottom-9 left-8">
                <p className="text-xl">HOT LIST</p>
                <p className="text-2xl lg:text-[2vw] my-2 font-medium">
                  <span className="font-bold">KIDS</span> COLLECTIOON
                </p>
                <button className="btn text-lg">SHOP NOW</button>
              </div>
            </div>
            <div className="div3 relative w-full h-[36vh] mt-1 bg-gradient-to-r from-cyan-500 to-blue-500">
              <div className="absolute bottom-9 left-8">
                <p className="text-2xl lg:text-[2vw] my-2 font-medium">
                  <span className="font-bold">E-GIFT </span> CARDS
                </p>
                <p className="text-sm">
                  Surprise someone with the gift they <br /> really want.
                </p>
                <button className="btn text-lg">SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotList;
