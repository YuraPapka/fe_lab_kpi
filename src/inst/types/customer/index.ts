import {URLString} from "../url";
import {TDateStr} from "../date";

export interface ICustomer {
  address: string;
  avatar: URLString;
  birthday: TDateStr;
  city?: string;
  email: string;
  first_name: string;
  first_seen: TDateStr;
  groups: string[];
  has_newsletter: boolean;
  has_ordered: boolean;
  id: number;
  last_name: string;
  last_seen: TDateStr;
  latest_purchase: TDateStr;
  total_spent: number;
  zipcode: string;
}
