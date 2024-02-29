import HomePage from "@/componenets/templates/HomePage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px" }}>
        Product Data
      </h1>
      <HomePage />
    </>
  );
}
