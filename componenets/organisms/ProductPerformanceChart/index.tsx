import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import React from "react";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const ProductPerformanceChart = () => {
  const data = useAppSelector((state: RootState) => state.ecomData.performanceData);
  return (
    <div>
      <h2 style={{ display: "flex", justifyContent: "center", padding: "30px" }}>Product Performance Chart</h2>
      <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="product" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="orders" stroke="#8884d8" />
        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default ProductPerformanceChart;
