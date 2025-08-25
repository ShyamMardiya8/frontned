import api from "@/utility/api";
import { LOGIN_ENDPOINT, SIGNUP_ENDPOINT } from "@/utility/endpoints";
import { LoginResponse } from "@/utility/interface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const data: LoginResponse = await api.post(LOGIN_ENDPOINT, {
        email,
        password,
      });
      console.info("🚀 ~ data:", data);
      toast.success(data?.message);
      return data;
    } catch (err: any) {
      toast.error(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const data = await api.post(SIGNUP_ENDPOINT, { email, password });
      toast.success("signup success");
      return data;
    } catch (err: any) {
      toast.error(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
