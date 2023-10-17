import SideBar from "@/components/SideBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Survey  App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex bg-[#F5F6FE]">
          <SideBar />
          <div className="flex flex-col w-full">
            <Header />
            <div className="">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
