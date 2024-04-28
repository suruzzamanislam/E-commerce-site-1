import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
