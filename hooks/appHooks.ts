import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { cartSlice } from "../store/slices/cartSlice";
import { bindActionCreators } from "redux";
import { useMemo } from "react";

const rootActions = {
  ...cartSlice.actions,
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
