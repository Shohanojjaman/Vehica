import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';

const MainRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <>Home</>,
      },
    ],
  },
]);

export default MainRoute;
