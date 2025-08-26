import api from "@/utility/api";
import { USER_ENDPOINT } from "@/utility/endpoints";
import { User } from "@/utility/interface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

export const getUserDetails = createAsyncThunk<AxiosResponse<User>>(
  "user/getUserDetails",
  async () => {
    try {
      const response: AxiosResponse<User, any> = await api.get<User>(
        USER_ENDPOINT
      ); // 👈 Axios typed call
      return response; // 👈 return plain User object, not AxiosResponse
    } catch (err: any) {
      console.error(err.message);
      throw err; // ensures return is never undefined
    }
  }
);
