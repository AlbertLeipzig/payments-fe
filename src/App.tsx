import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { AppProvider } from './utils/AppContext';

function App() {
  return (
    <>
      <AppProvider>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/cart">Cart</NavLink>
              </li>
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
