import { PerformanceData } from "@/utils/fetchPerformanceData";
import { ProductStockData } from "@/utils/fetchProductStockData";
import { SalesData } from "@/utils/fetchSalesInsightsData";
import { createSlice } from "@reduxjs/toolkit";

type EcomDataState = {
  orderSaleData: SalesData[];
  performanceData: PerformanceData[];
  productStockData: ProductStockData[];
};
const initialState: EcomDataState = { orderSaleData: [], performanceData: [], productStockData: [] };
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
    setProductStockData(state, action) {
      state.productStockData = action.payload;
    },
  },
});

export const { setOrderSaleData, setPerformanceData, setProductStockData } = ecomDataSlice.actions;
export default ecomDataSlice.reducer;
