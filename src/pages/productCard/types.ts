import {IProduct} from "../../inst/types/product";
import {IReview} from "../../inst/types/review";
import {ICategory} from "../../inst/types/category";
import {ICustomer} from "../../inst/types/customer";

export interface ICustomProduct extends IProduct {
  category: ICategory[];
}

export interface ICustomReview extends IReview {
  customer: ICustomer;
}

export interface ILogicProps {
  product: ICustomProduct;
  review: ICustomReview[];
}

export interface IQuery {
  id: string
}
