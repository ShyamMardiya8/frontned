import { getUserDetails } from "@/services/apiCalls";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getUserDetails.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.user = action.payload;
        }
      )
      .addCase(getUserDetails.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
