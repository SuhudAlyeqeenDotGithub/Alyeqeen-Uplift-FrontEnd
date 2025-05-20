import { loginUser, signUpUser } from "./userServices";
import type { loginData, signUpData } from "./userServices";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  userId: string;
  userName: string;
  userEmail: string;
  authenticationType: string;
}

const signUp = createAsyncThunk<User, signUpData>("user/signup", async (userData, { rejectWithValue }) => {
  try {
    const response = await signUpUser(userData);
    return response;
  } catch (error) {
    const typedError = error as any;
    return rejectWithValue(typedError.response?.data.message || typedError.message);
  }
});

const login = createAsyncThunk<User, loginData>("user/login", async (userData, { rejectWithValue }) => {
  try {
    const response = await loginUser(userData);
    return response;
  } catch (error) {
    const typedError = error as any;
    return rejectWithValue(typedError.response?.data.message || typedError.message);
  }
});

const getUserProfile = createAsyncThunk("user/getUserProfile", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("http://localhost:5000/api/users/getUserProfile", {
      withCredentials: true
    });
    if (response.data) {
    }
    return response.data;
  } catch (error) {
    const typedError = error as any;
    return rejectWithValue(typedError.response?.data.message || typedError.message);
  }
});

export { signUp, login, getUserProfile };
