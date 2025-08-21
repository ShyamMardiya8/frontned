import api from "@/utility/api";
import { LOGIN_ENDPOINT } from "@/utility/endpoints";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      // Axios auto parses JSON, no need for JSON.stringify
      const data = await api.post(LOGIN_ENDPOINT, { email, password });
      return data; // this is already response.data
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
