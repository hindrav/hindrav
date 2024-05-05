import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tabContentReducer from "app/redux/slices/tabContentSlice";

const appReducers = {
  tabContent: tabContentReducer,
};

const RootReducer = combineReducers({
  ...appReducers,
});

export const store = configureStore({
  reducer: RootReducer,
});
