import { loginUser, signUpUser } from "./userServices";
import type { loginData, signUpData } from "./userServices";
import { createAsyncThunk } from "@reduxjs/toolkit";

const signUp = createAsyncThunk("user/register", async (userData: signUpData, { rejectWithValue }) => {
  try {
    const response = await signUpUser(userData);
    return response;
  } catch (error) {
    const typedError = error as any;
    return rejectWithValue(typedError.response?.data.message || typedError.message);
  }
});

const login = createAsyncThunk("user/register", async (userData: loginData, { rejectWithValue }) => {
  try {
    const response = await loginUser(userData);
    return response;
  } catch (error) {
    const typedError = error as any;
    return rejectWithValue(typedError.response?.data.message || typedError.message);
  }
});

export { signUp, login };
