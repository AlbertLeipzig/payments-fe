import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { LandingPage } from '../pages/LandingPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { CartPage } from '../pages/CartPage';
import { PaymentRessolutionPage } from '../pages/PaymentRessolutionPage';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/payment-ressolution',
        element: <PaymentRessolutionPage />,
      },
    ],
  },
]);
