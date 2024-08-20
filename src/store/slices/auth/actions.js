import { createAsyncThunk } from "@reduxjs/toolkit";

import { BASE_URL, VERS, EndpointSlug } from "@/utils/constant/endPoints";
import { Constant } from "@/utils/constant/constant";
import { requestHandler } from "@/utils/axiosRequest";
import toast from "react-hot-toast";

const instance = requestHandler(BASE_URL);

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`${EndpointSlug.SIGNIN}`, {
        email,
        password,
      });
      console.log("dasta", data);

      // store user's data in local storage
      // localStorage.setItem(Constant.USER_TOKEN, data?.access_token);
      // localStorage.setItem(Constant.USER_INFO, JSON.stringify(data?.user_data));
      return { ...data, message: "Successfully login" };
    } catch (error) {
      if (error?.response?.status == 401) {
        toast.error("Invalid credentials");
        return rejectWithValue(
          error?.response?.data?.detail || "Invalid credentials"
        );
      } else if (error?.response && error?.response?.status == 422) {
        return rejectWithValue(
          error?.response?.data?.detail[0]?.msg || "Unprocessable Content"
        );
      } else {
        return rejectWithValue(error?.message || "Something went wrong");
      }
    }
  }
);

export const userSignUp = createAsyncThunk(
  "auth/signup",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`${EndpointSlug.SIGNUP}`, {
        username: email,
        password,
      });

      return { ...data };
    } catch (error) {
      if (error?.response?.status == 400) {
        return rejectWithValue(error?.response?.data?.detail || "Bad Request");
      } else if (error?.response?.status == 401) {
        return rejectWithValue(
          error?.response?.data?.detail || "Invalid credentials"
        );
      } else if (error.response && error.response.status == 422) {
        return rejectWithValue(
          error?.response?.data?.detail[0]?.msg || "Unprocessable Content"
        );
      } else {
        return rejectWithValue(error.message || "Something went wrong");
      }
    }
  }
);
