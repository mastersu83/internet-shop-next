import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cartSlice";

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
