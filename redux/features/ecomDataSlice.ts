import { SalesData } from "@/utils/fetchDataResponse";
import { createSlice } from "@reduxjs/toolkit";

type EcomDataState = {
  orderSaleData: SalesData[];
};
const initialState: EcomDataState = { orderSaleData: [] };
const ecomDataSlice = createSlice({
  name: "ecomData",
  initialState,
  reducers: {
    setSalesData(state, action) {
      state.orderSaleData = action.payload;
    },
  },
});

export const { setSalesData } = ecomDataSlice.actions;
export default ecomDataSlice.reducer;
