import { Inter } from "next/font/google";
import "./globals.css";
import { FaApple } from "react-icons/fa6";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gaming Combo",
  description: "Created by Igor S.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FaApple size="50px"/>
        {children}
        <FaApple/>
      </body>
    </html>
  );
}
