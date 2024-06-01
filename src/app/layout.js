import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import ModelProvider from "../../providers/ModelProvider";
import ToastProvider from "../../providers/ToastProvider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModelProvider/>
        <ToastProvider/>

        <NavBar/>
        {children}
        <Footer/>
        
        </body>
    </html>
  );
}
