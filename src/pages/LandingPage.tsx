import { useContext } from 'react';
import { AppContext } from '../utils/AppContext';
import { ProductCard } from '../components/ProductCard';
export const LandingPage = () => {
  const { products } = useContext(AppContext);

  return (
    <div className="landing-page">
      <h1>Landing Page</h1>
      <div className="landing-page__products-container">
        {products && products.map((product) => <ProductCard {...product} />)}
      </div>
    </div>
  );
};
