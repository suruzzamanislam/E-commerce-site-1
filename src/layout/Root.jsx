import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import { useEffect, useState } from 'react';
import loader from '../assets/img/loader.gif';

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (replace with your actual data loading logic)
    const timeout = setTimeout(() => {
      setLoading(false); // Set loading to false when data is loaded
    }, 2500); // 2500 milliseconds (5.5 seconds) for demonstration
    return () => clearTimeout(timeout); // Cleanup function
  }, []);
  return (
    <div>
      {loading ? (
        <div className="w-full h-[100vh] bg-[#E5EFF1] flex justify-center items-center">
          <div>
            <img src={loader} alt="" />
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default Root;
