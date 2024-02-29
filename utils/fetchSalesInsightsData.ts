import axios from "axios";

export type SalesData = {
  orderSaleData: string;
  orderQuantity: number;
};

type SalesDataResponse = {
  sales_insights: Record<string, number>;
};
const fetchSalesInsightsData = async (): Promise<SalesData[]> => {
  const response = await axios.get<SalesDataResponse>("/ecom-data.json");

  const salesData = Object.entries(response.data.sales_insights).map(([orderSaleData, orderQuantity]) => ({
    orderSaleData,
    orderQuantity,
  }));

  return salesData;
};

export default fetchSalesInsightsData;
