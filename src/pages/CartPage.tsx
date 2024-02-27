import { useContext } from 'react';
import { AppContext } from '../utils/AppContext';
import { ProductCard } from '../components/ProductCard';
import { Checkout } from '../components/Checkout';
export const CartPage = () => {
  const { cart } = useContext(AppContext);

  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
      {cart.length <= 0 ? (
        <p>your cart is empty</p>
      ) : (
        cart.map((product) => <ProductCard {...product} />)
      )}
      <Checkout />
    </div>
  );
};
