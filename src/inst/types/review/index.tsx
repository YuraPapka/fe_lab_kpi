import {TDateStr} from "../date";

type TCommentStatuses = 'accepted';

export interface IReview {
  comment: string;
  customer_id: number;
  date: TDateStr;
  id: number;
  product_id: number;
  rating: number;
  status: TCommentStatuses;
}
