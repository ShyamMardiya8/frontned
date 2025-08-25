import api from "@/utility/api";
import { USER_ENDPOINT } from "@/utility/endpoints";
import { User } from "@/utility/interface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async () => {
    try {
      const data: User = await api.get(USER_ENDPOINT);
      console.info("🚀 ~ data:", data);
      toast.success(data.message);
      return data;
    } catch (err: any) {
      console.log(err.message);
    }
  }
);
