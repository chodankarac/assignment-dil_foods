import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import React, { useState } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

const ProductStock = () => {
  const data = useAppSelector((state: RootState) => state.ecomData.productStockData);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#FF5733"];
  const productNames = data.map((entry) => entry.product);

  return (
    <div>
      <h2 style={{ display: "flex", justifyContent: "center", paddingTop: "30px" }}>Product Stock Chart</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx={200}
          cy={150}
          labelLine={false}
          label={({ product }) => product}
          outerRadius={80}
          fill="#8884d8"
          dataKey="stock"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value, name, props) => [`${value} units`, props.payload.product]} />
        <Legend formatter={(value) => <span style={{ color: "#333" }}>{productNames[value]}</span>} />
      </PieChart>
    </div>
  );
};

export default ProductStock;
