import { createContext, useState, useEffect } from 'react';
import { fetchProducts } from './fetchProducts';
import { IAppContext, IProduct } from '../utils/types';
export const AppContext = createContext<IAppContext>({
  products: [],
  setProducts: () => {},
  cart: [],
  setCart: () => {},
});

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<any[]>([{ msg: 'test' }]);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <AppContext.Provider value={{ products, setProducts, cart, setCart }}>
      {children}
    </AppContext.Provider>
  );
};
