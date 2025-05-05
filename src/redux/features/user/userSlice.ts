import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

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
  user: {
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
      state.user = initialState.user;
    }
  }
});

export const { resetUser } = userSlice.actions;
export default userSlice.reducer;
