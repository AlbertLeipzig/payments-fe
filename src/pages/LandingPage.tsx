import { useContext } from 'react';
import { AppContext } from '../utils/AppContext';
export const LandingPage = () => {
  const { products } = useContext(AppContext);

  const formatDescription = (description: string) => {
    return description.length <= 100
      ? description
      : `${description.slice(0, 100)}...`;
  };

  return (
    <div className="landing-page">
      <h1>Landing Page</h1>
      {products &&
        products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.productName}</h3>
            <p>{product.price}</p>
            <p>{product.company}</p>
            <p>{formatDescription(product.productDescription)}</p>
            <button>Buy</button>
          </div>
        ))}
    </div>
  );
};

/* 
    id: faker.database.mongodbObjectId(),
    productName: faker.commerce.productName(),
    price: faker.commerce.price(),
    productDescription: faker.commerce.productDescription(),
    company: faker.company.name(),
*/
