import { Urbanist } from "next/font/google";
import Footer from "@/components/Footer";

import "./globals.css";
import NavBar from "@/components/NavBar";
const font = Urbanist({ subsets: ["latin"] });
export const metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
