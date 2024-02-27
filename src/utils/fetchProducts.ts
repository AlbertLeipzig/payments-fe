import { faker } from '@faker-js/faker';

const createSingleProduct = () => {
  return {
    id: faker.database.mongodbObjectId(),
    productName: faker.commerce.productName(),
    price: faker.commerce.price(),
    productDescription: faker.commerce.productDescription(),
    company: faker.company.name(),
  };
};

// just trying to be closest possible to reallity

export const fetchProducts = async () => {
  try {
    const products = Array.from({ length: 100 }, () => createSingleProduct());
    return products;
  } catch (e: any) {
    throw new Error(e);
  }
};
