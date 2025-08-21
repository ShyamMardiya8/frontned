import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice";
import authReducer from "./authSlice";
const Store = configureStore({
  reducer: {
    slice: todoReducer,
    auth: authReducer,
  },
});

export default Store;
