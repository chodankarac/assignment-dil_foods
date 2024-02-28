import React, { useCallback, useEffect } from "react";
import SalesInsightsChart from "../organisms/SalesInsightsChart";
import { useAppDispatch } from "@/redux/hooks";
import { setSalesData } from "@/redux/features/ecomDataSlice";
import fetchSalesInsightsData from "@/utils/fetchDataResponse";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const fetchData = useCallback(async () => {
    try {
      dispatch(setSalesData(await fetchSalesInsightsData()));
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
    </div>
  );
};

export default HomePage;
