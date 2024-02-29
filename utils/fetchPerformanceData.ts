import axios from "axios";

export type PerformanceData = { product: string; orders: number; revenue: number };

type PerformanceDataResponse = {
  product_performance: [{ product: string; orders: number; revenue: number }];
};

const fetchPerformanceData = async (): Promise<PerformanceData[]> => {
  const response = await axios.get<PerformanceDataResponse>("/ecom-data.json");

  const performanceData = Object.values(response.data.product_performance);
  return performanceData;
};

export default fetchPerformanceData;
