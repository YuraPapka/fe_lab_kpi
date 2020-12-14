import {URLString} from "../url";

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
