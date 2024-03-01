import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import React from "react";
import { Bar, BarChart, Legend, Rectangle, Tooltip, XAxis, YAxis } from "recharts";

const SalesInsightsChart = () => {
  const data = useAppSelector((state: RootState) => state.ecomData.orderSaleData);
  return (
    <div>
      <h2 style={{ display: "flex", justifyContent: "center", padding: "30px" }}>Sales Insights</h2>
      <BarChart
        width={500}
        height={300}
        data={data}
        barGap={5}
        barSize={30}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="orderSaleData" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="orderQuantity" fill="#8884d8" activeBar={<Rectangle fill="gold" stroke="purple" />} />
      </BarChart>
    </div>
  );
};

export default SalesInsightsChart;
