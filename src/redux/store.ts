import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import valuesAffirmationsReduce from "./features/values_affirmations/values_AffSlice";

export const makeStore = () => {
  return configureStore({ reducer: { user: userReducer, values_Affirmations: valuesAffirmationsReduce } });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
