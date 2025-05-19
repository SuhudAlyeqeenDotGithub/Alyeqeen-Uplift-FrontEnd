import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { signUp, login } from "./userThunk";

interface UserState {
  user: {
    userId: string;
    userName: string;
    userEmail: string;
    authenticationType: string;
  };
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

const initialState: UserState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : {
        userId: "",
        userName: "",
        userEmail: "",
        authenticationType: ""
      },
  isSuccess: false,
  isLoading: false,
  isError: false,
  errorMessage: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => {
      Object.assign(state, initialState);
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload as string;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload as string;
      });
  }
});

export const { resetUser } = userSlice.actions;
export default userSlice.reducer;
