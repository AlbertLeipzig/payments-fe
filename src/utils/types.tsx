export interface IAppContext {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  cart: IProduct[];
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
}
export interface IProduct {
  id: string;
  productName: string;
  price: string;
  productDescription: string;
  company: string;
}
