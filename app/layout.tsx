import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sentennial",
  description: "A collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <link rel="icon" href="public/favicon.ico" />
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
