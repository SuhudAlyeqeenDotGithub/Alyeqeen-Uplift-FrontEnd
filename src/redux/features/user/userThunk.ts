import { loginUser, signUpUser } from "./userServices";
import type { loginData, signUpData } from "./userServices";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface User {
  userId: string;
  userName: string;
  userEmail: string;
  authenticationType: string;
}

const signUp = createAsyncThunk<User, signUpData>(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await signUpUser(userData);
      return response;
    } catch (error) {
      const typedError = error as any;
      return rejectWithValue(
        typedError.response?.data.message || typedError.message
      );
    }
  }
);

const login = createAsyncThunk<User, loginData>(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await loginUser(userData);
      return response;
    } catch (error) {
      const typedError = error as any;
      return rejectWithValue(
        typedError.response?.data.message || typedError.message
      );
    }
  }
);

export { signUp, login };
