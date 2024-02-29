import axios from "axios";

export type ProductStockData = {
  product: string;
  stock: number;
};
type ProductStockResponse = {
  product_stock: [{ product: string; stock: number }];
};
const fetchProductStockData = async (): Promise<ProductStockData[]> => {
  const response = await axios.get<ProductStockResponse>("/ecom-data.json");

  const productStockData = Object.values(response.data.product_stock);
  return productStockData;
};

export default fetchProductStockData;
