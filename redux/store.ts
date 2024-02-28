import { configureStore } from "@reduxjs/toolkit";
import ecomDataReducer from "../redux/features/ecomDataSlice";

export const store = configureStore({
  reducer: {
    ecomData: ecomDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
