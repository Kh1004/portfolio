import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./componants/Sidebar";
import Navbar from "./componants/Navebar";
import { ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      {/* <body className={inter.className}> */}
      {/* <body className="bg-gradient-to-r from-white via-blue-500  to-white"> */}
      {/* <body className="bg-gradient-to-r from-white  to-blue-500"> */}
      
      {/* <body className="bg-gradient-to-r from-blue-500 via-blue-200  to-white"> */}
      <body className="bg-blue-900">

      <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-48 my-14">
        <Sidebar/>
        <div className='col-span-12 bg-blue-100 dark:bg-black lg:col-span-8 rounded-2xl overflow-hidden'>
          <Navbar/>
         {children}
        </div>
      </div>
      </ThemeProvider>
      </body>
    </html>
  );
}