import { ReactNode } from "react";
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
  title: "Convert your Tailwind classes to CSS",
  description: "This app converts your Tailwind classes to vanilla CSS with a single click. ",
  keywords: [
    "Tailwind",
    "CSS",
    "Converter",
    "Utility",
    "Classes",
    "Vanilla",
    "HTML",
    "TailwindCSS",
    "TailwindCSS Converter",
    "TailwindCSS Utility Classes",
    "TailwindCSS to CSS",
    "TailwindCSS to Vanilla CSS",
    "TailwindCSS to Vanilla CSS Converter",
    "TailwindCSS to CSS Converter",
    "TailwindCSS Utility Classes to CSS",
    "TailwindCSS Utility Classes to Vanilla CSS",
    "TailwindCSS Utility Classes to Vanilla CSS Converter",
    "TailwindCSS Utility Classes to CSS Converter",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
