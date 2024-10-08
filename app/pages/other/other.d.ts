export interface Restaurant {
  id: number;
  name: string;
  address1: string;
  address2: string;
  latitude: number;
  longitude: number;
}
export type menuItem = {
  id: number;
  category: string;
  name: string;
  topping: string[];
  price: number;
  rank: number;
  quantity?: number;
};
export type menuApiProps = {
  restaurants: Restaurant[];
};
export type orderResume = {
  esitmatedDelivery: string;
  orderId: number;
  orderedAt: string;
  status: string;
  totalPrice: number;
};
