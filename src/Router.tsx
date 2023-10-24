import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { LandingPage } from './components/LandingPage/LandingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}