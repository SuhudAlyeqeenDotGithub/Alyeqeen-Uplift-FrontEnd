import { createSlice } from "@reduxjs/toolkit";
import { createValues_Affirmations, fetchValues_Affirmations } from "./values_AffThunk";

interface affirmationType {
  _id: string;
  userId: string;
  valueId: string;
  valueName: string;
  affirmation: string;
}

interface Value_AffirmationType {
  valueId: string;
  valueName: string;
  affirmations: affirmationType[];
  userId: string;
  generateWithAi: boolean;
  storeAiAffirmations: boolean;
  activateNotification: boolean;
  notificationSetting: {
    intervalName: String;
    intervalValue: String;
  };
  readAffirmation: boolean;
}

interface UserState {
  values_Affirmations: Value_AffirmationType[];
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}
const initialState: UserState = {
  values_Affirmations: [],
  isSuccess: false,
  isLoading: false,
  isError: false,
  errorMessage: ""
};

export const values_AffirmationsSlice = createSlice({
  name: "valuesAffirmations",
  initialState,
  reducers: {
    resetValues_Affirmations: (state) => {
      Object.assign(state, initialState);
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(createValues_Affirmations.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(createValues_Affirmations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.values_Affirmations = action.payload;
      })
      .addCase(createValues_Affirmations.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload as string;
      })
      .addCase(fetchValues_Affirmations.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(fetchValues_Affirmations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.values_Affirmations = action.payload;
      })
      .addCase(fetchValues_Affirmations.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload as string;
      });
  }
});

export const { resetValues_Affirmations } = values_AffirmationsSlice.actions;
export default values_AffirmationsSlice.reducer;
