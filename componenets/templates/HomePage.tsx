import React, { useCallback, useEffect } from "react";
import SalesInsightsChart from "../organisms/SalesInsightsChart";
import { useAppDispatch } from "@/redux/hooks";
import fetchSalesInsightsData from "@/utils/fetchSalesInsightsData";
import { setOrderSaleData, setPerformanceData } from "@/redux/features/ecomDataSlice";
import fetchPerformanceData from "@/utils/fetchPerformanceData";
import ProductPerformanceChart from "../organisms/ProductPerformanceChart";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const fetchData = useCallback(async () => {
    try {
      dispatch(setOrderSaleData(await fetchSalesInsightsData()));
      dispatch(setPerformanceData(await fetchPerformanceData()));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div>
      <SalesInsightsChart />
      <ProductPerformanceChart />
    </div>
  );
};

export default HomePage;
