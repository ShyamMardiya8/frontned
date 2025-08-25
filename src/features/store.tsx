import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice";
import authReducer from "./authSlice";
import userSlice from "./usersSlice";
const Store = configureStore({
  reducer: {
    slice: todoReducer,
    auth: authReducer,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
