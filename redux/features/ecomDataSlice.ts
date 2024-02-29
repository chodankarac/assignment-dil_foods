import { PerformanceData } from "@/utils/fetchPerformanceData";
import { SalesData } from "@/utils/fetchSalesInsightsData";
import { createSlice } from "@reduxjs/toolkit";

type EcomDataState = {
  orderSaleData: SalesData[];
  performanceData: PerformanceData[];
};
const initialState: EcomDataState = { orderSaleData: [], performanceData: [] };
const ecomDataSlice = createSlice({
  name: "ecomData",
  initialState,
  reducers: {
    setOrderSaleData(state, action) {
      state.orderSaleData = action.payload;
    },
    setPerformanceData(state, action) {
      state.performanceData = action.payload;
    },
  },
});

export const { setOrderSaleData, setPerformanceData } = ecomDataSlice.actions;
export default ecomDataSlice.reducer;
