
type URLString = string;

export interface IProduct {
  category_id: number;
  description: string;
  height: number;
  id: number;
  image: URLString;
  price: number;
  reference: string;
  sales: number;
  stock: number;
  thumbnail: URLString;
  width: number;
}

export interface ILogicProps {
  products: IProduct[];
}
