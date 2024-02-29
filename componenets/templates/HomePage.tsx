import React, { useCallback, useEffect } from "react";
import SalesInsightsChart from "../organisms/SalesInsightsChart";
import { useAppDispatch } from "@/redux/hooks";
import fetchSalesInsightsData from "@/utils/fetchSalesInsightsData";
import { setOrderSaleData, setPerformanceData, setProductStockData } from "@/redux/features/ecomDataSlice";
import fetchPerformanceData from "@/utils/fetchPerformanceData";
import ProductPerformanceChart from "../organisms/ProductPerformanceChart";
import ProductStock from "../organisms/ProductStockChart";
import fetchProductStockData from "@/utils/fetchProductStockData";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const fetchData = useCallback(async () => {
    try {
      dispatch(setOrderSaleData(await fetchSalesInsightsData()));
      dispatch(setPerformanceData(await fetchPerformanceData()));
      dispatch(setProductStockData(await fetchProductStockData()));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <SalesInsightsChart />
      <ProductPerformanceChart />
      <ProductStock />
    </div>
  );
};

export default HomePage;
