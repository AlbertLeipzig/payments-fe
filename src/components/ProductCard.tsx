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
  /*   const formatDescription = (description: string) => {
    return description.length <= 100
      ? description
      : `${description.slice(0, 100)}...`;
  }; */
  return (
    <div className="product-card">
      <h3>{product.productName}</h3>
      <div className="product-card--info">
        <p>{product.price} €</p>
        <p>{product.company}</p>
      </div>
      <div className="product-card__button-container">
        <button onClick={() => addToCart(product)}>Buy</button>
        <button onClick={() => removeFromCart(product)} className='remove-button'>Remove</button>
      </div>
    </div>
  );
};
