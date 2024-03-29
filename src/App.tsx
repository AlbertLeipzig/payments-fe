import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { AppProvider } from './utils/AppContext';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const VITE_APP_PAYPAL_CLIENT_ID = import.meta.env.VITE_APP_PAYPAL_CLIENT_ID;

const initialPaypalOptions = {
  clientId: VITE_APP_PAYPAL_CLIENT_ID,
  currency: 'Euro',
  intent: 'capture',
};

function App() {
  <PayPalScriptProvider options={{ clientId: VITE_APP_PAYPAL_CLIENT_ID }} />;

  return (
    <div className="app">
      <AppProvider>
        <PayPalScriptProvider options={initialPaypalOptions}>
          <header>
            <h2>Company Name</h2>
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/cart">Cart</NavLink>
                </li>
                ;
              </ul>
            </nav>
          </header>
          <main>
            <Outlet />
          </main>
        </PayPalScriptProvider>
      </AppProvider>
    </div>
  );
}

export default App;
