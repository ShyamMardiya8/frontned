import { loginUser } from "@/services/auth";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: null | { email: string };
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(loginUser.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
        (state.loading = false), (state.user = action.payload);
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        (state.loading = false), (state.error = action.payload);
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
