import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vinit-Portfolio",
  description: "Developed by Vinit Patel",
};

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    <html lang="en" suppressHydrationWarning={true}>
      <link rel="icon" href="/vercel.svg" type="image/png" sizes="32x32" />
      <body className={inter.className} >
        <div className="flex-grow overflow-y-auto bg-page text-default-text">
      <div className="flex flex-col h-screen max-h-screen">
          <Navbar />

        {children}
        <Footer />
        </div>
        </div>
       
        </body>
    </html>
  );
}
