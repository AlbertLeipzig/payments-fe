import { IProduct } from '../utils/types';
import { useContext } from 'react';
import { AppContext } from '../utils/AppContext';

export const ProductCard = (product: IProduct) => {
  const { cart, setCart } = useContext(AppContext);
  const addToCart = (product: IProduct) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (product: IProduct) => {
    return cart.filter((_product) => _product.id !== product.id);
  };

  return (
    <div className="product-card">
      <h3>{product.productName}</h3>
      <p>{product.price} €</p>
      <p>{product.company}</p>
      <button onClick={() => addToCart(product)}>Buy</button>
      <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
    </div>
  );
};
