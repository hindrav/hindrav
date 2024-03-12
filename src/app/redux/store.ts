import { combineReducers, configureStore } from "@reduxjs/toolkit";
import setModeReducer from "./slices/setModeSlice";

const rootReducer = combineReducers({
    colorMode: setModeReducer,
  });

const  store = configureStore({
    reducer: rootReducer
})

export { store };