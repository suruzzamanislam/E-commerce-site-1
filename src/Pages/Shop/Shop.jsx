import { NavLink } from 'react-router-dom';
import './Shop.css';
const Shop = () => {
  return (
    <div>
      <div>
        {/* banner */}
        <div className="s-banner w-full h-[40vh] md:h-[50vh]">
          <div className="px-3 flex flex-col justify-center h-full md:px-10 lg:px-16">
            <h1 className=" text-4xl md:text-7xl text-[#EEEEEE] s-title">
              JACKETS & COATS
            </h1>
            <ul className=" flex flex-wrap text-[vw] mt-3  gap-x-4">
              <li>ALL</li>
              <li>COMPANY</li>
              <li>
                <NavLink>FASHION</NavLink>
              </li>
              <li>STYLE</li>
              <li>TRENDS</li>
              <li>BEAUTY</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
