import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Modal from "@/components/Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "workstation.pro",
  description: "Let us design your workstation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Modal />
        {children}
      </body>
    </html>
  );
}
