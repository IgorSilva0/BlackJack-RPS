import { Inter } from "next/font/google"; // Font
import { StrictMode } from 'react'; // Enabling additional checks 
import Nav from "./components/Nav/nav.jsx";
import Rank from "./components/Rank/rank.jsx";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gaming Combo",
  description: "Created by Igor S.",
};

const RootLayout = ({ children }) => (
  <StrictMode>
    <html lang="en">
      <body className={inter.className}>
        <div className="main"> 
          <Nav/>

          <div className="contentBox">
          <h1>Gaming Combo</h1>
          <div className="content">{children}</div>
          </div>
          
          <Rank/>
        </div>
      </body>
    </html>
  </StrictMode>
)

export default RootLayout