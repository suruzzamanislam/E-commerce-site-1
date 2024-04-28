import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Home from '../Pages/Home/Home';
import Shop from '../Pages/Shop/Shop';
import Blog from '../Pages/Blog/Blog';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;
