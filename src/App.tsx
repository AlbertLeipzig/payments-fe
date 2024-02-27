import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { AppProvider } from './utils/AppContext';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const VITE_APP_PAYPAL_CLIENT_ID = import.meta.env.VITE_APP_PAYPAL_CLIENT_ID;

const initialPaypalOptions = {
  clientId: VITE_APP_PAYPAL_CLIENT_ID,
  currency: 'USD',
  intent: 'capture',
};

function App() {
  <PayPalScriptProvider options={{ clientId: VITE_APP_PAYPAL_CLIENT_ID }} />;

  return (
    <>
      <AppProvider>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <PayPalScriptProvider options={initialPaypalOptions}>
                <li>
                  <NavLink to="/cart">Cart</NavLink>
                </li>
              </PayPalScriptProvider>
              ;
            </ul>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </AppProvider>
    </>
  );
}

export default App;
