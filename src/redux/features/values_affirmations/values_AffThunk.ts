import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleApiRequest } from "@/axios/axiosClient";

interface UserValue {
  userId: string;
  valueName: string;
}
export const createValues_Affirmations = createAsyncThunk(
  "valuesAffirmations/createValuesAffirmation",
  async (userValues: UserValue[], { rejectWithValue }) => {
    try {
      const response = await handleApiRequest(
        "post",
        "http://localhost:5000/api/valuesAffirmations/createValues",
        userValues
      );

      if (response) return response;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || err.message || "Error Generating Affirmations");
    }
  }
);

export const fetchValues_Affirmations = createAsyncThunk(
  "valuesAffirmations/fetchValuesAffirmation",
  async (_, { rejectWithValue }) => {
    try {
      const response = await handleApiRequest(
        "get",
        "http://localhost:5000/api/valuesAffirmations/getValuesAffirmations"
      );

      if (response) return response;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || err.message || "Error Generating Affirmations");
    }
  }
);

export const deleteValue_Affirmations = createAsyncThunk(
  "valuesAffirmations/deleteValueAffirmations",
  async (valueId: { valueId: string }, { rejectWithValue }) => {
    try {
      const response = await handleApiRequest(
        "delete",
        "http://localhost:5000/api/valuesAffirmations/deleteValueAffirmations",
        valueId
      );

      if (response) return response;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || err.message || "Error Deleting Value and its Affirmations");
    }
  }
);
