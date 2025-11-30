import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeInit from "../components/ui/theme-init";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harpreet Kaur | Frontend Developer",
  description:
    "Portfolio of Harpreet Kaur - Frontend Developer specializing in React, Next.js, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeInit />
        <Navbar />
        <main className="px-6 md:px-12 lg:px-24 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
