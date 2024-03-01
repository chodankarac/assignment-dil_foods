import HomePage from "@/componenets/templates/HomePage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className="flex bg-slate-400 justify-center">E-Commerce Data</h1>
      <HomePage />
    </>
  );
}
