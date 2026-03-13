import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Thuruthel | Portfolio",
  description: "Computer Science Engineering student at IIIT Hyderabad, specializing in AI, distributed systems, and full-stack development.",
  keywords: ["Alex Thuruthel", "Portfolio", "Software Engineer", "IIIT Hyderabad", "AI", "Machine Learning"],
  authors: [{ name: "Alex Thuruthel" }],
  openGraph: {
    title: "Alex Thuruthel | Portfolio",
    description: "Computer Science Engineering student at IIIT Hyderabad, specializing in AI, distributed systems, and full-stack development.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
