/* Core */
import { configureStore } from "@reduxjs/toolkit";
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from "react-redux";
import { reducer } from "./rootReducer";
import { middleware } from "./middleware";

export const reduxStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware: () => any[]) => {
    return getDefaultMiddleware().concat(middleware);
  },
});
export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

/* Types */
export type ReduxStore = typeof reduxStore;
export type ReduxState = ReturnType<typeof reduxStore.getState>;
export type ReduxDispatch = typeof reduxStore.dispatch;
