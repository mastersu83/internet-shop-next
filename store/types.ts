import { ICartItem } from "../types/cartItem.interface";

export interface IInitialState {
  items: ICartItem[];
}

export interface IAddToCartPayload extends Omit<ICartItem, "id"> {}
