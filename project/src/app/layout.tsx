import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNavbar } from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-dark-blue/theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeBlog",
  description: "Write your thoughts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <PrimeReactProvider>
     <FloatingNavbar/>
        {children}
        <Footer/>
        </PrimeReactProvider>
        </body>
    </html>
  );
}
