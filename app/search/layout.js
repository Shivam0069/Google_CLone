import { Inter } from "next/font/google";
import "@/app/globals.css";
import Head from "next/head";
import Footer from "@/components/Footer";
import SearchHeader from "@/components/SearchHeader";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Google Clone",
//   description: "Google Clone generated by Shivam",
// };

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
