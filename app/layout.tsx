import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  metadataBase: new URL("https://sentennial.org"),
  title: {
    default: "Sentennial",
    template: "%s | Sentennial",
  },
  description:
    "Exploring the intersections of technology, history, and human nature. A collection of articles and musings about computer science, psychology, history, and philosophy.",
  keywords: [
    "technology",
    "history",
    "human nature",
    "computer science",
    "psychology",
    "philosophy",
    "articles",
    "blog",
    "musings",
    "machine learning",
    "AI",
    "architecture",
  ],
  authors: [{ name: "Mark McGuire" }],
  creator: "Mark McGuire",
  publisher: "Sentennial",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sentennial.org",
    siteName: "Sentennial",
    title: "Sentennial",
    description:
      "Exploring the intersections of technology, history, and human nature",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sentennial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentennial",
    description:
      "Exploring the intersections of technology, history, and human nature",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#4D88B8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <div className="fixed inset-0 blueprint-measurements -z-10" />
        <div className="relative">
          <Navbar />
          <main className="pt-24 min-h-[calc(100vh-80px)]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
