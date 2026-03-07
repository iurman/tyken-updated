import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Tyken Group | A Full-Service Consultancy",
  description: "The Tyken Group is a full-service staffing and recruiting consultancy helping businesses find top talent and professionals find better opportunities since 2006.",
  keywords: ["staffing", "recruiting", "consultancy", "Seattle", "Puget Sound", "talent acquisition", "West 500 Partners"],
  authors: [{ name: "The Tyken Group" }],
  openGraph: {
    title: "The Tyken Group | A Full-Service Consultancy",
    description: "Connecting top talent with exceptional opportunities since 2006.",
    url: "https://tykengroup.com",
    siteName: "The Tyken Group",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
