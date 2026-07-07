import type { Metadata } from "next";
import { Inter, Hanuman } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const hanuman = Hanuman({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-hanuman",
});

export const metadata: Metadata = {
  title: "Deepak's Portfolio",
  description: "Personal portfolio of Deepak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${hanuman.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
