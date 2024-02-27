import { createContext, useState, useEffect } from 'react';
import { fetchProducts } from './fetchProducts';

interface Product {
  id: string;
  productName: string;
  price: string;
  productDescription: string;
  company: string;
}

export const AppContext = createContext(
  {} as {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    cart: any[];
    setCart: React.Dispatch<React.SetStateAction<any[]>>;
  }
);

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<any[]>([{msg : "test"}]);

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
