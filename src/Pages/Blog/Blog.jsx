import { NavLink } from 'react-router-dom';
import './Blog.css';
import blog1 from '../../assets/img/blog-1.jpg';
import blog2 from '../../assets/img/blog-2.jpg';
import blog3 from '../../assets/img/blog-3.jpg';
import { FaLessThan } from 'react-icons/fa6';
import { FaGreaterThan } from 'react-icons/fa6';

const Blog = () => {
  return (
    <div>
      <div className="banner_box relative bg-slate-500 w-full h-[40vh]">
        <div className="text-white absolute top-1/3  md:top-1/4 px-3 md:px-10 lg:px-16">
          <h1 className="text-4xl lg:text-7xl">THE BLOG</h1>
          <ul className=" flex flex-wrap text-[vw]  gap-x-4">
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

      <div className="my-16 px-3 space-y-10 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div>
            <img
              data-aos="fade-right"
              className="w-full h-full"
              src={blog1}
              alt=""
            />
          </div>
          <div>
            <p className="text-gray-500">BY ADMIN APRIAL 05, 2023</p>
            <p className="my-4 text-2xl">
              Us yielding Fish sea night night the said him two
            </p>
            <p className="my-3">
              Midst one brought greater also morning green saying had good. Open
              stars day let over gathered, grass face one every light of under.
            </p>
            <button className="btn">CONTINUE READING</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div>
            <img
              data-aos="fade-right"
              className="w-full h-full"
              src={blog2}
              alt=""
            />
          </div>
          <div>
            <p className="text-gray-500">BY ADMIN APRIAL 07, 2023</p>
            <p className="my-4 text-2xl">
              Given Set was without from god divide rule Hath
            </p>
            <p className="my-3">
              Midst one brought greater also morning green saying had good. Open
              stars day let over gathered, grass face one every light of under.
            </p>
            <button className="btn">CONTINUE READING</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div>
            <img
              data-aos="fade-right"
              className="w-full h-full"
              src={blog3}
              alt=""
            />
          </div>
          <div>
            <p className="text-gray-500">BY ADMIN APRIAL 09, 2023</p>
            <p className="my-4 text-2xl">
              Woman with good shoes is never be ugly place
            </p>
            <p className="my-3">
              Midst one brought greater also morning green saying had good. Open
              stars day let over gathered, grass face one every light of under.
            </p>
            <button className="btn">CONTINUE READING</button>
          </div>
        </div>
        {/* tabs */}
        <div className="flex justify-between items-center">
          <p className="flex cursor-pointer items-center gap-x-2">
            <FaLessThan className="text-sm"></FaLessThan> PREV
          </p>
          <div className="flex items-center gap-x-8 text-gray-600">
            <p className="cursor-pointer">1</p>
            <p className="cursor-pointer">2</p>
            <p className="cursor-pointer">3</p>
            <p className="cursor-pointer">4</p>
          </div>
          <p className="flex cursor-pointer items-center gap-x-2">
            NEXT <FaGreaterThan className="text-sm"></FaGreaterThan>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
