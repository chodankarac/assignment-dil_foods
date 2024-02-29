import axios from "axios";

export type PerformanceData = { [k: string]: string | number };

const fetchPerformanceData = async () => {
  const response = await axios.get("/ecom-data.json");

  const performanceData = Object.values(response.data.product_performance);
  return performanceData;
};

export default fetchPerformanceData;
