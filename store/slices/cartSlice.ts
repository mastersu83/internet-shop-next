import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAddToCartPayload, IInitialState } from "../types";
import { cartItems } from "../../data/cart.data";

const initialState: IInitialState = {
  items: cartItems,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
      const id = state.items.length;
      state.items.push({ ...action.payload, id });
    },
    removeCart: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter(
        (i) => i.product.id !== action.payload.id
      );
    },
    changeQuantity: (
      state,
      action: PayloadAction<{ flag: string; id: number }>
    ) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.flag === "plus") {
            item.quantity += 1;
          } else if (item.quantity > 1) {
            item.quantity -= 1;
          }
        }
        return item;
      });
    },
  },
});
